<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__burger burger" id="burger" @click="menuToggle">
        <svg class="burger__icon" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path id="burger-top" style="fill:#FF485A;" d="M479.18,91.897H32.821C14.69,91.897,0,77.207,0,59.077s14.69-32.821,32.821-32.821H479.18
            c18.13,0,32.82,14.69,32.82,32.821S497.31,91.897,479.18,91.897z"/>
          <path id="burger-middle" style="fill:#FF485A;" d="M295.385,288.821H32.821C14.69,288.821,0,274.13,0,256s14.69-32.821,32.821-32.821h262.564
            c18.13,0,32.821,14.69,32.821,32.821S313.515,288.821,295.385,288.821z"/>
          <path style="fill:#FFBBC0;" d="M479.18,288.821h-52.513c-18.13,0-32.821-14.69-32.821-32.821s14.69-32.821,32.821-32.821h52.513
            c18.13,0,32.82,14.69,32.82,32.821S497.31,288.821,479.18,288.821z"/>
          <path id="burger-bottom" style="fill:#FF485A;" d="M479.18,485.744H32.821C14.69,485.744,0,471.053,0,452.923c0-18.13,14.69-32.821,32.821-32.821
            H479.18c18.13,0,32.82,14.69,32.82,32.821C512,471.053,497.31,485.744,479.18,485.744z"/>
        </svg>
      </div>
      <div class="header__logo">
        <div class="header__logo-image">
          <img src="../assets/logo.jpg" alt="Just Do Eat Logo">
        </div>
      </div>

      <nav class="header__navigation navigation" id="navigation">
        <router-link class="navigation__link" to="/">
          <span>Главная</span>
        </router-link>
        <router-link class="navigation__link" to="/about">
          <span>О нас</span>
        </router-link>
        <router-link class="navigation__link" to="/bonuses">
          <span>Бонусная система</span>
        </router-link>
        <router-link class="navigation__link" to="/prices">
          <span>Цены</span>
        </router-link>
      </nav>
    
      <div class="header__socials socials">
        <a class="socials__phone" href="tel:+79781115865">+7 978 111 58 65</a>
        <div class="socials__icons">
          <a target="_blank" href="viber://chat?number=%2B79781115865" class="socials__icon">
            <img src="../assets/socials/viber.svg" alt="">
          </a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=79781115865" class="socials__icon">
            <img src="../assets/socials/whatsapp.svg" alt="">
          </a>
          <a target="_blank" href="https://telegram.me/justdoeat82" class="socials__icon">
            <img src="../assets/socials/telegram.svg" alt="">
          </a>
          <a target="_blank" href="https://www.instagram.com/invites/contact/?i=2xrx06iimmol&utm_content=ise3i6h" class="socials__icon">
            <img src="../assets/socials/instagram.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      burgerTop: undefined,
      burgerMiddle: undefined,
      burgerBottom: undefined
    }
  },
  mounted(){
    this.burgerTop = document.querySelector('#burger-top');
    this.burgerMiddle = document.querySelector('#burger-middle');
    this.burgerBottom = document.querySelector('#burger-bottom');


    setTimeout(() => {
      document.documentElement.style.setProperty('--menu-top', document.querySelector('.header').offsetHeight + 'px');
    }, 250);
    
  },
  methods:{
    menuToggle(){
      const currentPosition = document.querySelector('#navigation').classList.contains('header__navigation_opened');
      
      if(currentPosition){
        this.burgerTop.style.transform = 'rotate(0deg)';
        this.burgerMiddle.style.transform = 'translateX(0%)';
        this.burgerBottom.style.transform = 'rotate(0deg)';
        document.documentElement.style.overflow = '';
      }else{
        this.burgerTop.style.transform = 'rotate(45deg)';
        this.burgerMiddle.style.transform = 'translateX(-100%)';
        this.burgerBottom.style.transform = 'rotate(-45deg) ';
        document.documentElement.style.overflow = 'hidden';
      }

      document.querySelector('#navigation').classList.toggle('header__navigation_opened');

    }
  }
}
</script>

<style>
  .header {
    position: relative;
    min-width: 320px;
    background-color: #ffffff;
  }

  .header__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 50px 10px;
  }

  .header__burger {
    display: none;
    padding: 5px;
  }

  .burger__icon {
    width: 45px;
    height: 45px;
    margin: auto;
  }

  #burger svg path{
    transition: transform 0.4s;
  }

  #burger-top {
    transform-origin: 5% 30% 0;
  }

  #burger-bottom {
    transform-origin: 0 70% 0;
  }

  .header__logo {
    flex-shrink: 0;
    flex-basis: 120px;
    margin-right: 50px;
  }

  .logo img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .header__navigation {
    margin-right: 20px;
  }

  .navigation__link {
    display: inline-block;
    font-size: 22px;
    font-weight: 700;
    margin-right: 30px;
    padding: 5px 0;
    position: relative;
    transition: 0.2s;
  }

  .navigation__link:last-of-type {
    margin-right: 0;
  }

  .navigation__link:hover {
    opacity: 0.8; 
  }

  .navigation__link:active {
    opacity: 0.6; 
  }

  .router-link-active::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 3px;
    background-color: #f74462;
  } 

  .header__socials {
    margin-left: auto;
  }

  .socials__phone {
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 24px;
  }

  .socials__icon {
    display: inline-block;
    width: 35px;
    margin-right: 10px;
  } 

  .socials__icon:last-child {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    .header__wrapper {
      padding-right: 40px;
      padding-left: 40px;
    }

    .header__logo {
      margin-right: 40px;
    }
  }

  @media(max-width: 992px) {
    .header__wrapper {
      justify-content: center;
      align-items: center;
      padding: 15px 40px;
    }

    .header__logo {
      position: absolute;
      right: 50%;
      width: 120px;
      max-height: 100%;
      transform: translateX(50%);
    }

    .header__burger {
      display: flex;
    }

    .header__navigation {
      z-index: 2;
      position: absolute;
      left: 0;
      top: 100%;
      left: -100%;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      min-height: 400px;
      margin-right: 0;
      padding: 20px 40px;
      background-color: #ffffff;
      overflow: scroll;
      transition: transform 0.4s;
    }

    .header__navigation_opened {
      transform: translateX(100%);
    }

    .navigation__link {
      position: relative;
      display: block;
      margin-right: 0;
      padding: 20px 0;
      border-bottom: 1px solid #cecece;
    }

    .router-link-active::after {
      display: none;
    }  
  }

  @media (max-width: 768px) {
    .header__wrapper {
      justify-content: space-between;
      align-items: center;
      padding: 10px 40px;
    }

    .header__burger svg {
      width: 30px;
      height: 30px;
    }

    .header__logo {
      position: static;
      transform: translateX(0);
      flex-basis: 80px;
      margin-right: 0;
    }

    .header__socials {
      flex-basis: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 0;
      padding-top: 5px;
      border-top: 1px solid #cecece;
    }

    .navigation__link {
      font-size: 18px;
    }

    .socials__phone {
      flex-basis: 50%;
      margin-bottom: 0;
      font-size: 20px;
    }

    .socials__icon {
      width: 25px;
      margin-right: 8px;
    } 
  }

  @media (max-width: 480px) {
    .header__wrapper {
      padding: 10px 20px;
    }

    .header__navigation {
      padding: 20px;
    }
  }

  @media (max-width: 414px) {
    .socials__phone {
      font-size: 18px;
    }
  }
  
</style>