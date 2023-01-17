<template>
	<div id="app">
		<header class="pt-3">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-10 col-lg-6 m-auto">
						<img
							src="./assets/logo.svg"
							alt="Логотип Онлан школа креативной психологии"
						/>
					</div>
				</div>
			</div>
		</header>
		<main>
			<h1 class="visually-hidden">
				Бесплатный онлайн тренинг - Секреты работы с метафорическими
				ассоциативными картами(МАК)
			</h1>
			<section class="hero text-center">
				<h2 class="hero__section-title">Бесплатный онлайн тренинг</h2>
				<p class="hero__title">
					Секреты&nbsp;работы с&nbsp;метафорическими ассоциативными картами
					(МАК)
				</p>
				<time class="hero__data" datatime="2022-01-18"
					>18 января в 12:00 МСК</time
				>
				<a class="hero__button" href="#order">Принять участие</a>
			</section>
			<section class="what-you-know">
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-10 col-lg-6 m-auto what-you-know__wrapper">
								<div class="what-you-know__content">
									<h2 class="what-you-know__title text-center">
										За 1,15 часа вы узнаете:
									</h2>
									<ul class="what-you-know__descr">
										<li class="what-you-know__benefit">
											Почему психологу и коучу необходимо использовать МАК
											в своей работе
										</li>
										<li class="what-you-know__benefit">
											Какие инструменты и техники можно начать применять сразу
											после тренинга
										</li>
										<li class="what-you-know__benefit">
											Какие самые популярные запросы можно отрабатывать
											с помощью МАК
										</li>
										<li class="what-you-know__benefit">
											Как стать высококлассным МАК-консультантом с высоким чеком
										</li>
										<li class="what-you-know__benefit">
											Получать истинные ответы на собственные вопросы
										</li>
										<li class="what-you-know__benefit">
											Как начать зарабатывать с МАК прямо сейчас
										</li>
									</ul>
								</div>
						</div>
					</div>
				</div>
			</section>
			<section @mouseover.once="show=!show" class="about-presenter">
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-10 col-lg-6 m-auto mb-4">
									<h2 class="about-presenter__title text-center">
										О ведущем
									</h2>
									<transition 	mode="out-in"
										enter-active-class="flipOutY"
										leave-active-class="flipInY">
										<div  v-if="show" class="about-presenter__foto"></div>
									</transition>
										<div v-if="!show" class="about-presenter__foto"></div>
									<p class="about-presenter__descr">
										Ярослава Киливник — тренер МАК, психолог, коуч</p>
									<p class="about-presenter__descr">На моём авторском курсе «Секреты работы с метафорическими ассоциативными картами(МАК)» я поделюсь с вами своим опытом и наработками.</p>
									<span id="order"></span>

						</div>
					</div>
				</div>
			</section>
			<section class="order">
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-10 col-lg-6 m-auto order__wrapper">
								<div class="order__content">
									<h2 class="order__title text-center">
										Записаться на бесплатный онлайн тренинг
									</h2>
									<div data-formid="form_RCX93ZXBhR9j34Hf3WEau4LVTq-ZvkqW"></div>
								</div>
						</div>
					</div>
				</div>
			</section>

	<footer class="footer">
				<div class="container">
					<div class="row">
					<div class="col-12 col-sm-12 col-md-10 col-lg-6 m-auto">
						<div class="footer__wrapper">
							<img
								src="./assets/logo_light.svg"
								alt="Логотип Онлан школа креативной психологии"
								class="footer__logo"
							/>
							<div class="footer__fio">
								<p class="footer__text">Киливник Ярослава Владимировна</p>
								<p class="footer__text">ИНН 616823087586</p>
							</div>
							<div class="footer__contacts">
								<h3 class="footer__contact-title">Контакты</h3>
								<a href="tel:+79282145006" class="footer__text">+79282145006</a><br>
								<a href="mailto:yarok@mail.ru" class="footer__text">yarok@mail.ru</a>
							</div>
							<div class="footer__therms-privacy">
								<a href="#" class="footer__text" @click.prevent="showConfidential = !showConfidential">Политика конфиденциальности</a><br>
								<a href="#" class="footer__text" @click.prevent="showConfidential = !showConfidential">Политика&nbsp;обработки персональных&nbsp;данных</a>
							</div>
							<div class="footer__copyright">©&nbsp;Все&nbsp;права&nbsp;защищены,&nbsp;2021. Дизайн&nbsp;разработан&nbsp;<a href="https://www.behance.net/mari-Sha" target="_blank" rel="noreferrer">MariSha</a>. Верстка&nbsp;и&nbsp;кодинг&nbsp;<a href="https://jan-web.github.io/jan-web/" target="_blank" rel="noreferrer">Yan&nbsp;Shatskiy</a>.
				</div>

						</div>
					</div>
					</div>
				</div>

	</footer>


		</main>
		<b-modal v-model="showConfidential" id="modal-tall" title="Политика конфиденциальности
" ok-only>
		<div class="text">
			<h5>1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</h5>
			<p>1.1. В&nbsp;настоящей Политике конфиденциальности используются следующие термины:</p>
			<p>1.1.1.«Администрация сайта»&nbsp;— уполномоченные сотрудники на&nbsp;управления сайтом, которые организуют&nbsp;и (или) осуществляет обработку персональных данных, а&nbsp;также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с&nbsp;персональными данными.</p>
			<p>1.1.2. «Персональные данные»&nbsp;— любая информация, относящаяся к&nbsp;прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</p>
			<p>1.1.3. «Обработка персональных данных»&nbsp;— любое действие (операция) или совокупность действий (операций), совершаемых с&nbsp;использованием средств автоматизации или без использования таких средств с&nbsp;персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
			<p>1.1.4. «Конфиденциальность персональных данных»&nbsp;— обязательное для соблюдения Оператором или иным получившим доступ к&nbsp;персональным данным лицом требование не&nbsp;допускать их&nbsp;распространения без согласия субъекта персональных данных или наличия иного законного основания.</p>
			<p>1.1.5. «Пользователь сайта https://mac.yarokcoach.&nbsp;ru/»&nbsp;— лицо, имеющее доступ к&nbsp;Сайту, посредством сети Интернет и&nbsp;использующее его.</p>
			<h5>2. ОБЩИЕ ПОЛОЖЕНИЯ</h5>
			<p>2.1. Использование Пользователем сайта https://mac.yarokcoach.&nbsp;ru/&nbsp;означает согласие с&nbsp;настоящей Политикой конфиденциальности и&nbsp;условиями обработки персональных данных Пользователя.</p>
			<p>2.2. В&nbsp;случае несогласия с&nbsp;условиями Политики конфиденциальности Пользователь должен прекратить использование сайта https://mac.yarokcoach.&nbsp;ru/.</p>
			<p>2.3. Администрация сайта не&nbsp;проверяет достоверность персональных данных, предоставляемых Пользователем сайта https://mac.yarokcoach.&nbsp;ru/.</p>
			<h5>3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ</h5>
			<p>3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта по&nbsp;неразглашению и&nbsp;обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по&nbsp;запросу Администрации сайта при регистрации на&nbsp;сайте, при использовании лицом любых сервисов сайта, в&nbsp;т.&nbsp;ч. форм обратной связи и&nbsp;т.&nbsp;п., а&nbsp;также при оформлении заказа услуги.</p>
			<p>3.2. Персональные данные, разрешённые к&nbsp;обработке в&nbsp;рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения форм на&nbsp;Сайте https://mac.yarokcoach.&nbsp;ru/</p>
			<p>3.2.1. фамилию, имя, отчество Пользователя;</p>
			<p>3.2.2. контактный телефон Пользователя;</p>
			<p>3.2.3. адрес электронной почты (e-mail);</p>
			<h5>4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ</h5>
			<p>4.1. Персональные данные Пользователя Администрация сайта https://mac.yarokcoach.&nbsp;ru//&nbsp;может использовать в&nbsp;целях:</p>
			<p>4.1.1. Идентификации Пользователя, зарегистрированного на&nbsp;сайте, для записи на&nbsp;медицинские услуги в&nbsp;режиме он-лайн.</p>
			<p>4.1.2. Установления с&nbsp;Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта, оказания услуг, обработка запросов и&nbsp;заявок от&nbsp;Пользователя.</p>
			<p>4.1.3. Предоставления Пользователю с&nbsp;его согласия, обновлений услуг, специальных предложений, информации о&nbsp;ценах, новостной рассылки и&nbsp;иных сведений.</p>
			<p>4.1.4. Осуществления рекламной деятельности с&nbsp;согласия Пользователя.</p>
			<h5>5. СПОСОБЫ И&nbsp;СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h5>
			<p>5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в&nbsp;том числе в&nbsp;информационных системах персональных данных с&nbsp;использованием средств автоматизации или без использования таких средств.</p>
			<p>5.2. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Республики Беларусь только по&nbsp;основаниям и&nbsp;в&nbsp;порядке, установленным законодательством Республики Беларусь.</p>
			<p>5.3. При утрате или разглашении персональных данных Администрация сайта информирует Пользователя об&nbsp;утрате или разглашении персональных данных.</p>
			<p>5.4. Администрация сайта принимает необходимые организационные и&nbsp;технические меры для защиты персональной информации Пользователя от&nbsp;неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а&nbsp;также от&nbsp;иных неправомерных действий третьих лиц.</p>
			<h5>6. ОБЯЗАТЕЛЬСТВА СТОРОН</h5>
			<p>6.1. Пользователь обязан:</p>
			<p>6.1.1. Предоставить информацию о&nbsp;персональных данных, необходимую для пользования Сайтом https://mac.yarokcoach.&nbsp;ru/</p>
			<p>6.1.2. Обновить, дополнить предоставленную информацию о&nbsp;персональных данных в&nbsp;случае изменения данной информации.</p>
			<p>6.2. Администрация сайта обязана:</p>
			<p>6.2.1. Использовать полученную информацию исключительно для целей, указанных в&nbsp;п.&nbsp;4&nbsp;настоящей Политики конфиденциальности.</p>
			<p>6.2.2. Обеспечить хранение конфиденциальной информации в&nbsp;тайне, не&nbsp;разглашать без предварительного письменного разрешения Пользователя, а&nbsp;также не&nbsp;осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами переданных персональных данных Пользователя, за&nbsp;исключением&nbsp;п.&nbsp;п.&nbsp;5.2. настоящей Политики Конфиденциальности.</p>
			<p>6.2.3. Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя согласно порядку, обычно используемого для защиты такого рода информации в&nbsp;существующем деловом обороте.</p>
			<p>6.2.4. Осуществить блокирование персональных данных, относящихся к&nbsp;соответствующему Пользователю, с&nbsp;момента обращения или запроса Пользователя или его законного представителя либо уполномоченного органа по&nbsp;защите прав субъектов персональных данных на&nbsp;период проверки, в&nbsp;случае выявления недостоверных персональных данных или неправомерных действий.</p>
			<h5>7. ОТВЕТСТВЕННОСТЬ СТОРОН</h5>
			<p>7.1. Администрация сайта, не&nbsp;исполнившая свои обязательства, несёт ответственность за&nbsp;убытки, понесённые Пользователем в&nbsp;связи с&nbsp;неправомерным использованием персональных данных, в&nbsp;соответствии с&nbsp;законодательством Российской Федерации, за&nbsp;исключением случаев, предусмотренных&nbsp;п.&nbsp;п.&nbsp;5.2. настоящей Политики Конфиденциальности.</p>
			<p>7.2. В&nbsp;случае утраты или разглашения Конфиденциальной информации Администрация сайта не&nbsp;несёт ответственность, если данная конфиденциальная информация:</p>
			<p>7.2.1. Стала публичным достоянием до&nbsp;её&nbsp;утраты или разглашения.</p>
			<p>7.2.2. Была получена от&nbsp;третьей стороны до&nbsp;момента её&nbsp;получения Администрацией сайта.</p>
			<p>7.2.3. Была разглашена с&nbsp;согласия Пользователя.</p>
			<h5>8. РАЗРЕШЕНИЕ СПОРОВ</h5>
			<p>8.1. До&nbsp;обращения в&nbsp;суд с&nbsp;иском по&nbsp;спорам, возникающим из&nbsp;отношений между Пользователем сайта https://mac.yarokcoach.&nbsp;ru/&nbsp;и&nbsp;Администрацией сайта, обязательным является предъявление претензии (письменного предложения о&nbsp;добровольном урегулировании спора).</p>
			<p>8.2.Получатель претензии в&nbsp;течение 30&nbsp;календарных дней со&nbsp;дня получения претензии, письменно уведомляет заявителя претензии о&nbsp;результатах рассмотрения претензии.</p>
			<p>8.3. При не&nbsp;достижении соглашения спор будет передан на&nbsp;рассмотрение в&nbsp;судебный орган в&nbsp;соответствии с&nbsp;действующим законодательством Республики Беларусь.</p>
			<p>8.4. К&nbsp;настоящей Политике конфиденциальности и&nbsp;отношениям между Пользователем и&nbsp;Администрацией сайта применяется действующее законодательство.</p>
			<h5>9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</h5>
			<p>9.1. Администрация сайта вправе вносить изменения в&nbsp;настоящую Политику конфиденциальности без согласия Пользователя.</p>
			<p>9.2. Новая Политика конфиденциальности вступает в&nbsp;силу с&nbsp;момента ее&nbsp;размещения на&nbsp;Сайте https://mac.yarokcoach.&nbsp;ru/, если иное не&nbsp;предусмотрено новой редакцией Политики конфиденциальности.</p>

			<h5>10. ФАЙЛЫ COOKIE</h5>
			<p><strong>Что такое файлы Cookie?</strong></p>
			<p>Файлы Cookie&nbsp;— это небольшие текстовые файлы, которые сохраняют информацию на&nbsp;жестком диске вашего компьютера или в&nbsp;браузере, с&nbsp;помощью которой мы&nbsp;можем узнать, что вы&nbsp;посетили наш веб-сайт. Они помогают сохранять ваши предпочтения на&nbsp;нашем веб-сайте. Файл cookie часто включает случайно генерируемый номер, который сохраняется на&nbsp;вашем устройстве. Многие файлы cookie автоматически удаляются после закрытия сайта.</p>
			<p><strong>Использование файлов Cookie</strong></p>
			<p>На&nbsp;данном веб-сайте не&nbsp;сохраняется никакая информация, с&nbsp;помощью которой мы&nbsp;могли&nbsp;бы идентифицировать отдельных пользователей без их&nbsp;согласия. Любые файлы cookie на&nbsp;данном веб-сайте используются только во&nbsp;время конкретной сессии или для сохранения предпочтений пользователя. Файлы сookie не&nbsp;передаются третьим сторонам.</p>
		</div>
	  </b-modal>
	</div>
</template>

<script>

import { BModal } from 'bootstrap-vue'
export default {
	name: "App",
	data: ()=> ({
		show: false,
		showConfidential: false,
	}),
	components: {
		BModal
	},
	mounted() {
		this.setRightHeight('.what-you-know__content', 0, '.hero', 56, '.what-you-know__wrapper');
		this.setRightHeight('.order__content', 230, '.about-presenter', 210, '.order__wrapper');
	},

	methods: {
		setRightHeight(content, contentPlus, upperSection, pBottom, wrapper) {
			const Content = app.querySelector(content);
			const UpperSection = app.querySelector(upperSection);
			const Wrapper = app.querySelector(wrapper);
			const ContentHeight = Content.clientHeight;
			Wrapper.style.height = `${ContentHeight/2 + 34}px`;
			UpperSection.style.paddingBottom = `${ContentHeight/2 + pBottom}px`;
			Content.style.top = `-${ContentHeight/2 + contentPlus}px`;
		},
}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
#app {
	font-family: "Roboto", sans-serif;
	/* text-align: center; */
	/* -webkit-font-smoothing: antialiased; */
	/* -moz-osx-font-smoothing: grayscale; */
	/* color: #2c3e50; */
	/* margin-top: 60px; */
}
.hero,
.order {
	padding-top: 28px;
	padding-bottom: 260px;
	/* background: rgb(180, 176, 176); */
}
.hero__section-title {
	font-size: 20px;
	line-height: 24px;
	color: rgba(31, 101, 153, 0.8);
}
.hero__title {
	font-weight: 500;
	font-size: 28px;
	line-height: 32px;
	letter-spacing: -0.0075em;
	color: #1f6599;
	margin: 0 auto;
	max-width: 500px;
	margin-bottom: 20px;
}
.hero__data {
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	color: #1f6599;
}
.hero__button {
	display: block;
	width: 288px;
	margin: 0 auto;
	margin-top: 26px;
	padding: 7px 40px 8px;
	border: 2px solid #1f6599;
	border-radius: 4px;
	font-weight: 500;
	color: #1f6599;
	text-decoration: none;
}
.hero__button:hover {
	color: #1f6599;
}
.what-you-know,
.about-presenter {
	/* height: 700px; */
  /* background: #000; */
	background: #8baec8;
}
.what-you-know__wrapper,
.order__wrapper {
	position: relative;
	padding: 15px;
	height: 300px;
}
.what-you-know__content,
.order__content {
	position: absolute;
	left: 0;
	top: -204px;
	width: 100%;
	padding: 34px 16px;
	background: #f5f2ee;
	border-radius: 15px;
}
.what-you-know__title,
.order__title {
	font-weight: 500;
	font-size: 24px;
	color: #1f6599;
  margin-bottom: 16px;
}
.what-you-know__descr {
	margin: 0;
	list-style-image: url("./assets/bullet.svg");
}
.what-you-know__benefit {
	line-height: 20px;
	color: #374956;
  margin-top: 8px;
}
.about-presenter__title {
	font-weight: 500;
	font-size: 24px;
	color: #F9FCFF
}
.about-presenter__foto {
    /* margin-top: 149px; */
    width: 187px;
    height: 187px;
    background: url(./assets/foto_Yaroslava.png) center center/cover no-repeat;
    border-radius: 100%;
    margin: auto;
		margin-bottom: 22px;
  }
.about-presenter__descr {
	line-height: 20px;
	color: #EEF4F9;
}
.order,
.footer {
	background: #374956;
}
.order__surname,
.order__name,
.order__phone,
.order__email  {
	border-color: rgba(34, 54, 69, 0.8)!important;
	background: none!important;
	color: rgba(34, 54, 69, 0.6)!important;
}
.order__surname:focus-visible,
.order__name:focus-visible,
.order__phone:focus-visible,
.order__email:focus-visible {
	outline: none!important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
}

.order__submit-button,
.accept-agree-btn a:first-child {
	text-transform: none!important;
	background: #1F6599!important;
	color: #EEF4F9!important;
	font-weight: 500!important;
	border: none;
	border-radius: 4px;
	box-shadow:none!important;
	text-decoration: none;
}
.accept-agree-btn a:last-child {
	display: block;
	text-transform: none!important;
	margin: 0 auto;
	border: 2px solid #1f6599;
	border-radius: 4px;
	font-weight: 500!important;
	color: #1f6599!important;
	background: none!important;
	box-shadow:none!important;
	text-decoration: none;
}
.agree-box {
	margin-bottom: 30px;
  padding-left: 32px;
}

.agree-box label {
	display: flex;
	font-size: 14px;
	line-height: 20px;
	color: rgba(34, 54, 69, 0.8);
	float: none!important;;
}

.agree-box label input[type=checkbox]{
  -webkit-appearance: none;
	-moz-appearance: none;
	display: inline-block;
  width: 22px;
  height: 20px;
  border: 2px solid rgba(31, 101, 153, 0.8);
  border-radius: 2px;
  margin-right: 11px;
  background-repeat: no-repeat;
  background-position: center center;
	transition: background 0.3s ease;
}
.agree-box label input[type=checkbox]:checked   {
  border: 2px solid #0A5287;
  background-image: url("./assets/chboxcross.svg");
  background-repeat: no-repeat;
  background-position: center center;
}
.footer__wrapper {
	display: block;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: flex-start;
}
.footer__logo {
	margin-bottom: 34px;
}
.footer__text {
	line-height: 20px;
	color: rgba(249, 252, 255, 0.55);
	margin-bottom: 8px;
}
.footer__contacts{
	margin-top: -10px;
}
.footer__fio {
		margin-top: -5px;
		margin-bottom: 28px;
}
.footer__contact-title {
	color: #F9FCFF;
}
.footer__contacts a{
	text-decoration: none;
	color: rgba(249, 252, 255, 0.55)!important;
}
.footer__contacts {
	margin-bottom: 24px;
}
.footer__therms-privacy {
	margin-bottom: 28px;
	text-decoration: none;
}
.footer__therms-privacy a{
	text-decoration: none;
	color: rgba(249, 252, 255, 0.55)!important;
}
.footer__copyright {
    line-height: 20px;
    color: rgba(249, 252, 255, 0.4);
}
.footer__copyright a{
      color: rgba(249, 252, 255, 0.4)!important;
      text-decoration: none;
      border-bottom: 1px solid rgba(249, 252, 255, 0.4);
}
.text {
	font-family: "Roboto", sans-serif;
}
.close {
	background: #fff;
	border: none;
}
.visually-hidden {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
}
</style>
