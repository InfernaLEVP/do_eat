<template>
  <div :class="[ 'day', currClass ]" :data-foo="currentCalendatDay">

    <div class="day__header">
      <img :src="`/img/days/${obj.index}.jpg`" alt="">
      <div class="day__name">{{obj.day}}</div>
      <div class="day__price">250 руб.</div>
    </div>
    

    <ul class="day__list">
      <li class="dish" v-for="item in obj.menu" :key="item[0]">
        <div class="dish__name">{{item[0]}}</div>
        <div class="dish__weight">{{item[1]}}</div>
      </li>
    </ul>

    <div class="day__actions">
      <button class="day__button button md-trigger md-setperspective" data-modal="modal-18" :disabled="isPast()" @click="order">Заказать</button>
      <button class="day__button button" @click="showDetails">Подробнее</button>
    </div>
    
  </div>

  <transition name="fade">
    <teleport to="#details-container" v-if="isTeleported">
      <div class="details" :class="[ isTeleported ? 'opened-details' : '']">
        <div class="details__wrapper">

          <div class="details__photo">
            <img :class="[ isTeleported ? 'opened-image' : '']" :src="`/img/days/${obj.index}.jpg`" alt="">
            <div :class="[ 'day__name', isTeleported ? 'opened-pulse' : '']">{{obj.day}}</div>
            <div :class="[ 'details__close', isTeleported ? 'opened-pulse' : '']" @click="hodeDetails"><img src="../assets/close.svg" alt=""></div>
          </div>
          <div :class="[ 'details__title', isTeleported ? 'opened-title' : '']">Комплексный обед</div>
          <div :class="[ 'details__price', isTeleported ? 'opened-price' : '']">250 руб.</div>
          <div :class="[ 'details__description', isTeleported ? 'opened-description' : '']">{{obj.description}}</div>

          <ul :class="[ 'day__list', isTeleported ? 'opened-list' : '']">
            <li class="dish" v-for="item in obj.menu" :key="item">
              <div class="dish__name">{{item}}</div>
              <div class="dish__weight">100гр.</div>
            </li>
          </ul>

          <div :class="[ 'details__actions', 'actions', isTeleported ? 'opened-button' : '']">
            <button class="minus">-</button>
            <button class="add">Добавить в корзину</button>
            <button class="plus">+</button>
          </div>

          <div :class="[ 'details__stats', isTeleported ? 'opened-button' : '']">
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
      currClass: undefined,
      currentCalendatDay: undefined
    }
  },
  mounted(){
    this.currentWeekDay = new Date();
    this.currentWeekDay = this.currentWeekDay.getDay();
    // this.currentWeekDay = 3;
    
    if(this.currentWeekDay - this.obj.index < 0){
      
      let exactDate = new Date();
      exactDate.setDate(exactDate.getDate() + Math.abs(this.currentWeekDay - this.obj.index));
      this.currentCalendatDay = 'на ' + exactDate.getDate().toString() + '.' + ( exactDate.getMonth() + 1 );

    }

    this.drawLabel();
  },
  methods:{
    showDetails(){
      this.isTeleported = true;

    },
    hodeDetails(){
      this.isTeleported = false;
    },
    isPast(){
      if(this.obj.index < this.currentWeekDay){
        return true;
      }else{
        return false;
      }
    },
    drawLabel(){
      if(this.obj.index > this.currentWeekDay){
        this.currClass = 'forward';
      }else if(this.obj.index < this.currentWeekDay){
        this.currClass = 'past';
      }else if(this.obj.index == this.currentWeekDay){
        this.currClass = 'today';
      }
    },
    order(){
      // console.log('order button click');
      const day = {
        day: this.obj.index,
        messsage: this.currentCalendatDay
      };
      this.emitter.emit('select-day', day);
    }
  }
}
</script>

<style>
  .day {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 374px;
    padding-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid #cecece;
    border-radius: 4px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  }

  .day.today {
    box-shadow: 1px 1px 6px -2px rgba(0, 153, 0, 0.9);
  }
  
  .day.day.today:after {
    content: 'Cегодня в меню!';
    position: absolute;
    top: -15px;
    right: 5px;
    padding: 7px 20px;
    color: #000000;
    background-color: rgba(0, 153, 0, 1);
    border-radius: 20px 0;
  }

  .day.day.past::after {
    content: 'А надо было раньше';
    position: absolute;
    top: -15px;
    right: 5px;
    padding: 0.5em 1.4em;
    color: #000000;
    background: rgba(244, 67, 54, 1);
    border-radius: 20px 0;
  }

  .day.day.forward:after {
    content: attr(data-foo) ' ';
    position: absolute;
    top: -15px;
    right: 5px;
    padding: 0.3em 1.2em;
    color: #000000;
    background: rgba(255,255,153, 1);
    border-radius: 20px 0;
  }
  
  .day__header {
    position: relative;
    margin-bottom: 35px;
    border-radius: 2px;
  }
  
  .day__header img {
    object-fit: cover;
    position: relative;
  }

  .day__name {
    position: absolute;
    bottom: -30px;
    left: 15px;
    font-weight: 700;
  }

  .day__price {
    position: absolute;
    bottom: -30px;
    right: 15px;
    font-weight: 700;
  }

  .day__list {
    list-style: none;
    margin-bottom: 20px;
    padding: 0 15px;
  }

  /* Dish */
  .dish {
    display: flex;
    justify-content: space-between;
    padding: 8px 0 4px;
    border-bottom: 1px solid #cecece;
  }

  .dish__name {
    max-width: 80%;
    font-size: 0.9em;
  }

  .dish__weight {
    margin-left: 5px;
    font-size: 0.8em;
  }

  /* buttons */
  .day__actions {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 0 15px;
  }

  .day__button {
    width: 48%;
    font-size: 12px;
    text-transform: uppercase;
    border: 1px solid #333333;
  }

  .day__button:disabled {
    color: #cecece;
    border-color: #cecece;
    cursor: initial;
  }

  .day__button:hover:not(:disabled) {
    color: var(--brand-color);
    border-color: var(--brand-color);
  }

  .day__button:active:not(:disabled) {
    opacity: 0.6;
  }

  @media (max-width: 992px) {
    .day {
      width: 60%;
      margin: 0 auto;
    }
  }
  .day__details{
    opacity: 0;
    pointer-events: none;
  }

  @media (max-width: 675px) {
    .day {
      width: 100%;
      max-width: 374px;
      padding-bottom: 20px;
    }
  }
  
  /* Details */
  #details-container{
    
  }
  .details{
    position: fixed;
    z-index: 99999;
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
    transform: translate(10px, -10px) scale(0);
    background: white;
    padding: 10px;
    border: 1px solid #333;
    z-index: 15;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
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
  @media(min-width: 992px){
    .details__wrapper{
      overflow-x: hidden;
    }
  }
  
  .details__photo{
    position: relative;
  }
  .details__photo > img{
    transform: translate3d(0,50%,0);
    opacity: 0;
  }

  .details__photo .day__name{
    border: 1px solid #333;
    padding: 8px 15px;
    transform: translate(-10px, -10px) scale(0);
  }

  .details__title{
    font-size: 24px;
    font-weight: 700;
    position: relative;
    margin-top: 5px;
    padding-top: 20px;

    transform: translate3d(0,50%,0);
    opacity: 0;
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

    transform: translate3d(0,50%,0);
    opacity: 0;
  }

  .details__description{
    transform: translate3d(0,50%,0);
    opacity: 0;
  }

  .details .day__list{
    transform: translate3d(0,50%,0);
    opacity: 0;
  }

  .details__actions{
    background: #333333;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 35px;

    transform: translate3d(0,50%,0);
    opacity: 0;
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

    transform: translate3d(0,50%,0);
    opacity: 0;
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

  /* Details Open Animations */
  .opened-details{
    animation: wrapperShow 0.5s;
  }
  @keyframes wrapperShow{
    from{
      opacity: 0;
      transform: translateY(100%);
    }
    to{
      opacity: 1;
      transform: translateY(0%);
    }
  }

  .opened-pulse{
    animation: oPulse 0.25s forwards;
    animation-delay: 0.4s;
  }
  @keyframes oPulse {
    from{
      transform: scale(0);
    }
    to{
      transform: scale(1);
    }
  }

  .opened-image{
    animation: oImage 0.35s forwards;
    animation-delay: 0.5s;
  }
  .opened-title{
    animation: oImage 0.35s forwards;
    animation-delay: 0.65s;
  }
  .opened-price{
    animation: oImage 0.35s forwards;
    animation-delay: 0.8s;
  }
  .opened-description{
    animation: oImage 0.35s forwards;
    animation-delay: 0.95s;
  }
  .opened-list{
    animation: oImage 0.35s forwards;
    animation-delay: 1.1s;
  }
  .opened-button{
    animation: oImage 0.35s forwards;
    animation-delay: 1.25s;
  }
  @keyframes oImage {
    from{
      transform: translate3d(0,50%,0);
      opacity: 0;
    }
    to{
      transform: translate(0%, 0px);
      opacity: 1;
    }
  }
</style>