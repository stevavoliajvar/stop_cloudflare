#!/usr/bin/perl -w
# This Irssi script automatically check incoming http/https links
# and replace it to archive one if it is MITMed.
#
# Irssi /set Options
# you can view your current settigns by running "/set cflarealt" in Irssi
#
# /set cflarealt_debug <on|off>           -- (off) if you have a problem try turning this on to debug
# /set cflarealt_send2channel <on|off> -- (off) send the converted URL publicly to everyone in your channels
# /set cflarealt_channels <"#channel1, #channel2, etc"> -- Channels to automatically convert. Empty Defaults to all
#
# /set cflarealt_shorturl_activate <on|off> -- (off) set it 'on' to use shortner
# /set cflarealt_shorturl_min <40> -- (40) How long a url has to be to trigger automatic url shortening
# /set cflarealt_shorturl_useonion <on|off> -- (off) set it 'on' to use .onion
#
# /set cflarealt_localdbpath <"string to path"> -- () '/path/database/split/'
# /set cflarealt_uselocaldb <on|off> -- (off) if 'on', please set path to local database (or the script will die)
#
# /set cflarealt_printurl <on|off> -- (off) if 'on' print converted URL
# /set cflarealt_donotsend <on|off> -- (off) if 'on' do not send converted URL
#---------------------------------------------------------------------

##use strict;

use vars qw($VERSION %IRSSI);

$VERSION = "20201110";
%IRSSI   = (

    #	Special thanks to: "eo, tsaavik"
    authors     => "Anonymous",
    contact     => 'anonymous@stop_cloudflare.nab',
    name        => "irssi_cf_alturl.pl",
    description => "Cloudflare URL replacer",
    license     => "WTFPL",
    changed     => "$VERSION"
);

use Irssi;
use Irssi::Irc;
use LWP::Simple;
use LWP::UserAgent;

my (
    $cfg_minurllen, $cfg_send2chan,  $cfg_useshort,    $cfg_shortonion,
    $cfg_isdebug,   $cfg_uselocaldb, $cfg_localdbpath, $cfg_chanlist
);
my ( $cfg_printurl, $cfg_donotsendurl );
my @cached = ();

sub setuphandler {
    Irssi::settings_add_bool( "cflarealt", "cflarealt_send2channel", 0 );
    if ( Irssi::settings_get_bool("cflarealt_send2channel") ) {
        print "cflarealt: sending of shorturl's to public channels enabled";
        $cfg_send2chan = 1;
    }

    Irssi::settings_add_bool( "cflarealt", "cflarealt_shorturl_activate", 0 );
    if ( Irssi::settings_get_bool("cflarealt_shorturl_activate") ) {
        print "cflarealt: URL shortner enabled";
        $cfg_useshort = 1;
    }

    Irssi::settings_add_bool( "cflarealt", "cflarealt_shorturl_useonion", 0 );
    if ( Irssi::settings_get_bool("cflarealt_shorturl_useonion") ) {
        print "cflarealt: URL onion enabled";
        $cfg_shortonion = 1;
    }

    Irssi::settings_add_str( "cflarealt", "cflarealt_channels", "" );
    $cfg_chanlist = Irssi::settings_get_str("cflarealt_channels");
    if ($cfg_chanlist) {
        print "cflarealt: Following channels are now parsed $cfg_chanlist";
    }

    Irssi::settings_add_int( "cflarealt", "cflarealt_shorturl_min", 40 );
    my $old_min_url_length = $cfg_minurllen;
    $cfg_minurllen = Irssi::settings_get_int("cflarealt_shorturl_min");
    if ( $cfg_minurllen != $old_min_url_length ) {
        print "cflarealt: min_url_length sucessfully set to $cfg_minurllen";
    }

    Irssi::settings_add_bool( "cflarealt", "cflarealt_debug", 0 );
    my $old_debug = $cfg_isdebug;
    $cfg_isdebug = Irssi::settings_get_bool("cflarealt_debug");
    if ( $cfg_isdebug != $old_debug ) {
        if ($cfg_isdebug) {
            print "cflarealt: Debug Mode Enabled";
            $cfg_isdebug = 1;
        }
        else {
            print "cflarealt: Debug Mode Disabled";
            $cfg_isdebug = 0;
        }
    }

    Irssi::settings_add_bool( "cflarealt", "cflarealt_uselocaldb", 0 );
    if ( Irssi::settings_get_bool("cflarealt_uselocaldb") ) {
        print "cflarealt: Lookup Local DB enabled";
        $cfg_uselocaldb = 1;
    }

    Irssi::settings_add_str( "cflarealt", "cflarealt_localdbpath", "" );
    $cfg_localdbpath = Irssi::settings_get_str("cflarealt_localdbpath");
    if ($cfg_localdbpath) {
        print "cflarealt: DB path set to $cfg_localdbpath";
    }

    Irssi::settings_add_bool( "cflarealt", "cflarealt_printurl", 0 );
    if ( Irssi::settings_get_bool("cflarealt_printurl") ) {
        print "cflarealt: print URL enabled";
        $cfg_printurl = 1;
    }

    Irssi::settings_add_bool( "cflarealt", "cflarealt_donotsend", 0 );
    if ( Irssi::settings_get_bool("cflarealt_donotsend") ) {
        print "cflarealt: dont-send enabled";
        $cfg_donotsendurl = 1;
    }

}

sub GotUrl {
    my ( $server, $data, $nick, $addr, $target ) = @_;
    if ( !$server || !$server->{connected} ) {
        Irssi::print("Not connected to server");
        return;
    }
    return unless ( goodchan($target) );
    $data =~ s/^\s+//;
    $data =~ s/\s+$//;
    my @urls = ();
    my @knownShortFQDN = ( 'tinyurl.com', 'bit.ly' );
    my ( $url, $a, $return, $char, $ch ) = "";
    my $same = 0;

    return unless ( ( $data =~ /\bhttp\:/ ) || ( $data =~ /\bhttps\:/ ) );
    deb("$target triggered GotUrl() with url: $data");

    # split on whitespace and get the url(s) out
    # done this way in case there are more than
    # one url per line.
    foreach ( split( /\s/, $data ) ) {
        if ( ( $_ =~ /^http\:/ ) || ( $_ =~ /^https\:/ ) ) {
            foreach $a (@urls) {
                if ( $_ eq $a ) {

                    # incase they use the same url on the line.
                    $same = 1;
                    next;
                }
            }
            if ( $same == 0 ) {
                $same = 0;
                push( @urls, $_ );
            }
        }
    }

    my ( $myurl, $fqdn,    $junk,     $mytype );
    my ( $url,   $browser, $response, $answer );
    my ( $line,  $ifoundit );

    foreach (@urls) {
        $myurl = $_;
        ( $junk, $fqdn ) = split( /\/\//, $myurl, 2 );
        ( $fqdn, $junk ) = split( /\//,   $fqdn,  2 );
        $mytype = '';

        if ( length($fqdn) >= 4 ) {
## Start of Act

## ACT0. If ShortURL, expand it. (knownShortFQDN)
            if ( grep( /^$fqdn$/, @knownShortFQDN ) ) {
                deb("$target Expand $fqdn");
                $browser  = LWP::UserAgent->new;
                $answer   = HTTP::Request->new( GET => $myurl );
                $response = $browser->request($answer);

                if ( $response->is_success and $response->previous ) {
                    if ( $myurl ne $response->request->uri ) {
                        $junk = $response->request->uri;
                        if ( index( $junk, 'http' ) == 0 ) {
                            deb("$target Expanded $fqdn");
                            $myurl = $junk;
                            ( $junk, $fqdn ) = split( /\/\//, $myurl, 2 );
                            ( $fqdn, $junk ) = split( /\//,   $fqdn,  2 );
                        }
                    }
                }

            }

## ACT1: Update URL if Cloudflared
            if ( grep( /^$fqdn$/, @cached ) ) {
                deb("$target Found in Cache $fqdn");
                $mytype = '^B^C3[Archive]^O ';
                $myurl  = 'https://web.archive.org/web/' . $myurl;
            }
            else {
                if ( $cfg_uselocaldb == 1 ) {
                    deb("$target Lookup local DB about $fqdn");
                    open( CFSFILE,
                            $cfg_localdbpath
                          . "cloudflare_"
                          . substr( $fqdn, 0, 1 )
                          . ".txt" )
                      or die "file not found for $fqdn";
                    $ifoundit = 0;
                    while (<CFSFILE>) {
                        $line = $_;
                        $line =~ s/\R//g;
                        if ( $line eq $fqdn ) {
                            $ifoundit = 1;
                            last;
                        }
                    }
                    close CFSFILE;

                    if ( $ifoundit == 1 ) {
                        push( @cached, $fqdn );
                        $mytype = '^B^C3[Archive]^O ';
                        $myurl  = 'https://web.archive.org/web/' . $myurl;
                    }
                }
                else {
                    deb("$target Asking API about $fqdn");
                    $answer = '';
                    $url =
                      'https://api.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion/_/ismitm.php?f='
                      . $fqdn;
                    $browser = LWP::UserAgent->new;
                    $browser->agent("Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0");
                    $response = $browser->get($url);
                    $answer   = $response->content;
                    if ( $answer eq '[true,true]' ) {
                        push( @cached, $fqdn );
                        $mytype = '^B^C3[Archive]^O ';
                        $myurl  = 'https://web.archive.org/web/' . $myurl;
                    }
                }
            }

## ACT2: Short URL __if__ enabled and long
            if ( $cfg_useshort == 1 ) {
                if ( length($myurl) > $cfg_minurllen ) {
                    if ( $cfg_shortonion == 1 ) {
                        deb("$target Creating Short Onion for $myurl");
                        $url = 'http://hbfkuwcbzhcht33fetbiajuh7i6gqupgnyupxcmujiky34drzmpajrid.onion/?i=new&url=' . $myurl;
                        $browser = LWP::UserAgent->new;
                        $browser->agent("Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0");
                        $response = $browser->get($url);
                        $answer   = $response->content;
                        if (
                            index( $answer,
                                'http://hbfkuwcbzhcht33fetbiajuh7i6gqupgnyupxcmujiky34drzmpajrid.onion/?' ) == 0
                          )
                        {
                            if ( $mytype eq '' ) {
                                $mytype = '^B^C7[Onion]^O ';
                            }
                            else {
                                $mytype = '^B^C2[Onion,Archive]^O ';
                            }
                            $myurl = $answer;
                        }
                    }
                    else {
                        deb("$target Creating Short URL for $myurl");
                        $url =
                          'https://ux.nu/api/short?format=plain&url=' . $myurl;
                        $browser = LWP::UserAgent->new;
                        $browser->agent("Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0");
                        $response = $browser->get($url);
                        $answer   = $response->content;
                        if ( index( $answer, 'https://ux.nu/' ) == 0 ) {
                            if ( $mytype eq '' ) {
                                $mytype = '^B^C7[Short]^O ';
                            }
                            else {
                                $mytype = '^B^C2[Short,Archive]^O ';
                            }
                            $myurl = $answer;
                        }
                    }
                }
            }

##ACT3: Result
            if ( $cfg_printurl == 1 ) {
                Irssi::print("URL: $mytype$myurl");
            }

            if ( $cfg_donotsendurl != 1 ) {
                if ( $cfg_send2chan == 1 ) {
                    $server->command("msg $target $myurl");
                }
                else {
                    $server->print( "$target", "$mytype$myurl",
                        MSGLEVEL_CLIENTCRAP );
                }
            }

## End of Act
        }
        deb("$target process done for input $myurl");
    }

## Cleanup cache
    if ( $#cached > 500 ) {
        @cached = ();
    }

    return;
}

sub deb($) {
    Irssi::print(shift) if ( $cfg_isdebug == 1 );
}

sub goodchan {
    my $chan = shift;
    return ("OK") if ( !$cfg_chanlist );
    foreach ( split( /\,/, $cfg_chanlist ) ) {
        return ("$_") if ( $_ =~ /$chan/i );
    }
    return undef;
}

setuphandler();
Irssi::signal_add( "setup changed", "setuphandler" );
Irssi::signal_add_last( "message public", "GotUrl" );
Irssi::signal_add_last( "ctcp action",    "GotUrl" );
