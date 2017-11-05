<template>
  <section class="section">
    <div id="editor"></div>
  </section>
</template>

<script>
  import {Editor, Open, Save} from '../assets/scripts/components/BoardPage'
  export default {
    name: 'board-page',
    mounted: function () {
      localStorage.clear()
      Editor()
      Open()
      Save()
    }
  }
</script>

<style lang="scss">
  @import '~quill/dist/quill.bubble.css';
  @import '~bulma';
  @import '../assets/styles/fonts.css';
  @import '../assets/styles/style.css';
</style>
