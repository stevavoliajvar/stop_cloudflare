# Etikai kérdések

![](../image/itsreallythatbad.jpg)
![](../image/telegram/c81238387627b4bfd3dcd60f56d41626.jpg)

"Ne támogassa ezt az etikai szempontból semmis társaságot"

"A céged nem megbízható. Ön azt állítja, hogy érvényesíti a DMCA-t, de sok pert indít, amiért ezt nem teszi meg."

"Csak azokat cenzúrázzák, akik megkérdőjelezik etikájukat."

"Azt hiszem, az igazság kényelmetlen és jobban el van rejtve a nyilvánosság elől."  -- [phyzonloop](https://twitter.com/phyzonloop)


---


<details>
<summary>kattints ide

## A CloudFlare spameket küld az embereknek
</summary>


A Cloudflare spam e-maileket küld nem Cloudflare felhasználóknak.

- Csak azoknak az előfizetőknek küldjön e-mailt, akik részt vettek
- Amikor a felhasználó azt mondja, hogy "stop", akkor hagyja abba az e-mail küldését

Ez ennyire egyszerű. De a Cloudflare nem érdekli.
A Cloudflare szerint szolgáltatásuk használatával minden spamelőt vagy támadót meg lehet állítani.
Hogyan állíthatjuk meg a Cloudflare-t anélkül, hogy aktiválnánk a Cloudflare-t?


| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfspam01.jpg) | ![](../image/cfspam03.jpg) |
| ![](../image/cfspam02.jpg) | ![](../image/cfspambrittany.jpg)<br>![](../image/cfspamtwtr.jpg) |

</details>

---

<details>
<summary>kattints ide

## Távolítsa el a felhasználó véleményét
</summary>


Cloudflare cenzor negatív vélemények.
Ha Cloudflare-ellenes szöveget tesz közzé a Twitteren, akkor esélye van arra, hogy választ kapjon a Cloudflare alkalmazottjától, hogy "Nem, ez nem".
Ha bármelyik felülvizsgálati webhelyen negatív véleményt tesz közzé, akkor megpróbálják cenzúrázni.


| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfcenrev_01.jpg)<br>![](../image/cfcenrev_02.jpg) | ![](../image/cfcenrev_03.jpg) |

</details>

---

<details>
<summary>kattints ide

## Ossza meg a felhasználó személyes adatait
</summary>


A Cloudflare-nek hatalmas zaklatási problémája van.
A Cloudflare megosztja azok személyes adatait, akik panaszkodnak a hosztolt webhelyekre.
Néha megkérik, hogy adja meg valódi igazolványát.
Ha nem akarja, hogy zaklassák, bántalmazzák, elkapják vagy megölik, akkor inkább tartózkodjon a Cloudflared webhelyektől.


| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfdox_what.jpg) | ![](../image/cfdox_swat.jpg) |
| ![](../image/cfdox_kill.jpg) | ![](../image/cfdox_threat.jpg) |
| ![](../image/cfdox_dox.jpg) | ![](../image/cfdox_ex1.jpg)<br>![](../image/cfdox_ex2.jpg) |

</details>

---

<details>
<summary>kattints ide

## Karitatív hozzájárulások vállalati igénybevétele
</summary>


A CloudFlare jótékonysági hozzájárulást kér.
Elég borzasztó, hogy egy amerikai vállalat jótékonysági tevékenységet kérne a jó okokkal rendelkező non-profit szervezetek mellett.
Ha szeretné blokkolni az embereket, vagy pazarolni mások idejét, érdemes rendelnie néhány pizzát a Cloudflare alkalmazottainak.


![](../image/cfdonate.jpg)

</details>

---

<details>
<summary>kattints ide

## Megszüntető helyek
</summary>


Mit fog tenni, ha webhelye hirtelen leáll?
Vannak jelentések arról, hogy a Cloudflare minden figyelmeztetés nélkül, némán törli a felhasználó konfigurációját vagy leállítja a szolgáltatást.
Javasoljuk, hogy keressen jobb szolgáltatót.

![](../image/cftmnt.jpg)

</details>

---

<details>
<summary>kattints ide

## A böngésző gyártói diszkrimináció
</summary>


A CloudFlare kedvezményes bánásmódban részesíti a Firefoxot használókat, miközben ellenséges bánásmódban részesíti a Tor felett nem Tor-Browser felhasználóit.
Azok a Tor-felhasználók, akik jogosan tagadják meg a nem ingyenes javascript végrehajtását, szintén ellenséges bánásmódban részesülnek.
Ez a hozzáférési egyenlőtlenség hálózati semlegességgel való visszaélés és hatalommal való visszaélés.

![](../image/browdifftbcx.gif)

- Bal: Tor böngésző, Jobb: Króm. Ugyanaz az IP-cím.

![](../image/browserdiff.jpg)

- Balra: a Tor böngésző Javascript le van tiltva, a sütik engedélyezve vannak
- Jobbra: Chrome Javascript engedélyezve, Cookie kikapcsolva

![](../image/cfsiryoublocked.jpg)

- QuteBrowser (kisebb böngésző) Tor nélkül (Clearnet IP)

![](../image/lynx_cloudflare.gif)

- Lynx


| ***Böngésző*** | ***Hozzáférés a kezeléshez*** |
| --- | --- |
| Tor Browser (Javascript engedélyezve) | hozzáférés engedélyezett |
| Firefox (Javascript engedélyezve) | a hozzáférés romlott |
| Chromium (Javascript engedélyezve) | a hozzáférés romlott |
| Chromium or Firefox (A Javascript le van tiltva) | hozzáférés megtagadva |
| Chromium or Firefox (A cookie le van tiltva) | hozzáférés megtagadva |
| QuteBrowser | hozzáférés megtagadva |
| lynx | hozzáférés megtagadva |
| w3m | hozzáférés megtagadva |
| wget | hozzáférés megtagadva |


Miért ne használná az Audio gombot az egyszerű kihívás megoldására?

Igen, van egy audio gomb, de ez mindig nem működik Tor felett.
Ezt az üzenetet akkor kapja meg, amikor rákattint:

```
Próbáld újra később
Lehet, hogy számítógépe vagy hálózata automatikus lekérdezéseket küld.
Felhasználóink ​​védelme érdekében kérését jelenleg nem tudjuk feldolgozni.
További részletekért látogasson el a súgó oldalunkra
```

</details>

---

<details>
<summary>kattints ide

## A szavazók elfojtása
</summary>


Az egyesült államokbeli választópolgárok nyilvántartásba veszik a szavazást végső soron az államtitkár honlapján keresztül a lakóhelyük szerinti államban.
A republikánusok által ellenőrzött államtitkárságok a választók elnyomásában vesznek részt az államtitkár webhelyének a Cloudflare-en keresztüli meghatalmazásával.
A Cloudflare Tor-felhasználókkal szembeni ellenséges bánásmódja, MITM-központja mint központosított globális megfigyelési pont, valamint káros szerepe összességében a leendő választókat vonakodik regisztrációtól.
Különösen a liberálisok szokták magáévá tenni a magánéletet.
A választói regisztrációs űrlapok érzékeny információkat gyűjtenek a választók politikai beállítottságáról, személyes címéről, társadalombiztosítási számáról és születési dátumáról.
A legtöbb állam csak ezen információk egy részhalmazát teszi nyilvánosan elérhetővé, de a Cloudflare akkor látja az összes információt, ha valaki regisztrálódik a szavazásra.

Ne feledje, hogy a papíron történő regisztráció nem kerüli meg a Cloudflare-t, mert az állami adatbeviteli alkalmazottak titkára valószínűleg a Cloudflare webhelyet használja az adatok megadásához.

| 🖼 | 🖼 |
| --- | --- |
| ![](../image/cfvotm_01.jpg) | ![](../image/cfvotm_02.jpg) |

- A Change.org egy híres weboldal a szavazatok összegyűjtésére és a cselekvésre.
“az emberek mindenhol kampányokat indítanak, támogatókat mozgósítanak, és a döntéshozókkal dolgoznak a megoldások ösztönzésében.”
Sajnos sokan egyáltalán nem tekinthetik meg a change.org-ot a Cloudflare agresszív szűrője miatt.
A petíció aláírását akadályozzák, így kizárva őket a demokratikus folyamatból.
Más, nem felhőalapú platformok, például az OpenPetition használata segít megoldani a problémát.

| 🖼 | 🖼 |
| --- | --- |
| ![](../image/changeorgasn.jpg) | ![](../image/changeorgtor.jpg) |

- A Cloudflare „athéni projektje” ingyenes vállalati szintű védelmet kínál az állami és helyi választási webhelyeknek.
Azt mondták, hogy "választóik hozzáférhetnek a választási információkhoz és a választók regisztrációjához", de ez hazugság, mert sokan egyszerűen nem tudnak egyáltalán böngészni az oldalon.

</details>

---

<details>
<summary>kattints ide

## A felhasználó preferenciáinak figyelmen kívül hagyása
</summary>


Ha elutasít valamit, akkor arra számít, hogy nem kap erről e-mailt.
A Cloudflare figyelmen kívül hagyja a felhasználó preferenciáit, és az ügyfelek beleegyezése nélkül megosztja az adatokat harmadik felekkel működő vállalatokkal.
Ha az ingyenes csomagot használja, néha e-mailt küld neked, amelyben havi előfizetés megvásárlását kéri.

![](../image/cfviopl_tp.jpg)

</details>

---

<details>
<summary>kattints ide

## A felhasználó adatainak törlése
</summary>


E volt felhőalapú ügyfél blogja szerint a Cloudflare hazudik a számlák törléséről.
Manapság sok vállalat megőrzi adatait, miután bezárta vagy eltávolította fiókját.
A jó cégek többsége említést tesz róla az adatvédelmi irányelveiben.
Cloudflare? Nem.

```
2019-08-05 A CloudFlare megerősítést küldött nekem arról, hogy eltávolították a fiókomat.
2019-10-02 E-mailt kaptam a CloudFlare-től "mert ügyfél vagyok"
```

A Cloudflare nem tudott az "eltávolítás" szóról.
Ha valóban eltávolítják, miért kapott e-mailt ez a volt ügyfél?
Megemlítette azt is, hogy a Cloudflare adatvédelmi szabályzata erről nem tesz említést.

```
Új adatvédelmi irányelvük nem említi az adatok egy évig tartó megőrzését.
```

![](../image/cfviopl_notdel.jpg)

Hogyan bízhat meg a Cloudflare-ben, ha az adatvédelmi irányelveik LIE?

- [Több mint egy év telt el azóta, hogy töröltem a Cloudflare-fiókomat](https://shkspr.mobi/blog/2020/09/dont-trust-cloudflare-with-your-personal-data/)

</details>

---

<details>
<summary>kattints ide

## Őrizze meg személyes adatait
</summary>


A Cloudflare-fiók törlése nehéz.

```
Nyújtson be támogatási jegyet a "Számla" kategória használatával,
és kérje a fiók törlését az üzenet törzsében.
A törlés kérése előtt nem lehet domainje vagy hitelkártyája a fiókjához csatolva.
```

Ezt a megerősítő e-mailt megkapja.

![](../image/cf_deleteandkeep.jpg)

"Megkezdtük a törlési kérelem feldolgozását", de "A személyes adatait továbbra is tároljuk".

Tud "ebben bízni"?


- Hogyan törölheti Cloudflare-fiókját

1. Jelentkezzen be a Cloudflare irányítópultjára.
2. Törölje az összes zónát (tartományt) az irányítópultról.
3. Kattintson a támogatási linkre.
4. Küldjön új jegyet. Mondja meg nekik, hogy le akarja zárni a fiókját.
5. Várjon néhány napot.
6. A Cloudflare munkatársai megerősítést kérnek Öntől és annak okáról, hogy miért döntött úgy, hogy elhagyja a Cloudflare szolgáltatást.
7. Küldjön ismét választ.
8. Várjon néhány napot.
9. Üzenetet kap: Sikeresen töröltük fiókját


</details>

---

## Egyéb információk

- Joseph Sullivan (Joe Sullivan) ([Cloudflare CSO](https://twitter.com/eastdakota/status/1296522269313785862))
  - [Ex-Uber security head charged in connection with the cover-up of a 2016 hack that affected 57 million customers](https://www.businessinsider.com/uber-data-hack-security-head-joe-sullivan-charged-cover-up-2020-8)
  - [Former Chief Security Officer For Uber Charged With Obstruction Of Justice](https://www.justice.gov/usao-ndca/pr/former-chief-security-officer-uber-charged-obstruction-justice)


---


## Kérjük, folytassa a következő oldalra:   [Cloudflare Voices](../PEOPLE.md)

![](../image/freemoldybread.jpg)
![](../image/cfisnotanoption.jpg)
