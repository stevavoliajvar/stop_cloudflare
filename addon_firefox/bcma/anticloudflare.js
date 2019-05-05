/*
	"Welcome to PRISM 2.0"
*/
var cf_flag_ok = 'icons/cf_0.png';
var cf_flag_ng = 'icons/cf_1.png';
var force_whitelist = ['searxes.cf', 'thunderbird.net', 'mozilla.org', 'archive.org', 'cloudflare.com', 'cloudflareapps.com', 'cloudflare-dns.com', 'cloudflarestatus.com', 'cloudflareapi.com', 'cloudflare-ipfs.com', 'cloudflare-quic.com'];
var cfdomains = [];
var known_cf_domains = [];

fetch('bcmadata.txt',{method:'GET'}).then(function (b) {
	return b.text();
}).then(function (b) {
	cfdomains = b.split("\n").filter(v=>v!='');
	known_cf_domains = cfdomains;
});

var my_cf_collection = [];
var my_cf_ignore = [];
var my_action = 2;

function onError(e) {
	console.log(`BCMA: Error:${e}`);
}

function get_realdomain(w) {
	var wa = w.split('.');
	wa.reverse();
	var wa_l = wa.length;
	if (wa_l <= 2) {
		return w;
	}
	if (wa_l >= 3) {
		if (wa[0] == 'by' || wa[0] == 'ki' || wa[0] == 'na' || wa[0] == 'tm' || wa[0] == 'vc') {
			if (wa[1] == 'com') {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'af' || wa[0] == 'bz' || wa[0] == 'lb' || wa[0] == 'lc' || wa[0] == 'mm' || wa[0] == 'mt' || wa[0] == 'ng' || wa[0] == 'sb' || wa[0] == 'sc' || wa[0] == 'sl') {
			if (wa[1] == 'com' || wa[1] == 'edu' || wa[1] == 'gov' || wa[1] == 'net' || wa[1] == 'org') {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'org') {
			if (wa[1] == 'ae') {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'gg' || wa[0] == 'je') {
			if (wa[1] == 'co' || wa[1] == 'net' || wa[1] == 'org') {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'name') {
			return wa[2] + "." + wa[1] + "." + wa[0];
		}
		if (wa[0] == 'ag') {
			if (['com', 'net', 'org', 'co', 'nom', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ai') {
			if (['off', 'com', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ao') {
			if (['co', 'ed', 'it', 'og', 'pb'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ar') {
			if (['com', 'edu', 'gov', 'gob', 'int', 'mil', 'net', 'org', 'tur'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'at') {
			if (['gv', 'ac', 'co', 'or'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'au') {
			if (['com', 'net', 'org', 'edu', 'gov', 'csiro', 'asn', 'id', 'act', 'nsw', 'nt', 'qld', 'sa', 'tas', 'vic', 'wa'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'az') {
			if (['biz', 'com', 'edu', 'gov', 'info', 'int', 'mil', 'name', 'net', 'org', 'pp'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ba') {
			if (['com', 'co', 'rs'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'bd') {
			if (['com', 'edu', 'ac', 'net', 'gov', 'org', 'mil'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'bh') {
			if (['com', 'info', 'cc', 'edu', 'biz', 'net', 'org', 'gov'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'bi') {
			if (['ac', 'co', 'com', 'edu', 'gouv', 'gov', 'int', 'mil', 'net', 'or', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'bn') {
			if (['com', 'net', 'org', 'edu'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'bo') {
			if (['com', 'edu', 'gob', 'gov', 'int', 'mil', 'net', 'org', 'tv'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'br') {
			if (['adm', 'adv', 'agr', 'am', 'arq', 'art', 'ato', 'bio', 'blog', 'bmd', 'cim', 'cng', 'cnt', 'com', 'coop', 'ecn', 'edu', 'eng', 'esp', 'etc', 'eti', 'far', 'flog', 'fm', 'fnd', 'fot', 'fst', 'g12', 'ggf', 'gov', 'imb', 'ind', 'inf', 'jor', 'lel', 'mat', 'med', 'mil', 'mus', 'net', 'nom', 'not', 'ntr', 'odo', 'org', 'ppg', 'pro', 'psc', 'psi', 'qsl', 'rec', 'slg', 'srv', 'tmp', 'trd', 'tur', 'tv', 'vet', 'vlog', 'wiki', 'zlg'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'bw') {
			if (['org', 'ac', 'co', 'gov'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ci') {
			if (['ac', 'co', 'com', 'ed', 'edu', 'go', 'int', 'net', 'or', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ck') {
			if (['biz', 'co', 'edu', 'gen', 'gov', 'info', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'cn') {
			if (['ac', 'ah', 'bj', 'com', 'cq', 'edu', 'fj', 'gd', 'gov', 'gs', 'gx', 'gz', 'ha', 'hb', 'he', 'hi', 'hk', 'hl', 'hn', 'jl', 'js', 'jx', 'ln', 'mil', 'mo', 'net', 'nm', 'nx', 'org', 'qh', 'sc', 'sd', 'sh', 'sn', 'sx', 'tj', 'tw', 'xj', 'xz', 'yn', 'zj'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'co') {
			if (['com', 'edu', 'gov', 'mil', 'net', 'nom', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'com') {
			if (['ar', 'br', 'cn', 'de', 'eu', 'gr', 'hu', 'jpn', 'kr', 'no', 'qc', 'ru', 'sa', 'se', 'uk', 'us', 'uy', 'za'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'cr') {
			if (['ac', 'co', 'ed', 'fi', 'go', 'or', 'sa'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'cu') {
			if (['com', 'edu', 'org', 'net', 'gov', 'inf'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'cy') {
			if (['ac', 'biz', 'com', 'ekloges', 'gov', 'ltd', 'name', 'net', 'org', 'parliament', 'press', 'pro', 'tm'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'do') {
			if (['art', 'com', 'edu', 'gob', 'gov', 'mil', 'net', 'org', 'sld', 'web'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'dz') {
			if (['art', 'asso', 'com', 'edu', 'gov', 'net', 'org', 'pol'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ec') {
			if (['com', 'info', 'net', 'fin', 'med', 'pro', 'org', 'edu', 'gob', 'gov', 'mil'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ee') {
			if (['com', 'pri', 'fie', 'med', 'edu', 'lib', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'eg') {
			if (['com', 'edu', 'eun', 'gov', 'mil', 'name', 'net', 'org', 'sci'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'es') {
			if (['com', 'nom', 'org', 'gob', 'edu'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'et') {
			if (['com', 'gov', 'org', 'edu', 'net', 'biz', 'name', 'info'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'fj') {
			if (['ac', 'biz', 'com', 'info', 'mil', 'name', 'net', 'org', 'pro'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ge') {
			if (['com', 'edu', 'gov', 'mil', 'net', 'org', 'pvt'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'gh') {
			if (['com', 'edu', 'gov', 'org', 'mil'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'gi') {
			if (['com', 'edu', 'gov', 'ltd', 'mod', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'gl') {
			if (wa[1] == 'co' || wa[1] == 'com') {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'gr') {
			if (['co', 'com', 'edu', 'gov', 'mil', 'mod', 'net', 'org', 'sch'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'gt') {
			if (['com', 'edu', 'net', 'gob', 'org', 'mil', 'ind'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'gy') {
			if (['co', 'com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'hk') {
			if (['com', 'edu', 'gov', 'idv', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'hn') {
			if (['com', 'edu', 'gob', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'hr') {
			if (wa[1] == 'com' || wa[1] == 'from') {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'hu') {
			if (['2000', 'agrar', 'bolt', 'casino', 'city', 'co', 'erotica', 'erotika', 'film', 'forum', 'games', 'hotel', 'info', 'ingatlan', 'jogasz', 'konyvelo', 'lakas', 'media', 'news', 'org', 'priv', 'reklam', 'sex', 'shop', 'sport', 'suli', 'szex', 'tm', 'tozsde', 'utazas', 'video'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'id') {
			if (['ac', 'co', 'go', 'mil', 'net', 'or', 'sch', 'web'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'il') {
			if (['ac', 'co', 'gov', 'idf', 'k12', 'muni', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'im') {
			if (['ac', 'co', 'com', 'gov', 'net', 'org', 'ro'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'in') {
			if (['ac', 'co', 'edu', 'ernet', 'firm', 'gen', 'gov', 'ind', 'mil', 'net', 'org', 'res'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'it') {
			if (['co', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'jm') {
			if (['com', 'net', 'org', 'edu', 'gov', 'mil'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'jo') {
			if (['com', 'edu', 'gov', 'mil', 'name', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'jp') {
			if (['ac', 'ad', 'co', 'ed', 'go', 'gr', 'lg', 'ne', 'or'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ke') {
			if (['ac', 'co', 'go', 'ne', 'or', 'sc'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'kg') {
			if (['com', 'edu', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'kh') {
			if (['com', 'edu', 'gov', 'mil', 'net', 'org', 'per'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'kr') {
			if (['ac', 'busan', 'chungbuk', 'chungnam', 'co', 'daegu', 'daejeon', 'es', 'gangwon', 'go', 'gwangju', 'gyeongbuk', 'gyeonggi', 'gyeongnam', 'hs', 'incheon', 'jeju', 'jeonbuk', 'jeonnam', 'kg', 'mil', 'ms', 'ne', 'or', 'pe', 're', 'sc', 'seoul', 'ulsan'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'kw') {
			if (['edu', 'com', 'net', 'org', 'gov'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'kz') {
			if (['com', 'edu', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'lk') {
			if (['assn', 'com', 'edu', 'gov', 'grp', 'hotel', 'int', 'ltd', 'net', 'ngo', 'org', 'sch', 'soc', 'web'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ls') {
			if (['ac', 'co', 'gov', 'net', 'nul', 'org', 'parliament', 'quadrant'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'lv') {
			if (['asn', 'com', 'conf', 'edu', 'gov', 'id', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ly') {
			if (['com', 'edu', 'gov', 'id', 'med', 'net', 'org', 'plc', 'sch'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ma') {
			if (['ac', 'co', 'gov', 'net', 'org', 'press'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'mk') {
			if (['com', 'edu', 'gov', 'inf', 'name', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'mu') {
			if (['ac', 'co', 'com', 'gov', 'net', 'or', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'mx') {
			if (['com', 'edu', 'gob', 'net', 'ngo', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'my') {
			if (['com', 'edu', 'gov', 'mil', 'name', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'mz') {
			if (['co', 'net', 'org', 'ac', 'gov', 'edu'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'net') {
			if (['gb', 'se', 'uk', 'jp'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'nf') {
			if (['com', 'net', 'arts', 'store', 'web', 'firm', 'info', 'other', 'per', 'rec'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ni') {
			if (['gob', 'co', 'com', 'ac', 'edu', 'org', 'nom', 'net', 'mil'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'np') {
			if (['aero', 'asia', 'biz', 'com', 'coop', 'edu', 'gov', 'info', 'jobs', 'mil', 'mobi', 'museum', 'name', 'net', 'org', 'pro', 'travel'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'nr') {
			if (['biz', 'com', 'edu', 'gov', 'info', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'nz') {
			if (['ac', 'co', 'cri', 'geek', 'gen', 'govt', 'health', 'iwi', 'maori', 'mil', 'net', 'org', 'parliament', 'school'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'om') {
			if (['co', 'com', 'edu', 'gov', 'med', 'museum', 'net', 'org', 'pro'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'pa') {
			if (['abo', 'ac', 'com', 'edu', 'gob', 'ing', 'med', 'net', 'nom', 'org', 'sld'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'pe') {
			if (['com', 'edu', 'gob', 'mil', 'net', 'nom', 'org', 'sld'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'pg') {
			if (['com', 'net', 'ac', 'gov', 'mil', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ph') {
			if (['com', 'edu', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'pk') {
			if (['biz', 'com', 'edu', 'fam', 'gob', 'gok', 'gon', 'gop', 'gos', 'gov', 'net', 'org', 'web'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'pl') {
			if (['art', 'bialystok', 'biz', 'com', 'edu', 'gda', 'gdansk', 'gov', 'info', 'katowice', 'krakow', 'lodz', 'lublin', 'mil', 'net', 'ngo', 'olsztyn', 'org', 'poznan', 'radom', 'slupsk', 'szczecin', 'torun', 'warszawa', 'waw', 'wroc', 'wroclaw', 'zgora'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'pn') {
			if (['in', 'co', 'eu', 'org', 'net', 'me'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'pr') {
			if (['ac', 'biz', 'com', 'edu', 'est', 'gov', 'info', 'isla', 'name', 'net', 'org', 'pro', 'prof'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'pt') {
			if (['com', 'edu', 'gov', 'int', 'net', 'nome', 'org', 'publ'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'py') {
			if (['com', 'coop', 'edu', 'mil', 'gov', 'org', 'net', 'una'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'qa') {
			if (['com', 'edu', 'sch', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ru') {
			if (['ac', 'adygeya', 'altai', 'amur', 'amursk', 'arkhangelsk', 'astrakhan', 'baikal', 'bashkiria', 'belgorod', 'bir', 'bryansk', 'buryatia', 'cap', 'cbg', 'chel', 'chelyabinsk', 'chita', 'chukotka', 'cmw', 'com', 'dagestan', 'e-burg', 'edu', 'fareast', 'gov', 'grozny', 'int', 'irkutsk', 'ivanovo', 'izhevsk', 'jamal', 'jar', 'joshkar-ola', 'k-uralsk', 'kalmykia', 'kaluga', 'kamchatka', 'karelia', 'kazan', 'kchr', 'kemerovo', 'khabarovsk', 'khakassia', 'khv', 'kirov', 'kms', 'koenig', 'komi', 'kostroma', 'krasnoyarsk', 'kuban', 'kurgan', 'kursk', 'kustanai', 'kuzbass', 'lipetsk', 'magadan', 'magnitka', 'mari', 'mari-el', 'marine', 'mil', 'mordovia', 'mos', 'mosreg', 'msk', 'murmansk', 'mytis', 'nakhodka', 'nalchik', 'net', 'nkz', 'nnov', 'norilsk', 'nov', 'novosibirsk', 'nsk', 'omsk', 'orenburg', 'org', 'oryol', 'oskol', 'palana', 'penza', 'perm', 'pp', 'pskov', 'ptz', 'pyatigorsk', 'rnd', 'rubtsovsk', 'ryazan', 'sakhalin', 'samara', 'saratov', 'simbirsk', 'smolensk', 'snz', 'spb', 'stavropol', 'stv', 'surgut', 'syzran', 'tambov', 'tatarstan', 'test', 'tlt', 'tom', 'tomsk', 'tsaritsyn', 'tsk', 'tula', 'tuva', 'tver', 'tyumen', 'udm', 'udmurtia', 'ulan-ude', 'vdonsk', 'vladikavkaz', 'vladimir', 'vladivostok', 'volgograd', 'vologda', 'voronezh', 'vrn', 'vyatka', 'yakutia', 'yamal', 'yaroslavl', 'yekaterinburg', 'yuzhno-sakhalinsk', 'zgrad'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'sa') {
			if (['com', 'edu', 'gov', 'med', 'net', 'org', 'pub', 'sch'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'se') {
			if (['a', 'ac', 'b', 'bd', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'org', 'p', 'parti', 'pp', 'press', 'r', 's', 't', 'tm', 'u', 'w', 'x', 'y', 'z'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'sg') {
			if (['com', 'edu', 'gov', 'idn', 'net', 'org', 'per'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'sv') {
			if (['edu', 'gov', 'com', 'org', 'red'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'th') {
			if (['ac', 'co', 'go', 'in', 'mi', 'net', 'or'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'tj') {
			if (['ac', 'aero', 'biz', 'co', 'com', 'coop', 'dyn', 'edu', 'go', 'gov', 'info', 'int', 'mil', 'museum', 'my', 'name', 'net', 'nic', 'org', 'per', 'pro', 'test', 'web'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'tn') {
			if (['agrinet', 'com', 'defense', 'edunet', 'ens', 'fin', 'gov', 'ind', 'info', 'intl', 'mincom', 'nat', 'net', 'org', 'perso', 'rnrt', 'rns', 'rnu', 'tourism'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'tr') {
			if (['av', 'bbs', 'bel', 'biz', 'com', 'dr', 'edu', 'gen', 'gov', 'info', 'k12', 'mil', 'name', 'nc', 'net', 'org', 'pol', 'tel', 'tv', 'web'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'tw') {
			if (['club', 'com', 'ebiz', 'edu', 'game', 'gov', 'idv', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'tz') {
			if (['co', 'ac', 'go', 'or', 'mil', 'sc', 'ne', 'hotel', 'mobi', 'tv', 'info', 'me'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ua') {
			if (['at', 'cherkassy', 'chernigov', 'chernovtsy', 'ck', 'cn', 'co', 'com', 'crimea', 'cv', 'dn', 'dnepropetrovsk', 'donetsk', 'dp', 'edu', 'gov', 'if', 'in', 'ivano-frankivsk', 'kh', 'kharkov', 'kherson', 'khmelnitskiy', 'kiev', 'kirovograd', 'km', 'kr', 'ks', 'lg', 'lt', 'lugansk', 'lutsk', 'lviv', 'mk', 'net', 'nikolaev', 'od', 'odessa', 'org', 'pl', 'poltava', 'pp', 'rovno', 'rv', 'sebastopol', 'sumy', 'te', 'ternopil', 'uz', 'uzhgorod', 'vinnica', 'vn', 'yalta', 'zaporizhzhe', 'zhitomir', 'zp', 'zt'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ug') {
			if (['co', 'ac', 'sc', 'go', 'ne', 'or'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'uk') {
			if (['ac', 'bl', 'british-library', 'co', 'gov', 'jcpc', 'jet', 'judiciary', 'ltd', 'me', 'mod', 'net', 'nhs', 'nic', 'nls', 'org', 'parliament', 'plc', 'police', 'sch', 'supremecourt'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'uy') {
			if (['com', 'edu', 'gub', 'net', 'mil', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'uz') {
			if (['co', 'com', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 've') {
			if (['arts', 'co', 'com', 'edu', 'gob', 'gov', 'info', 'int', 'mil', 'net', 'org', 'radio', 'tec', 'web'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'vi') {
			if (['co', 'org', 'com', 'net', 'k12'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'vn') {
			if (['ac', 'biz', 'com', 'edu', 'gov', 'health', 'info', 'int', 'mil', 'name', 'net', 'org', 'pro'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'ws') {
			if (['org', 'gov', 'edu', 'com'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'za') {
			if (['ac', 'agric', 'alt', 'bourse', 'city', 'co', 'cybernet', 'db', 'edu', 'gov', 'grondar', 'iaccess', 'imt', 'inca', 'landesign', 'law', 'mil', 'ngo', 'nis', 'nom', 'olivetti', 'org', 'pix', 'school', 'tm', 'web'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'zm') {
			if (['ac', 'co', 'com', 'edu', 'gov', 'net', 'org', 'sch'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa[0] == 'zw') {
			if (['co', 'ac', 'org'].includes(wa[1])) {
				return wa[2] + "." + wa[1] + "." + wa[0];
			}
		}
		if (wa_l == 4) {
			if (/^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(w)) {
				return w;
			}
		}
	}
	return wa[1] + "." + wa[0];
}

function update_icon(tid, url) {
	var _nu = new URL(url);
	var cf_hostname = _nu.hostname;
	if ((_nu.protocol != 'http:' && _nu.protocol != 'https:') || cf_hostname.length < 1) {
		browser.browserAction.setIcon({
			tabId: tid,
			path: cf_flag_ok
		});
		return;
	}
	cf_hostname = get_realdomain(cf_hostname);
	if (my_cf_ignore.includes(cf_hostname) || force_whitelist.includes(cf_hostname)) {
		browser.browserAction.setIcon({
			tabId: tid,
			path: cf_flag_ok
		});
		return;
	}
	if (known_cf_domains.includes(cf_hostname) || my_cf_collection.includes(cf_hostname)) {
		if (my_action == 3) {
			browser.tabs.executeScript(tid, {
				matchAboutBlank: true,
				runAt: 'document_end',
				code: "if (location.hostname=='%%CFHOST%%'||location.hostname.endsWith('.%%CFHOST%%')){if (!document.title.startsWith('[!!MITM!!]') && (typeof _bcma_bdr)=='undefined'){document.title='[!!MITM!!]'+document.title;function _bcma_bdr(){document.body.style = 'border:4px dashed #' + ['e74c3c', '9b59b6', '3498db', '17a589', '196f3d', 'f4d03f', 'f39c12', 'd35400'][Math.floor(Math.random() * 8)] + ' !important';setTimeout(_bcma_bdr,4860);};_bcma_bdr();}}".replace('%%CFHOST%%', cf_hostname).replace('%%CFHOST%%', cf_hostname)
			});
			browser.tabs.executeScript(tid, {
				matchAboutBlank: true,
				runAt: 'document_idle',
				code: "if (location.hostname=='%%CFHOST%%'||location.hostname.endsWith('.%%CFHOST%%')){if (!document.title.startsWith('[!!MITM!!]') && (typeof _bcma_bdr)=='undefined'){document.title='[!!MITM!!]'+document.title;function _bcma_bdr(){document.body.style = 'border:4px dashed #' + ['e74c3c', '9b59b6', '3498db', '17a589', '196f3d', 'f4d03f', 'f39c12', 'd35400'][Math.floor(Math.random() * 8)] + ' !important';setTimeout(_bcma_bdr,4860);};_bcma_bdr();}}".replace('%%CFHOST%%', cf_hostname).replace('%%CFHOST%%', cf_hostname)
			});
		}
		browser.browserAction.setIcon({
			tabId: tid,
			path: cf_flag_ng
		});
		return;
	}
	browser.browserAction.setIcon({
		tabId: tid,
		path: cf_flag_ok
	});
	return;
}

browser.webRequest.onHeadersReceived.addListener(function (wr) {
	if (wr.type != 'main_frame' && my_action == 2) {
		return;
	}
	var _a = document.createElement('a');
	_a.setAttribute('href', wr.url);
	var wr_protocol = _a.protocol;
	var wr_hostname = _a.hostname;
	_a = null;
	if ((wr_protocol != 'http:' && wr_protocol != 'https:') || wr_hostname.length < 4) {
		return;
	}
	wr_hostname = get_realdomain(wr_hostname);
	if (my_action == 1) {
		if (wr.type == 'main_frame') {
			return;
		}
		if (wr.documentUrl) {
			var _b = document.createElement('a');
			_b.setAttribute('href', wr.documentUrl);
			if (wr_hostname == get_realdomain(_b.hostname)) {
				return;
			}
			_b = null;
		}
	}
	if (my_cf_ignore.includes(wr_hostname)) {
		return;
	}
	if (force_whitelist.includes(wr_hostname)) {
		return;
	}
	var cf_is = (known_cf_domains.includes(wr_hostname) || my_cf_collection.includes(wr_hostname)) ? true : false;
	if (!cf_is) {
		var cf_headers = wr.responseHeaders,
			cf_v_name, cf_v_value;
		for (var i = 0; i < cf_headers.length; i++) {
			cf_v_name = cf_headers[i]['name'].toLowerCase();
			cf_v_value = (cf_headers[i]['value'] != undefined) ? cf_headers[i]['value'].toLowerCase() : '';
			if (cf_v_name == 'server' && cf_v_value.includes('cloudflare')) {
				cf_is = true;
				break;
			}
			if (cf_v_name == 'cf-ray' || cf_v_name == 'cf-cache-status' || cf_v_name == 'cf-chl-bypass') {
				cf_is = true;
				break;
			}
			if (cf_v_name == 'set-cookie' && cf_v_value.includes('_cfduid')) {
				cf_is = true;
				break;
			}
		}
	}
	if (cf_is) {
		if (my_cf_collection.length > 500) {
			my_cf_collection.shift();
		}
		if (!my_cf_collection.includes(wr_hostname)) {
			my_cf_collection.push(wr_hostname);
		}
		console.log('BCMA: Block Cloudflare RH', wr_hostname);
		if (my_action == 0 || my_action == 1) {
			if (wr.type == 'image') {
				return {
					redirectUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQBCgAAACwAAAAAAQABAAACAkQBADs='
				};
			} else {
				return {
					cancel: true
				};
			}
		}
		if (my_action == 2) {
			return {
				redirectUrl: 'https://web.archive.org/web/' + wr.url.split('?')[0]
			};
		}
	}
	return;
}, {
	urls: ["http://*/*", "https://*/*"]
}, ["blocking", "responseHeaders"]);

browser.webRequest.onBeforeRequest.addListener(function (wr) {
	if (wr.type != 'main_frame' && my_action == 2) {
		return;
	}
	var _a = document.createElement('a');
	_a.setAttribute('href', wr.url);
	var wr_protocol = _a.protocol;
	var wr_hostname = _a.hostname;
	_a = null;
	if ((wr_protocol != 'http:' && wr_protocol != 'https:') || wr_hostname.length < 4) {
		return;
	}
	wr_hostname = get_realdomain(wr_hostname);
	if (my_action == 1) {
		if (wr.type == 'main_frame') {
			return;
		}
		if (wr.documentUrl) {
			var _b = document.createElement('a');
			_b.setAttribute('href', wr.documentUrl);
			if (wr_hostname == get_realdomain(_b.hostname)) {
				return;
			}
			_b = null;
		}
	}
	if (my_cf_ignore.includes(wr_hostname)) {
		return;
	}
	if (force_whitelist.includes(wr_hostname)) {
		return;
	}
	var cf_is = (known_cf_domains.includes(wr_hostname) || my_cf_collection.includes(wr_hostname)) ? true : false;
	if (cf_is) {
		console.log('BCMA: Block Cloudflare BR', wr_hostname);
		if (my_action == 0 || my_action == 1) {
			if (wr.type == 'image') {
				return {
					redirectUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQBCgAAACwAAAAAAQABAAACAkQBADs='
				};
			} else {
				return {
					cancel: true
				};
			}
		}
		if (my_action == 2) {
			return {
				redirectUrl: 'https://web.archive.org/web/' + wr.url.split('?')[0]
			};
		}
	}
	return;
}, {
	urls: ["http://*/*", "https://*/*"]
}, ["blocking"]);

browser.runtime.onMessage.addListener(function (a, b, c) {
	if (a[0] == 'cf') {
		c(['ok', JSON.stringify(my_cf_collection), JSON.stringify(my_cf_ignore), (known_cf_domains.length == 0) ? false : true, my_action]);
	}
	if (a[0] == 'erosman') {
		my_cf_collection = [];
		c(['destroy']);
	}
	if (a[0] == 'bi') {
		if (a[1] == 'y') {
			known_cf_domains = cfdomains;
		} else {
			known_cf_domains = [];
		}
		c(['ok']);
	}
	if (a[0] == 'ta') {
		if (a[1] == '0') {
			my_action = 0;
		}
		if (a[1] == '1') {
			my_action = 1;
		}
		if (a[1] == '2') {
			my_action = 2;
		}
		if (a[1] == '3') {
			my_action = 3;
		}
		c(['ok']);
	}
	if (a[0] == 'ig') {
		my_cf_ignore = a[1].sort().filter(v => v != '');
		c(['ok']);
	}
	return true;
});

browser.tabs.onActivated.addListener(function (i) {
	browser.tabs.query({
		active: true,
		currentWindow: true
	}).then(function (t) {
		update_icon(t[0].id, t[0].url);
	}, onError);
});
browser.tabs.onUpdated.addListener(function (a, b, t) {
	if (t.active) {
		update_icon(t.id, t.url);
	}
});
browser.webNavigation.onDOMContentLoaded.addListener(function (d) {
	browser.tabs.query({
		active: true,
		currentWindow: true
	}).then(function (t) {
		update_icon(t[0].id, t[0].url);
	}, onError);
});
browser.webNavigation.onCompleted.addListener(function (d) {
	browser.tabs.query({
		active: true,
		currentWindow: true
	}).then(function (t) {
		update_icon(t[0].id, t[0].url);
	}, onError);
});

browser.browserAction.onClicked.addListener(function (t) {
	browser.runtime.openOptionsPage();
});
