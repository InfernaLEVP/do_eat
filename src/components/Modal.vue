<template>
  <!-- Modal -->
  <teleport to="#modal-18">
    <div>
      <div class="md-content">

          <div class="mask"></div>

          <div class="form">
              <div class="md-close" @click="flushForm"><img src="../assets/close.svg" alt=""></div>
              <transition name="slide-fade" mode="out-in">
              <div v-if="!formSend">
                <p class="form__title">Оформить заказ</p>
                <p class="form__message">Заполните ваши контактные данные и наш
                  менеджер перезвонит вам в кротчайшие
                  сроки!
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
                          
                        <div class="autocomplete" v-if="streets && adressFocused">
                          <div class="autocomplete-item" v-for="street in streets.suggestions" :key="street.value">
                            <div v-if="street.value !== 'Респ Крым, г Симферополь'" class="auto-item" @click="setAdress(street.value, street)">{{street.value}}</div>
                          </div>
                        </div>
                      </div>

                      <div class="form__input">
                        <label for="phone">Комментарий</label>
                        <input type="text" id="comment">
                      </div>

                      <div class="count">
                        <div class="count__input">
                          <button id="c-minus" disabled class="disabled-input" @click="countMinus($event)">-</button>
                          <input type="number" class="counter" id="counter" v-model="count">
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
                    <button class="md-back" @click="step = 1">
                        <svg x="0px" y="0px" width="15"
                          viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve">
                            <path style="fill:#1E201D;" d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
                            c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
                            c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                        </svg>
                        Вернуться
                    </button>
                    <transition name="slide-fade" mode="out-in">
                      <button class="md-next" v-if="step === 1" @click="nextStep"> 
                          Далее
                          <svg x="0px" y="0px" width="15"
                            viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;transform: rotate(180deg);" xml:space="preserve">
                              <path style="fill:#1E201D;" d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
                              c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
                              c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                          </svg>
                      </button>
                      <input @click="sendOrder" class="form__send" type="submit" value="ОТПРАВИТЬ" v-else>
                    </transition>
                </div>
              </div>
              <div v-else>
                <p class="form__title">Ваш Заказ принят!</p>
                <p class="form__message">
                  Наш менеджер перезвонит вам в кротчайшие сроки!
                </p>
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
    setInterval(() => {
      this.init();
    }, 2000);
  },
  data(){
    return{
      formSend: false,
      step: 1,
      phoneInput: '',
      searchName: '',
      searchStreet: '',
      streets: undefined,
      adressFocused: false,
      clientAdress: '',
      agreenment: false,
      count: 1
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
        document.querySelector('#agreenment').focus();
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
      if(this.count === 1){
        return false;
      }
      this.count--;
      if(this.count === 1){
        event.target.disabled = true;
        event.target.classList.add('disabled-input');
      }
    },
    countPlus: function (event){
      this.count++;

      const minus = document.querySelector('#c-minus');
      if(minus.disabled){
        minus.disabled = false;
        minus.classList.remove('disabled-input');
      }
      

    },
    adressValidate: function (){
      document.querySelector('#address').classList.remove('input-error');
      if(this.clientAdress === ''){
        setTimeout(() => {
          document.querySelector('#address').classList.add('input-error');
        }, 150);
        return false;
      }else{
        return true;
      }
    },
    sendOrder: function (){
      const isAdressValidated = this.adressValidate();

      if(isAdressValidated){
        this.formSend = true;
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
    background: url(/img/mask.jpg);
    background-size: cover;
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
  }
  @media (max-width: 992px) {
    .md-content .form {
      width: 100%;
      padding: 25px 15px;
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
  }
  .md-content .form .md-close img{
    width: 20px;
  }

  .md-content .form .md-next{
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    color: #788995;
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
  }

  /* Checkbox */
  .agreenment{
    position: relative;
    padding-left: 2.7em;
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
    margin-left: -2.7em;
    width: 2em;
    height: 2em;
    background-image: url(../assets/checkbox/off.svg);
  }
  .input-error .agreenment__input + .agreenment__box,
  .input-error .agreenment__input:focus + .agreenment__box{
    background-image: url(../assets/checkbox/off-error.svg);
  }
  .agreenment__input:checked + .agreenment__box{
    background-image: url(../assets/checkbox/on.svg);
  }
  .agreenment__input:focus + .agreenment__box{
    background-image: url(../assets/checkbox/off-focused.svg);
  }
  .agreenment__input:checked:focus + .agreenment__box{
    background-image: url(../assets/checkbox/on-focused.svg);
  }
  .agreenment__input:disabled + .agreenment__box{
    background-image: url(../assets/checkbox/off-disabled.svg);
  }
  .agreenment__input:checked:disabled + .agreenment__box{
    background-image: url(../assets/checkbox/on-disabled.svg);
  }
  .agreenment__label{

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
  
</style>