<template>
  <div class="home">
    <div id="lot"></div>
    <Menu />

    <!-- Perks -->
    <div class="perks">
      <div class="perks__wrapper">

        <div class="perk">
        
          <div class="perk__icon"><img src="../assets/perks/time-passing.svg" alt=""></div>
          <div class="perk__name">Получите 25-ый час</div>
          <div class="perk__description">Экономьте время на готовке еды, мытье посуды и походах в магазин, и занимайтесь полезными или любимыми делами.</div>
        
        </div>

        <div class="perk">
        
          <div class="perk__icon"><img src="../assets/perks/container.svg" alt=""></div>
          <div class="perk__name">Питайтесь, где удобно</div>
          <div class="perk__description">Блюда герметично упакованы в контейнеры, которые можно брать с собой на работу или учебу.</div>
        
        </div>

        <div class="perk">
        
          <div class="perk__icon"><img src="../assets/perks/cook-book.svg" alt=""></div>
          <div class="perk__name">Наслаждайтесь едой</div>
          <div class="perk__description">Шеф-повар тщательно следит за тем, чтобы блюда вам нравились. Мы убираем из рационов блюда, если они получают от вас низкие оценки.</div>
        
        </div>
      
      </div>
    </div>
    <!-- ./Perks -->

    <!-- Subscribe -->
    <div class="subscribe">
      <div class="subscribe__wrapper">
        <div class="subscribe__text">
          <div class="subscribe__title">Подпишитесь на наши соцсети</div>
          <div class="subscribe__description">Чтобы своевременно получать информацию о новых блюдах, акциях, конкурсах и мероприятиях.</div>
        </div>
        <div class="subscribe__socials">
          <a href="viber://chat?number=%2B79781115865" class="subscribe-icon">
            <img src="../assets/socials/viber.svg" alt="">
          </a>
          <a href="https://api.whatsapp.com/send?phone=79781115865" class="subscribe-icon">
            <img src="../assets/socials/whatsapp.svg" alt="">
          </a>
          <a href="https://telegram.me/justdoeat82" class="subscribe-icon">
            <img src="../assets/socials/telegram.svg" alt="">
          </a>
          <a href="https://www.instagram.com/invites/contact/?i=2xrx06iimmol&utm_content=ise3i6h" class="subscribe-icon">
            <img src="../assets/socials/instagram.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- ./Subscribe -->

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
      <div class="bonus__title">Бонусная система</div>
      <div class="bonus__wrapper">

        <div class="bonus__item bonus__item-text">
          <strong>Оплачивайте заказы</strong> <br>
          любым удобным способом
        </div>

        <div class="bonus__item bonus__item-image">
          <div class="bonus__item-image-dashed"></div>
          <img class="main-image" src="../assets/bonuses/ruble.svg" alt="">
          <img src="../assets/bonuses/line-bottom.svg" alt="">
        </div>

        <div class="bonus__item bonus__item-text">
          <strong>Получайте 3%</strong>с каждого заказа<br>
          в виде баллов в личном кабинете
        </div>

        <div class="bonus__item bonus__item-image">
          <div class="bonus__item-image-dashed"></div>
          <img class="line-image" src="../assets/bonuses/line-top.svg" alt="">
          <img class="main-image" src="../assets/bonuses/discount.svg" alt="">
        </div>

        <div class="bonus__item bonus__item-text">
          <strong>Оплачивайте баллами до 50%</strong><br>
          стоимости каждого заказа
        </div>

      </div>

      <div class="bonus__more"><a href="#">Хочу попробовать</a></div>
    </div>
    <!-- ./Bonus -->

    <!-- Seo Text -->
    <div class="seo">
      <div class="seo__wrapper">
        <div class="seo__title"><h2>Знакомьтесь, Just Do Eat – один из лучших сервисов доставки обедов в Симферополе</h2></div>

        <div class="seo__container" id="seo__container">
          <p>Цель нашей компании — обеспечить вас готовой и вкусной едой на каждый день. </p>

          <p> Больше не нужно самостоятельно решать, какие блюда приготовить на обед и что взять на работу. Мы сами доставим вкусную готовую еду. Вам необходимо только оформить заявку и указать адрес доставки.</p>

          <p>Just Do Eat – это вкусно, модно и разнообразно <br> Ежедневная доставка обедов — это очень удобно. Наш курьер привезет питание в выбранном вами трехчасовом интервале с 12 до 14:00. Вы сами определяете необходимый адрес доставки, который можно менять, сообщив об этом за сутки. Порционное питание от Just Do Eat всегда выглядит аккуратно и аппетитно.</p>
          
          <p>Вы можете быть уверенными, что ваша еда будет:</p>
          
          <ul>
            <li>свежей (продукты проходят проверку на этапах получения от поставщика, доставки на кухню и после приготовления, а заказ готовится в ночь непосредственно перед отправкой к вам);</li>
            <li>вкусной (позволит испытать чувство полного насыщения);</li>
            <li>разнообразной (наше меню постоянно обновляется).</li>
          </ul>

          <p>Хранить пищу рекомендуется в холодильнике в упаковке от Just Do Eat, которую можно использовать для разогрева блюда в микроволновой печи.</p>

          <h2>Выгодно ли это? Давайте проведем эксперимент!</h2>

          <p>Сайт www.JDE.best, где заказать готовый рацион можно в несколько кликов, предоставляет возможность недорого получать вкусный обед на каждый день. Если вы сомневаетесь, выгодно ли это, мы предлагаем провести эксперимент. Сравните стоимость месяца готового питания от Just Do Eat с затратами на такой же срок при самостоятельной готовке или посещении ресторанов. При этом постарайтесь купить продукты и сделать из них блюда, которые не будут повторяться. Мы думаем, что экономия при доставке готовой пищи будет ощутима. Важно также учитывать затраты вашего времени и сил, стоимость перевозки продуктов и прочие издержки. А компания Just Do Eat предоставляет бесплатную доставку по г. Симферополю.</p>
        
        </div>

        <button class="seo__more" @click="seoToggle">Подробнее</button>

      </div>
    </div>
    <!-- ./Seo Text -->

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
  .perks{
    background: #333;
    color: #fff;
    padding: 4rem 4rem;
    font-size: 1vw;
  }
  @media(max-width: 992px){
    .perks{
      padding: 4rem 1.8rem;
    }
  }

  .perks__wrapper{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media(max-width: 992px){
    .perks__wrapper{
      flex-wrap: wrap;
    }
  }

  .perks__title{
    width: 100%;
    margin-bottom: 1.73611rem;
    font-size: 2.63889rem;
    letter-spacing: -.03em;
  }
  @media(max-width: 992px){
    .perks__title{
      width: 100%;
    }
  }

  .perk{
    width: 30%;
  }
  @media(max-width: 992px){
    .perk{
      width: 100%;
      margin-bottom: 4.5rem;
    }
  }

  .perk__icon{
    margin-bottom: 1.80556rem;
    min-height: 63px;
  }
  @media(max-width: 992px){
    .perk__icon{

    }
  }

  .perk__name{
    margin-bottom: .55556rem;
    line-height: 121.052632%;
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    padding-bottom: .5rem;
    font-size: 1.31944rem;
    font-weight: 700;
  }
  @media(max-width: 992px){
    .perk__name{

    }
  }

  .perk__description{
    font-weight: 700;
    font-size: .97222rem;
    line-height: 121.428571%;
  }
  @media(max-width: 992px){
    .perk__description{

    }
  }
  /* #endregion */

  /* #region Subscribe */
  .subscribe{
    padding: 4rem 4rem;
    font-size: 1vw;
  }
  @media(max-width:992px){
    .subscribe{
      padding: 4rem 1.8rem;
    }
  }

  .subscribe__wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media(max-width:992px){
    .subscribe__wrapper{
      flex-wrap: wrap;
    }
  }

  .subscribe__text{
    width: 40%;
  }
  @media(max-width:992px){
    .subscribe__text{
      width: 100%;
    }
  }

  .subscribe__title{
    margin-bottom: 1.25rem;
    font-size: 2.08333rem;
    line-height: 94%;
    letter-spacing: -.03em;
  }
  @media(max-width:992px){
    .subscribe__title{

    }
  }

  .subscribe__description{
    font-size: .97222rem;
    line-height: 121.428571%;
  }
  @media(max-width:992px){
    .subscribe__description{

    }
  }

  .subscribe__socials{
    display: flex;
    justify-content: space-around;
    width: 40%;
    margin-top: 40px;
  }
  @media(max-width:992px){
    .subscribe__socials{
      width: 100%;
    }
  }

  .subscribe-icon{
    width: 60px;
  }
  @media(max-width:992px){
    .subscribe-icon{
      width: 50px;
      margin: 0 10px;
    }
  }
  /* #endregion */

  /* #region Bonus */
  .bonus{
    padding: 4rem 4rem;
  }
  @media(max-width: 992px){
    .bonus{
      padding: 4rem 1.8rem;
    }
  }

  .bonus__title{
    margin-bottom: 1.25rem;
    font-size: 2.08333rem;
    line-height: 94%;
    letter-spacing: -.03em;
    font-weight: 700;
  }
  @media(max-width: 992px){
    .bonus__title{
      margin-bottom: 3.25rem;
    }
  }

  .bonus__wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.19444rem;
  }
  @media(max-width: 992px){
    .bonus__wrapper{
      flex-direction: column;
    }
  }

  .bonus__item{
    display: flex;
    flex-direction: column;
  }
  @media(max-width: 992px){
    .bonus__item{

    }
  }

  .bonus__item-text{
    font-size: 1.31944rem;
    line-height: 121%;
    display: inline-block;
  }
  .bonus__item-text strong{
    display: inline-block;
  }
  @media(max-width: 992px){
    .bonus__item-text{
      text-align: center;
    }
  }

  .bonus__item-image{

  }
  .bonus__item-image img.main-image{
    margin-bottom: 2.08333rem;
  }
  .bonus__item-image img.line-image{
    margin-bottom: .41667rem;
  }
  @media(max-width: 992px){
    .bonus__item-image{
      margin: 2rem 0;
    }
    .bonus__item-image img{
      display: none;
    }
    .bonus__item-image img.main-image{
      display: flex;
    }
  }

  .bonus__more{
    font-size: 1.25rem;
    line-height: 122.222222%;
    letter-spacing: -.005em;
    color: #fb5a16;
    font-weight: 900;
  }
  @media(max-width: 992px){
    .bonus__more{

    }
  }

  .bonus__item-image-dashed{
    display: none;
    height: 5rem;
    border-left: 1px dashed #fb5a16;
    box-sizing: border-box;
    position: relative;
    width: fit-content;
    margin: 0 auto;
  }
  .bonus__item-image-dashed:before{
    content: " ";
    width: 5px;
    height: 5px;
    background-color: #fb5a16;
    border-radius: 100%;
    position: absolute;
    left: -2.5px;
    top: 0;
  }
  @media(max-width: 992px){
    .bonus__item-image-dashed{
      display: flex;
    }
  }

  /* #endregion */

  /* #region SEO Text */
  .seo{
    padding: 4rem 4rem;
    background-color: #f3f3f3;
  }
  .seo h2{
    margin-bottom: 2.08333rem;
    font-size: 2.08333rem;
    letter-spacing: -.03em;
    font-weight: 700;
    color: #333;
  }
  @media(max-width:992px){
    .seo{
      padding: 4rem 1.8rem;
    }
    .seo h2{
      font-size: 1.58333rem;
    }
  }

  .seo__wrapper{

  }
  @media(max-width:992px){
    .seo__wrapper{

    }
  }

  .seo__title{

  }
  @media(max-width:992px){
    .seo__title{

    }
  }

  .seo__container{
    max-height: 30vh;
    height: fit-content;
    transition: max-height 1.4s;
    overflow: hidden;
    color: #9da3ad;
    font-size: .97222rem;
    font-weight: 500;
  }
  .seo__container.opened{
    max-height: 900vh;
  }
  @media(max-width:992px){
    .seo__container{

    }
  }

  .seo__more{
    color: #fb5a16;
    font-size: .90278rem;
    font-weight: 700;
    padding: 0;
    cursor: pointer;
    margin-top: 2.5rem;
  }
  @media(max-width:992px){
    .seo__more{

    }
  }

  /* #endregion */
</style>