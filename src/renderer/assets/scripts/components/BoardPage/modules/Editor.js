'use strict'

import {MediumEditor} from 'medium-editor'

const Editor = function () {
  var element = document.querySelector('#editor')
  const editor = new MediumEditor(element)
  console.log(editor)
}

export default {
  Editor
}
