<template>
  <div>
    <div class="div-button">
      <button 
        class="button_switch_off" 
        @click="$router.push('/'); switchTimer()"
      >
        Выключить
      </button>
      <button 
        class="button" 
        @click="$router.push('/green'); switchTimer()"
      >
        Включить зелёный
      </button>
      <button 
        class="button" 
        @click="$router.push('/yellow'); switchTimer()"
      >
        Включить жёлтый
      </button>
      <button 
        class="button"
        @click="$router.push('/red'); switchTimer()"
      >
        Включить красный
      </button>
    </div>
    <div class="frame">
      <div class="number">
        {{ timer }}
      </div>
      <router-view></router-view>
    </div>
  </div>
</template> 

<script>
  export default {
    data() {
      return {
        timer: ''
      }
    },
    methods: {
      switchTimer() {
        switch (history.state.current) {
          case "/":
            this.timer = '';
            break;
          case '/green':
            this.timer = 10;
            break;
          case '/yellow':
            this.timer = 3;
            break;
          case '/red':
            this.timer = 15;
            break;
        }
      }
    }
  }
</script>

<style>
  .frame{
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(0, 0, 0);
    width: 110px;
    margin: 0 auto;
    grid-column-start: 2;
  }

  .number{
    color: cyan;
    width: 30px;
    height: 40px;
    text-align: center;
    font-size: 25px;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 2px solid cyan;
  }

  .button{
    justify-self: center;
    align-self: center;
    margin: 5px;
    grid-row-start: 2;
  }

  .button_switch_off{
    justify-self: center;
    align-self: center;
    margin: 5px;
    font-size: 15px;
    color: red;
    grid-column-start: 2;
  }

  .div-button{
    display: grid;
  }
</style>
