<template>
  <div :class="[ 'day', currClass ]">

    <div class="day__header">
      <img :src="`/img/days/${obj.index}.jpg`" alt="">
      <div class="day__name">{{obj.day}}</div>
      <div class="day__price">250 руб.</div>
    </div>
    

    <ul class="day__list">
      <li class="dish" v-for="item in obj.menu" :key="item">
        <div class="dish__name">{{item}}</div>
        <div class="space"></div>
        <div class="dish__weight">100гр.</div>
      </li>
    </ul>

    <div class="day__actions">
      <button class="md-trigger md-setperspective" data-modal="modal-18">Заказать</button>
      <button class="day__details" @click="showDetails">Подробнее</button>
    </div>
    
  </div>

  <transition name="fade">
    <teleport to="#details-container" v-if="isTeleported">
      <div class="details">
        <div class="details__wrapper">

          <div class="details__photo">
            <img :src="`/img/days/${obj.index}.jpg`" alt="">
            <div class="day__name">{{obj.day}}</div>
            <div class="details__close" @click="hodeDetails"><img src="../assets/close.svg" alt=""></div>
          </div>
          <div class="details__title">Комплексный обед</div>
          <div class="details__price">250 руб.</div>
          <div class="details__description">{{obj.description}}</div>

          <ul class="day__list">
            <li class="dish" v-for="item in obj.menu" :key="item">
              <div class="dish__name">{{item}}</div>
              <div class="space"></div>
              <div class="dish__weight">100гр.</div>
            </li>
          </ul>

          <div class="details__actions actions">
            <button class="minus">-</button>
            <button class="add">Добавить в корзину</button>
            <button class="plus">+</button>
          </div>

          <div class="details__stats">
            <div class="item-stat">
              <div>Ккал</div>
              <div>62</div>              
            </div>
            <div class="item-stat">
              <div>Белки</div>
              <div>3 г.</div>              
            </div>
            <div class="item-stat">
              <div>Жиры</div>
              <div>4 г.</div>              
            </div>
            <div class="item-stat">
              <div>Углеводы</div>
              <div>5 г.</div>              
            </div>
            <div class="item-stat">
              <div>Вес</div>
              <div>300 гр.</div>              
            </div>
          </div>

        </div>

      </div>
    </teleport>
  </transition>
</template>

<script>
export default {
  props:{
    obj: Object
  },
  data(){
    return{
      isTeleported: false,
      currentWeekDay: undefined,
      currClass: undefined
    }
  },
  mounted(){
    this.currentWeekDay = new Date();
    this.currentWeekDay = this.currentWeekDay.getDay();

    this.drawLabel();
  },
  methods:{
    showDetails(){
      this.isTeleported = true;
    },
    hodeDetails(){
      this.isTeleported = false;
    },
    drawLabel(){
      if(this.obj.index > this.currentWeekDay){
        this.currClass = 'forward';
      }else if(this.obj.index < this.currentWeekDay){
        this.currClass = 'past';
      }else if(this.obj.index == this.currentWeekDay){
        this.currClass = 'today';
      }
    }
  }
}
</script>

<style>
  .day{
    padding: 20px;
    background: rgba(51,51,51,.7);
    border-radius: 18px;
    position: relative;
    font-weight: 300;
    line-height: 1.8;
    text-transform: uppercase;
    width: 21%;
    margin-bottom: 6rem;
  }
  @media(max-width: 992px){
    .day{
      width: 75%;
      margin: 0 auto;
    }
  }

  .day:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 104%;
    height: 104%;
    border: 4px solid #333333;
    border-radius: 18px;
    transform: translate(-3%, -3%);
  }

  .day__header{
    position: relative;
    border-bottom: 2px solid white;
  }

  .day__name{
    text-align: center;
    padding-bottom: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    padding: 1px 7px;
    color: black;
  }

  .day__price{
    text-align: center;
    padding-bottom: 2rem;
    position: absolute;
    bottom: 0;
    right: 0;
    background: white;
    padding: 1px 7px;
    color: black;
  }

  .day__list{
    list-style: none;
    padding-left: 0;
  }

  /* Today */
  .day.today{
    background: rgba(51,51,51,.7);
  }
  .day.day.today:after{
    content: 'Cегодня в меню!';
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-45deg) translate(-36px, -20px);
    font-size: 13px;
    z-index: 555;
    background: rgba(6, 193, 103, 0.7);
    border-radius: 8px;
    padding: 0 7px;
  }

  .day.day.past:after{
    content: 'А надо было раньше';
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-45deg) translate(-36px, -20px);
    font-size: 13px;
    z-index: 555;
    background: rgba(244, 67, 54, 0.7);
    border-radius: 8px;
    padding: 0 7px;
  }

  .day.day.forward:after{
    content: 'На завтра';
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-45deg) translate(-36px, -20px);
    font-size: 13px;
    z-index: 555;
    background: rgba(255,255,153, 0.7);
    border-radius: 8px;
    padding: 0 7px;
  }

  /* Buttons */
  .day button{
    position: relative;
    z-index: 15;
    font-size: 16px;
  }

  /* Dish */
  .dish{
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    line-height: 1.1;
    margin-bottom: 8.5px;
  }
  .dish__name{
    white-space: nowrap;
  }
  .dish__weight{

  }
  .space{
    flex: 1;
    border-bottom: 1px dashed white;
  }

  .day__actions{
    display: flex;
    justify-content: space-between;
  }

  .day__actions button{
    background: #e5e5e5;
    border: none;
    padding: 7px 10px;
    width: 48%;
  }

  /* Details */
  #details-container{
    
  }
  .details{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.9);
  }
  .details .space{
    border-bottom: 1px dashed #333333;
  }
  .details__close{
    position: absolute;
    right: 0px;
    top: 0px;
    transform: translate(10px, -10px);
    background: white;
    padding: 10px;
    border: 1px solid #333;
    z-index: 15;
    display: flex;
  }
  .details__close img{
    max-width: 30px;
  }
  
  .details__wrapper{
    width: 96%;
    height: 96%;
    background: #FFFDF8;
    color: #333333;
    padding: 25px 15px;
    margin: 0 auto;
    overflow-x: scroll;
    max-height: 96vh;
  }
  
  .details__photo{
    position: relative;
  }
  .details__photo .day__name{
    border: 1px solid #333;
    padding: 8px 15px;
    transform: translate(-10px, -10px);
  }

  .details__title{
    font-size: 24px;
    font-weight: 700;
    position: relative;
    margin-top: 5px;
    padding-top: 20px;
  }
  .details__title:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: calc(100%);
    height: 2px;
    background: #333;
    margin: 0 auto;
  }

  .details__price{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
    margin-top: 7px;
  }

  .details__actions{
    background: #333333;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 35px;
  }
  .details__actions:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    width: calc(100%);
    height: 2px;
    background: #333;
    margin: 0 auto;
  }
  .details__actions button{
    color: white;
  }

  .details__stats{
    border-top: 2px solid #393939;
    margin-top: 10px;
    padding-top: 15px;
  }

  /* Actions */
  .minus{
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
  }
  .plus{
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
  }
  .add{
  }

  /* Stats */
  .details__stats{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .item-stat div:first-child{
    font-weight: 500;
    margin-bottom: 8px;
    color: #393939;
  }
  .item-stat div:last-child{
    color: #868686;
    font-weight: 300;
  }

  /* Transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>