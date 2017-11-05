'use strict'

import Quill from 'quill'

const Editor = function () {
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
  let editor = new Quill('#editor', options)
  editor.focus()
}

export default {
  Editor
}
