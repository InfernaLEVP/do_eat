<template>
  <!-- Modal -->
  <teleport to="#modal-18">
    <div>
      <div class="md-content">

          <div class="mask"></div>

          <div class="form">
              <div id="await-animation"></div>
              <div class="md-close" @click="flushForm"><img src="../assets/close.svg" alt=""></div>
              <transition name="slide-fade" mode="out-in">
              <div v-if="!formSend">
                <p class="form__title">Оформить заказ</p>
                <p class="form__message">Заполните ваши контактные данные и наш
                  менеджер перезвонит вам в кротчайшие
                  сроки!
                  <span class="order-date">
                    {{ orderDate() }}
                  </span>
                </p>

                <div class="form__body">

                  <transition name="slide-fade" mode="out-in">

                    <div class="step" id="step-1" v-if="step === 1">

                      <div class="form__input">
                        <label for="name">Имя</label>
                        <input type="text" id="name" :value='searchName' @input='nameInput($event)' @keypress="isLetter($event)">
                      </div>

                      <div class="form__input">
                        <label for="phone">Телефон <sup>* обязательно</sup></label>
                        <input type="tel" id="phone"
                          placeholder="+7(999)-999-9999"
                          v-model="phoneInput"
                          @input="phoneChange"
                          v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']"
                        >
                      </div>

                      <div class="agreenment">
                        <input class="agreenment__input" v-model="agreenment" type="checkbox" name="agreenment" id="agreenment">
                        <span class="agreenment__box"></span>
                        <label class="agreenment__label" for="agreenment">Нажимая сюда, вы соглашаетесь с
                            позициями в пользовательском соглашении.</label>
                      </div>

                    </div>

                    <div class="step" id="step-2" v-else>

                      <div class="form__input">
                        <label for="phone">Адрес <sup>* обязательно</sup></label>
                        <input type="text" 
                          id="address"
                          :value="searchStreet"
                          @input="adressInput($event)"
                          @focus="adressFocused = true">
                          
                        <div :class="[ 'autocomplete', streets.suggestions.length <= 1 ? 'no-match-street' : '' ]" v-if="streets && adressFocused">
                          <div class="autocomplete-item" v-for="street in streets.suggestions" :key="street.value">
                            <div v-if="street.value !== 'Респ Крым, г Симферополь'" class="auto-item" @click="setAdress(street.value, street)">{{street.value}}</div>
                          </div>
                        </div>
                      </div>

                      <div class="form__input">
                        <label for="phone">Комментарий</label>
                        <input type="text" id="comment" v-model="comment">
                      </div>

                      <div class="count">
                        <div class="count__input">
                          <button id="c-minus" disabled class="disabled-input" @click="countMinus($event)">-</button>
                          <input type="number" class="counter" id="counter" min="1" max="100" v-model="count" @change="minusWatch($event)" @input="minusWatch($event)">
                          <button id="c-plus" @click="countPlus($event)">+</button>
                          <!-- <label for="counter">Количество</label> -->
                        </div>
                        <div class="count__message">
                          Укажите количество обедов для заказа!
                        </div>
                      </div>

                    </div>

                  </transition>
                </div>
                <div class="buttons">
                    <button :class="[ 'md-back', step === 1 ? 'disabled-back' : '' ]" @click="step = 1">
                        <svg x="0px" y="0px" width="15"
                          viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve">
                            <path style="fill:#1E201D;" d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
                            c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
                            c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                        </svg>
                        Вернуться
                    </button>
                    <transition name="slide-fade" mode="out-in">
                      <button id="md-next" class="md-next" v-if="step === 1" @click="nextStep"> 
                          Далее
                          <svg x="0px" y="0px" width="15"
                            viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;transform: rotate(180deg);" xml:space="preserve">
                              <path style="fill:#1E201D;" d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
                              c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
                              c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                          </svg>
                      </button>
                      <button @click="sendOrder" class="form__send" type="submit" v-else>ОТПРАВИТЬ</button>
                    </transition>
                </div>
              </div>
              <div v-else>
                <p class="form__title order-success">Заказ принят!</p>
                <p class="form__message">
                  Наш менеджер перезвонит вам в кротчайшие сроки!
                </p>
                <div id="delivery"></div>
              </div>
              </transition>
          </div>

      </div>
    </div>
  </teleport>  
  <!-- ./Modal -->
</template>

<script>
/* eslint-disable */
import { IMaskDirective } from 'vue-imask';

export default {

  mounted(){
    this.currentDay = new Date();
    this.currentDay = this.currentDay.getDay();

    this.emitter.on('select-day', day => {
      this.chosenDay = day.day;
      this.dateMessage = day.messsage;
      // console.log(`Chosen day: ${day} !`);
    });

    setInterval(() => {
      this.init();
    }, 2000);

    const ajaxWait = document.getElementById('await-animation');
    window.lottie.loadAnimation({
      container: ajaxWait, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets3.lottiefiles.com/packages/lf20_5pXvNC.json' // the path to the animation json
    });
  },
  data(){
    return{
      chosenDay: undefined,
      dateMessage: undefined,
      currentDay: undefined,
      formSend: false,
      step: 1,
      phoneInput: '',
      searchName: '',
      searchStreet: '',
      streets: undefined,
      adressFocused: false,
      clientAdress: '',
      agreenment: false,
      count: 1,
      comment: ''
    }
  },
  methods: {
    init: () => {
      // console.log('init');
      var overlay = document.querySelector( '.md-overlay' );

      [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

        var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
          close = modal.querySelector( '.md-close' );

        function removeModal( hasPerspective ) {
          classie.remove( modal, 'md-show' );

          if( hasPerspective ) {
            classie.remove( document.documentElement, 'md-perspective' );
          }
        }

        function removeModalHandler() {
          removeModal( classie.has( el, 'md-setperspective' ) ); 
        }

        el.addEventListener( 'click', function( ev ) {
          classie.add( modal, 'md-show' );
          overlay.removeEventListener( 'click', removeModalHandler );
          overlay.addEventListener( 'click', removeModalHandler );

          if( classie.has( el, 'md-setperspective' ) ) {
            setTimeout( function() {
              classie.add( document.documentElement, 'md-perspective' );
            }, 25 );
          }
        });

        close.addEventListener( 'click', function( ev ) {
          ev.stopPropagation();
          removeModalHandler();
        });

      } );

    },
    orderDate: function (){
      console.log(`Chosen: ${this.chosenDay} || Current: ${this.currentDay}`);
      if(this.chosenDay == this.currentDay){
        return `Доставка на сегодня`;
      }else if(this.chosenDay - this.currentDay === 1){
        return `Доставка на завтра`;
      }else{
        return `Доставка ${this.dateMessage}`;
      }
    },
    nextStep: function (event){
      document.querySelector('#phone').classList.remove('input-error');
      document.querySelector('.agreenment').classList.remove('input-error');
      console.log('hey');
      const isPhoneValid = this.validatePhone();
      const isAgreenmentValid = this.validateAgreenment();
      if(isPhoneValid && isAgreenmentValid){
        this.step = 2;
      }

    },
    nameInput: function (event){
      console.log('nameInput');
      this.searchName = event.target.value;
    },
    isLetter: function (event){
      console.log('isLetter');
      let char = String.fromCharCode(event.keyCode); // Get the character
      if(/^[А-Яа-яA-Za-z]+$/.test(char)) return true; // Match with regex 
      else event.preventDefault(); // If not match, don't add to input text
    },
    isNumber: function (event){
      let char = String.fromCharCode(event.keyCode); // Get the character
      if(/^[А-Яа-яA-Za-z]+$/.test(char)) return true; // Match with regex 
      else event.preventDefault(); // If not match, don't add to input text
    },
    validatePhone: function (){
      if(this.phoneInput.length === 18){
        return true;
      }else{
        setTimeout(() => {
          document.querySelector('#phone').classList.add('input-error');
        }, 150);
        
        return false;
      }
    },
    validateAgreenment: function (){
      if(this.agreenment){
        return true;
      }else{
        setTimeout(() => {
          document.querySelector('.agreenment').classList.add('input-error');
        }, 150);

        return false;
      }
    },
    phoneChange: function(){
      if(this.phoneInput.length === 18){
        document.querySelector('#phone').classList.add('ok-input');
        document.querySelector('#md-next').focus();
      }else{
        document.querySelector('#phone').classList.remove('ok-input');        
      }
    },
    adressInput: function (event) {
      console.log('adressInput');
      this.searchStreet = event.target.value;
      this.filteredSuggestions();
    },
    triggerMobile: function (newValue) {
      console.log(newValue);
    },
    setAdress: function (adrName, adrObj) {
      console.log(adrName);
      this.clientAdress = adrName;
      this.searchStreet = adrName.replace('Респ Крым, г Симферополь, ', '');
      this.adressFocused = false;
    },
    filteredSuggestions: function () {
      if(this.searchStreet.length > 3){
        // 
          let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
          let token = "0190834f1949f45163224d15e8817d598dff8323";
          let query = "симферополь " + this.searchStreet;

          let options = {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query})
          }

          fetch(url, options)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            this.streets = result;
          })
          .catch(error => console.log("error", error));
        // 
      }else{
        return undefined;
      }
    },
    countMinus: function (event){
      const plus = document.querySelector('#c-plus');

      if(this.count === 1){
        return false;
      }
      this.count--;
      if(this.count === 1){
        event.target.disabled = true;
        event.target.classList.add('disabled-input');
      }

      if(plus.disabled){
        plus.disabled = false;
        plus.classList.remove('disabled-input');
      }
    },
    minusWatch: function (event){
      const minus = document.querySelector('#c-minus');
      const plus = document.querySelector('#c-plus');
      if(this.count > 1){
        if(minus.disabled){
          minus.disabled = false;
          minus.classList.remove('disabled-input');
        }
      }else{
        this.count = 1;
        minus.classList.add('disabled-input');
        minus.disabled = true;
      }
      if(this.count > 100){
        this.count = 100;
        plus.classList.add('disabled-input');
        plus.disabled = true;
      }
    },
    countPlus: function (event){
      this.count++;

      if(this.count > 100){
        const plus = document.querySelector('#c-plus');
        this.count = 100;
        plus.classList.add('disabled-input');
        plus.disabled = true;
      }
      const minus = document.querySelector('#c-minus');
      if(minus.disabled){
        minus.disabled = false;
        minus.classList.remove('disabled-input');
      }
      

    },
    adressValidate: function (){
      document.querySelector('#address').classList.remove('input-error');
      if(this.clientAdress === ''){

        if(this.searchStreet.length < 6){
          setTimeout(() => {
            document.querySelector('#address').classList.add('input-error');
          }, 150);
          return false;
        }else{
          this.clientAdress = this.searchStreet;
          return true;
        }
        
      }else{
        return true;
      }
    },
    postData: async function (url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    },
    sendOrder: function (){
      const isAdressValidated = this.adressValidate();

      if(isAdressValidated){

        document.getElementById('await-animation').style.display = 'flex';
        const _now = new Date();
        const orderTime = _now.getHours()  + ':' + ( _now.getMinutes() < 10 ? '0' + _now.getMinutes()  : _now.getMinutes());
        const data = {
          phoneInput: this.phoneInput,
          searchName: this.searchName,
          clientAdress: this.clientAdress,
          agreenment: this.agreenment,
          count: this.count,
          chosenDay: this.chosenDay,
          dateMessage: this.dateMessage,
          currentDay: this.currentDay,
          comment: this.comment,
          orderTime: orderTime
        }
        //185.231.155.104:8080
        this.postData('http://localhost:3000/api/orders', data) 
          .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call

            setTimeout(() => {
              document.getElementById('await-animation').style.display = 'none';
              this.formSend = true;

              // 
                setTimeout(() => {
                  console.log('LOTTIE');
                  const element = document.getElementById('delivery');
                  try{
                    element.innerHTML = '';
                  }catch{};
                  window.lottie.loadAnimation({
                    container: element, // the dom element that will contain the animation
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: 'https://assets9.lottiefiles.com/temp/lf20_IxpQni.json' // the path to the animation json
                  });
                  
                }, 700);
              // 
            }, 2000);
            
          })
          .catch(err => {
            console.log(err);
            document.getElementById('await-animation').style.display = 'none';
            this.formSend = false;
          });
        
      }else{

      }
    },
    flushForm: function() {
      this.formSend = false;
      this.clientAdress = '';
      this.searchStreet = '';
      this.step = 1;
      this.phoneInput = '';
      this.searchName = '';
      this.streets = undefined;
      this.agreenment = false;
      this.count = 1;
      try{
        document.querySelector('#address').classList.remove('input-error');
        document.querySelector('#address').classList.remove('ok-input');
      }catch{}
      try{
        document.querySelector('#phone').classList.remove('input-error'); 
        document.querySelector('#phone').classList.remove('ok-input'); 
      }catch{}
      try{
        document.querySelector('.agreenment').classList.add('input-error');
        document.querySelector('.agreenment').classList.add('ok-input');
      }catch{}
      
    }
  },
  computed: {
  },
  directives: {
    imask: IMaskDirective
  }
}
</script>

<style>
  .md-perspective, .md-perspective body {
    height: 100%;
    overflow: hidden;
  }
  .md-perspective body {
    background: #222;
    -webkit-perspective: 600px;
    -moz-perspective: 600px;
    perspective: 600px;
  }
  .md-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 70%;
    max-width: 930px;
    min-width: 320px;
    height: auto;
    z-index: 2000;
    visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .md-show {
    visibility: visible;
  }
  @media(max-width: 992px){
    .md-show{
      max-height: 90vh;
      overflow: scroll;
    }
    .md-modal{
      width: 85%;
    }
  }
  .md-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    visibility: hidden;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }
  .md-show ~ .md-overlay {
    opacity: 1;
    visibility: visible;
  }
  /* Content styles */
  .md-content {
    color: #333;
    background: white;
    position: relative;
    border-radius: 3px;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
  }
  .md-content .mask {
    background: url(../assets/mask.jpg);
    background-size: cover;
    background-position: 50%;
    width: 35%;
  }
  @media (max-width: 992px) {
    .md-content .mask {
      width: 0%;
      display: none;
    }
  }
  .md-content .form {
    width: 65%;
    padding: 50px 100px;
    position: relative;
  }
  @media (max-width: 992px) {
    .md-content .form {
      width: 100%;
      padding: 25px 15px;
      min-height: 70vh;
    }
  }
  .md-content .form__title {
    font-size: 35px;
    font-weight: 500;
  }
  @media (max-width: 992px) {
    .md-content .form__title {
      font-size: 30px;
      margin: 0px 0px 15px;
    }
  }
  .md-content .form__message {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 17px;
    font-weight: 400;
    padding-right: 20px;

    border-bottom: 1px solid #333;
    border-top: 1px solid #333;
    padding: 7px 0;
    position: relative;
  }
  .md-content .form__message:after{
    position: absolute;
    right: 0;
    bottom: 0;
    content: '';
    width: 40px;
    height: 30px;
    display: flex;
    align-items: center;
    background: url(../assets/logo.jpg);
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (max-width: 992px) {
    .md-content .form__message {
      font-size: 15px;
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  .md-content .form__input {
    margin: 15px 0px;
    position: relative;
  }
  .md-content .form__input label {
    display: block;
    margin-bottom: 5px;
    color: #d4d9dd;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .md-content .form__body {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  .md-content .form__body input {
    border: 1px solid #dde3e8;
    padding: 15px 20px;
    color: #788995;
    display: block;
    width: 100%;
  }
  @media(max-width: 992px){
    .md-content .form__body input {
      font-size: 16px;
    }
  }
  .md-content .form__body .agreenment {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .md-content .form__body .agreenment input {
    padding: 0px;
    width: auto;
    margin-right: 15px;
  }
  .md-content .form__body .agreenment p {
    color: #788995;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
  @media (max-width: 992px) {
    .md-content .form__body .agreenment p {
      line-height: 1.3;
      font-size: 14px;
    }
  }

  .md-content .form__send {
    color: white;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: #0076ff;
    padding: 20px 35px;
    border: none;
  }
  @media (max-width: 992px) {
    .md-content .form__send {
      padding: 0px 20px;
      line-height: 48px;
    }
  }

  .md-content .form .buttons {
    display: flex;
    justify-content: space-between;

    border-top: 1px solid #333;
    padding-top: 25px;
  }
  .md-content .form .md-back {
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    color: #788995;
    border: none;
    display: flex;
    align-items: center;
    line-height: 48px;
  }
  .md-content .form .md-back svg {
    margin-right: 10px;
  }

  .md-content .form .md-close{
    position: absolute;
    right: 0px;
    top: 0px;
    transform: translate(-10px, 10px);
    background: white;
    padding: 10px;
    border: 1px solid #333;
    z-index: 15;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }
  .md-content .form .md-close img{
    width: 20px;
  }

  .md-content .form .md-next{
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    border: none;
    display: flex;
    align-items: center;
  } 
  .md-content .form .md-next svg {
    margin-left: 10px;
  }
  /* Effect 18: Slide from right with perspective on container */
  .md-show.md-effect-18 ~ .container {
    height: 100%;
    overflow: hidden;
  }
  .md-show.md-effect-18 ~ .md-overlay {
    background: rgba(0, 0, 0, 0.8);
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
  }
  .md-show.md-effect-18 ~ .container, .md-show.md-effect-18 ~ .md-overlay {
    -webkit-transform-style: preserve-3d;
    -webkit-transform-origin: 0% 50%;
    -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;
    -moz-transform-style: preserve-3d;
    -moz-transform-origin: 0% 50%;
    -moz-animation: rotateRightSideFirst 0.5s forwards ease-in;
    transform-style: preserve-3d;
    transform-origin: 0% 50%;
    animation: rotateRightSideFirst 0.5s forwards ease-in;
  }
  @-webkit-keyframes rotateRightSideFirst {
    50% {
      -webkit-transform: translateZ(-50px) rotateY(5deg);
      -webkit-animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateZ(-200px);
    }
  }
  @-moz-keyframes rotateRightSideFirst {
    50% {
      -moz-transform: translateZ(-50px) rotateY(5deg);
      -moz-animation-timing-function: ease-out;
    }
    100% {
      -moz-transform: translateZ(-200px);
    }
  }
  @keyframes rotateRightSideFirst {
    50% {
      transform: translateZ(-50px) rotateY(5deg);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateZ(-200px);
    }
  }
  .md-effect-18 .md-content {
    -webkit-transform: translateX(200%);
    -moz-transform: translateX(200%);
    -ms-transform: translateX(200%);
    transform: translateX(200%);
    opacity: 0;
  }
  .md-show.md-effect-18 .md-content {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
    -webkit-transition: all 0.5s 0.1s;
    -moz-transition: all 0.5s 0.1s;
    transition: all 0.5s 0.1s;
  }
  .form sup{
    color: #f44336;
    font-size: 7px;
  }

  .input-error{
    border-color: #f44336!important;
    animation: pulse;
    animation-delay: 0;
    animation-duration: 0.7s;
    animation-iteration-count: 2;
  }
  /* .input-error input{
    border-color: #f44336!important;
  } */
  @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.05);}
    100% {transform: scale(1);}
  }

  .ok-input{
    border-color: rgb(6, 193, 103)!important;
  }

  /* Adress Suggestions */
  .autocomplete{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #333;
    padding: 10px;
    transform: translateY(100%);
    z-index: 999;
  }
  .autocomplete-item{
    padding: 6px 0;
    margin-bottom: 5px;
    border-bottom: 1px solid #333;
    cursor: pointer;
  }

  /* Checkbox */
  .agreenment{
    position: relative;
    /* padding-left: 2.7em; */
  }
  .md-content .form__body .agreenment__input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    position: absolute;
  }
  .agreenment__box{
    position: absolute;
    /* margin-left: -2.7em; */
    pointer-events: none;
    width: 2em;
    height: 2em;
    /* background-image: url(../assets/checkbox/off.svg); */
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3E%3Crect x="3" y="3" width="14" height="14" fill="%23fff" stroke="%234a90e2" stroke-width="2" rx="2"/%3E%3C/svg%3E');
  }
  .input-error .agreenment__input + .agreenment__box,
  .input-error .agreenment__input:focus + .agreenment__box{
    /* background-image: url(../assets/checkbox/off-error.svg); */
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3E%3Crect x="3" y="3" width="14" height="14" fill="%23fff" stroke="%23f44336" stroke-width="2" rx="2"/%3E%3C/svg%3E');
  }
  .agreenment__input:checked + .agreenment__box{
    /* background-image: url(../assets/checkbox/on.svg); */
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3E%3Crect x="2" y="2" width="16" height="16" fill="%234A90E2" rx="3"/%3E%3Cpolyline fill="none" stroke="%23fff" stroke-width="3" points="5 9 9 13 15 6"/%3E%3C/svg%3E');
  }
  .agreenment__input:focus + .agreenment__box{
    /* background-image: url(../assets/checkbox/off-focused.svg); */
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3E%3Crect width="20" height="20" fill="%237ed321" rx="4"/%3E%3Crect width="14" height="14" x="3" y="3" fill="%23fff" stroke="%234a90e2" stroke-width="2" rx="2"/%3E%3C/svg%3E');
  }
  .agreenment__input:checked:focus + .agreenment__box{
    /* background-image: url(../assets/checkbox/on-focused.svg); */
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3E%3Crect width="20" height="20" fill="%237ed321" rx="4"/%3E%3Crect width="16" height="16" x="2" y="2" fill="%234a90e2" rx="3"/%3E%3Cpolyline fill="none" stroke="%23fff" stroke-width="3" points="5 9 9 13 15 6"/%3E%3C/svg%3E');
  }
  .agreenment__input:disabled + .agreenment__box{
    /* background-image: url(../assets/checkbox/off-disabled.svg); */
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3E%3Crect x="3" y="3" width="14" height="14" fill="%23fff" stroke="%239b9b9b" stroke-width="2" rx="2"/%3E%3C/svg%3E');
  }
  .agreenment__input:checked:disabled + .agreenment__box{
    /* background-image: url(../assets/checkbox/on-disabled.svg); */
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3E%3Crect x="2" y="2" width="16" height="16" fill="%239B9B9B" rx="3"/%3E%3Cpolyline fill="none" stroke="%23FFF" stroke-width="3" points="5 9 9 13 15 6"/%3E%3C/svg%3E');
  }
  .agreenment__label{
    padding-left: 2.7em;
    cursor: pointer;
  }

  /* Counter */
  .count{
    display: flex;
  }
  .count__input{
    width: 35%;
    display: flex;
    justify-content: space-between;
  }
  .count__input button{
    background: #333;
    color: white;
    flex: 1;
    transition: all .4s;
  }
  #counter{
    height: 54px;
    width: 54px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
  }
  .disabled-input{
    background: #788995!important;
  }
  .count__message{
    width: 65%;
    padding-left: 25px;
    display: flex;
    align-items: center;
  }


  /* Transitions */
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: scale(0);
    opacity: 0;
  }
  
  .order-success{
    margin-top: 35px;
  }
  .disabled-back{
    opacity: .4;
    pointer-events: none;
    cursor:not-allowed;
  }

  .no-match-street{
    display: none!important;
  }

  /* Await */
  #await-animation{
    position: absolute;
    top:0;
    left: 0;
    z-index: 555;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: none;
  }

  .order-date{
    display: flex;
    margin: 1rem 0;
    font-weight: 900;
    color: yellowgreen;
    font-size: 1.3rem;
  }

</style>