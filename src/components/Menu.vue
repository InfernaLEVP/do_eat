<template>
  <div class="menu">
    <div class="menu__wrapper">
      <header class="menu__header">
        <h1 class="menu__title">Доставка<br> комплексных обедов<br> в Симферополе</h1>
        <p class="menu__order-info">Прием заказов:<br> Пн. - Пт. до 11:30</p>
      </header>
      <div class="menu__swiper">
        <swiper 
            v-if="isMobile"
            :slides-per-view="1"
            :space-between="20"
            :initialSlide="currentWeekDay - 1"
            navigation
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          > 
          <swiper-slide v-for="day in menu" :key="day.day" :virtualIndex="day.index"><Day :obj="day"></Day></swiper-slide>
        </swiper>
        <div class="days__wrapper" v-else>
          <Day  v-for="day in menu" :key="day.day" :obj="day"></Day>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Day from './Day.vue';
  import _menu from '../data/days.json';

 // import Swiper core and required components
  import SwiperCore, { Navigation, Pagination, Scrollbar, Virtual } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // install Swiper components
  SwiperCore.use([Navigation, Pagination, Scrollbar, Virtual]);


  export default {
    data(){
      return{
        menu: _menu,
        windowWidth: undefined,
        currentWekkDay: undefined
      }
    },
    mounted() {
      this.currentWeekDay = new Date();
      this.currentWeekDay = this.currentWeekDay.getDay();

      setTimeout(() => {
        this.windowWidth = window.innerWidth;
      }, 100);
      
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
        console.log(this.isMobile);
      })
    },
    components:{
      Day,
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper)
      },
      onSlideChange() {
        console.log('slide change')
      },
    },
    computed: {
      isMobile() {
        return this.windowWidth <= 992;
      }
    }
  }
</script>

<style>
  .menu {
    min-width: 320px;
    color: #333333;  
    background: #e5e5e5;
  }

  .menu__wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 50px 50px 100px;
    padding-top: 50px;
  }

  .menu__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
  }

  .menu__title {
    width: fit-content;
    text-align: left;
    font-size: 3em;
    line-height: 1.2em;
  }

  .menu__order-info {
    width: fit-content;
    padding-bottom: 4px;
    font-size: 1.3em;
    font-weight: 700;
    line-height: 1.3em;
    border-bottom: 2px solid red;
  }
  
  @media(max-width: 1024px) {
    .menu__wrapper {
      padding: 40px 40px;
    }

    .menu__header {
      margin-bottom: 30px;
    }

    .menu__title {
      font-size: 2.5em;
    }

    .menu__order-info {
      font-size: 1.2em;
    }
  }

  @media (max-width: 992px) {
    .menu__wrapper {
      padding: 30px 40px;
    }

    .days__wrapper {
      display: block;
    }
  }

  @media(max-width: 768px) {
    .menu__title {
      font-size: 2.2em;
    }
    
    .menu__order-info {
      font-size: 1.1em;
    }
  }

  @media (max-width: 678px) {
    .menu__wrapper {
      padding: 25px 30px;
    }

    .menu__header {
      display: block;
    }

    .menu__title {
      font-size: 2em;
    }

    .menu__order-info {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 480px) {
    .menu__wrapper {
      padding: 20px 0;
    }

    .menu__header {
      padding: 0 20px;
    }

    .menu__title {
      font-size: 1.8em;
    }
  }

   @media (max-width: 420px) {
    .menu__title {
      font-size: 1.4em;
    }

    .menu__order-info {
      font-size: 0.9em;
    }
  }

  .days__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 25px 0;
  }

  .swiper-wrapper {
    padding: 1rem 0;
  }

  .swiper-pagination-bullet {
    background: #e5e5e5;
    background: #333333;
  }

  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 0;
  }

  .swiper-container {
    padding: 15px 0;
  }

  .swiper-button-next {
    right: 5%;
  }

  .swiper-button-prev {
    left: 5%;
  }

  @media (max-width: 675px) {
    .swiper-button-next {
      top: 25%;
      right: 12%;
    }

    .swiper-button-prev {
      top: 25%;
      left: 12%;
    }
  }
  
  .swiper-pagination-bullet {
    width: calc(75% / 5);
    border-radius: 4px;
    border: 1px solid #d0d0d0;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.28);
  }
</style>