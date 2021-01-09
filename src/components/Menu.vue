<template>
  <div class="menu">
    <div class="menu__wrapper">
      <h1 class="menu__title">
        Доставка комплексных обедов<br> 
        в Симферополе
      </h1>
      <p class="menu__order-info">
        <em>Прием заказов: Пн. - Пт. до 11:30</em>
      </p>
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
          <swiper-slide v-for="day in menu" :key="day.day" :virtualIndex="day.index">
            <Day :obj="day"></Day>
          </swiper-slide>
        </swiper>
        <div class="days__wrapper" v-else>
          <Day v-for="day in menu" :key="day.day" :obj="day"></Day>
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
  .menu__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 10px 50px 50px;
  }

  .menu__title {
    font-size: 30px;
    line-height: 1.2;
  }

  .menu__order-info {
    line-height: 1.6;
  }

  .days__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    max-width: 1440px;
    margin: 0 auto;
    padding: 25px 0;
  }

  @media (max-width: 1050px) {
    .menu__wrapper {
      padding: 30px 40px;
    }
  }

  @media(max-width: 768px) {
    .menu__wrapper {
      padding: 20px;
    }

    .menu__title {
      font-size: 22px;
    }

    .menu__order-info {
      margin-bottom: 40px;
    }
  }

   @media(max-width: 414px) {
    .menu__title br {
      display: none;
    }
  }

  .swiper-wrapper {
    padding: 20px 0 40px;
  }

  .swiper-pagination-bullet {
    background: #cecece;
    background: #333333;
  }

  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 0;
  }

  .swiper-button-next {
    right: 10%;
  }

  .swiper-button-prev {
    left: 10%;
  }

  .swiper-pagination-bullet {
    width: calc(75% / 5);
    border-radius: 4px;
    border: 1px solid #d0d0d0;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 600px) {
    .swiper-button-next {
      right: 2%;
    }

    .swiper-button-prev {
      left: 2%;
    }
  }

  @media (max-width: 510px) {
    .swiper-button-next {
      top: 25%;
      right: 12%;
    }

    .swiper-button-prev {
      top: 25%;
      left: 12%;
    }
  }

  @media (max-width: 414px) {
    .swiper-button-next {
      right: 2%;
    }

    .swiper-button-prev {
      left: 2%;
    }
  }

</style>