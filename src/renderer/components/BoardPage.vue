<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile is-gapless">
        <div class="column is-draggable">
          <div class="is-pulled-right">
            <button type="button" class="button is-light has-text-grey" id="load">OPEN</button>
            <button type="button" class="button is-primary" id="save">SAVE</button>
          </div>
        </div>
      </div>
      <div id="editor"></div>
    </div>
  </section>
</template>

<script>
  import {fileAction} from '../assets/scripts/files'
  import Quill from 'quill'
  let toolbarOptions = [
    ['bold', 'italic'],
    ['link', 'image'],
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }]
  ]
  let options = {
    theme: 'bubble',
    modules: {
      toolbar: toolbarOptions
    }
  }
  export default {
    name: 'board-page',
    mounted: function () {
      let editor = new Quill('#editor', options)
      editor.focus()
      fileAction()
    }
  }
</script>

<style lang="scss">
  @import '~quill/dist/quill.bubble.css';
  @import '~bulma';
  @import '../assets/styles/fonts.css';
  @import '../assets/styles/style.css';
</style>
