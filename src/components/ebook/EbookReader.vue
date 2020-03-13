<template>
  <div class="ebook-reader">
      <div id="read"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Epub from 'epubjs'
  global.ePub = Epub
  export default {
    computed: {
      ...mapGetters(['fileName'])
    },
    mounted () {
      this.$store.dispatch('setFileName', this.$route.params.fileName.split('|').join('/')).then(() => {
        this.initEpub()
      })
    },
    methods: {
      initEpub () {
        const baseUrl = 'http://127.0.0.1:8080/' + this.fileName + '.epub'
        console.log(baseUrl)
        this.book = ePub(baseUrl)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight,
          method: 'default'
        })
        console.log(this.book)
        this.rendition.display()
        this.rendition.book.on('touchstart', event => {
          this.touchStartX = event.changeTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        this.rendition.book.on('touchend', event => {
          const offsetX = event.changedTouched[0].clientX - this.touchStartX
          const time = event.timeStamp - this.touchStartTime
          console.log(offsetX, time)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global";

  .ebook-reader {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
