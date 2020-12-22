<template>

  <div>
    
    <Header></Header>

    <router-view/>

    <Footer></Footer>

    <Modal ref="modal"></Modal>

  </div>
  
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Modal
  },
  mounted() {
    document.addEventListener('click', (e) => {
      
      if(e.target.id !== 'address'){
        if(e.target.classList.contains('auto-item') === false){
          window.app.$refs.modal.adressFocused = false;
        }
      }

    });
  }
}
</script>

<style>
  /* Variables */
  :root {
    --title-font: 'kyiv';
    --text-font: 'RobotoMono';
    --bold-font: 'SuisseIntl-Medium';
    --title-size: 6.1rem;
    --subtitle-size: 4.9rem;
    --text-size: 2.2rem;
    --title-lh: 1.6;
    --text-lh: 1.65;

    --title-size-sm: 4.1rem;
    --subtitle-size-sm: 3.8rem;
    --text-size-sm: 3.6rem;
    --title-lh-sm: 1.4;
    --text-lh-sm: 1.55;

    --basic-color: #000000;
    --red: #fa0000;
    --light-red: #EC543F;
    --white: #ffffff;
  }

  #app {
    
  }
  *{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  body{
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
  }

  button{
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .c_container{
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media screen and (max-width: 992px){
    .c_container{
      padding-left: 1.8rem;
      padding-right: 1.8rem;
    }
  }
  img{
    max-width: 100%;
  }

  /* Button */
  .button{
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    text-transform: uppercase;
    margin: 1.5rem 0;
    text-decoration: none;
    font-size: 28px;
    position: relative;
    transition: all .3s;
    border: 2px solid #333333;
  }
  .button:hover{
    background-color: #333333!important;
    color: white!important;
  }
  .button span{
    position: relative;
    z-index: 5;
    padding: 8px 35px;
  }

  @media screen and (max-width: 992px){
    .button{
      font-size: 2rem;
    }
  }
  ::selection {
    background: #ffff57;
  }
  a{
    color: inherit;
    text-decoration: none;
  }

  /* Spacer */
  .spacer{

  }
  .spacer-light{

  }
</style>
