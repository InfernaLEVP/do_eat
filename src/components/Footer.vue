<template>
  <footer class="footer" id="contacts">
    <div class="footer__wrapper c_container">
      <div class="footer__title">Остались вопросы?</div>

      <div class="footer__contacts">
        <div class="footer__head">Контакты</div>
        <div class="phone"><a href="tel:+7 978 111 58 65">+7 978 111 58 65</a></div>
        <div class="email"><a href="mailto:info@jde.best">info@jde.best</a></div>
      </div>

      <div class="footer__socials">
        <div class="footer__head">Напишите нам</div>
        <div style="display: flex;flex-wrap: wrap;">
          <a href="#" class="button telegram"><span>telegram</span></a>
          <a href="#" class="button whatsapp"><span>facebook</span></a>
        </div>
      </div>

      <div class="footer__additional">
        <div class="footer__info-wrap">
          <div class="footer__info">
            <!-- <div class="footer__head">Информация</div> -->
            <a href="#">Договор на участие</a>
            <a href="#">Реквизиты организации</a>
            <a href="#" style="line-height: 1.1;">Согласие на обработку <br> персональных данных</a>
            <a href="#">Информация о конфиденциальности</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
  .footer{
    /* background-color: #f4f4f4; */
    background-color: #333;
    color: white;
    padding: 0 0 8rem;
    font-size: 1.6rem;
    line-height: 1.85;
    min-height: 600px;
    display: flex;
    text-align: left;
  }
  @media screen and (max-width: 992px){
    .footer{
      padding: 3rem 0 1rem;
      min-height: initial;
      overflow: hidden;
    }
    .footer a.button{
      font-size: 1.3rem;
      margin-bottom: 15px;
      margin-top: 10px;
    }
  }


  /*  */
  .footer__wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  /*  */
  .footer__title{
    padding-top: 8rem;
    padding-bottom: 2.5rem;
    font-size: 3rem;
    width: 100%;
  }
  @media screen and (max-width: 992px){
    .footer__title{
      padding-top: 0;
      padding-bottom: 0;
      line-height: var(--title-lh-sm);
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

  /*  */
  .footer__contacts{
    flex: 0.2;
    font-size: 1.8rem;
    position: relative;
    padding-top: 20px;
  } 
  .footer__contacts:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: calc(100%);
    height: 2px;
    background: #fff;
    margin: 0 auto;
  }
  @media screen and (max-width: 992px){
    .footer__contacts{
      width: 100%;
      flex: initial;
    }
  }

  /*  */
  .footer__socials{
    flex: 0.8;
    display: flex;
    flex-direction: column;
    padding-left: 5rem;
    position: relative;
    padding-top: 20px;
  }
  .footer__socials:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: calc(100%);
    height: 2px;
    background: #fff;
    margin: 0 auto;
  }
  @media screen and (max-width: 992px){
    .footer__socials{
      width: 100%;
      flex: initial;
      padding-left: 0;
      margin-top: 20px;
    }
  }

  /*  */
  .footer__head{
    font-size: 2rem;
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 992px){
    .footer__head{
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }

  /*  */
  .phone{
  }

  /*  */
  .email{
  }

  /*  */
  .telegram{
    margin-bottom: 3rem;
    width: 240px;
    margin-right: 4rem;
  }
  @media screen and (max-width: 992px){
    .telegram{
      width: 250px;
    }
  }

  /*  */
  .whatsapp{
    width: 240px;
  }
  @media screen and (max-width: 992px){
    .whatsapp{
      width: 250px;
    }
  }

  /*  */
  .footer__info-wrap{
    flex: 1;
    width: 100%;
  }
  .footer__info{
    display: flex;
    flex-wrap: wrap;
    font-size: 1.4rem;
    padding-right: 15%;
  }
  @media screen and (max-width: 992px){
    .footer__info{
      margin-top: 1rem;
    }
    .footer__info-wrap{
      width: 100%;
      flex: initial;
    }
  }

  /*  */
  .footer .footer__info a{
    line-height: 1.2;
    margin-bottom: 2rem;
    margin-right: 5rem;
    color: silver;
  }

  /*  */
  .footer a{
    transition: color .3s;
    margin-bottom: 1.5rem;
  }
  .footer a.button{
    color: #333333;
  }
  .footer a:hover{ 
    color: rgb(235, 222, 200);
  }
  .footer a.button:hover{
    background-color: rgb(235, 222, 200)!important;
    color: #333!important;
  }
  .footer__additional{
    font-size: 1.2rem;
    margin-top: 6rem;
    width: 100%;
    align-items: flex-end;
  }
  @media screen and (max-width: 992px){
    .footer__additional{
      margin-top: 1rem;
    }
  }

  .footer__info .footer__head{
    width: 100%;
  }
</style>