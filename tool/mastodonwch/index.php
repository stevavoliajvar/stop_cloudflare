<?php
$sqlme = @new mysqli('localhost', 'sseeccrreett', 'sseeccrreett', 'sseeccrreett');
if ($sqlme->connect_errno)
{
    exit;
}
$count_all = - 1;
if ($r = $sqlme->query("SELECT count(id) FROM toot_scanned;"))
{
    $rr = mysqli_fetch_assoc($r);
    $r->free();
    $count_all = $rr['count(id)'];
}
$count_cf = - 1;
if ($r = $sqlme->query("SELECT count(id) FROM toot_scanned WHERE iscf=1;"))
{
    $rr = mysqli_fetch_assoc($r);
    $r->free();
    $count_cf = $rr['count(id)'];
}
if ($count_all == - 1 || $count_cf == - 1)
{
    exit;
}
$count_acpct = round(($count_cf * 100) / $count_all, 2);
$count_all = number_format($count_all);
$count_cf = number_format($count_cf);
$count_waitask = - 1;
if ($r = $sqlme->query("SELECT count(fqdn) FROM toot_notcf_fqdn WHERE dl=0;"))
{
    $rr = mysqli_fetch_assoc($r);
    $r->free();
    $count_waitask = $rr['count(fqdn)'];
}
$count_waitask = number_format($count_waitask);
$lastuptime = humanTiming(filemtime('/onion/sseeccrreett/data/mastodon.toot.scan'));
$var_who = htmlspecialchars($_GET['who'], ENT_QUOTES);
$resultHTML = '';
if (write_this_block_yourself)
{
    $var_who = '';
}
if (preg_match("/write_this_block_yourself/", $var_who))
{
    $resultHTML .= '<br><table border=1>';
    $person_a = 0;
    if ($r = $sqlme->query("SELECT count(id) FROM toot_scanned WHERE who='{$var_who}';"))
    {
        $rr = mysqli_fetch_assoc($r);
        $r->free();
        $person_a = $rr['count(id)'];
    }
    $person_b = 0;
    if ($r = $sqlme->query("SELECT count(id) FROM toot_scanned WHERE who='{$var_who}' AND iscf=1;"))
    {
        $rr = mysqli_fetch_assoc($r);
        $r->free();
        $person_b = $rr['count(id)'];
    }
    $person_c = round(($person_b * 100) / $person_a, 2);
    if (is_nan($person_c))
    {
        $person_c = 0;
    }
    $person_a = number_format($person_a);
    $person_b = number_format($person_b);
    $resultHTML .= "<tr><th>About</th><th>{$var_who}</th></tr>";
    $resultHTML .= "<tr><td>Toots has links</td><td>{$person_a}</td></tr>";
    $resultHTML .= "<tr><td>&#11169;  Toots has Cloudflare link</td><td>{$person_b}  [<i>{$person_c}</i>%]</td></tr>";
    $resultHTML .= "<tr><td> </td><td>Detected (LIMIT 100)</td></tr>";
    if ($r = $sqlme->query("SELECT url FROM toot_cfsaid WHERE who='{$var_who}' LIMIT 100;"))
    {
        while ($row = mysqli_fetch_assoc($r))
        {
            $vurl = htmlspecialchars($row['url'], ENT_QUOTES);
            $resultHTML .= "<tr><td></td><td><a href=\"{$vurl}\" target=\"_blank\">{$vurl}</a></td></tr>";
        }
    }
    $resultHTML .= '</table>';
}
elseif ($var_who == 'a')
{
    $resultHTML .= '<br><table border=1><tr><th>Shared any links</th><th>Toots</th></tr>';
    if ($r = $sqlme->query("SELECT who,count(*) as count FROM toot_scanned GROUP BY who ORDER BY count DESC LIMIT 100;"))
    {
        while ($row = mysqli_fetch_assoc($r))
        {
            $rcount = number_format($row['count']);
            $resultHTML .= "<tr><td><a href=\"./?who={$row['who']}\">{$row['who']}</a></td><td>{$rcount}</td></tr>";
        }
    }
    $resultHTML .= '</table>';
}
elseif ($var_who == 'c')
{
    $resultHTML .= '<br><table border=1><tr><th>Shared Cloudflare links</th><th>Toots</th></tr>';
    if ($r = $sqlme->query("SELECT who,count(*) as count FROM toot_scanned WHERE iscf=1 GROUP BY who ORDER BY count DESC LIMIT 100;"))
    {
        while ($row = mysqli_fetch_assoc($r))
        {
            $rcount = number_format($row['count']);
            $resultHTML .= "<tr><td><a href=\"./?who={$row['who']}\">{$row['who']}</a></td><td>{$rcount}</td></tr>";
        }
    }
    $resultHTML .= '</table>';
}
elseif ($var_who == 'f')
{
    $resultHTML .= '<br><table border=1><tr><th>Shared FQDN</th><th>Cloudflare</th><th>Found in Toots</th></tr>';
    if ($r = $sqlme->query("SELECT fqdn,count(*) as count FROM toot_sharefqdn GROUP BY fqdn ORDER BY count DESC LIMIT 50;"))
    {
        while ($row = mysqli_fetch_assoc($r))
        {
            $rcount = number_format($row['count']);
            $riscf = is_known_cf(get_domainname($row['fqdn']) [1]) ? '<font color="red">Yes</font>' : 'No';
            $resultHTML .= "<tr><td>{$row['fqdn']}</td><td>{$riscf}</td><td>{$rcount}</td></tr>";
        }
    }
    $resultHTML .= '</table>';
}
else
{
    $resultHTML .= '<ul><li> <a href="./?who=a">Show Top 100 (Shared any links)</a></li>';
    $resultHTML .= '<li> <a href="./?who=c">Show Top 100 (Shared Cloudflare links)</a></li>';
    $resultHTML .= '<li> <a href="./?who=f">Show Top 50 (Shared FQDN)</a></li>';
    $resultHTML .= '<li> <a href="#" onclick="location.href=\'./?who=\'+(prompt(\'user@example.com\')||\'\');">Search by Mastodon ID</a></li></ul>';
}
$finalpage = <<<HTMLRESULT
<html><title>Shared on Mastodon</title><br><br><div>
[ <a href="./">INDEX</a> ] Update <i>{$lastuptime} ago</i><br>
<b>Toots has links</b>: {$count_all}<br>
&#11169;  <b>Toots has Cloudflare link</b>: {$count_cf}  [<i>{$count_acpct}</i>%]<br>
<b>Pending Investigation</b>: {$count_waitask}<br>
<hr>{$resultHTML}</div></html>
HTMLRESULT;
echo (str_replace("\n", '', $finalpage));