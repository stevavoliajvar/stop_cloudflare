#!/usr/bin/perl -w
# This Irssi script automatically check incoming http/https links
# and replace it to archive one if it is MITMed.
#---------------------------------------------------------------------
use strict;
use vars qw($VERSION %IRSSI);

$VERSION = "20190501";

%IRSSI = (
    authors     => "Anonymous",
    contact     => 'nobody@cloudflare-tor.nab',
    name        => "irssi_cf_alturl.pl",
    description => "Cloudflare URL replacer",
    license     => "WTFPL",
    changed     => "$VERSION"
);

use Irssi;
use Irssi::Irc;
use LWP::Simple;
use LWP::UserAgent;

my ( $min_url_length, $send_to_channel, $debug, $channel_list );

sub setuphandler {
    $send_to_channel = 1;
    $channel_list    = '';
    my $old_min_url_length = $min_url_length;
    $min_url_length = 0;
    my $old_debug = $debug;
    $debug = 0;
}

sub GotUrl {
    my ( $server, $data, $nick, $addr, $target ) = @_;
    if ( !$server || !$server->{connected} ) {
        Irssi::print("Not connected to server");
        return;
    }
    $data =~ s/^\s+//;
    $data =~ s/\s+$//;
    my @urls = ();
    my ( $url, $a, $return, $char, $ch, $result, $choice ) = "";
    my $same    = 0;
    my $sitewas = "t";
    my @chars   = ();
    return unless ( ( $data =~ /\bhttp\:/ ) || ( $data =~ /\bhttps\:/ ) );
    deb("$target triggered GotUrl() with url: $data");

    foreach ( split( /\s/, $data ) ) {
        if ( ( $_ =~ /^http\:/ ) || ( $_ =~ /^https\:/ ) ) {
            foreach $a (@urls) {
                if ( $_ eq $a ) {
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
    foreach (@urls) {
        @chars = split( //, $_ );
        foreach $char (@chars) {
            if ( $char !~ /[A-Za-z0-9]/ ) {
                $ch = sprintf( "%%%02x", ord($char) );
                $result .= $ch;
            }
            else {
                $result .= $char;
            }
        }
        $choice = 'searxesmitmdb';
        deb("mitmtest(\$server, $target, $result)");
        mitmtest( $server, $target, $result );
    }
    return;
}

sub mitmtest {
    my ( $server, $chan, $longurl ) = @_;
    my ($fqdn) = $longurl =~ m!(https?://[^:/]+)!;
    my ( $junk, $fqdn ) = split( /\/\//, $fqdn, 2 );
    my $url = 'https://searxes.danwin1210.me/collab/open/ismitm.php?f=' . $fqdn;
    deb("getting url:($url)");
    my $browser = LWP::UserAgent->new;
    $browser->agent("cloudflare cflare_alt.pl");
    my $response    = $browser->get($url);
    my $scanned_url = $response->content;
## if the array[1] is true => it is MITM
    if ( $scanned_url == '[true,true]' ) {
        $scanned_url = 'https://web.archive.org/web/' . $longurl;
    }
    else {
        $scanned_url = $longurl;
    }
    if ( $response->is_success ) {
        if ( $send_to_channel == 1 ) {
            $server->command("msg $chan $scanned_url");
        }
        else {
            $server->print( "$chan", "$scanned_url", MSGLEVEL_CLIENTCRAP );
        }
    }
    else {
        deb("ERROR: service is down or not pingable");
    }
}

sub deb($) {
    Irssi::print(shift) if ( $debug == 1 );
}

setuphandler();
Irssi::signal_add( "setup changed", "setuphandler" );
Irssi::signal_add_last( "message public", "GotUrl" );
Irssi::signal_add_last( "ctcp action",    "GotUrl" );
