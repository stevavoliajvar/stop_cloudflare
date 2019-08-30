<?php
//License: WTFPL

define('F_INPUT','noncloudflarelist.txt');
define('F_OUTPUT','fqdnlist.txt');

if (!file_exists(F_INPUT)){
	print 'File not found';
    exit;
}

$result = array();

foreach(explode("\n",file_get_contents(F_INPUT)) as $t){
	$t = explode(' ',$t)[0];
	if (preg_match("/^([a-z0-9\.-]{1,255})\.([a-z]{2,40})$/",$t)){
		$result[] = $t;
	}
}

$result = array_unique($result);
file_put_contents(F_OUTPUT,implode("\n",$result));

print 'Done';
