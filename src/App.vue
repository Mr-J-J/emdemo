<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <br/>
  你好，请打开控制台
  <br/>
  {{ msg }}
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: this.$em.chouxiang('你好，请打开控制台')
    }
  },
  onload(){
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
