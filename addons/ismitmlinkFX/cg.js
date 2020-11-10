document.addEventListener('DOMContentLoaded', () => {
	browser.storage.local.get(['ign1', 'ign2', 'obs', 'dbg', 'alt', 'mul', 'opd', 'cep']).then(g => {
		document.getElementById('ign1').checked = (g.ign1 == 'y') ? true : false;
		document.getElementById('ign2').checked = (g.ign2 == 'y') ? true : false;
		document.getElementById('obs').checked = (g.obs == 'y') ? true : false;
		document.getElementById('dbg').checked = (g.dbg == 'y') ? true : false;
		document.getElementById('alt').checked = (g.alt == 'y') ? true : false;
		document.getElementById('opon').checked = (g.opd != 'n' && g.opd != 'l') ? true : false;
		document.getElementById('opoff').checked = (g.opd == 'n') ? true : false;
		document.getElementById('opol').checked = (g.opd == 'l') ? true : false;
		switch (g.cep) {
			case '1':
				document.getElementById('ut0').checked = false;
				document.getElementById('ut1').checked = true;
				document.getElementById('ut2').checked = false;
				break;
			case '2':
				document.getElementById('ut0').checked = false;
				document.getElementById('ut1').checked = false;
				document.getElementById('ut2').checked = true;
				break;
			default:
				document.getElementById('ut0').checked = true;
				document.getElementById('ut1').checked = false;
				document.getElementById('ut2').checked = false;
				break;
		}
		let ul = g.mul || 'eo';
		fetch('i18n/' + ul + '.json', {
			method: 'GET'
		}).then(j => j.json()).then(j => {
			document.querySelectorAll('span[tek]').forEach(x => {
				x.innerText = j[x.getAttribute('tek')];
			});
			document.body.style.display = 'block';
		});
	});
});
document.getElementById('myul').addEventListener('change', () => {
	let xul = document.getElementById('myul').value;
	if (xul.length == 2) {
		browser.storage.local.set({
			'mul': xul
		});
		location.reload(true);
	}
});
document.getElementById('ign1').addEventListener('click', () => {
	browser.storage.local.set({
		'ign1': (document.getElementById('ign1').checked ? 'y' : 'n')
	});
});
document.getElementById('ign2').addEventListener('click', () => {
	browser.storage.local.set({
		'ign2': (document.getElementById('ign2').checked ? 'y' : 'n')
	});
});
document.getElementById('obs').addEventListener('click', () => {
	browser.storage.local.set({
		'obs': (document.getElementById('obs').checked ? 'y' : 'n')
	});
});
document.getElementById('dbg').addEventListener('click', () => {
	browser.storage.local.set({
		'dbg': (document.getElementById('dbg').checked ? 'y' : 'n')
	});
});
document.getElementById('alt').addEventListener('click', () => {
	browser.storage.local.set({
		'alt': (document.getElementById('alt').checked ? 'y' : 'n')
	});
});
document.getElementById('opon').addEventListener('click', () => {
	browser.runtime.sendMessage('dbmode,s1').then(() => {
		location.reload();
	});
});
document.getElementById('opoff').addEventListener('click', () => {
	browser.runtime.sendMessage('dbmode,s0').then(() => {
		location.reload();
	});
});
document.getElementById('opol').addEventListener('click', () => {
	browser.runtime.sendMessage('dbmode,s2').then(() => {
		location.reload();
	});
});
document.getElementById('crs').addEventListener('click', () => {
	browser.runtime.sendMessage('clear').then(() => {
		location.reload();
	});
});
document.getElementById('ut0').addEventListener('click', () => {
	browser.runtime.sendMessage('urltype,0').then(() => {
		location.reload();
	});
});
document.getElementById('ut1').addEventListener('click', () => {
	browser.runtime.sendMessage('urltype,1').then(() => {
		location.reload();
	});
});
document.getElementById('ut2').addEventListener('click', () => {
	browser.runtime.sendMessage('urltype,2').then(() => {
		location.reload();
	});
});
function get_realdomain(w) {
	let wa = w.split('.');
	let wa_l = wa.length;
	if (wa_l < 3 || (wa_l == 4 && /^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(w))) {
		return w;
	}
	wa.reverse();
	switch (wa[0]) {
		case 'ac':
			if (['com', 'edu', 'gov', 'net', 'mil', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ad':
			if (wa[1] == 'nom') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ae':
			if (['co', 'net', 'org', 'sch', 'ac', 'gov', 'mil'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'aero':
			if (['accident-investigation', 'accident-prevention', 'aerobatic', 'aeroclub', 'aerodrome', 'agents', 'aircraft', 'airline', 'airport', 'air-surveillance', 'airtraffic', 'air-traffic-control', 'ambulance', 'amusement', 'association', 'author', 'ballooning', 'broker', 'caa', 'cargo', 'catering', 'certification', 'championship', 'charter', 'civilaviation', 'club', 'conference', 'consultant', 'consulting', 'control', 'council', 'crew', 'design', 'dgca', 'educator', 'emergency', 'engine', 'engineer', 'entertainment', 'equipment', 'exchange', 'express', 'federation', 'flight', 'freight', 'fuel', 'gliding', 'government', 'groundhandling', 'group', 'hanggliding', 'homebuilt', 'insurance', 'journal', 'journalist', 'leasing', 'logistics', 'magazine', 'maintenance', 'media', 'microlight', 'modelling', 'navigation', 'parachuting', 'paragliding', 'passenger-association', 'pilot', 'press', 'production', 'recreation', 'repbody', 'res', 'research', 'rotorcraft', 'safety', 'scientist', 'services', 'show', 'skydiving', 'software', 'student', 'trader', 'trading', 'trainer', 'union', 'workinggroup', 'works'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'af':
			if (['com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ag':
			if (['com', 'net', 'org', 'co', 'nom', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ai':
			if (['off', 'com', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'al':
			if (['com', 'edu', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ao':
			if (['co', 'ed', 'it', 'og', 'pb', 'gv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ar':
			if (['com', 'edu', 'gov', 'gob', 'int', 'mil', 'net', 'org', 'tur', 'musica'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'as':
			if (wa[1] == 'gov') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'at':
			if (['gv', 'ac', 'co', 'or', 'priv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'au':
			if (wa[1] == 'gov' && wa[3] != undefined) {
				if (['act', 'nsw', 'nt', 'qld', 'sa', 'tas', 'vic', 'wa'].includes(wa[2])) {
					return wa[3] + '.' + wa[2] + '.' + wa[1] + '.' + wa[0];
				}
			};
			if (wa[1] == 'edu' && wa[3] != undefined) {
				if (['act', 'catholic', 'eq', 'nsw', 'nt', 'sa', 'tas', 'vic', 'wa'].includes(wa[2])) {
					return wa[3] + '.' + wa[2] + '.' + wa[1] + '.' + wa[0];
				}
			};
			if (['act', 'asn', 'com', 'conf', 'csiro', 'edu', 'gov', 'id', 'info', 'net', 'nsw', 'nt', 'org', 'oz', 'qld', 'sa', 'tas', 'vic', 'wa'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'aw':
			if (wa[1] == 'com') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'az':
			if (['biz', 'com', 'edu', 'gov', 'info', 'int', 'mil', 'name', 'net', 'org', 'pp', 'pro'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ba':
			if (['co', 'com', 'edu', 'gov', 'mil', 'net', 'org', 'rs'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bb':
			if (['biz', 'co', 'com', 'edu', 'gov', 'info', 'net', 'org', 'store', 'tv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bd':
			if (['com', 'edu', 'ac', 'net', 'gov', 'org', 'mil'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'be':
			if (wa[1] == 'ac') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bf':
			if (wa[1] == 'gov') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bg':
			if (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bh':
			if (['com', 'info', 'cc', 'edu', 'biz', 'net', 'org', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bi':
			if (['ac', 'co', 'com', 'edu', 'gouv', 'gov', 'int', 'mil', 'net', 'or', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bj':
			if (['asso', 'barreau', 'gouv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bm':
			if (['com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bn':
			if (['com', 'net', 'org', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bo':
			if (['academia', 'agro', 'arte', 'blog', 'bolivia', 'ciencia', 'com', 'cooperativa', 'democracia', 'deporte', 'ecologia', 'economia', 'edu', 'empresa', 'gob', 'gov', 'indigena', 'industria', 'info', 'int', 'medicina', 'mil', 'movimiento', 'musica', 'natural', 'net', 'nombre', 'noticias', 'org', 'patria', 'plurinacional', 'politica', 'profesional', 'pueblo', 'revista', 'salud', 'tecnologia', 'tksat', 'transporte', 'tv', 'web', 'wiki'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'br':
			if (['9guacu', 'abc', 'adm', 'adv', 'agr', 'aju', 'am', 'anani', 'aparecida', 'arq', 'art', 'ato', 'b', 'barueri', 'belem', 'bhz', 'bio', 'blog', 'bmd', 'boavista', 'bsb', 'campinagrande', 'campinas', 'caxias', 'cim', 'cng', 'cnt', 'com', 'contagem', 'coop', 'cri', 'cuiaba', 'curitiba', 'def', 'ecn', 'eco', 'edu', 'emp', 'eng', 'esp', 'etc', 'eti', 'far', 'feira', 'flog', 'floripa', 'fm', 'fnd', 'fortal', 'fot', 'foz', 'fst', 'g12', 'ggf', 'goiania', 'gov', 'gru', 'imb', 'ind', 'inf', 'jab', 'jampa', 'jdf', 'joinville', 'jor', 'jus', 'leg', 'lel', 'londrina', 'macapa', 'maceio', 'manaus', 'maringa', 'mat', 'med', 'mil', 'morena', 'mp', 'mus', 'natal', 'net', 'niteroi', 'nom', 'not', 'ntr', 'odo', 'ong', 'org', 'osasco', 'palmas', 'poa', 'ppg', 'pro', 'psc', 'psi', 'pvh', 'qsl', 'radio', 'rec', 'recife', 'ribeirao', 'rio', 'riobranco', 'riopreto', 'salvador', 'sampa', 'santamaria', 'santoandre', 'saobernardo', 'saogonca', 'sjc', 'slg', 'slz', 'sorocaba', 'srv', 'taxi', 'teo', 'the', 'tmp', 'trd', 'tur', 'tv', 'udi', 'vet', 'vix', 'vlog', 'wiki', 'zlg'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bs':
			if (['com', 'net', 'org', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bt':
			if (['com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bw':
			if (['org', 'ac', 'co', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'by':
			if (['gov', 'mil', 'com', 'of'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'bz':
			if (['com', 'edu', 'gov', 'mil', 'net', 'nym', 'of', 'org', 'za'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ca':
			if (['ab', 'bc', 'gc', 'mb', 'nb', 'nf', 'nl', 'ns', 'nt', 'nu', 'on', 'pe', 'qc', 'sk', 'yk'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'cd':
			if (wa[1] == 'gov') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ci':
			if (['ac', 'asso', 'co', 'com', 'ed', 'edu', 'go', 'gouv', 'int', 'md', 'net', 'or', 'org', 'presse', 'xn--aroport-bya'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ck':
			if (['biz', 'co', 'edu', 'gen', 'gov', 'info', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'cl':
			if (['gov', 'gob', 'co', 'mil'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'cm':
			if (['co', 'com', 'gov', 'net'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'cn':
			if (['ac', 'ah', 'bj', 'com', 'cq', 'edu', 'fj', 'gd', 'gov', 'gs', 'gx', 'gz', 'ha', 'hb', 'he', 'hi', 'hk', 'hl', 'hn', 'jl', 'js', 'jx', 'ln', 'mil', 'mo', 'net', 'nm', 'nx', 'org', 'qh', 'sc', 'sd', 'sh', 'sn', 'sx', 'tj', 'tw', 'xj', 'xn--55qx5d', 'xn--io0a7i', 'xn--od0alg', 'xz', 'yn', 'zj'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'co':
			if (['arts', 'com', 'edu', 'firm', 'gov', 'info', 'int', 'mil', 'net', 'nom', 'org', 'rec', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'com':
			if (['africa', 'ar', 'br', 'cn', 'co', 'de', 'eu', 'gb', 'gr', 'hu', 'jpn', 'kr', 'mex', 'no', 'qc', 'ru', 'sa', 'se', 'uk', 'us', 'uy', 'za'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'cr':
			if (['ac', 'co', 'ed', 'fi', 'go', 'or', 'sa'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'cu':
			if (['com', 'edu', 'org', 'net', 'gov', 'inf'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'cw':
			if (['com', 'edu', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'cx':
			if (wa[1] == 'gov') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'cy':
			if (['ac', 'biz', 'com', 'ekloges', 'gov', 'ltd', 'name', 'net', 'org', 'parliament', 'press', 'pro', 'tm'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'dm':
			if (['com', 'net', 'org', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'do':
			if (['art', 'com', 'edu', 'gob', 'gov', 'mil', 'net', 'org', 'sld', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'dz':
			if (['art', 'asso', 'com', 'edu', 'gov', 'net', 'org', 'pol'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ec':
			if (['com', 'edu', 'fin', 'gob', 'gov', 'info', 'k12', 'med', 'mil', 'net', 'org', 'pro'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ee':
			if (['aip', 'com', 'edu', 'fie', 'gov', 'lib', 'med', 'org', 'pri', 'riik'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'eg':
			if (['com', 'edu', 'eun', 'gov', 'mil', 'name', 'net', 'org', 'sci'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'es':
			if (['com', 'nom', 'org', 'gob', 'edu'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'et':
			if (['com', 'gov', 'org', 'edu', 'net', 'biz', 'name', 'info'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'fi':
			if (wa[1] == 'aland') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'fj':
			if (['ac', 'biz', 'com', 'info', 'mil', 'name', 'net', 'org', 'pro'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'fr':
			if (['aeroport', 'assedic', 'asso', 'avocat', 'avoues', 'cci', 'chambagri', 'chirurgiens-dentistes', 'com', 'experts-comptables', 'geometre-expert', 'gouv', 'greta', 'huissier-justice', 'medecin', 'nom', 'notaires', 'pharmacien', 'port', 'prd', 'presse', 'tm', 'veterinaire'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ge':
			if (['com', 'edu', 'gov', 'mil', 'net', 'org', 'pvt'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gg':
			if (['co', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gh':
			if (['com', 'edu', 'gov', 'org', 'mil'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gi':
			if (['com', 'edu', 'gov', 'ltd', 'mod', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gl':
			if (['co', 'com', 'edu', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gn':
			if (['ac', 'com', 'edu', 'gov', 'org', 'net'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gov':
			if (['al', 'alabama', 'alaska', 'americansamoa', 'ar', 'arizona', 'arkansas', 'as', 'az', 'ca', 'co', 'colorado', 'ct', 'dc', 'de', 'delaware', 'ehawaii', 'fl', 'florida', 'ga', 'georgia', 'guam', 'hawaii', 'ia', 'idaho', 'il', 'illinois', 'in', 'indiana', 'iowa', 'kansas', 'kentucky', 'ks', 'ky', 'la', 'louisiana', 'ma', 'maine', 'maryland', 'mass', 'massachusetts', 'md', 'mi', 'michigan', 'minnesota', 'mississippi', 'missouri', 'mn', 'mo', 'montana', 'ms', 'mt', 'nc', 'nd', 'ne', 'nebraska', 'nevada', 'newjersey', 'newmexico', 'nh', 'nj', 'northcarolina', 'northdakota', 'nv', 'ny', 'ohio', 'ok', 'oklahoma', 'oregon', 'pa', 'pennsylvania', 'pr', 'rhodeisland', 'ri', 'sc', 'sd', 'tennessee', 'texas', 'tn', 'utah', 'vermont', 'vi', 'virginia', 'vt', 'wa', 'washington', 'wi', 'wisconsin', 'wv', 'wy', 'wyoming'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gp':
			if (['com', 'net', 'mobi', 'edu', 'org', 'asso'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gr':
			if (['co', 'com', 'edu', 'gov', 'mil', 'mod', 'net', 'org', 'sch'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gt':
			if (['com', 'edu', 'net', 'gob', 'org', 'mil', 'ind'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gu':
			if (['com', 'edu', 'gov', 'guam', 'info', 'net', 'org', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'gy':
			if (['co', 'com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'hk':
			if (['com', 'edu', 'gov', 'idv', 'net', 'org', 'xn--55qx5d', 'xn--ciqpn', 'xn--gmq050i', 'xn--gmqw5a', 'xn--io0a7i', 'xn--lcvr32d', 'xn--mk0axi', 'xn--mxtq1m', 'xn--od0alg', 'xn--od0aq3b', 'xn--tn0ag', 'xn--uc0atv', 'xn--uc0ay4a', 'xn--wcvs22d', 'xn--zf0avx'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'hn':
			if (['com', 'edu', 'gob', 'net', 'org', 'mil'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'hr':
			if (['iz', 'from', 'name', 'com'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ht':
			if (['com', 'shop', 'firm', 'info', 'adult', 'net', 'pro', 'org', 'med', 'art', 'coop', 'pol', 'asso', 'edu', 'rel', 'gouv', 'perso'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'hu':
			if (['2000', 'agrar', 'bolt', 'casino', 'city', 'co', 'edu', 'erotica', 'erotika', 'film', 'forum', 'games', 'gov', 'hotel', 'info', 'ingatlan', 'jogasz', 'konyvelo', 'lakas', 'media', 'mobi', 'net', 'news', 'org', 'priv', 'reklam', 'sex', 'shop', 'sport', 'suli', 'szex', 'tm', 'tozsde', 'utazas', 'video'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'id':
			if (['ac', 'biz', 'co', 'desa', 'go', 'mil', 'my', 'net', 'or', 'ponpes', 'sch', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ie':
			if (wa[1] == 'gov') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'il':
			if (['ac', 'co', 'gov', 'idf', 'k12', 'muni', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'im':
			if (['ac', 'co', 'com', 'gov', 'net', 'org', 'ro', 'tt', 'tv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'in':
			if (['ac', 'co', 'edu', 'ernet', 'firm', 'gen', 'gov', 'ind', 'mil', 'net', 'org', 'res', 'nic'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'int':
			if (wa[1] == 'eu') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'io':
			if (wa[1] == 'com') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'iq':
			if (['gov', 'edu', 'mil', 'com', 'org', 'net'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ir':
			if (['ac', 'co', 'gov', 'id', 'net', 'org', 'sch', 'xn--mgba3a4f16a', 'xn--mgba3a4fra'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'is':
			if (['net', 'com', 'edu', 'gov', 'org', 'int'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'it':
			if (['abr', 'abruzzo', 'ag', 'agrigento', 'al', 'alessandria', 'alto-adige', 'altoadige', 'an', 'ancona', 'andria-barletta-trani', 'andria-trani-barletta', 'andriabarlettatrani', 'andriatranibarletta', 'ao', 'aosta', 'aosta-valley', 'aostavalley', 'aoste', 'ap', 'aq', 'aquila', 'ar', 'arezzo', 'ascoli-piceno', 'ascolipiceno', 'asti', 'at', 'av', 'avellino', 'ba', 'balsan', 'balsan-sudtirol', 'balsan-suedtirol', 'bari', 'barletta-trani-andria', 'barlettatraniandria', 'bas', 'basilicata', 'belluno', 'benevento', 'bergamo', 'bg', 'bi', 'biella', 'bl', 'bn', 'bo', 'bologna', 'bolzano', 'bolzano-altoadige', 'bozen', 'bozen-sudtirol', 'bozen-suedtirol', 'br', 'brescia', 'brindisi', 'bs', 'bt', 'bulsan', 'bulsan-sudtirol', 'bulsan-suedtirol', 'bz', 'ca', 'cagliari', 'cal', 'calabria', 'caltanissetta', 'cam', 'campania', 'campidano-medio', 'campidanomedio', 'campobasso', 'carbonia-iglesias', 'carboniaiglesias', 'carrara-massa', 'carraramassa', 'caserta', 'catania', 'catanzaro', 'cb', 'ce', 'cesena-forli', 'cesenaforli', 'ch', 'chieti', 'ci', 'cl', 'cn', 'co', 'como', 'cosenza', 'cr', 'cremona', 'crotone', 'cs', 'ct', 'cuneo', 'cz', 'dell-ogliastra', 'dellogliastra', 'edu', 'emilia-romagna', 'emiliaromagna', 'emr', 'en', 'enna', 'fc', 'fe', 'fermo', 'ferrara', 'fg', 'fi', 'firenze', 'florence', 'fm', 'foggia', 'forli-cesena', 'forlicesena', 'fr', 'friuli-v-giulia', 'friuli-ve-giulia', 'friuli-vegiulia', 'friuli-venezia-giulia', 'friuli-veneziagiulia', 'friuli-vgiulia', 'friuliv-giulia', 'friulive-giulia', 'friulivegiulia', 'friulivenezia-giulia', 'friuliveneziagiulia', 'friulivgiulia', 'frosinone', 'fvg', 'ge', 'genoa', 'genova', 'go', 'gorizia', 'gov', 'gr', 'grosseto', 'iglesias-carbonia', 'iglesiascarbonia', 'im', 'imperia', 'is', 'isernia', 'kr', 'la-spezia', 'laquila', 'laspezia', 'latina', 'laz', 'lazio', 'lc', 'le', 'lecce', 'lecco', 'li', 'lig', 'liguria', 'livorno', 'lo', 'lodi', 'lom', 'lombardia', 'lombardy', 'lt', 'lu', 'lucania', 'lucca', 'macerata', 'mantova', 'mar', 'marche', 'massa-carrara', 'massacarrara', 'matera', 'mb', 'mc', 'me', 'medio-campidano', 'mediocampidano', 'messina', 'mi', 'milan', 'milano', 'mn', 'mo', 'modena', 'mol', 'molise', 'monza', 'monza-brianza', 'monza-e-della-brianza', 'monzabrianza', 'monzaebrianza', 'monzaedellabrianza', 'ms', 'mt', 'na', 'naples', 'napoli', 'no', 'novara', 'nu', 'nuoro', 'og', 'ogliastra', 'olbia-tempio', 'olbiatempio', 'or', 'oristano', 'ot', 'pa', 'padova', 'padua', 'palermo', 'parma', 'pavia', 'pc', 'pd', 'pe', 'perugia', 'pesaro-urbino', 'pesarourbino', 'pescara', 'pg', 'pi', 'piacenza', 'piedmont', 'piemonte', 'pisa', 'pistoia', 'pmn', 'pn', 'po', 'pordenone', 'potenza', 'pr', 'prato', 'pt', 'pu', 'pug', 'puglia', 'pv', 'pz', 'ra', 'ragusa', 'ravenna', 'rc', 're', 'reggio-calabria', 'reggio-emilia', 'reggiocalabria', 'reggioemilia', 'rg', 'ri', 'rieti', 'rimini', 'rm', 'rn', 'ro', 'roma', 'rome', 'rovigo', 'sa', 'salerno', 'sar', 'sardegna', 'sardinia', 'sassari', 'savona', 'si', 'sic', 'sicilia', 'sicily', 'siena', 'siracusa', 'so', 'sondrio', 'sp', 'sr', 'ss', 'suedtirol', 'sv', 'ta', 'taa', 'taranto', 'te', 'tempio-olbia', 'tempioolbia', 'teramo', 'terni', 'tn', 'to', 'torino', 'tos', 'toscana', 'tp', 'tr', 'trani-andria-barletta', 'trani-barletta-andria', 'traniandriabarletta', 'tranibarlettaandria', 'trapani', 'trentin-sud-tirol', 'trentin-sudtirol', 'trentin-sued-tirol', 'trentin-suedtirol', 'trentino', 'trentino-a-adige', 'trentino-aadige', 'trentino-alto-adige', 'trentino-altoadige', 'trentino-s-tirol', 'trentino-stirol', 'trentino-sud-tirol', 'trentino-sudtirol', 'trentino-sued-tirol', 'trentino-suedtirol', 'trentinoa-adige', 'trentinoaadige', 'trentinoalto-adige', 'trentinoaltoadige', 'trentinos-tirol', 'trentinostirol', 'trentinosud-tirol', 'trentinosudtirol', 'trentinosued-tirol', 'trentinosuedtirol', 'trentinsud-tirol', 'trentinsudtirol', 'trentinsued-tirol', 'trentinsuedtirol', 'trento', 'treviso', 'trieste', 'ts', 'turin', 'tuscany', 'tv', 'ud', 'udine', 'umb', 'umbria', 'urbino-pesaro', 'urbinopesaro', 'va', 'val-d-aosta', 'val-daosta', 'vald-aosta', 'valdaosta', 'valle-aosta', 'valle-d-aosta', 'valle-daosta', 'valleaosta', 'valled-aosta', 'valledaosta', 'vallee-aoste', 'vallee-d-aoste', 'valleeaoste', 'valleedaoste', 'vao', 'varese', 'vb', 'vc', 'vda', 've', 'ven', 'veneto', 'venezia', 'venice', 'verbania', 'vercelli', 'verona', 'vi', 'vibo-valentia', 'vibovalentia', 'vicenza', 'viterbo', 'vr', 'vs', 'vt', 'vv', 'xn--balsan-sdtirol-nsb', 'xn--bozen-sdtirol-2ob', 'xn--bulsan-sdtirol-nsb', 'xn--cesena-forl-mcb', 'xn--cesenaforl-i8a', 'xn--forl-cesena-fcb', 'xn--forlcesena-c8a', 'xn--sdtirol-n2a', 'xn--trentin-sd-tirol-rzb', 'xn--trentin-sdtirol-7vb', 'xn--trentino-sd-tirol-c3b', 'xn--trentino-sdtirol-szb', 'xn--trentinosd-tirol-rzb', 'xn--trentinosdtirol-7vb', 'xn--trentinsd-tirol-6vb', 'xn--trentinsdtirol-nsb', 'xn--valle-aoste-ebb', 'xn--valle-d-aoste-ehb', 'xn--valleaoste-e7a', 'xn--valledaoste-ebb'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'je':
			if (['co', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'jm':
			if (['com', 'net', 'org', 'edu', 'gov', 'mil'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'jo':
			if (['com', 'edu', 'gov', 'mil', 'name', 'net', 'org', 'sch'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'jp':
			if (['ac', 'ad', 'aichi', 'akita', 'aomori', 'chiba', 'co', 'ed', 'ehime', 'fukui', 'fukuoka', 'fukushima', 'gifu', 'go', 'gr', 'gunma', 'hiroshima', 'hokkaido', 'hyogo', 'ibaraki', 'ishikawa', 'iwate', 'kagawa', 'kagoshima', 'kanagawa', 'kochi', 'kumamoto', 'kyoto', 'lg', 'mie', 'miyagi', 'miyazaki', 'nagano', 'nagasaki', 'nara', 'ne', 'niigata', 'oita', 'okayama', 'okinawa', 'or', 'osaka', 'saga', 'saitama', 'shiga', 'shimane', 'shizuoka', 'tochigi', 'tokushima', 'tokyo', 'tottori', 'toyama', 'wakayama', 'xn--0trq7p7nn', 'xn--1ctwo', 'xn--1lqs03n', 'xn--1lqs71d', 'xn--2m4a15e', 'xn--32vp30h', 'xn--4it168d', 'xn--4it797k', 'xn--4pvxs', 'xn--5js045d', 'xn--5rtp49c', 'xn--5rtq34k', 'xn--6btw5a', 'xn--6orx2r', 'xn--7t0a264c', 'xn--8ltr62k', 'xn--8pvr4u', 'xn--c3s14m', 'xn--d5qv7z876c', 'xn--djrs72d6uy', 'xn--djty4k', 'xn--efvn9s', 'xn--ehqz56n', 'xn--elqq16h', 'xn--f6qx53a', 'xn--k7yn95e', 'xn--kbrq7o', 'xn--klt787d', 'xn--kltp7d', 'xn--kltx9a', 'xn--klty5x', 'xn--mkru45i', 'xn--nit225k', 'xn--ntso0iqx3a', 'xn--ntsq17g', 'xn--pssu33l', 'xn--qqqt11m', 'xn--rht27z', 'xn--rht3d', 'xn--rht61e', 'xn--rny31h', 'xn--tor131o', 'xn--uist22h', 'xn--uisz3g', 'xn--uuwu58a', 'xn--vgu402c', 'xn--zbx025d', 'yamagata', 'yamaguchi', 'yamanashi'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ke':
			if (['ac', 'co', 'go', 'info', 'me', 'mobi', 'ne', 'or', 'sc'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'kg':
			if (['com', 'edu', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'kh':
			if (['com', 'edu', 'gov', 'mil', 'net', 'org', 'per'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ki':
			if (['edu', 'biz', 'net', 'org', 'gov', 'info', 'com'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'km':
			if (['org', 'nom', 'gov', 'prd', 'tm', 'edu', 'mil', 'ass', 'com', 'coop', 'asso', 'presse', 'medecin', 'notaires', 'pharmaciens', 'veterinaire', 'gouv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'kn':
			if (['net', 'org', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'kp':
			if (['com', 'edu', 'gov', 'org', 'rep', 'tra'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'kr':
			if (['ac', 'busan', 'cheju', 'chonbuk', 'chonnam', 'chungbuk', 'chungnam', 'co', 'daegu', 'daejeon', 'es', 'gangwon', 'go', 'gwangju', 'gyeongbuk', 'gyeonggi', 'gyeongnam', 'hs', 'incheon', 'inchon', 'jeju', 'jeonbuk', 'jeonnam', 'kangwon', 'kg', 'kwangju', 'kyongbuk', 'kyonggi', 'kyongnam', 'mil', 'ms', 'ne', 'nm', 'or', 'pe', 'pusan', 're', 'sc', 'seoul', 'taegu', 'taejon', 'ulsan', 'xn--bj0bj06e'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'kw':
			if (['com', 'edu', 'emb', 'gov', 'ind', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ky':
			if (['edu', 'gov', 'com', 'org', 'net'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'kz':
			if (['com', 'edu', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'la':
			if (['int', 'net', 'info', 'edu', 'gov', 'per', 'com', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'lb':
			if (['com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'lc':
			if (['com', 'net', 'co', 'org', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'lk':
			if (['ac', 'assn', 'com', 'edu', 'gov', 'grp', 'hotel', 'int', 'ltd', 'net', 'ngo', 'org', 'sch', 'soc', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'lr':
			if (['com', 'edu', 'gov', 'org', 'net'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ls':
			if (['ac', 'co', 'gov', 'net', 'nul', 'org', 'parliament', 'quadrant'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'lt':
			if (wa[1] == 'gov') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'lv':
			if (['asn', 'com', 'conf', 'edu', 'gov', 'id', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ly':
			if (['com', 'edu', 'gov', 'id', 'med', 'net', 'org', 'plc', 'sch'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ma':
			if (['ac', 'co', 'gov', 'net', 'org', 'press'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mc':
			if (['tm', 'asso'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'me':
			if (['co', 'net', 'org', 'edu', 'ac', 'gov', 'its', 'priv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mg':
			if (['org', 'nom', 'gov', 'prd', 'tm', 'edu', 'mil', 'com', 'co'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mk':
			if (['com', 'edu', 'gov', 'inf', 'name', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ml':
			if (['com', 'edu', 'gouv', 'gov', 'net', 'org', 'presse'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mm':
			if (['com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mn':
			if (['gov', 'edu', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mo':
			if (['com', 'net', 'org', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mr':
			if (wa[1] == 'gov') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ms':
			if (['com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mt':
			if (['com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mu':
			if (['ac', 'co', 'com', 'gov', 'net', 'or', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'museum':
			if (['academy', 'agriculture', 'air', 'airguard', 'alabama', 'alaska', 'amber', 'ambulance', 'american', 'americana', 'americanantiques', 'americanart', 'amsterdam', 'and', 'annefrank', 'anthro', 'anthropology', 'antiques', 'aquarium', 'arboretum', 'archaeological', 'archaeology', 'architecture', 'art', 'artanddesign', 'artcenter', 'artdeco', 'arteducation', 'artgallery', 'arts', 'artsandcrafts', 'asmatart', 'assassination', 'assisi', 'association', 'astronomy', 'atlanta', 'austin', 'australia', 'automotive', 'aviation', 'axis', 'badajoz', 'baghdad', 'bahn', 'bale', 'baltimore', 'barcelona', 'baseball', 'basel', 'baths', 'bauern', 'beauxarts', 'beeldengeluid', 'bellevue', 'bergbau', 'berkeley', 'berlin', 'bern', 'bible', 'bilbao', 'bill', 'birdart', 'birthplace', 'bonn', 'boston', 'botanical', 'botanicalgarden', 'botanicgarden', 'botany', 'brandywinevalley', 'brasil', 'bristol', 'british', 'britishcolumbia', 'broadcast', 'brunel', 'brussel', 'brussels', 'bruxelles', 'building', 'burghof', 'bus', 'bushey', 'cadaques', 'california', 'cambridge', 'can', 'canada', 'capebreton', 'carrier', 'cartoonart', 'casadelamoneda', 'castle', 'castres', 'celtic', 'center', 'chattanooga', 'cheltenham', 'chesapeakebay', 'chicago', 'children', 'childrens', 'childrensgarden', 'chiropractic', 'chocolate', 'christiansburg', 'cincinnati', 'cinema', 'circus', 'civilisation', 'civilization', 'civilwar', 'clinton', 'clock', 'coal', 'coastaldefence', 'cody', 'coldwar', 'collection', 'colonialwilliamsburg', 'coloradoplateau', 'columbia', 'columbus', 'communication', 'communications', 'community', 'computer', 'computerhistory', 'comunicações', 'contemporary', 'contemporaryart', 'convent', 'copenhagen', 'corporation', 'correios-e-telecomunicações', 'corvette', 'costume', 'countryestate', 'county', 'crafts', 'cranbrook', 'creation', 'cultural', 'culturalcenter', 'culture', 'cyber', 'cymru', 'dali', 'dallas', 'database', 'ddr', 'decorativearts', 'delaware', 'delmenhorst', 'denmark', 'depot', 'design', 'detroit', 'dinosaur', 'discovery', 'dolls', 'donostia', 'durham', 'eastafrica', 'eastcoast', 'education', 'educational', 'egyptian', 'eisenbahn', 'elburg', 'elvendrell', 'embroidery', 'encyclopedic', 'england', 'entomology', 'environment', 'environmentalconservation', 'epilepsy', 'essex', 'estate', 'ethnology', 'exeter', 'exhibition', 'family', 'farm', 'farmequipment', 'farmers', 'farmstead', 'field', 'figueres', 'filatelia', 'film', 'fineart', 'finearts', 'finland', 'flanders', 'florida', 'force', 'fortmissoula', 'fortworth', 'foundation', 'francaise', 'frankfurt', 'franziskaner', 'freemasonry', 'freiburg', 'fribourg', 'frog', 'fundacio', 'furniture', 'gallery', 'garden', 'gateway', 'geelvinck', 'gemological', 'geology', 'georgia', 'giessen', 'glas', 'glass', 'gorge', 'grandrapids', 'graz', 'guernsey', 'halloffame', 'hamburg', 'handson', 'harvestcelebration', 'hawaii', 'health', 'heimatunduhren', 'hellas', 'helsinki', 'hembygdsforbund', 'heritage', 'histoire', 'historical', 'historicalsociety', 'historichouses', 'historisch', 'historisches', 'history', 'historyofscience', 'horology', 'house', 'humanities', 'illustration', 'imageandsound', 'indian', 'indiana', 'indianapolis', 'indianmarket', 'intelligence', 'interactive', 'iraq', 'iron', 'isleofman', 'jamison', 'jefferson', 'jerusalem', 'jewelry', 'jewish', 'jewishart', 'jfk', 'journalism', 'judaica', 'judygarland', 'juedisches', 'juif', 'karate', 'karikatur', 'kids', 'koebenhavn', 'koeln', 'kunst', 'kunstsammlung', 'kunstunddesign', 'labor', 'labour', 'lajolla', 'lancashire', 'landes', 'lans', 'larsson', 'lewismiller', 'lincoln', 'linz', 'living', 'livinghistory', 'localhistory', 'london', 'losangeles', 'louvre', 'loyalist', 'lucerne', 'luxembourg', 'luzern', 'läns', 'mad', 'madrid', 'mallorca', 'manchester', 'mansion', 'mansions', 'manx', 'marburg', 'maritime', 'maritimo', 'maryland', 'marylhurst', 'media', 'medical', 'medizinhistorisches', 'meeres', 'memorial', 'mesaverde', 'michigan', 'midatlantic', 'military', 'mill', 'miners', 'mining', 'minnesota', 'missile', 'missoula', 'modern', 'moma', 'money', 'monmouth', 'monticello', 'montreal', 'moscow', 'motorcycle', 'muenchen', 'muenster', 'mulhouse', 'muncie', 'museet', 'museumcenter', 'museumvereniging', 'music', 'national', 'nationalfirearms', 'nationalheritage', 'nativeamerican', 'naturalhistory', 'naturalhistorymuseum', 'naturalsciences', 'nature', 'naturhistorisches', 'natuurwetenschappen', 'naumburg', 'naval', 'nebraska', 'neues', 'newhampshire', 'newjersey', 'newmexico', 'newport', 'newspaper', 'newyork', 'niepce', 'norfolk', 'north', 'nrw', 'nuernberg', 'nuremberg', 'nyc', 'nyny', 'oceanographic', 'oceanographique', 'omaha', 'online', 'ontario', 'openair', 'oregon', 'oregontrail', 'otago', 'oxford', 'pacific', 'paderborn', 'palace', 'paleo', 'palmsprings', 'panama', 'paris', 'pasadena', 'pharmacy', 'philadelphia', 'philadelphiaarea', 'philately', 'phoenix', 'photography', 'pilots', 'pittsburgh', 'planetarium', 'plantation', 'plants', 'plaza', 'portal', 'portland', 'portlligat', 'posts-and-telecommunications', 'preservation', 'presidio', 'press', 'project', 'public', 'pubol', 'quebec', 'railroad', 'railway', 'research', 'resistance', 'riodejaneiro', 'rochester', 'rockart', 'roma', 'russia', 'saintlouis', 'salem', 'salvadordali', 'salzburg', 'sandiego', 'sanfrancisco', 'santabarbara', 'santacruz', 'santafe', 'saskatchewan', 'satx', 'savannahga', 'schlesisches', 'schoenbrunn', 'schokoladen', 'school', 'schweiz', 'science', 'science-fiction', 'scienceandhistory', 'scienceandindustry', 'sciencecenter', 'sciencecenters', 'sciencehistory', 'sciences', 'sciencesnaturelles', 'scotland', 'seaport', 'settlement', 'settlers', 'shell', 'sherbrooke', 'sibenik', 'silk', 'ski', 'skole', 'society', 'sologne', 'soundandvision', 'southcarolina', 'southwest', 'space', 'spy', 'square', 'stadt', 'stalbans', 'starnberg', 'state', 'stateofdelaware', 'station', 'steam', 'steiermark', 'stjohn', 'stockholm', 'stpetersburg', 'stuttgart', 'suisse', 'surgeonshall', 'surrey', 'svizzera', 'sweden', 'sydney', 'tank', 'tcm', 'technology', 'telekommunikation', 'television', 'texas', 'textile', 'theater', 'time', 'timekeeping', 'topology', 'torino', 'touch', 'town', 'transport', 'tree', 'trolley', 'trust', 'trustee', 'uhren', 'ulm', 'undersea', 'university', 'usa', 'usantiques', 'usarts', 'uscountryestate', 'usculture', 'usdecorativearts', 'usgarden', 'ushistory', 'ushuaia', 'uslivinghistory', 'utah', 'uvic', 'valley', 'vantaa', 'versailles', 'viking', 'village', 'virginia', 'virtual', 'virtuel', 'vlaanderen', 'volkenkunde', 'wales', 'wallonie', 'war', 'washingtondc', 'watch-and-clock', 'watchandclock', 'western', 'westfalen', 'whaling', 'wildlife', 'williamsburg', 'windmill', 'workshop', 'xn--9dbhblg6di', 'xn--h1aegh', 'york', 'yorkshire', 'yosemite', 'youth', 'zoological', 'zoology'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mv':
			if (['aero', 'biz', 'com', 'coop', 'edu', 'gov', 'info', 'int', 'mil', 'museum', 'name', 'net', 'org', 'pro'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mw':
			if (['ac', 'biz', 'co', 'com', 'coop', 'edu', 'gov', 'int', 'museum', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mx':
			if (['com', 'edu', 'gob', 'net', 'ngo', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'my':
			if (['com', 'edu', 'gov', 'mil', 'name', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'mz':
			if (['co', 'net', 'org', 'ac', 'gov', 'edu', 'mil', 'adv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'na':
			if (['info', 'pro', 'name', 'school', 'or', 'dr', 'us', 'mx', 'ca', 'in', 'cc', 'tv', 'ws', 'mobi', 'co', 'com', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'name':
			return wa[2] + '.' + wa[1] + '.' + wa[0];
			break;
		case 'nc':
			if (['asso', 'nom'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'net':
			if (['gb', 'hu', 'in', 'jp', 'ru', 'se', 'uk', 'za'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'nf':
			if (['arts', 'com', 'firm', 'info', 'net', 'other', 'per', 'rec', 'store', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ng':
			if (['com', 'edu', 'gov', 'i', 'mil', 'mobi', 'name', 'net', 'org', 'sch'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ni':
			if (['ac', 'biz', 'co', 'com', 'edu', 'gob', 'in', 'info', 'int', 'mil', 'net', 'nom', 'org', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'nl':
			if (wa[1] == 'bv') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'no':
			if (['aa', 'aarborte', 'aejrie', 'afjord', 'agdenes', 'ah', 'aknoluokta', 'akrehamn', 'al', 'alaheadju', 'alesund', 'algard', 'alstahaug', 'alta', 'alvdal', 'amli', 'amot', 'andasuolo', 'andebu', 'andoy', 'ardal', 'aremark', 'arendal', 'arna', 'aseral', 'asker', 'askim', 'askoy', 'askvoll', 'asnes', 'audnedaln', 'aukra', 'aure', 'aurland', 'austevoll', 'austrheim', 'averoy', 'badaddja', 'bahcavuotna', 'bahccavuotna', 'baidar', 'bajddar', 'balat', 'balestrand', 'ballangen', 'balsfjord', 'bamble', 'bardu', 'barum', 'batsfjord', 'bearalvahki', 'beardu', 'beiarn', 'berg', 'bergen', 'berlevag', 'bievat', 'bindal', 'birkenes', 'bjarkoy', 'bjerkreim', 'bjugn', 'bodo', 'bokn', 'bomlo', 'bremanger', 'bronnoy', 'bronnoysund', 'brumunddal', 'bryne', 'bu', 'budejju', 'bygland', 'bykle', 'cahcesuolo', 'davvenjarga', 'davvesiida', 'deatnu', 'dep', 'dielddanuorri', 'divtasvuodna', 'divttasvuotna', 'donna', 'dovre', 'drammen', 'drangedal', 'drobak', 'dyroy', 'egersund', 'eid', 'eidfjord', 'eidsberg', 'eidskog', 'eidsvoll', 'eigersund', 'elverum', 'enebakk', 'engerdal', 'etne', 'etnedal', 'evenassi', 'evenes', 'farsund', 'fauske', 'fedje', 'fet', 'fetsund', 'fhs', 'finnoy', 'fitjar', 'fjaler', 'fjell', 'fla', 'flakstad', 'flatanger', 'flekkefjord', 'flesberg', 'flora', 'floro', 'fm', 'folkebibl', 'folldal', 'forde', 'forsand', 'fosnes', 'frana', 'fredrikstad', 'frei', 'frogn', 'froland', 'frosta', 'froya', 'fuoisku', 'fuossko', 'fusa', 'fylkesbibl', 'fyresdal', 'gaivuotna', 'galsa', 'gamvik', 'gangaviika', 'gaular', 'gausdal', 'giehtavuoatna', 'gildeskal', 'giske', 'gjemnes', 'gjerdrum', 'gjerstad', 'gjesdal', 'gjovik', 'gloppen', 'gol', 'gran', 'grane', 'granvin', 'gratangen', 'grimstad', 'grong', 'grue', 'gulen', 'guovdageaidnu', 'ha', 'habmer', 'hadsel', 'hagebostad', 'halden', 'halsa', 'hamar', 'hamaroy', 'hammarfeasta', 'hammerfest', 'hapmir', 'haram', 'hareid', 'harstad', 'hasvik', 'hattfjelldal', 'haugesund', 'hemne', 'hemnes', 'hemsedal', 'herad', 'hitra', 'hjartdal', 'hjelmeland', 'hl', 'hm', 'hobol', 'hof', 'hokksund', 'hol', 'hole', 'holmestrand', 'holtalen', 'honefoss', 'hornindal', 'horten', 'hoyanger', 'hoylandet', 'hurdal', 'hurum', 'hvaler', 'hyllestad', 'ibestad', 'idrett', 'inderoy', 'iveland', 'ivgu', 'jessheim', 'jevnaker', 'jolster', 'jondal', 'jorpeland', 'kafjord', 'karasjohka', 'karasjok', 'karlsoy', 'karmoy', 'kautokeino', 'kirkenes', 'klabu', 'klepp', 'kommune', 'kongsberg', 'kongsvinger', 'kopervik', 'kraanghke', 'kragero', 'kristiansand', 'kristiansund', 'krodsherad', 'krokstadelva', 'kvafjord', 'kvalsund', 'kvam', 'kvanangen', 'kvinesdal', 'kvinnherad', 'kviteseid', 'kvitsoy', 'laakesvuemie', 'lahppi', 'langevag', 'lardal', 'larvik', 'lavagis', 'lavangen', 'leangaviika', 'lebesby', 'leikanger', 'leirfjord', 'leirvik', 'leka', 'leksvik', 'lenvik', 'lerdal', 'lesja', 'levanger', 'lier', 'lierne', 'lillehammer', 'lillesand', 'lindas', 'lindesnes', 'loabat', 'lodingen', 'lom', 'loppa', 'lorenskog', 'loten', 'lund', 'lunner', 'luroy', 'luster', 'lyngdal', 'lyngen', 'malatvuopmi', 'malselv', 'malvik', 'mandal', 'marker', 'marnardal', 'masfjorden', 'masoy', 'meland', 'meldal', 'melhus', 'meloy', 'meraker', 'midsund', 'mil', 'mjondalen', 'moareke', 'modalen', 'modum', 'molde', 'mosjoen', 'moskenes', 'moss', 'mosvik', 'mr', 'muosat', 'museum', 'naamesjevuemie', 'namdalseid', 'namsos', 'namsskogan', 'nannestad', 'naroy', 'narviika', 'narvik', 'naustdal', 'navuotna', 'nesna', 'nesodden', 'nesoddtangen', 'nesseby', 'nesset', 'nissedal', 'nittedal', 'nl', 'norddal', 'nordkapp', 'nordreisa', 'notodden', 'notteroy', 'nt', 'odda', 'of', 'oksnes', 'ol', 'omasvuotna', 'oppdal', 'oppegard', 'orkanger', 'orkdal', 'orland', 'orskog', 'orsta', 'osen', 'oslo', 'osoyro', 'osteroy', 'overhalla', 'oyer', 'oygarden', 'porsanger', 'porsangu', 'porsgrunn', 'priv', 'rade', 'radoy', 'rahkkeravju', 'raholt', 'raisa', 'rakkestad', 'ralingen', 'rana', 'randaberg', 'rauma', 'rendalen', 'rennebu', 'rennesoy', 'rindal', 'ringebu', 'ringerike', 'ringsaker', 'risor', 'rissa', 'rl', 'roan', 'rodoy', 'rollag', 'romsa', 'romskog', 'roros', 'rost', 'royken', 'royrvik', 'ruovat', 'rygge', 'salangen', 'salat', 'saltdal', 'samnanger', 'sandefjord', 'sandnes', 'sandnessjoen', 'sandoy', 'sarpsborg', 'sauda', 'sauherad', 'sel', 'selbu', 'selje', 'seljord', 'sf', 'siellak', 'sigdal', 'siljan', 'sirdal', 'skanit', 'skanland', 'skaun', 'skedsmo', 'skedsmokorset', 'ski', 'skien', 'skierva', 'skiptvet', 'skjak', 'skjervoy', 'skodje', 'slattum', 'smola', 'snaase', 'snasa', 'snillfjord', 'snoasa', 'sogndal', 'sogne', 'sokndal', 'sola', 'solund', 'somna', 'songdalen', 'sorfold', 'sorreisa', 'sortland', 'sorum', 'spjelkavik', 'spydeberg', 'st', 'stange', 'stat', 'stathelle', 'stavanger', 'stavern', 'steigen', 'steinkjer', 'stjordal', 'stjordalshalsen', 'stokke', 'stord', 'stordal', 'storfjord', 'strand', 'stranda', 'stryn', 'sula', 'suldal', 'sund', 'sunndal', 'surnadal', 'svalbard', 'sveio', 'svelvik', 'sykkylven', 'tana', 'tananger', 'time', 'tingvoll', 'tinn', 'tjeldsund', 'tjome', 'tm', 'tokke', 'tolga', 'tonsberg', 'torsken', 'tr', 'trana', 'tranby', 'tranoy', 'troandin', 'trogstad', 'tromsa', 'tromso', 'trondheim', 'trysil', 'tvedestrand', 'tydal', 'tynset', 'tysfjord', 'tysnes', 'tysvar', 'ullensaker', 'ullensvang', 'ulvik', 'unjarga', 'utsira', 'va', 'vaapste', 'vadso', 'vaga', 'vagan', 'vagsoy', 'vaksdal', 'valle', 'vang', 'vanylven', 'vardo', 'varggat', 'varoy', 'vefsn', 'vega', 'vegarshei', 'vennesla', 'verdal', 'verran', 'vestby', 'vestnes', 'vestvagoy', 'vevelstad', 'vf', 'vgs', 'vik', 'vikna', 'vindafjord', 'voagat', 'volda', 'voss', 'vossevangen', 'xn--andy-ira', 'xn--asky-ira', 'xn--aurskog-hland-jnb', 'xn--avery-yua', 'xn--bdddj-mrabd', 'xn--bearalvhki-y4a', 'xn--berlevg-jxa', 'xn--bhcavuotna-s4a', 'xn--bhccavuotna-k7a', 'xn--bidr-5nac', 'xn--bievt-0qa', 'xn--bjarky-fya', 'xn--bjddar-pta', 'xn--blt-elab', 'xn--bmlo-gra', 'xn--bod-2na', 'xn--brnny-wuac', 'xn--brnnysund-m8ac', 'xn--brum-voa', 'xn--btsfjord-9za', 'xn--davvenjrga-y4a', 'xn--dnna-gra', 'xn--drbak-wua', 'xn--dyry-ira', 'xn--eveni-0qa01ga', 'xn--finny-yua', 'xn--fjord-lra', 'xn--fl-zia', 'xn--flor-jra', 'xn--frde-gra', 'xn--frna-woa', 'xn--frya-hra', 'xn--ggaviika-8ya47h', 'xn--gildeskl-g0a', 'xn--givuotna-8ya', 'xn--gjvik-wua', 'xn--gls-elac', 'xn--h-2fa', 'xn--hbmer-xqa', 'xn--hcesuolo-7ya35b', 'xn--hgebostad-g3a', 'xn--hmmrfeasta-s4ac', 'xn--hnefoss-q1a', 'xn--hobl-ira', 'xn--holtlen-hxa', 'xn--hpmir-xqa', 'xn--hyanger-q1a', 'xn--hylandet-54a', 'xn--indery-fya', 'xn--jlster-bya', 'xn--jrpeland-54a', 'xn--karmy-yua', 'xn--kfjord-iua', 'xn--klbu-woa', 'xn--koluokta-7ya57h', 'xn--krager-gya', 'xn--kranghke-b0a', 'xn--krdsherad-m8a', 'xn--krehamn-dxa', 'xn--krjohka-hwab49j', 'xn--ksnes-uua', 'xn--kvfjord-nxa', 'xn--kvitsy-fya', 'xn--kvnangen-k0a', 'xn--l-1fa', 'xn--laheadju-7ya', 'xn--langevg-jxa', 'xn--ldingen-q1a', 'xn--leagaviika-52b', 'xn--lesund-hua', 'xn--lgrd-poac', 'xn--lhppi-xqa', 'xn--linds-pra', 'xn--loabt-0qa', 'xn--lrdal-sra', 'xn--lrenskog-54a', 'xn--lt-liac', 'xn--lten-gra', 'xn--lury-ira', 'xn--mely-ira', 'xn--merker-kua', 'xn--mjndalen-64a', 'xn--mlatvuopmi-s4a', 'xn--mli-tla', 'xn--mlselv-iua', 'xn--moreke-jua', 'xn--mosjen-eya', 'xn--mot-tla', 'xn--msy-ula0h', 'xn--mtta-vrjjat-k7af', 'xn--muost-0qa', 'xn--nmesjevuemie-tcba', 'xn--nry-yla5g', 'xn--nttery-byae', 'xn--nvuotna-hwa', 'xn--oppegrd-ixa', 'xn--ostery-fya', 'xn--osyro-wua', 'xn--porsgu-sta26f', 'xn--rady-ira', 'xn--rdal-poa', 'xn--rde-ula', 'xn--rdy-0nab', 'xn--rennesy-v1a', 'xn--rhkkervju-01af', 'xn--rholt-mra', 'xn--risa-5na', 'xn--risr-ira', 'xn--rland-uua', 'xn--rlingen-mxa', 'xn--rmskog-bya', 'xn--rros-gra', 'xn--rskog-uua', 'xn--rst-0na', 'xn--rsta-fra', 'xn--ryken-vua', 'xn--ryrvik-bya', 'xn--s-1fa', 'xn--sandnessjen-ogb', 'xn--sandy-yua', 'xn--seral-lra', 'xn--sgne-gra', 'xn--skierv-uta', 'xn--skjervy-v1a', 'xn--skjk-soa', 'xn--sknit-yqa', 'xn--sknland-fxa', 'xn--slat-5na', 'xn--slt-elab', 'xn--smla-hra', 'xn--smna-gra', 'xn--snase-nra', 'xn--sndre-land-0cb', 'xn--snes-poa', 'xn--snsa-roa', 'xn--sr-aurdal-l8a', 'xn--sr-fron-q1a', 'xn--sr-odal-q1a', 'xn--sr-varanger-ggb', 'xn--srfold-bya', 'xn--srreisa-q1a', 'xn--srum-gra', 'xn--stjrdal-s1a', 'xn--stjrdalshalsen-sqb', 'xn--stre-toten-zcb', 'xn--tjme-hra', 'xn--tnsberg-q1a', 'xn--trany-yua', 'xn--trgstad-r1a', 'xn--trna-woa', 'xn--troms-zua', 'xn--tysvr-vra', 'xn--unjrga-rta', 'xn--vads-jra', 'xn--vard-jra', 'xn--vegrshei-c0a', 'xn--vestvgy-ixa6o', 'xn--vg-yiab', 'xn--vgan-qoa', 'xn--vgsy-qoa0j', 'xn--vre-eiker-k8a', 'xn--vrggt-xqad', 'xn--vry-yla5g', 'xn--yer-zna', 'xn--ygarden-p1a', 'xn--ystre-slidre-ujb'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'np':
			if (['aero', 'asia', 'biz', 'com', 'coop', 'edu', 'gov', 'info', 'jobs', 'mil', 'mobi', 'museum', 'name', 'net', 'org', 'pro', 'travel'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'nr':
			if (['biz', 'com', 'edu', 'gov', 'info', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'nz':
			if (['ac', 'archie', 'co', 'cri', 'geek', 'gen', 'govt', 'health', 'iwi', 'kiwi', 'maori', 'mil', 'net', 'org', 'parliament', 'school', 'xn--mori-qsa'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'om':
			if (['co', 'com', 'edu', 'gov', 'med', 'museum', 'net', 'org', 'pro'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'org':
			if (wa[1] == 'eu' && wa[3] != undefined) {
				if (['al', 'asso', 'at', 'au', 'be', 'bg', 'ca', 'cd', 'ch', 'cn', 'cy', 'cz', 'de', 'dk', 'edu', 'ee', 'es', 'fi', 'fr', 'gr', 'hr', 'hu', 'ie', 'il', 'in', 'int', 'is', 'it', 'jp', 'kr', 'lt', 'lu', 'lv', 'me', 'mk', 'mt', 'my', 'net', 'ng', 'nl', 'no', 'nz', 'pl', 'pt', 'ro', 'ru', 'se', 'si', 'sk', 'tr', 'uk', 'us'].includes(wa[2])) {
					return wa[3] + '.' + wa[2] + '.' + wa[1] + '.' + wa[0];
				}
			};
			if (['ae', 'eu', 'hk', 'jpn', 'js', 'us', 'za'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pa':
			if (['abo', 'ac', 'com', 'edu', 'gob', 'ing', 'med', 'net', 'nom', 'org', 'sld'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pe':
			if (['com', 'edu', 'gob', 'mil', 'net', 'nom', 'org', 'sld'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pf':
			if (['com', 'org', 'edu'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pg':
			if (['com', 'net', 'ac', 'gov', 'mil', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ph':
			if (['com', 'edu', 'gov', 'mil', 'net', 'org', 'ngo', 'i'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pk':
			if (['biz', 'com', 'edu', 'fam', 'gob', 'gok', 'gon', 'gop', 'gos', 'gov', 'info', 'net', 'org', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pl':
			if (['agro', 'aid', 'art', 'atm', 'augustow', 'auto', 'babia-gora', 'bedzin', 'beskidy', 'bialowieza', 'bialystok', 'bielawa', 'bieszczady', 'biz', 'boleslawiec', 'bydgoszcz', 'bytom', 'cieszyn', 'com', 'czeladz', 'czest', 'dlugoleka', 'edu', 'elblag', 'elk', 'gda', 'gdansk', 'glogow', 'gmina', 'gniezno', 'gorlice', 'gov', 'grajewo', 'gsm', 'ilawa', 'info', 'jaworzno', 'jelenia-gora', 'jgora', 'kalisz', 'karpacz', 'kartuzy', 'kaszuby', 'katowice', 'kazimierz-dolny', 'kepno', 'ketrzyn', 'klodzko', 'kobierzyce', 'kolobrzeg', 'konin', 'konskowola', 'krakow', 'kutno', 'lapy', 'lebork', 'legnica', 'lezajsk', 'limanowa', 'lodz', 'lomza', 'lowicz', 'lubin', 'lublin', 'lukow', 'mail', 'malbork', 'malopolska', 'mazowsze', 'mazury', 'media', 'miasta', 'mielec', 'mielno', 'mil', 'mragowo', 'naklo', 'net', 'ngo', 'nieruchomosci', 'nom', 'nowaruda', 'nysa', 'olawa', 'olecko', 'olkusz', 'olsztyn', 'opoczno', 'opole', 'org', 'ostroda', 'ostroleka', 'ostrowiec', 'ostrowwlkp', 'pc', 'pila', 'pisz', 'podhale', 'podlasie', 'polkowice', 'pomorskie', 'pomorze', 'powiat', 'poznan', 'priv', 'prochowice', 'pruszkow', 'przeworsk', 'pulawy', 'radom', 'rawa-maz', 'realestate', 'rel', 'rybnik', 'rzeszow', 'sanok', 'sejny', 'sex', 'shop', 'sklep', 'skoczow', 'slask', 'slupsk', 'sos', 'sosnowiec', 'stalowa-wola', 'starachowice', 'stargard', 'suwalki', 'swidnica', 'swiebodzin', 'swinoujscie', 'szczecin', 'szczytno', 'szkola', 'targi', 'tarnobrzeg', 'tgory', 'tm', 'torun', 'tourism', 'travel', 'turek', 'turystyka', 'tychy', 'ustka', 'walbrzych', 'warmia', 'warszawa', 'waw', 'wegrow', 'wielun', 'wlocl', 'wloclawek', 'wodzislaw', 'wolomin', 'wroc', 'wroclaw', 'zachpomor', 'zagan', 'zarow', 'zgora', 'zgorzelec'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pn':
			if (['in', 'co', 'eu', 'org', 'net', 'me', 'edu', 'gov'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pr':
			if (['ac', 'biz', 'com', 'edu', 'est', 'gov', 'info', 'isla', 'name', 'net', 'org', 'pro', 'prof'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pro':
			if (['aaa', 'aca', 'acct', 'eng', 'avocat', 'bar', 'jur', 'recht', 'law', 'med', 'cpa'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ps':
			if (['edu', 'gov', 'sec', 'plo', 'com', 'org', 'net'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pt':
			if (['com', 'edu', 'gov', 'int', 'net', 'nome', 'org', 'publ'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'pw':
			if (['co', 'ne', 'or', 'ed', 'go', 'belau'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'py':
			if (['com', 'coop', 'edu', 'mil', 'gov', 'org', 'net', 'una'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'qa':
			if (['com', 'edu', 'sch', 'gov', 'mil', 'net', 'org', 'name'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 're':
			if (['asso', 'com', 'nom'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ro':
			if (['arts', 'com', 'firm', 'info', 'nom', 'nt', 'org', 'rec', 'store', 'tm', 'www'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'rs':
			if (['ac', 'co', 'edu', 'gov', 'in', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ru':
			if (['ac', 'adygeya', 'altai', 'amur', 'amursk', 'arkhangelsk', 'astrakhan', 'baikal', 'bashkiria', 'belgorod', 'bir', 'bryansk', 'buryatia', 'cap', 'cbg', 'chel', 'chelyabinsk', 'chita', 'chukotka', 'cmw', 'com', 'dagestan', 'e-burg', 'edu', 'fareast', 'gov', 'grozny', 'int', 'irkutsk', 'ivanovo', 'izhevsk', 'jamal', 'jar', 'joshkar-ola', 'k-uralsk', 'kalmykia', 'kaluga', 'kamchatka', 'karelia', 'kazan', 'kchr', 'kemerovo', 'khabarovsk', 'khakassia', 'khv', 'kirov', 'kms', 'koenig', 'komi', 'kostroma', 'krasnoyarsk', 'kuban', 'kurgan', 'kursk', 'kustanai', 'kuzbass', 'lipetsk', 'magadan', 'magnitka', 'mari', 'mari-el', 'marine', 'mil', 'mordovia', 'mos', 'mosreg', 'msk', 'murmansk', 'mytis', 'nakhodka', 'nalchik', 'net', 'nkz', 'nnov', 'norilsk', 'nov', 'novosibirsk', 'nsk', 'omsk', 'orenburg', 'org', 'oryol', 'oskol', 'palana', 'penza', 'perm', 'pp', 'pskov', 'ptz', 'pyatigorsk', 'rnd', 'rubtsovsk', 'ryazan', 'sakhalin', 'samara', 'saratov', 'simbirsk', 'smolensk', 'snz', 'spb', 'stavropol', 'stv', 'surgut', 'syzran', 'tambov', 'tatarstan', 'test', 'tlt', 'tom', 'tomsk', 'tsaritsyn', 'tsk', 'tula', 'tuva', 'tver', 'tyumen', 'udm', 'udmurtia', 'ulan-ude', 'vdonsk', 'vladikavkaz', 'vladimir', 'vladivostok', 'volgograd', 'vologda', 'voronezh', 'vrn', 'vyatka', 'yakutia', 'yamal', 'yaroslavl', 'yekaterinburg', 'yuzhno-sakhalinsk', 'zgrad'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'rw':
			if (['gov', 'net', 'edu', 'ac', 'com', 'co', 'int', 'mil', 'gouv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sa':
			if (['com', 'edu', 'gov', 'med', 'net', 'org', 'pub', 'sch'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sb':
			if (['com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sc':
			if (['com', 'edu', 'gov', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sd':
			if (['com', 'edu', 'gov', 'info', 'med', 'net', 'org', 'tv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'se':
			if (['a', 'ac', 'b', 'bd', 'brand', 'c', 'd', 'e', 'f', 'fh', 'fhsk', 'fhv', 'g', 'h', 'i', 'k', 'komforb', 'kommunalforbund', 'komvux', 'l', 'lanbib', 'm', 'n', 'naturbruksgymn', 'o', 'org', 'p', 'parti', 'pp', 'press', 'r', 's', 't', 'tm', 'u', 'w', 'x', 'y', 'z'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sg':
			if (['com', 'edu', 'gov', 'idn', 'net', 'org', 'per'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sh':
			if (['com', 'net', 'gov', 'org', 'mil'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sl':
			if (['com', 'net', 'edu', 'gov', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sn':
			if (['art', 'com', 'edu', 'gouv', 'org', 'perso', 'univ'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'so':
			if (['com', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'st':
			if (['co', 'com', 'consulado', 'edu', 'embaixada', 'gov', 'mil', 'net', 'org', 'principe', 'saotome', 'store'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sv':
			if (['edu', 'gov', 'com', 'org', 'red', 'gob'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sx':
			if (wa[1] == 'gov') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sy':
			if (['com', 'edu', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'sz':
			if (['co', 'ac', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'th':
			if (['ac', 'co', 'go', 'in', 'mi', 'net', 'or'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'tj':
			if (['ac', 'aero', 'biz', 'co', 'com', 'coop', 'dyn', 'edu', 'go', 'gov', 'info', 'int', 'mil', 'museum', 'my', 'name', 'net', 'nic', 'org', 'per', 'pro', 'test', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'tl':
			if (wa[1] == 'gov') {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'tm':
			if (['com', 'co', 'org', 'net', 'nom', 'gov', 'mil', 'edu'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'tn':
			if (['agrinet', 'com', 'defense', 'edunet', 'ens', 'fin', 'gov', 'ind', 'info', 'intl', 'mincom', 'nat', 'net', 'org', 'perso', 'rnrt', 'rns', 'rnu', 'tourism', 'turen'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'to':
			if (['com', 'edu', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'tr':
			if (['av', 'bbs', 'bel', 'biz', 'com', 'dr', 'edu', 'gen', 'gov', 'info', 'k12', 'kep', 'mil', 'name', 'nc', 'net', 'org', 'pol', 'tel', 'tv', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'tt':
			if (['co', 'com', 'org', 'net', 'biz', 'info', 'pro', 'int', 'coop', 'jobs', 'mobi', 'travel', 'museum', 'aero', 'name', 'gov', 'edu'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'tw':
			if (['club', 'com', 'ebiz', 'edu', 'game', 'gov', 'idv', 'mil', 'net', 'org', 'xn--czrw28b', 'xn--uc0atv', 'xn--zf0ao64a'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'tz':
			if (['ac', 'co', 'go', 'hotel', 'info', 'me', 'mil', 'mobi', 'ne', 'or', 'sc', 'tv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ua':
			if (['at', 'cherkassy', 'cherkasy', 'chernigov', 'chernihiv', 'chernivtsi', 'chernovtsy', 'ck', 'cn', 'co', 'com', 'cr', 'crimea', 'cv', 'dn', 'dnepropetrovsk', 'dnipropetrovsk', 'dominic', 'donetsk', 'dp', 'edu', 'gov', 'if', 'in', 'ivano-frankivsk', 'kh', 'kharkiv', 'kharkov', 'kherson', 'khmelnitskiy', 'khmelnytskyi', 'kiev', 'kirovograd', 'km', 'kr', 'krym', 'ks', 'kv', 'kyiv', 'lg', 'lt', 'lugansk', 'lutsk', 'lv', 'lviv', 'mk', 'mykolaiv', 'net', 'nikolaev', 'od', 'odesa', 'odessa', 'org', 'pl', 'poltava', 'pp', 'rivne', 'rovno', 'rv', 'sb', 'sebastopol', 'sevastopol', 'sm', 'sumy', 'te', 'ternopil', 'uz', 'uzhgorod', 'vinnica', 'vinnytsia', 'vn', 'volyn', 'yalta', 'zaporizhzhe', 'zaporizhzhia', 'zhitomir', 'zhytomyr', 'zp', 'zt'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ug':
			if (['co', 'ac', 'sc', 'go', 'ne', 'or', 'com', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'uk':
			if (['ac', 'bl', 'british-library', 'co', 'gov', 'govt', 'jcpc', 'jet', 'judiciary', 'lea', 'ltd', 'me', 'mil', 'mod', 'net', 'nhs', 'nic', 'nls', 'org', 'orgn', 'parliament', 'plc', 'police', 'royal', 'sch', 'supremecourt'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'us':
			if (['aa', 'ae', 'ak', 'al', 'ap', 'ar', 'as', 'az', 'ca', 'cm', 'co', 'ct', 'cz', 'dc', 'de', 'dni', 'fed', 'fl', 'fm', 'ga', 'gu', 'hi', 'ia', 'id', 'il', 'in', 'isa', 'kids', 'ks', 'ky', 'la', 'ma', 'md', 'me', 'mh', 'mi', 'mn', 'mo', 'mp', 'ms', 'mt', 'nb', 'nc', 'nd', 'ne', 'nh', 'nj', 'nm', 'nsn', 'nv', 'ny', 'oh', 'ok', 'or', 'pa', 'pi', 'pr', 'pw', 'ri', 'sc', 'sd', 'tn', 'tt', 'tx', 'ut', 'va', 'vi', 'vt', 'wa', 'wi', 'wv', 'wy'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'uy':
			if (['com', 'edu', 'gub', 'net', 'mil', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'uz':
			if (['co', 'com', 'org', 'net'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'vc':
			if (['com', 'edu', 'gov', 'mil', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 've':
			if (['arts', 'co', 'com', 'e12', 'edu', 'firm', 'gob', 'gov', 'info', 'int', 'mil', 'net', 'org', 'radio', 'rec', 'store', 'tec', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'vi':
			if (['co', 'org', 'com', 'net', 'k12'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'vn':
			if (['ac', 'biz', 'com', 'edu', 'gov', 'health', 'info', 'int', 'mil', 'name', 'net', 'org', 'pro'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'vu':
			if (['com', 'edu', 'net', 'org'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'ws':
			if (['org', 'gov', 'edu', 'com', 'net'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'xn--90a3ac':
			if (['xn--o1ac', 'xn--c1avg', 'xn--90azh', 'xn--d1at', 'xn--o1ach', 'xn--80au'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'xn--j6w193g':
			if (['xn--55qx5d', 'xn--wcvs22d', 'xn--mxtq1m', 'xn--gmqw5a', 'xn--od0alg', 'xn--uc0atv'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'xn--o3cw4h':
			if (['xn--12c1fe0br', 'xn--12co0c3b4eva', 'xn--h3cuzk1di', 'xn--o3cyx2a', 'xn--m3ch0j3a', 'xn--12cfi8ixb8l'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'za':
			if (['ac', 'agric', 'alt', 'bourse', 'city', 'co', 'cybernet', 'db', 'edu', 'gov', 'grondar', 'iaccess', 'imt', 'inca', 'landesign', 'law', 'mil', 'net', 'ngo', 'nis', 'nom', 'olivetti', 'org', 'pix', 'school', 'tm', 'web'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'zm':
			if (['ac', 'biz', 'co', 'com', 'edu', 'gov', 'info', 'mil', 'net', 'org', 'sch'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
		case 'zw':
			if (['co', 'ac', 'org', 'gov', 'mil'].includes(wa[1])) {
				return wa[2] + '.' + wa[1] + '.' + wa[0];
			};
			break;
	}
	return wa[1] + '.' + wa[0];
}
document.getElementById('sms').addEventListener('click', () => {
	document.getElementById('smsa').style.display = 'none';
	browser.storage.local.get().then(g => {
		let iY = 0,
			iN = 0,
			iT, tmp, dom, akd = [];
		Object.keys(g).forEach(a => {
			if (!['ign1', 'ign2', 'obs', 'dbg', 'alt', 'lastU', 'lastV', 'cep', 'mul', 'opd', 'ldb'].includes(a) && (g[a] == 'y' || g[a] == 'n')) {
				dom = get_realdomain(a);
				if (!akd.includes(dom)) {
					akd.push(dom);
					if (g[a] == 'y') {
						iY++;
					} else {
						iN++;
					}
				}
			}
		});
		iT = iY + iN;
		if (iT > 0) {
			tmp = (iY * 100 / iT).toFixed(1);
			document.getElementById('viry').innerText = iY + ' (' + tmp + '%)';
			tmp = (iN * 100 / iT).toFixed(1);
			document.getElementById('virn').innerText = iN + ' (' + tmp + '%)';
			document.getElementById('viro').innerText = (iY + iN);
		} else {
			document.getElementById('viry').innerText = 0;
			document.getElementById('virn').innerText = 0;
			document.getElementById('viro').innerText = 0;
		}
		document.getElementById('smsb').style.display = 'inline';
	});
});