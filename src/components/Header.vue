<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__burger burger" id="burger" @click="menuToggle">
        <span class="visually-hidden">Открыть меню</span>
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
        <img class="header__logo-image" src="../assets/logo.jpg" alt="Just Do Eat Logo">
      </div>

      <nav class="header__navigation navigation" id="navigation">
        <router-link class="navigation__link" to="/">
          Главная
        </router-link>
        <router-link class="navigation__link" to="/about">
          О нас
        </router-link>
        <router-link class="navigation__link" to="/bonuses">
          Бонусная система
        </router-link>
        <router-link class="navigation__link" to="/prices">
          Цены
        </router-link>
      </nav>
    
      <div class="header__contacts">
        <a class="header__phone" href="tel:+79781115865">
          +7 978 111 58 65
        </a>
        <ul class="header__socials socials">
          <li class="socials__item">
            <a target="_blank" href="viber://chat?number=%2B79781115865" class="socials__icon">
              <img src="../assets/socials/viber.svg" alt="">
            </a>
          </li>
          <li class="socials__item">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=79781115865" class="socials__icon">
              <img src="../assets/socials/whatsapp.svg" alt="">
            </a>
          </li>
          <li class="socials__item">
            <a target="_blank" href="https://telegram.me/justdoeat82" class="socials__icon">
              <img src="../assets/socials/telegram.svg" alt="">
            </a>  
          </li>
          <li class="socials__item">
            <a target="_blank" href="https://www.instagram.com/invites/contact/?i=2xrx06iimmol&utm_content=ise3i6h" class="socials__icon">
              <img src="../assets/socials/instagram.svg" alt="">
            </a>
          </li>
        </ul>
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
    border-bottom: 1px solid #cecece;
  }

  .header__wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    max-width: 1440px;
    margin: 0 auto;
    padding: 10px 50px;
  }

  .header__burger {
    display: none;
    width: 40px;
    height: 40px;
  }

  .burger path {
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
    flex-basis: 80px;
    margin-right: 50px;
  }

  .header__navigation {
    margin-right: 50px;
  }

  .navigation__link {
    position: relative;
    display: inline-block;
    margin-right: 15px;
    transition: opacity 0.2s;
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
    bottom: -1px;
    width: 100%;
    height: 2px;
    background-color: var(--brand-color);
  } 

  .header__contacts {
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    text-align: right;
  }

  .header__phone {
    display: inline-block;
    margin-right: 20px;
    font-size: 18px;
    font-weight: 700;
  }

  .header__socials {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .socials__item {
    display: inline-block;
    margin-right: 10px;
  }

  .socials__item:last-child {
    margin-right: 0;
  }

  .socials__icon {
    display: inline-block;
    width: 20px;
  } 

  @media (max-width: 1050px) {
    .header__wrapper {
      justify-content: space-between;
      align-items: center;
      padding-right: 40px;
      padding-left: 40px;
    }

    .header__burger {
      display: block;
    }

    .header__logo {
      margin-right: 0;
      transform: translateX(50%);
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

    .header__contacts {
      display: block;
      margin-left: 0;
    }

    .header__phone {
      margin-right: 0;
      margin-bottom: 3px;
    }
  }

  @media (max-width: 768px) {
    .header__wrapper {
      padding: 10px 20px;
    }

    .header__logo {
      flex-basis: 70px;
      transform: translateX(0);
    }

    .header__contacts {
      flex-basis: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      margin-bottom: 0;
      padding: 10px 0 0;
      border-top: 1px solid #cecece;
    }
  }

  @media (max-width: 414px) {
    .header__phone {
      font-size: 18px;
    }

    .socials__icon {
      width: 25px;
    }
  }
</style>