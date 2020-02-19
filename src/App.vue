<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><span class="text">Home</span></router-link> |
      <router-link to="/about"><span class="text">About</span></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {}
  // 设置rem 最大50像素，为浏览器宽度十分之一 还有使用scss
  document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('hmtl')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
  })

</script>

<style scoped lang="scss">
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
