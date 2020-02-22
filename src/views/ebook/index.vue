<template>
<div class="ebook">
  <ebook-reader></ebook-reader>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import EbookReader from '../../components/ebook/EbookReader'
    export default {
      components: {
        EbookReader
      }
    }
</script>

<style scoped lang="scss">
  @import "../../assets/styles/global";

</style>
