# Великая облачная стена


![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/itsreallythatbad.jpg)
![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/telegram/c81238387627b4bfd3dcd60f56d41626.jpg)

---


## Остановить Cloudflare


|  🖹  |  🖼 |
| --- | --- |
|  «Великий Cloudwall» - это американская компания Cloudflare Inc.Он предоставляет услуги CDN (сети доставки контента), предотвращения DDoS-атак, интернет-безопасности и услуги распределенного DNS (сервера доменных имен).  |  ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cloudflaredearuser.jpg) |
|  Cloudflare - это крупнейший в мире прокси-сервер MITM (обратный прокси).Cloudflare принадлежит более 80% доли рынка CDN, и количество пользователей Cloudflare растет с каждым днем.Они расширили свою сеть до более чем 100 стран.Cloudflare обслуживает больше веб-трафика, чем Twitter, Amazon, Apple, Instagram, Bing и Wikipedia вместе взятые.Cloudflare предлагает бесплатный план, и многие люди используют его вместо того, чтобы правильно настраивать свои серверы.Они предпочли конфиденциальность удобству.  |  ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfmarketshare.jpg)  |
|  Cloudflare находится между вами и исходным веб-сервером, действуя как агент пограничного патрулирования.Вы не можете подключиться к выбранному вами месту назначения.Вы подключаетесь к Cloudflare, и вся ваша информация расшифровывается и передается на лету. |  ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/border_patrol.jpg)  |
|  Администратор исходного веб-сервера разрешил агенту - Cloudflare - решать, кто может получить доступ к их «веб-ресурсу» и определять «зону ограниченного доступа».  |  ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/usershoulddecide.jpg)  |
|  Взгляните на правое изображение.Вы думаете, что Cloudflare блокирует только плохих парней.Вы будете думать, что Cloudflare всегда в сети (никогда не отключайтесь).Вы будете думать, что настоящие боты и сканеры могут индексировать ваш сайт.  |  ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/howcfwork.jpg)  |
|  Однако это совсем не так.Cloudflare без причины блокирует невиновных людей.Cloudflare может выйти из строя.Cloudflare блокирует легальных ботов.  |  ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfdowncfcom.jpg)  |
|  Как и любой хостинг, Cloudflare не идеален.Вы увидите этот экран, даже если исходный сервер работает нормально.  |  ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfdown2019.jpg) |
|  Вы действительно думаете, что у Cloudflare время безотказной работы 100%?Вы не представляете, сколько раз Cloudflare отключается.Если Cloudflare выйдет из строя, ваш клиент не сможет получить доступ к вашему сайту. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cloudflareinternalerror.jpg)<br>![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cloudflareoutage-2020.jpg) |
|  Это называется так по отношению к Великому китайскому файрволу, который выполняет сопоставимую работу по отфильтровыванию множества людей от просмотра веб-контента (т.е. всех в материковом Китае и людей за его пределами).В то же время, те, кто не был затронут, увидят совершенно иную сеть, сеть, свободную от цензуры, такую ​​как изображение «танкиста» и история «протестов на площади Тяньаньмэнь». | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cloudflarechina.jpg)  |
|  Cloudflare обладает огромной силой.В некотором смысле они контролируют то, что в конечном итоге видит конечный пользователь.Вы не можете просматривать веб-сайт из-за Cloudflare. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/onemorestep.jpg) |
|  Cloudflare можно использовать для цензуры. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/accdenied.jpg) |
|  Вы не можете просматривать облачный веб-сайт, если используете второстепенный браузер, который Cloudflare может решить, что это бот (потому что не многие люди его используют). | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfublock.jpg) |
|  Вы не можете пройти эту инвазивную «проверку браузера» без включения Javascript.Это пустая трата пяти (или более) секунд вашей ценной жизни. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/omsjsck.jpg) |
|  Cloudflare также автоматически блокирует законных роботов / сканеров, таких как Google, Яндекс, Yacy и клиентов API.Cloudflare активно следит за сообществом «обхода cloudflare» с целью взломать законных исследовательских ботов. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cftestgoogle.jpg)<br>![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/htmlalertcloudflare2.jpg) |
|  Cloudflare аналогичным образом не позволяет многим людям с плохим подключением к Интернету получить доступ к веб-сайтам, которые находятся за ним (например, они могут находиться за 7+ слоями NAT или использовать один и тот же IP-адрес, например общедоступный Wi-Fi), если они не решат несколько CAPTCHA с изображениями.В некоторых случаях Google может потребовать от 10 до 30 минут. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/googlerecaptcha.jpg) |
|  В 2020 году Cloudflare перешла с Recaptcha Google на hCaptcha, поскольку Google намеревается взимать плату за ее использование.Cloudflare сказал вам, что они заботятся о вашей конфиденциальности («это помогает решить проблему конфиденциальности»), но это, очевидно, ложь.Все дело в деньгах.«HCaptcha позволяет веб-сайтам зарабатывать деньги, удовлетворяя этот спрос, блокируя ботов и другие формы злоупотреблений» | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/fedup_fucking_hcaptcha.jpg) |
|  С точки зрения пользователя, это не сильно меняет. Вы вынуждены ее решить. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/hcaptcha_abrv.jpg)<br>![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/hcaptcha_chrome.jpg) |
|  Cloudflare ежедневно блокирует множество людей и программного обеспечения. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/omsnote.jpg) |
|  Cloudflare раздражает многих людей по всему миру.Взгляните на список и подумайте, хорошо ли внедрение Cloudflare на вашем сайте для удобства пользователей. |  ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/omsstream.jpg) |
|  Какова цель Интернета, если вы не можете делать то, что хотите?Большинство людей, которые посещают ваш веб-сайт, просто ищут другие страницы, если не могут загрузить веб-страницу.Возможно, вы не блокируете посетителей, но брандмауэр Cloudflare по умолчанию достаточно строг, чтобы блокировать множество людей. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/omsdroid.jpg)<br>![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/omsappl.jpg) |
|  Невозможно решить капчу без включения Javascript и файлов cookie.Cloudflare использует их для создания подписи браузера, чтобы идентифицировать вас.Cloudflare необходимо знать вашу личность, чтобы решить, имеете ли вы право продолжать просмотр сайта. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cferr1010bsig.jpg) |
|  Пользователи Tor и пользователи VPN также становятся жертвами Cloudflare.Оба решения используются многими людьми, которые не могут позволить себе Интернет без цензуры из-за своей страны / корпорации / сетевой политики или которые хотят добавить дополнительный уровень для защиты своей конфиденциальности.Cloudflare бесстыдно атакует этих людей, вынуждая их отключить свои прокси-решения. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/banvpn2.jpg) |
|  Если вы не пробовали Tor до этого момента, мы рекомендуем вам загрузить Tor Browser и посетить свои любимые веб-сайты.Мы предлагаем вам не входить в систему на веб-сайте вашего банка или правительства, иначе они пометят вашу учетную запись. Используйте VPN для этих сайтов. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/banvpn.jpg) |
|  Вы можете сказать: «Tor является незаконным! Пользователи Tor преступники! Тор - это плохо! ». Нет.Вы можете узнать о Tor по телевидению, говоря Tor может быть использован для просмотра даркнет и торговое оружие, наркотиков или чид порно.Хотя приведенное выше утверждение верно, что существует множество веб-сайтов, на которых вы можете купить такие товары, эти сайты также часто появляются в сети.  | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/whousetor.jpg) |
|  Tor был разработан армией США, но текущий Tor разрабатывается проектом Tor.Есть много людей и организаций, которые используют Tor, включая ваших будущих друзей.Итак, если вы используете Cloudflare на своем веб-сайте, вы блокируете реальных людей.Вы потеряете потенциальную дружбу и деловую сделку. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/iusetor_alith.jpg) |
|  И их служба DNS 1.1.1.1 также отфильтровывает пользователей от посещения веб-сайта, возвращая поддельный IP-адрес, принадлежащий Cloudflare, IP localhost, такой как «127.0.0.x», или просто ничего не возвращая. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cferr1016.jpg)<br>![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cferr1016sp.jpg) |
|  Cloudflare DNS также ломает онлайн-программное обеспечение от приложения для смартфона до компьютерной игры из-за своего поддельного ответа DNS.Cloudflare DNS не может запрашивать веб-сайты некоторых банков. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfdnsprob.jpg)<br>![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/dnsfailtest.jpg) |
|  И тут вы можете подумать,<br>Я не использую Tor или VPN, какое мне дело?<br>Я доверяю маркетингу Cloudflare, почему меня это должно волновать<br>Мой сайт https, почему меня это должно волновать | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/annoyed.jpg) |
|  Если вы посещаете веб-сайт, который использует Cloudflare, вы делитесь своей информацией не только с владельцем веб-сайта, но и с Cloudflare.Так работает обратный прокси. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/prism_gfe.jpg) |
|  Анализировать без расшифровки TLS-трафика невозможно. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfhelp204144518.jpg) |
|  Cloudflare знает все ваши данные, такие как необработанный пароль. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfhelpforum.jpg) |
|  Cloudbeed может произойти в любое время. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfbloghtmledit.jpg) |
|  Https Cloudflare никогда не бывает сквозным. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/sniff2.gif) |
|  Вы действительно хотите поделиться своими данными с Cloudflare, а также с 3-буквенным агентством? | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfstrengthdata.jpg) |
|  Онлайн-профиль пользователя Интернета - это «продукт», который хотят покупать правительство и крупные технологические компании. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/federalinterest.jpg) |
|  Министерство внутренней безопасности США заявило:<br><br>Вы хоть представляете, насколько ценны ваши данные? Есть ли способ продать нам эти данные?  | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/dhssaid.jpg) |
|  Cloudflare также предлагает БЕСПЛАТНЫЙ VPN-сервис под названием «Cloudflare Warp».Если вы его используете, все соединения вашего смартфона (или компьютера) отправляются на серверы Cloudflare.Cloudflare может знать, какой веб-сайт вы читали, какие комментарии вы оставляли, с кем разговаривали и т. Д.Вы добровольно предоставляете всю свою информацию Cloudflare.Если вы думаете: «Вы шутите? Cloudflare безопасен ». тогда вам нужно узнать, как работает VPN. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/howvpnwork.jpg) |
|  Cloudflare заявили, что их VPN-сервис сделает ваш интернет быстрым.Но VPN делает ваше интернет-соединение медленнее, чем ваше существующее соединение. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/notfastervpn.jpg) |
|  Возможно, вы уже знаете о скандале PRISM.Это правда, что AT&T позволяет АНБ копировать все данные из Интернета для наблюдения. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/prismattnsa.jpg) |
|  Допустим, вы работаете в АНБ и хотите, чтобы у каждого гражданина был профиль в Интернете.Вы знаете, что большинство из них слепо доверяют Cloudflare и используют его - только один централизованный шлюз - для проксирования соединения с сервером своей компании (SSH / RDP), личного веб-сайта, веб-сайта чата, веб-сайта форума, веб-сайта банка, веб-сайта страхования, поисковой системы, секретного участника - только веб-сайт, веб-сайт аукциона, веб-сайт покупок, веб-сайт с видео, веб-сайт NSFW и незаконный веб-сайт.Вы также знаете, что они используют службу DNS Cloudflare («1.1.1.1») и службу VPN («Cloudflare Warp») для «Secure! Быстрее! Лучше!" Интернет-опыт.Объединение их с IP-адресом пользователя, отпечатком пальца браузера, файлами cookie и RAY-ID будет полезно для создания онлайн-профиля цели. | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/edw_snow.jpg) |
|  Вам нужны их данные. Что ты будешь делать? | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/nsaslide_prismcorp.gif) |
|  **Cloudflare - это приманка.** | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/honeypot.gif) |
|  **Бесплатный мед для всех. Прилагаются какие-то ниточки.** | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/iminurtls.jpg) |
|  **Не используйте Cloudflare.** | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/shadycloudflare.jpg) |
|  **Децентрализовать Интернет.** | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/cfisnotanoption.jpg) |


---


##    Пожалуйста, перейдите на следующую страницу:  "[Этика Cloudflare](ru.ethics.md)"

---

<details>
<summary>_нажми на меня_

## Данные и дополнительная информация
</summary>


Этот репозиторий представляет собой список веб-сайтов, которые находятся за «Великой облачной стеной», блокируя пользователей Tor и другие CDN.


**Данные**
* [Cloudflare Inc.](../cloudflare_inc/)
* [Пользователи Cloudflare](../cloudflare_users/)
* [Cloudflare Домены](../cloudflare_users/domains/)
* [Пользователи CDN, не относящиеся к Cloudflare](../not_cloudflare/)
* [Пользователи Anti-Tor](../anti-tor_users/)


![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/goodorbad.jpg)


**Больше информации**
* [Myth Catalog](../subfiles/myth_catalog.md)
* [The Great Cloudwall](../pdf/2019-Jeff_Cliff_Book1.txt), [Mr. Jeff Cliff](https://shitposter.club/users/jeffcliff)
  * Скачать: [PDF](../pdf/2019-The_Great_Cloudwall.pdf), [ePUB](../pdf/2019-Jeff_Cliff_The_Great_Cloudwall.epub)
  * Исходная электронная книга (ePUB) была удалена BookRix GmbH из-за нарушения авторских прав на материал CC0.
* [Padlock icon indicates a secure SSL connection established w MITM-ed](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=831835), Anonymous
* [Block Global Active Adversary Cloudflare](https://trac.torproject.org/projects/tor/ticket/24351), nym-zone
  * Билет много раз подвергался вандализму.
  * [Удалено проектом Tor.](https://lists.torproject.org/pipermail/anti-censorship-team/2020-May/000098.html) [См. Билет 34175.](https://trac.torproject.org/projects/tor/ticket/34175)
  * [Последний архивный билет 24351.](https://web.archive.org/web/20200301013104/https://trac.torproject.org/projects/tor/ticket/24351)
* [The problem with Cloudflare](https://neoreddit.horobets.me/post/43), stopCloudflare
* [Cloudflare Watch](http://www.crimeflare.org:82/)
* [Criticism and controversies](https://en.wikipedia.org/wiki/Cloudflare#Criticism_and_controversies), Wikipedia
* [Another landmark day in the war to control, centralize and censor the internet.](https://www.reddit.com/r/privacy/comments/b8dptl/another_landmark_day_in_the_war_to_control/), TheGoldenGoose8888
* [Disadvantage of relying on only one service](https://twitter.com/w3Nicolas/status/1134529316904153089) ([DO is CF](https://www.digwebinterface.com/?hostnames=ns1.digitalocean.com%0D%0Ans2.digitalocean.com%0D%0Ans3.digitalocean.com%0D%0Awww.digitalocean.com&type=A&ns=resolver&useresolver=8.8.4.4&nameservers=))

![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/watcloudflare.jpg)


</details>

---

<details>
<summary>_нажми на меня_

## Что ты можешь сделать?
</summary>

* [Прочтите наш список рекомендуемых действий и поделитесь им с друзьями.](../ACTION.md)

* [Прочтите голос другого пользователя и запишите свои мысли.](../PEOPLE.md)

* Искать что-нибудь: [Ansero](https://ansero.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion/) ([clearnet](https://ansero.eu.org/)), [Crimeflare \#Search](https://sercxi.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion/?ul=ru) ([clearnet](https://crimeflare.eu.org/))

* Обновите список доменов: [Список инструкций](../INSTRUCTION.md).

* [Добавить Cloudflare или событие, связанное с проектом, в историю.](../HISTORY.md)

* [Попробуйте написать новый инструмент / скрипт.](../tool/)

* [Вот несколько PDF / ePUB для чтения.](../pdf/)

* [Help translate stop_cloudflare](translateData/instructions.md)


---

### О фейковых аккаунтах

Crimeflare знает о существовании фальшивых аккаунтов, выдающих себя за наши официальные каналы, будь то Twitter, Facebook, Patreon, OpenCollective, Villages и т. Д.
**Мы никогда не спрашиваем вашу электронную почту.
Мы никогда не спрашиваем ваше имя.
Мы никогда не спрашиваем вашу личность.
Мы никогда не спрашиваем ваше местонахождение.
Мы никогда не просим вашего пожертвования.
Мы никогда не просим вашего отзыва.
Мы никогда не просим вас подписаться на социальные сети.
Мы никогда не спрашиваем ваши социальные сети.**

# НЕ ДОВЕРЬТЕ ПОДДЕЛЬНЫМ АККАУНТАМ.



---

| 🖼 | 🖼 |
| --- | --- |
| ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/wtfcf.jpg) | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/omsirl2.jpg) |
| ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/omsirl.jpg) | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/whydoihavetosolveacaptcha.jpg) |
| ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/fixthedamn.jpg) | ![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/imnotarobot.jpg) |

</details>

---


![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/twe_lb.jpg)

![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/twe_dz.jpg)

![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/twe_jb.jpg)

![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/twe_ial.jpg)

![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/twe_eptg.jpg)

![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/eastdakota_1273277839102656515.jpg)

![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/stopcf.jpg)

![](https://codeberg.org/crimeflare/stop_cloudflare/media/branch/master/image/peopledonotthink.jpg)