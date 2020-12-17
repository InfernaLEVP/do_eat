<template>
  <header class="header">
    <div class="logo">
      <div class="logo__image">
        <img src="../assets/logo.jpg" alt="Just Do Eat Logo">
      </div>
      <h1>Доставка комплексных обедов</h1>
    </div>
    <!-- <nav class="menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <div class="socials">
      <div class="socials__slogan">Заказы принимаются до 11 утра</div>
      <a class="socials__phone" href="tel:+79781115865">+7 978 111 58 65</a>
      <div class="socials__icons">
        <a href="" class="icon">
          <img src="../assets/socials/viber.svg" alt="">
        </a>
        <a href="" class="icon">
          <img src="../assets/socials/whatsapp.svg" alt="">
        </a>
        <a href="" class="icon">
          <img src="../assets/socials/telegram.svg" alt="">
        </a>
        <a href="" class="icon">
          <img src="../assets/socials/instagram.svg" alt="">
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  .header{
    display: flex;
    border-bottom: 1px solid #333;
    justify-content: space-between;
    padding: 0 2rem;
  }
  @media(max-width: 992px){
    .header{
      flex-direction: column;
      padding: 0 0.5rem;
    }
  }

  .logo{
    display: flex;
  }
  @media(max-width: 992px){
    .logo{
      
    }
  }

  .logo__image{
    display: flex;
    align-items: center;
  }
  @media(max-width: 992px){
    .logo__image{
      width: 25%;
    }
  }

  .logo img{
    max-width: 10vw;
  }
  @media(max-width: 992px){
    .logo img{
      max-width: 100%;
    }
  }

  .logo h1{
    color: white;
    background: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    line-height: 1.4;
    padding: 10px 30px;
    position: relative;
    text-transform: uppercase;
    margin-left: 35px;
    font-size: 1.6rem;
  }
  @media(max-width: 992px){
    .logo h1{
      margin-left: 0px;
      width: 75%;
      padding: 7px 10px;
      text-align: left;
      font-size: 1.1rem;
    }
  }

  .logo h1:before{
    content: '';
    position: absolute;
    top: -10px;
    width: 100%;
    height: 5px;
    background: rgba(0,0,0,.6);
    left: 0;
  }
  .logo h1:after{
    content: '';
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 5px;
    background: rgba(0,0,0,.6);
    left: 0;
  }

  .socials{
    display: flex;
    flex-wrap: wrap;
    /* flex: 0.4; */
    justify-content: flex-end;
    max-width: 40%;
  }
  @media(max-width: 992px){
    .socials{
      max-width: 100%;
      margin-top: 7px;
      margin-bottom: 7px;
    }
  }

  .socials__slogan{
    width: 100%;
    text-align: end;
    font-size: 22px;
    font-weight: 700;
  }
  @media(max-width: 992px){
    .socials__slogan{
      font-size: 18px;
      text-align: center;
    }
  }

  .socials__phone{
    width: 100%;
    text-align: end;
    font-size: 20px;
    font-weight: 700;
  }
  @media(max-width: 992px){
    .socials__phone{
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .socials__icons{
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  @media(max-width: 992px){
    .socials__icons{
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .icon{
    width: 40px;
  }
  @media(max-width: 992px){
    .icon{
      display: flex;
      align-items: center;
    }
  }
</style>