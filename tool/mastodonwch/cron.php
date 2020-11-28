<?php
ignore_user_abort(true);
set_time_limit(120);
$toots = [];
$mastodon_servers = ['your.server.fqdn' => 'https://your.server.fqdn/write_this_block_yourself', 'yours2.fqdn' => 'https://...'];
shuffle_assoc($mastodon_servers);
$date_ym = gmdate('Ym');
$sqlme = @new mysqli('localhost', 'sseeccrreett', 'sseeccrreett', 'sseeccrreett');
if ($sqlme->connect_errno)
{
    exit;
}
foreach ($mastodon_servers as $svF => $svU)
{
    $got = @json_decode(wget($svU) , true);
    if (!is_array($got) || count($got) < 10 || !isset($got[0]))
    {
        continue;
    }
    foreach ($got as $g)
    {
        if (!isset($g['url']) || !preg_match("/write_this_block_yourself/", $g['url']))
        {
            continue;
        }
        if (!isset($g['content']) || strlen($g['content']) < 8)
        {
            continue;
        }
        if (!isset($g['account']) || !isset($g['account']['acct']) || !preg_match("/write_this_block_yourself/", $g['account']['acct']))
        {
            continue;
        }
        if (strpos($g['account']['acct'], '@') === false)
        {
            $g['account']['acct'] = $g['account']['acct'] . '@' . $svF;
        }
        $txt = array_unique(array_filter(array_map(function ($l)
        {
            $isURL = (preg_match("/write_this_block_yourself/", $l) && !preg_match("/write_this_block_yourself/", $l)) ? true : false;
            return $isURL ? explode('/', explode('://', $l, 2) [1], 2) [0] : '';
        }
        , explode('"', strip_tags($g['content'], '<a>')))));
        if (count($txt) == 0)
        {
            continue;
        }
        $cfFound = 0;
        foreach ($txt as $fqdn)
        {
            $tmp_id2 = sha1($g['url'] . ';' . $fqdn);
            $junk = $sqlme->query("INSERT IGNORE INTO toot_sharefqdn (id,fqdn,ym) VALUES ('{$tmp_id2}','{$fqdn}','{$date_ym}');");
            if (is_known_cf(get_domainname($fqdn) [1]))
            {
                $cfFound = 1;
            }
            else
            {
                $junk = $sqlme->query("INSERT IGNORE INTO toot_notcf_fqdn (fqdn,dl) VALUES ('{$fqdn}','0');");
            }
        }
        $toots[sha1($g['url']) ] = [$g['account']['acct'], $g['url'], $cfFound];
    }
}
foreach ($toots as $k => $v)
{
    $junk = $sqlme->query("INSERT IGNORE INTO toot_scanned (id,who,iscf,ym) VALUES ('{$k}','{$v[0]}','{$v[2]}','{$date_ym}');");
    if ($v[2] == 1)
    {
        $junk = $sqlme->query("INSERT IGNORE INTO toot_cfsaid (id,who,url,ym) VALUES ('{$k}','{$v[0]}','{$v[1]}','{$date_ym}');");
    }
}
if (gmdate('G') == 0)
{
    $date_ym = gmdate('Ym', strtotime('7 months ago'));
    $junk = $sqlme->query("DELETE FROM toot_scanned WHERE ym = '{$date_ym}';");
    $junk = $sqlme->query("DELETE FROM toot_cfsaid WHERE ym = '{$date_ym}';");
    $junk = $sqlme->query("DELETE FROM toot_sharefqdn WHERE ym = '{$date_ym}';");
}
file_put_contents('/onion/sseeccrreett/data/mastodon.toot.scan', '');