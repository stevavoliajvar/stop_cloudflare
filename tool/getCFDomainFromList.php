<?php
/*
WTFPL License

	Run	`php -f getCFDomainFromList.php` and wait for result.

	This script will read INPUT_DOMAINS and add domain to OUTPUT_RESULT
	if the target is in Cloudflare domain lists.

	INPUT_DOMAINS is a list of domains. Do not list FQDN.

*/

ignore_user_abort(true);
set_time_limit(0);

// INPUT_DOMAINS EOF = must LF
define('INPUT_DOMAINS', 'example.mdn_basedom_list.txt');//	_base_ domain list to scan
define('DIR_CFDOMAINS', 'split/');//	path to /split/ directory (Cloudflare Domains)
define('OUTPUT_RESULT', 'example.mastodon_cf.txt');//	result

if (!file_exists(DIR_CFDOMAINS.'cloudflare_0.txt')){print 'Edit DIR_CFDOMAINS';exit;}
if (!file_exists(INPUT_DOMAINS)){print 'INPUT_DOMAINS not found';exit;}

$result=array();

foreach(explode("\n",file_get_contents(INPUT_DOMAINS)) as $line){
	if (strlen($line)<4){continue;}
	$letter=substr($line,0,1);
	if (!preg_match("/^([a-z0-9]{1})$/",$letter)){continue;}
	print $letter.'='.$line."\n";
	if (in_array($line,explode("\n",file_get_contents(DIR_CFDOMAINS.'cloudflare_'.$letter.'.txt')))){$result[]=$line;}
}

print count($result)." found\n";
file_put_contents(OUTPUT_RESULT,implode("\n",$result));
print 'done';
