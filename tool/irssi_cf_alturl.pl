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
# /set cflarealt_shorturl_activate <on|off> -- (off) set it 'on' to use shortner
# /set cflarealt_shorturl_min <40> -- (40) How long a url has to be to trigger automatic url shortening
#---------------------------------------------------------------------

##use strict;

use vars qw($VERSION %IRSSI);

$VERSION = "20190505";
%IRSSI   = (
    #	Special thanks to: "eo, tsaavik"
    authors     => "Anonymous",
    contact     => 'anonymous@cloudflare-tor.nab',
    name        => "irssi_cf_alturl.pl",
    description => "Cloudflare URL replacer",
    license     => "WTFPL",
    changed     => "$VERSION"
);

use Irssi;
use Irssi::Irc;
use LWP::Simple;
use LWP::UserAgent;

my ( $cfg_minurllen, $cfg_send2chan, $cfg_useshort, $cfg_isdebug, $cfg_chanlist );
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
    my ( $url, $a, $return, $char, $ch, $result ) = "";
    my $same    = 0;
    my $sitewas = "t";
    my @chars   = ();

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

    my ( $myurl, $fqdn, $junk );
    my ( $url, $browser, $response, $answer );

    foreach (@urls) {
        $myurl = $_;
        ( $junk, $fqdn ) = split( /\/\//, $myurl, 2 );
        ( $fqdn, $junk ) = split( /\//,   $fqdn,  2 );

        if ( length($fqdn) >= 4 ) {
## Start of Act
## ACT1: Update URL if Cloudflared
            if ( grep( /^$fqdn$/, @cached ) ) {
                deb("$target Found in Cache $fqdn");
                $myurl = 'https://web.archive.org/web/' . $myurl;
            }
            else {
                deb("$target Asking API about $fqdn");
                $answer = '';
                $url = 'https://searxes.danwin1210.me/collab/open/ismitm.php?f='
                  . $fqdn;
                $browser = LWP::UserAgent->new;
                $browser->agent("Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0");
                $response = $browser->get($url);
                $answer   = $response->content;
                if ( $answer == '[true,true]' ) {
                    push( @cached, $fqdn );
                    $myurl = 'https://web.archive.org/web/' . $myurl;
                }
            }

## ACT2: Short URL __if__ enabled and long
            if ( $cfg_useshort == 1 ) {
                if ( length($myurl) > $cfg_minurllen ) {
                    # Should change from tinyurl because it is Cloudflare.
                    # What is the alternative solution?
                    deb("$target Creating Short URL for $myurl");
                    $url = 'https://tinyurl.com/api-create.php?url=' . $result;
                    $browser = LWP::UserAgent->new;
                    $browser->agent("Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0");
                    $response = $browser->get($url);
                    $answer   = $response->content;
                    if ( index( $answer, 'http://tinyurl.com/' ) == 0 ) {
                        $myurl = $answer;
                    }
                }
            }

##ACT3: Shout Result
            if ( $cfg_send2chan == 1 ) {
                $server->command("msg $target $myurl");
            }
            else {
                $server->print( "$target", "$myurl", MSGLEVEL_CLIENTCRAP );
            }
## End of Act
        }
        deb("$target process done for input $myurl");
    }

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
