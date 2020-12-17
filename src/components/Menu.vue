<template>
  <div class="menu c_container">
    <div class="menu__wrapper">

      <swiper 
          v-if="isMobile"
          :slides-per-view="1"
          :space-between="20"
          :initialSlide="currentWeekDay - 1"
          navigation
          :pagination="{ clickable: true }"
          virtual
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
  .menu{
    color: white;
    font-size: 18px;
    padding-top: 5rem;
    background: url(../assets/background.jpg);
    background-position: center;
    background-size: cover;
  }
  @media(max-width: 992px){
    .menu{
      max-width: 100%;
      font-size: 16px;
    }
  }

  .menu__wrapper{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    /* padding-right: 10%; */
    padding: 8rem 0;
  }
  @media(max-width: 992px){
    .menu__wrapper{
      flex-wrap: wrap;
      padding: 4rem 0;
    }
  }

  .days__wrapper{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  /* .swiper-slide{
    padding: 10px;
    max-width: calc(100vw - 70px);
  } */

  .menu.c_container{
    padding: 0;
  }
  @media(min-width: 992px){
    .menu.c_container{
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  .swiper-wrapper{
    padding: 2rem 0px;
  }
  .swiper-pagination-bullet{
    background: #e5e5e5;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 0;
  }
</style>