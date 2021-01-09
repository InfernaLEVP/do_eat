<template>
  <div class="home">
    <div id="lot"></div>
    <Menu />

    <!-- Perks -->
    <section class="perks">
      <div class="perks__wrapper">
        <h2 class="visually-hidden">
          Заказывая обеды в Just Do Eat, Вы получаете целый ряд дополнительных преимуществ.
        </h2>
        <ul class="perks__list">
          <li class="perks__item perks__item_time">
            <h3 class="perks__item-title">Получите 25-ый час</h3>
            <p class="perks__item-description">
              Экономьте время на готовке еды, 
              мытье посуды и походах в магазин, 
              и занимайтесь полезными или любимыми делами.
            </p>
          </li>
          <li class="perks__item perks__item_convenience">
            <h3 class="perks__item-title">Питайтесь, где удобно</h3>
            <p class="perks__item-description">
              Блюда герметично упакованы в контейнеры, 
              которые можно брать с собой на работу или учебу.
            </p>
          </li>
          <li class="perks__item perks__item_delight">
            <h3 class="perks__item-title">Наслаждайтесь едой</h3>
            <p class="perks__item-description">
              Шеф-повар тщательно следит за тем, 
              чтобы блюда вам нравились. 
              Мы убираем из рационов блюда, 
              если они получают от вас низкие оценки.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <!-- ./Perks -->

    <!-- Seo Text -->
    <div class="seo">
      <div class="seo__wrapper">
        <h2 class="seo__title">
          Знакомьтесь, Just Do Eat – один из лучших сервисов доставки обедов в Симферополе
        </h2>
        <div class="seo__container" id="seo__container">
          <p>Цель нашей компании — обеспечить вас готовой и вкусной едой на каждый день.</p>
          <p>Больше не нужно самостоятельно решать, какие блюда приготовить на обед и что взять на работу. Мы сами доставим вкусную готовую еду. Вам необходимо только оформить заявку и указать адрес доставки.</p>
          <p>Just Do Eat – это вкусно, модно и разнообразно<br> Ежедневная доставка обедов — это очень удобно. Наш курьер привезет питание в выбранном вами трехчасовом интервале с 12 до 14:00. Вы сами определяете необходимый адрес доставки, который можно менять, сообщив об этом за сутки. Порционное питание от Just Do Eat всегда выглядит аккуратно и аппетитно.</p>
          <p>Вы можете быть уверенными, что ваша еда будет:</p>
          <ul class="seo__list">
            <li>Свежей (продукты проходят проверку на этапах получения от поставщика, доставки на кухню и после приготовления, а заказ готовится в ночь непосредственно перед отправкой к вам);</li>
            <li>Вкусной (позволит испытать чувство полного насыщения);</li>
            <li>Разнообразной (наше меню постоянно обновляется).</li>
          </ul>
          <p>Хранить пищу рекомендуется в холодильнике в упаковке от Just Do Eat, которую можно использовать для разогрева блюда в микроволновой печи.</p>
          <h3 class="seo__subtitle">Выгодно ли это? Давайте проведем эксперимент!</h3>
          <p>Сайт www.JDE.best, где заказать готовый рацион можно в несколько кликов, предоставляет возможность недорого получать вкусный обед на каждый день. Если вы сомневаетесь, выгодно ли это, мы предлагаем провести эксперимент. Сравните стоимость месяца готового питания от Just Do Eat с затратами на такой же срок при самостоятельной готовке или посещении ресторанов. При этом постарайтесь купить продукты и сделать из них блюда, которые не будут повторяться. Мы думаем, что экономия при доставке готовой пищи будет ощутима. Важно также учитывать затраты вашего времени и сил, стоимость перевозки продуктов и прочие издержки. А компания Just Do Eat предоставляет бесплатную доставку по г. Симферополю.</p>
        </div>
        <button class="seo__button button" @click="seoToggle">Подробнее</button>
      </div>
    </div>
    <!-- ./Seo Text -->

    <!-- Payment -->
    <!-- <div class="perks" style="display:none;">
      <div class="perks__wrapper">

        <div class="perks__title">Оплата и доставка</div>
        <div class="perk">
        
          <div class="perk__icon"><img src="../assets/perks/delivery-guy.svg" alt=""></div>
          <div class="perk__name">График доставки</div>
          <div class="perk__description">Вы будете получать блюда в удобный вам двухчасовой интервал с 6:00 до 12:00 в течение всего периода подписки раз в 3 дня (по линейке Classic) или раз в 2 дня (по линейке Platinum). Или по 5-ти и 20-ти дневным программам только по будням в ПН и ЧТ (Classic) или ПН, СР, ПТ (Platinum).</div>
        
        </div>

        <div class="perk">
        
          <div class="perk__icon"><img src="../assets/perks/schedule.svg" alt=""></div>
          <div class="perk__name">«Дни заморозки»</div>
          <div class="perk__description">При заказе любой нашей линейки от 12 дней вы получите так называемые «дни заморозки», с помощью которых вы сможете пропустить, например, доставку рациона на выходные. По 20-ти дневной программе заморозка возможна только по неделям.</div>
        
        </div>

        <div class="perk">
        
          <div class="perk__icon"><img src="../assets/perks/cash.svg" alt=""></div>
          <div class="perk__name">Способы оплаты</div>
          <div class="perk__description">Оплачивайте любым удобным вам способом: онлайн на сайте или наличными курьеру.</div>
        
        </div>
      
      </div>
    </div> -->
    <!-- ./Payment -->

    <!-- Bonus -->
    <div class="bonus">
      <div class="bonus__wrapper">
        <h2 class="bonus__title">Бонусная программа</h2>
        <ul class="bonus__list">
          <li class="bonus__item bonus__item_payment">
            <p class="bonus__item-text">
              Оплачивайте заказы
              любым удобным способом
            </p>
          </li>
          <li class="bonus__item bonus__item_cash-back">
            <p class="bonus__item-text">
              Получайте 3% с каждого заказа
              в виде баллов в личном кабинете
            </p>
          </li>
          <li class="bonus__item bonus__item_discount">
            <p class="bonus__item-text">
              Оплачивайте баллами до 50%
              стоимости каждого заказа
            </p>
          </li>
        </ul>
        <a class="bonus__button button" href="#">
          Хочу попробовать
        </a>
      </div>
    </div>
    <!-- ./Bonus -->

    <!-- Subscribe -->
    <div class="subscribe">
      <div class="subscribe__wrapper">
        <div class="subscribe__text-block">
          <h2 class="subscribe__title">Подпишитесь на наши соцсети</h2>
          <p class="subscribe__description">
            Чтобы своевременно получать информацию
            о новых блюдах, акциях, конкурсах и мероприятиях.
          </p>
        </div>
        <ul class="subscribe__list">
          <li class="subscribe__list-item">
            <a href="viber://chat?number=%2B79781115865" class="subscribe__item-icon">
              <img src="../assets/socials/viber.svg" alt="">
            </a>
          </li>
          <li class="subscribe__list-item">
            <a href="https://api.whatsapp.com/send?phone=79781115865" class="subscribe__item-icon">
              <img src="../assets/socials/whatsapp.svg" alt="">
            </a>
          </li>
          <li class="subscribe__list-item">
            <a href="https://telegram.me/justdoeat82" class="subscribe__item-icon">
              <img src="../assets/socials/telegram.svg" alt="">
            </a>
          </li>
          <li class="subscribe__list-item">
            <a href="https://www.instagram.com/invites/contact/?i=2xrx06iimmol&utm_content=ise3i6h" class="subscribe__item-icon">
              <img src="../assets/socials/instagram.svg" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- ./Subscribe -->
  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  },
  data(){
    return{
      seoContainer: undefined,
    }
  },
  mounted(){
    this.seoContainer = document.querySelector('#seo__container');
  },
  methods: {
    seoToggle(){
      this.seoContainer.classList.toggle('opened');
    }
  }
}
</script>

<style>
  /* #region perks */
  .perks {
    background-color: var(--secondary-bc-color);
  }
  
  .perks__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 100px 50px;
  }

  .perks__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    list-style: none;
  }

  .perks__item {
    width: 280px;
    padding-top: 80px;
    background-position: 40% 0;
    background-repeat: no-repeat;
    background-size: 70px;
  }

  .perks__item_time {
    background-image: url(../assets/perks/time-passing.svg);
    background-size: 50px;
  }

  .perks__item_convenience {
    background-image: url(../assets/perks/container.svg);
    background-size: 50px;
  }

  .perks__item_delight {
    background-image: url(../assets/perks/cook-book.svg);
    background-size: 50px;
  }

  .perks__item-title {
    font-size: 18px;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .perks__item-description {
    line-height: 1.5;
  }

  @media (max-width: 1050px) {
    .perks__wrapper {
      padding: 80px 40px;
    } 

    .perks__list {
      justify-content: space-evenly;
    }

    .perks__item {
      margin: 25px;
    }
  }

  @media (max-width: 768px) {
    .perks__wrapper {
      padding: 40px 20px;
    }

    .perks__item-title {
      text-align: center;
    }
    
    .perks__list {
      flex-direction: column;
      align-items: center;
    }

    .perks__item {
      width: 100%;
      margin: 0;
      margin-bottom: 50px;
      padding-top: 60px;
      background-position: 50% 0;
      background-repeat: no-repeat;
      background-size: 50px;
    }

    .perks__item:last-child {
      margin-bottom: 0;
    }

    .perks__item-title {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  /* #endregion */
  /* #region SEO Text */
  .seo__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 100px 50px;
  }

  .seo__title {
    font-size: 30px;
    line-height: 1.2;
  }

  .seo p {
    line-height: 1.7;
  }

  .seo__list li {
    margin-bottom: 8px;
    line-height: 1.6;
  }

  .seo__subtitle {
    font-size: 18px;
  }

  .seo__button {
    display: none;
    width: 280px;
  }

  .seo__button:hover {
    color: var(--brand-color);
    border-color: var(--brand-color);
  }

  .seo__button:active {
    opacity: 0.6;
  }

  @media (max-width: 1050px) {
    .seo__wrapper {
      padding: 80px 40px;
    }

    .seo__container {
      height: fit-content;
      max-height: 220px;
      margin-bottom: 80px;
      overflow: hidden;
    }

    .seo__container.opened {
      max-height: 900vh;
    }

    .seo__button {
      display: inline-block;
    }
  }

  @media (max-width: 768px) {
    .seo__wrapper {
      padding: 40px 20px;
    }

    .seo__title {
      font-size: 22px;
    }

    .seo__subtitle {
      font-size: 16px;
    }

    .seo__button {
      width: 100%;
    }
  }
   /* #endregion */

  /* #region Bonus */
  .bonus {
    position: relative;
    background-color: var(--secondary-bc-color);
  }

  .bonus__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 100px 50px;
  }

  .bonus__title {
    margin-bottom: 50px;
    font-size: 30px;
    line-height: 1.2;
  }

  .bonus__list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 100px;
    padding: 0;
  }

  .bonus__item {
    flex-basis: 240px;
    max-width: 240px;
    padding-top: 70px;
    line-height: 1.7;
  }

  .bonus__item_payment {
    background: url('../assets/bonuses/ruble.svg') 40% 0 no-repeat;
    background-size: 50px;
  }

  .bonus__item_cash-back {
    background: url('../assets/bonuses/cash-back.svg') 40% 0 no-repeat;
    background-size: 50px;
  }

  .bonus__item_discount {
    background: url('../assets/bonuses/discount.svg') 40% 0 no-repeat;
    background-size: 50px;
  }

  .bonus__button {
    width: 280px;
  }

  .bonus__button:hover {
    color: var(--brand-color);
    border-color: var(--brand-color);
  }

  .bonus__button:active {
    opacity: 0.6;
  }

  @media (max-width: 1050px) {
    .bonus__wrapper {
      padding: 80px 40px;
    }
  }

  @media (max-width: 768px) {
    .bonus__wrapper {
      padding: 40px 20px;
    }

    .bonus__title {
      font-size: 22px;
    }

    .bonus__list {
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
    }

    .bonus__item {
      flex-basis: initial;
      margin-bottom: 40px;
    }

    .bonus__item:last-child {
      margin-bottom: 0;
    }

    .bonus__button {
      width: 100%;
    }
  }
  /* #endregion */

  /* #region Subscribe */
  .subscribe__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 100px 50px;
  }

  .subscribe__text-block {
    flex-basis: 500px;
    max-width: 500px;
    line-height: 1.5;
  }

  .subscribe__title {
    font-size: 30px;
    line-height: 1.2;
  }

  .subscribe__list {
    flex-basis: 350px;
    max-width: 350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    list-style: none;
  }

  .subscribe__list-item {
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .subscribe__list-item:last-child {
    margin-right: 0;
  }

  .subscribe__item-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
  }

  .subscribe__item-icon:hover {
    opacity: 0.8;
  }

  .subscribe__item-icon:active {
    opacity: 0.6;
  }

  @media (max-width: 1050px) {
    .subscribe__wrapper {
      display: block;
      padding: 80px 40px
    }

    .subscribe__text-block {
      flex-basis: initial;
      max-width: 100%;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 768px) {
    .subscribe__wrapper {
      padding: 40px 20px;
    }

    .subscribe__title {
      font-size: 22px;
    }

    .subscribe__list {
      flex-basis: 270px;
      max-width: 270px;
      justify-content: space-between;
    }

    .subscribe__item-icon {
      width: 35px;
      height: 35px;
    }
  }
  /* #endregion */
</style>