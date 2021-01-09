<template>
  <footer class="footer" id="contacts">
    <div class="footer__wrapper">
      <h2 class="footer__title">Остались вопросы?</h2>
      <div class="footer__block-container">
        <div class="footer__block footer__block_contacts">
          <h3 class="footer__block-title">Контакты</h3>
          <ul class="footer__block-list">
            <li class="footer__block-item">
              <a class="footer__block-link" href="tel:+7 978 111 58 65">
                +7 978 111 58 65
              </a>
            </li>
            <li class="footer__block-item">
              <a class="footer__block-link" href="mailto:info@jde.best">
                info@jde.best
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__block footer__block_socials">
          <h3 class="footer__block-title">Напишите нам</h3>
          <ul class="footer__block-list">
            <li class="footer__block-item">
              <a class="footer__button button" href="https://telegram.me/justdoeat82">
                Telegram
              </a>
            </li>
            <li class="footer__block-item">
              <a class="footer__button button" href="https://api.whatsapp.com/send?phone=79781115865">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__block footer__block_info">
          <h3 class="footer__block-title">Информация</h3>
          <ul class="footer__block-list">
            <li class="footer__block-item">
              <a class="footer__block-link" href="#">
                Договор на участие
              </a>
            </li>
            <li class="footer__block-item">
              <a class="footer__block-link" href="#">
                Реквизиты организации
              </a>
            </li>
            <li class="footer__block-item">
              <a class="footer__block-link" href="#">
                Согласие на обработку<br> 
                персональных данных
              </a>
            </li>
            <li class="footer__block-item">
              <a class="footer__block-link" href="#">
                Информация о<br>
                конфиденциальности
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {}
</script>

<style>
  .footer {
    background-color: #333333;
    color: #ffffff;
  }

  .footer__wrapper {
    max-width: 1440px;
    min-height: 200px;
    margin: 0 auto;
    padding: 100px 50px;
  }

  .footer__title {
    padding-bottom: 20px;
    font-size: 30px;
    line-height: 1.2;
    border-bottom: 1px solid #cecece;
  }

  .footer__block-container {
    display: flex;
    justify-content: space-between;
  }

  .footer__block_contacts {
    flex-basis: 200px;
  }

  .footer__block_socials {
    flex-basis: 270px;
  }

  .footer__block_info {
    flex-basis: 240px;
  }

  .footer__block-title {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.2;
  }

  .footer__block-list {
    list-style: none;
    padding: 0;
  }

  .footer__block_socials .footer__block-item {
    display: inline-block;
    margin-right: 15px;
  }

  .footer__block_socials .footer__block-item:last-child {
    margin-right: 0;
  }
  
  .footer__block-link {
    display: inline-block;
    padding: 5px 0;
    transition: 0.1s;
  }

  .footer__block-link:hover {
    color: var(--brand-color); 
  }

  .footer__block-link:active {
    opacity: 0.8;
  }

  @media (max-width: 1050px) {
    .footer__wrapper {
      padding: 80px 40px;
    }
  }

  @media (max-width: 768px) {
    .footer__wrapper {
      padding: 40px 20px;
    }

    .footer__title {
      margin-bottom: 40px;
      font-size: 22px;
    }

    .footer__block-container {
      display: block;
    }

    .footer__block:not(:last-child) {
      margin-bottom: 40px;
    }

    .footer__block-title {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
</style>