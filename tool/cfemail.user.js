// ==UserScript==
// @name        Decode Cloudflare-encoded email addresses
// @namespace   https://codeberg.org/smege1001/cf_email_decoder
// @match       *://*/*
// @grant       none
// @version     1.2.2
// @author      smege1001
// ==/UserScript==

/**
* @license CC0-1.0
**/

const emailprotectionURLHashRegex = /\/cdn-cgi\/l\/email-protection#([aA0-fF9]*)/;
const emailprotectionURLNoHashRegex = /\/cdn-cgi\/l\/email-protection/; //hash is stored on data-cfemail

function decodeEmail(hash) { //cloudflare email address decoder
    var hashArray = []; //split the hash into bytes
    for (var hAIndex = 0; hAIndex < hash.length; hAIndex += 2) {
	hashArray.push(parseInt(hash.substring(hAIndex, hAIndex + 2), 16));
    }
    
    var decoded = "";
    var key = hashArray[0]; //get the decode key

    for (var index = 1; index < hashArray.length; index++) {
	decoded += String.fromCharCode(hashArray[index] ^ key);
    }
    return decoded;
}

var links = document.querySelectorAll("a"); //get all the links

for (var linksIndex = 0; linksIndex < links.length; linksIndex++) {
    var link = links[linksIndex];
    if (emailprotectionURLHashRegex.test(link.href)) {
	var hash = link.href.match(emailprotectionURLHashRegex)[1];
	var decodedEmail = decodeEmail(hash);
	
	link.href = "mailto:" + decodedEmail; //replace the stupid email protection with just a mailto link

	if (link.getElementsByClassName("__cf_email__").length > 0) {
	    var linkChild = link.getElementsByClassName("__cf_email__")[0];
	    linkChild.innerText = decodedEmail;

	    linkChild.removeAttribute("data-cfemail");
	    linkChild.classList.remove("__cf_email__");
	    
	    if (linkChild.getAttribute("class") == "") linkChild.removeAttribute("class");
	}
    } else if (emailprotectionURLNoHashRegex.test(link.href) && link.hasAttribute("data-cfemail")) {
	var hash = link.getAttribute("data-cfemail");
	var decodedEmail = decodeEmail(hash);
	
	link.href = "mailto:" + decodedEmail;
	link.innerText = decodedEmail; //the inner text is just [email protected]
	
	//remove the useless attributes
	link.removeAttribute("data-cfemail");
	link.classList.remove("__cf_email__");

	if (link.getAttribute("class") == "") link.removeAttribute("class");
    }
}
