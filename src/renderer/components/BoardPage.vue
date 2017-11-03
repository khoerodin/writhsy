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
    </div>
    <div id="editor" class="markdown-body"></div>
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
  @import '../../../node_modules/quill/dist/quill.bubble.css';
  @import '../../../node_modules/github-markdown-css/github-markdown.css';
  @import '../assets/styles/fonts.css';
  @import '../assets/styles/style.css';
  @import '../assets/styles/padding-margin.css';
  @import '~bulma/sass/utilities/initial-variables';
  $navbar-height: 1.7rem;
  $section-padding: 1rem 1.5rem;
  @import '~bulma';

  html {
    overflow-y: hidden !important;
  }

  .bg {
    background-color: #555;
  }

  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
    font-family: "Source Sans Pro", sans-serif;
    font-size:18px;
    line-height:135%;
    color: rgba(0,0,0,0.8);
  }

  .markdown-body p {
    font-family:'Noto Serif',serif;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 45px 15px 15px 15px;
    }
  }
</style>
