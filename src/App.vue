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
    --brand-color: #f74462;
    --secondary-bc-color: #e9e9e9;
  }

  #app {}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-width: 320px;
    margin: 0;
    background-color: #ffffff;
    color: #333333;
    font-size: 0.875rem;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .button {
    display: block;
    padding: 8px 15px;
    font: inherit;
    text-decoration: none;
    text-align: center;
    word-wrap: break-word;
    color: inherit;
    border: 1px solid;
    overflow: hidden;
    transition: 0.1s;
  }
</style>
