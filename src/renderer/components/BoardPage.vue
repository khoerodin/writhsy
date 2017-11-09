<template>
  <section class="section">
    <div id="editor" class="wysiwyg"></div>
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
  @import '~medium-editor/dist/css/medium-editor.min.css';
  @import '~medium-editor/dist/css/themes/beagle.min.css';
  @import '../assets/styles/wysiwyg.sass';
  @import '../assets/styles/fonts.css';
  @import '../assets/styles/style.css';
</style>
