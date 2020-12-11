# Etički problemi

![](../image/itsreallythatbad.jpg)
![](../image/telegram/c81238387627b4bfd3dcd60f56d41626.jpg)

"Ne podržavajte ovu tvrtku koja nije etična"

"Vaša tvrtka nije pouzdana. Vi tvrdite da provodite DMCA, ali imate mnogo tužbi zbog toga."

"Oni cenzuriraju samo one koji dovode u pitanje njihovu etiku."

"Valjda je istina nezgodna i bolje je skrivena od pogleda javnosti."  -- [phyzonloop](https://twitter.com/phyzonloop)


---


<details>
<summary>klikni me

## CloudFlare spamuje ljude
</summary>


Cloudflare šalje neželjenu e-poštu ne-Cloudflare korisnicima.

- Pošaljite e-poštu samo pretplatnicima koji su se prijavili
- Kad korisnik kaže "stani", prestani slati e-poštu

To je tako jednostavno. Ali Cloudflare ne zanima.
Cloudflare je rekao kako korištenje njihove usluge može zaustaviti sve neželjene pošte ili napadače.
Kako možemo zaustaviti Cloudflare bez aktiviranja Cloudflare-a?


| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfspam01.jpg) | ![](../image/cfspam03.jpg) |
| ![](../image/cfspam02.jpg) | ![](../image/cfspambrittany.jpg)<br>![](../image/cfspamtwtr.jpg) |

</details>

---

<details>
<summary>klikni me

## Ukloni korisnikovu recenziju
</summary>


Negativne kritike cenzure oblaka.
Ako objavite tekst protiv Cloudflare na Twitteru, imate priliku dobiti odgovor zaposlenika Cloudflare porukom "Ne, nije".
Ako na bilo kojem mjestu recenzije objavite negativnu recenziju, oni će je pokušati cenzurirati.


| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfcenrev_01.jpg)<br>![](../image/cfcenrev_02.jpg) | ![](../image/cfcenrev_03.jpg) |

</details>

---

<details>
<summary>klikni me

## Dijelite privatne podatke korisnika
</summary>


Cloudflare ima ogroman problem uznemiravanja.
Cloudflare dijeli osobne podatke onih koji se žale na hostovane web stranice.
Ponekad od vas traže da navedete svoju osobnu iskaznicu.
Ako ne želite biti maltretirani, napadnuti, pretučeni ili ubijeni, bolje se klonite web mjesta Cloudflared.


| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfdox_what.jpg) | ![](../image/cfdox_swat.jpg) |
| ![](../image/cfdox_kill.jpg) | ![](../image/cfdox_threat.jpg) |
| ![](../image/cfdox_dox.jpg) | ![](../image/cfdox_ex1.jpg)<br>![](../image/cfdox_ex2.jpg) |

</details>

---

<details>
<summary>klikni me

## Korporativno prikupljanje dobrotvornih priloga
</summary>


CloudFlare traži dobrotvorne priloge.
Prilično je grozno da bi američka korporacija tražila dobročinstvo zajedno s neprofitnim organizacijama koje imaju dobre prilike.
Ako volite blokirati ljude ili gubiti vrijeme drugih ljudi, možda biste htjeli naručiti neke pizze za zaposlenike Cloudflare-a.


![](../image/cfdonate.jpg)

</details>

---

<details>
<summary>klikni me

## Zaustavljanje mjesta
</summary>


Što ćete učiniti ako vaše web mjesto naglo padne?
Postoje izvješća da Cloudflare bez ikakvog upozorenja briše konfiguraciju korisnika ili zaustavlja uslugu bez ikakvog upozorenja.
Predlažemo vam da pronađete boljeg davatelja usluga.

![](../image/cftmnt.jpg)

</details>

---

<details>
<summary>klikni me

## Diskriminacija dobavljača preglednika
</summary>


CloudFlare daje preferencijalni tretman onima koji koriste Firefox, dok pruža neprijateljski tretman korisnicima koji ne koriste Tor-Browser preko Tora.
Korisnici koji s pravom odbiju izvršavati ne-besplatan JavaScript također primaju neprijateljski tretman.
Ta nejednakost u pristupu predstavlja zloupotrebu neutralnosti mreže i zlouporabu moći.

![](../image/browdifftbcx.gif)

- Lijevo: Tor preglednik, desno: Chrome. Ista IP adresa.

![](../image/browserdiff.jpg)

- Lijevo: preglednik Tor Browser Javascript onemogućen, kolačić omogućen
- Desno: omogućen je JavaScript Javascript, kolačić onemogućen

![](../image/cfsiryoublocked.jpg)

- QuteBrowser (manji preglednik) bez Tor (Clearnet IP)

| ***preglednik*** | ***Pristup liječenju*** |
| --- | --- |
| Tor Browser (Javascript omogućen) | pristup je dozvoljen |
| Firefox (Javascript omogućen) | pristup degradiran |
| Chromium (Javascript omogućen) | pristup degradiran |
| Chromium or Firefox (Javascript onemogućen) | pristup odbijen |
| Chromium or Firefox (Kolačić je onemogućen) | pristup odbijen |
| QuteBrowser | pristup odbijen |
| lynx | pristup odbijen |
| w3m | pristup odbijen |
| wget | pristup odbijen |


Zašto ne biste pomoću gumba Audio riješili jednostavan izazov?

Da, postoji gumb za zvuk, ali to ne radi uvijek preko Tor.
Ovu poruku dobit ćete kada je kliknete:

```
Pokušajte ponovno kasnije
Vaše računalo ili mreža možda šalju automatizirane upite.
Da bismo zaštitili naše korisnike, trenutno ne možemo obraditi vaš zahtjev.
Za više detalja posjetite našu stranicu pomoći
```

</details>

---

<details>
<summary>klikni me

## Suzbijanje glasača
</summary>


Birači u američkim državama registriraju se kako bi u konačnici glasovali putem web stranice državnog tajnika u državi u kojoj borave.
Republički uredi pod državnim tajnicima sudjeluju u suzbijanju birača putem web mjesta državnog tajnika putem Cloudflare-a.
Cloudflare-ovo neprijateljsko postupanje s Torovim korisnicima, njegova MITM-ova pozicija kao centralizirana globalna točka nadzora i njegova ukupna štetna uloga čini potencijalne birače oklijevati s registracijom.
Liberali posebno prihvaćaju privatnost.
Obrasci za registraciju birača prikupljaju osjetljive podatke o političkom naklonosti birača, osobnoj fizičkoj adresi, broju socijalnog osiguranja i datumu rođenja.
Većina država javno čini sve dostupne podskupine tih podataka, ali Cloudflare sve te podatke vidi kada se netko registrira za glasovanje.

Imajte na umu da registracija na papiru ne zaobilazi Cloudflare jer će zaposlenici tajnika državnih službi za unos podataka vjerojatno koristiti web stranicu Cloudflare za unos podataka.

| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfvotm_01.jpg) | ![](../image/cfvotm_02.jpg) |

- Change.org je poznata web stranica za prikupljanje glasova i poduzimanje akcija.
“ljudi svugdje započinju kampanje, mobiliziraju pristaše i rade s donositeljima odluka na pronalaženju rješenja.”
Nažalost, mnogi ljudi uopće ne mogu vidjeti change.org zbog Cloudflare-ovog agresivnog filtra.
Blokirano im je potpisivanje peticije, što ih isključuje iz demokratskog procesa.
Korištenje druge platforme bez oblaka poput OpenPetition pomaže u uklanjanju problema.

| 🖼 | 🖼 |
| --- | --- |
| ![](../image/changeorgasn.jpg) | ![](../image/changeorgtor.jpg) |

- Cloudflareov "atenski projekt" nudi besplatnu zaštitu na razini poduzeća na državnim i lokalnim web mjestima za izbore.
Oni su rekli da "njihovi birači mogu pristupiti informacijama o izborima i registraciji birača", ali to je laž, jer mnogi ljudi jednostavno ne mogu pregledavati web mjesto.

</details>

---

<details>
<summary>klikni me

## Zanemarivanje preferencija korisnika
</summary>


Ako nešto isključite, očekujete da nećete dobiti e-poštu o tome.
Cloudflare ignorira korisničke preferencije i dijeli podatke s korporacijama trećih strana bez pristanka kupca.
Ako koristite njihov besplatni plan, ponekad vam šalju e-poštu s molbom da kupite mjesečnu pretplatu.

![](../image/cfviopl_tp.jpg)

</details>

---

<details>
<summary>klikni me

## Laž zbog brisanja podataka korisnika
</summary>


Prema blogu ovog kupca bivšeg cloudflarea, Cloudflare laže o brisanju računa.
Danas mnoge tvrtke čuvaju vaše podatke nakon što zatvorite ili uklonite račun.
Većina dobrih tvrtki o tome spominje u svojoj politici privatnosti.
CloudFlare? Ne.

```
2019-08-05 CloudFlare mi je poslao potvrdu da su uklonili moj račun.
2019-10-02 Primio sam e-poruku od CloudFlare "jer sam klijent"
```

Cloudflare nije znao za riječ "ukloni".
Ako je stvarno uklonjen, zašto je ovaj bivši kupac dobio e-poštu?
Također je spomenuo da se Cloudflareova politika o privatnosti ne spominje.

```
Njihova nova pravila o privatnosti ne spominju zadržavanje podataka godinu dana.
```

![](../image/cfviopl_notdel.jpg)

Kako možete vjerovati Cloudflareu ako je njihova politika privatnosti LIE?

</details>

---

<details>
<summary>klikni me

## Zadržite svoje osobne podatke
</summary>


Brisanje Cloudflare računa je teška razina.

```
Pošaljite kartu za podršku pomoću kategorije "Račun",
i zatražiti brisanje računa u tijelu poruke.
Prije zahtjeva za brisanje ne morate imati vaše domene ili kreditne kartice.
```

Primit ćete ovu potvrdnu e-poštu.

![](../image/cf_deleteandkeep.jpg)

"Započeli smo obrađivati ​​vaš zahtjev za brisanje", ali "i dalje ćemo pohranjivati ​​vaše osobne podatke".

Možete li ovo "vjerovati"?

</details>

---

## Aliaj informoj

- Joseph Sullivan (Joe Sullivan) ([Cloudflare CSO](https://twitter.com/eastdakota/status/1296522269313785862))
  - [Ex-Uber security head charged in connection with the cover-up of a 2016 hack that affected 57 million customers](https://www.businessinsider.com/uber-data-hack-security-head-joe-sullivan-charged-cover-up-2020-8)
  - [Former Chief Security Officer For Uber Charged With Obstruction Of Justice](https://www.justice.gov/usao-ndca/pr/former-chief-security-officer-uber-charged-obstruction-justice)


---

## Nastavite do sljedeće stranice:   [Cloudflare glasovi](../PEOPLE.md)

![](../image/freemoldybread.jpg)
![](../image/cfisnotanoption.jpg)
