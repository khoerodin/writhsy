'use strict'

import {MediumEditor} from 'medium-editor'

const Editor = function () {
  const element = document.querySelector('#editor')
  element.addEventListener('input', function () {
    var spans = element.getElementsByTagName('span')
    for (var i = 0; i < spans.length; i++) {
      spans[i].outerHTML = spans[i].innerHTML
    }
  })

  return new MediumEditor(element, {
    placeholder: false,
    buttonLabels: 'fontawesome'
  })
}

export default {
  Editor
}
