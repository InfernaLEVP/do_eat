<template>
  <header class="header">
    
    <div class="logo">
      <div class="burger" id="burger" @click="menuToggle">
        <svg x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
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
      <div class="logo__image">
        <img src="../assets/logo.jpg" alt="Just Do Eat Logo">
      </div>
      <div class="logo__phone">
        <a href="tel:+79781115865">+7 978 111 58 65</a>
      </div>
      <!-- <h1>Доставка комплексных обедов</h1> -->
    </div>

    <nav class="navigation" id="navigation">
      <router-link class="navigation__link" to="/"><span>Главная</span></router-link>
      <router-link class="navigation__link" to="/about"><span>О нас</span></router-link>
      <router-link class="navigation__link" to="/bonuses"><span>Бонусная система</span></router-link>
      <router-link class="navigation__link" to="/prices"><span>Цены</span></router-link>

      <div class="navigation-socials">
        <a class="navigation-socials__phone" href="tel:+79781115865"><span>+7 978 111 58 65</span></a>
        <div class="navigation-socials__icons">
          <a target="_blank" href="viber://chat?number=%2B79781115865" class="navigation-icon">
            <img src="../assets/socials/viber.svg" alt="">
          </a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=79781115865" class="navigation-icon">
            <img src="../assets/socials/whatsapp.svg" alt="">
          </a>
          <a target="_blank" href="https://telegram.me/justdoeat82" class="navigation-icon">
            <img src="../assets/socials/telegram.svg" alt="">
          </a>
          <a target="_blank" href="https://www.instagram.com/invites/contact/?i=2xrx06iimmol&utm_content=ise3i6h" class="navigation-icon">
            <img src="../assets/socials/instagram.svg" alt="">
          </a>
        </div>
      </div>

    </nav>
    
    <div class="socials">
      <a class="socials__phone" href="tel:+79781115865">+7 978 111 58 65</a>
      <div class="socials__icons">
        <a target="_blank" href="viber://chat?number=%2B79781115865" class="icon">
          <img src="../assets/socials/viber.svg" alt="">
        </a>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=79781115865" class="icon">
          <img src="../assets/socials/whatsapp.svg" alt="">
        </a>
        <a target="_blank" href="https://telegram.me/justdoeat82" class="icon">
          <img src="../assets/socials/telegram.svg" alt="">
        </a>
        <a target="_blank" href="https://www.instagram.com/invites/contact/?i=2xrx06iimmol&utm_content=ise3i6h" class="icon">
          <img src="../assets/socials/instagram.svg" alt="">
        </a>
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
      const currentPosition = document.querySelector('#navigation').classList.contains('navigation-opened');
      
      if(currentPosition){
        this.burgerTop.style.transform = 'rotate(0deg)';
        this.burgerMiddle.style.transform = 'translateX(0%)';
        this.burgerBottom.style.transform = 'rotate(0deg)';
        document.documentElement.style.overflow = '';
      }else{
        this.burgerTop.style.transform = 'rotate(45deg)';
        this.burgerMiddle.style.transform = 'translateX(-100%)';
        this.burgerBottom.style.transform = 'rotate(-45deg)';
        document.documentElement.style.overflow = 'hidden';
      }

      document.querySelector('#navigation').classList.toggle('navigation-opened');

    }
  }
}
</script>

<style>
  .header{
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    position: relative;
    background: white;
  }
  @media(max-width: 992px){
    .header{
      flex-direction: column;
      padding: 0 0.5rem;
      padding-top: 0.5rem;
    }
  }

  .navigation{
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0 3rem;
  }
  .navigation-opened{
    transform: translateX(0%)!important;
  }
  @media(max-width: 992px){
    .navigation{
      position: fixed;
      left: 0;
      top: 0;
      background: #fff;
      height: calc(100vh);
      
      width: 100vw;
      z-index: 9999;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 1.8rem;
      padding-top: 160px;
      transform: translateX(-101%);
      transition: transform 0.4s;
    }
  }
  @media(max-width: 600px){
    .navigation{
      padding-top: 80px;
    }
  }

  .navigation__link{
    font-size: 22px;
    font-weight: 700;
    margin-right: 35px;
    position: relative;
  }
  .navigation__link::after{
    content: 'Ты сейчас тут';
    position: absolute;
    bottom: 0;
    top: 0;
    display: flex;
    right: -100%;
    width: 100%;
    height: 100%;
    display: none;
  }
  .navigation__link span{
    position: relative;
    z-index: 5;
  }
  .navigation__link::before{
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    opacity: 0.3;
    transform: scale3d(0,1,1);
    transform-origin: 0% 50%;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.2,1,0.3,1);
    background: rgb(255, 72, 90);
  }
  .router-link-active.navigation__link::before{
    transform: scale3d(1,1,1);
  }
  .navigation__link:hover::before{
    transform: scale3d(1,1,1);
  }
  @media(max-width: 992px){
    .navigation__link{
      text-align: left;
      margin: 1rem 0;
      overflow-y: hidden;
    }
    .navigation__link::before{
      transition-delay: 0.8s;
    }
    .router-link-active.navigation__link::before{
      transform: scale3d(0,1,1);
    }
    .navigation-opened .router-link-active.navigation__link::before{
      transform: scale3d(1,1,1);
    }
    .navigation__link span{
      transition: transform 0.3s;
      transform: translateY(102%);
      transition-delay: 0.4s;
      display: flex;
    }
    .navigation-opened .navigation__link span{
      transform: translateY(0%);
    }
  }

  .logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media(max-width: 992px){
    .logo{
      z-index: 10000;
      position: relative;
      border-bottom: 1px solid;
      /* max-height: 72px; */
    }
  }

  .logo__image{
    display: flex;
    align-items: center;
    width: 70%;
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

  .burger{
    display: none;
  }
  .burger svg{
    width: 45px;
    height: 45px;
  }
  .burger svg path{
    transform-origin: 0% 50%;
    transition: transform .4s;
  }
  @media(max-width: 992px){
    .burger{
      width: 15%;
      display: flex;
    }
  }

  .logo__phone{
    width: 15%;
    font-weight: 700;
    display: none;
  }
  @media(max-width: 992px){
    .logo__phone{
      display: flex;
    }
  }

  .socials{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  @media(max-width: 992px){
    .socials{
      position: absolute;
      right: 0;
      top: 80px;
    }
  }
  

  .socials__phone{
    font-weight: 700;
    font-size: 24px;
  }
  @media(max-width: 992px){
    .socials__phone{
      display: none;
    }
  }
  

  .socials__icons{
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  @media(max-width: 992px){
    .socials__icons{
      width: fit-content;
      display: flex;
      display: flex;
      flex-direction: column;
    }
  }

  .icon{
    width: 40px;
    margin-right: 15px;
  }
  @media(max-width: 992px){
    .icon{
      display: flex;
      align-items: center;
      width: 35px;
      margin-bottom: 0.25em;
      margin-right: 0px;
    }
  }

  /*  */
  .navigation-socials{
    display: none;
  }
  @media(max-width: 992px){
    .navigation-socials{
      display: flex;     
      flex-direction: column; 
      margin-top: 2rem;
    }
  }

  .navigation-socials__phone{
    display: none;
  }
  @media(max-width: 992px){
    .navigation-socials__phone{
      display: flex;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      font-weight: 700;
      overflow: hidden;
    }
    .navigation-socials__phone span{
      transition: transform 0.3s;
      transform: translateY(102%);
      transition-delay: 0.4s;
      display: flex;
    }
    .navigation-opened .navigation-socials__phone span{
      transform: translateY(0%);
    }
  }

  .navigation-socials__icons{
    display: none;
  }
  @media(max-width: 992px){
    .navigation-socials__icons{
      display: flex;
    }
  }

  .navigation-icon{
    display: none;
  }
  @media(max-width: 992px){
    .navigation-icon{
      display: flex;
      width: 40px;
      margin-right: 1rem;
    }
    .navigation-socials__icons{
      overflow: hidden;
    }
    .navigation-socials__icons a{
      transition: transform 0.3s;
      transform: translateY(102%);
      transition-delay: 0.4s;
      display: flex;
    }
    .navigation-opened .navigation-socials__icons a{
      transform: translateY(0%);
    }
  }

</style>