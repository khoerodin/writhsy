'use strict'

import hotkeys from 'hotkeys-js'
import {SaveAction} from './SaveAction'

const SaveShortcut = function () {
  hotkeys('ctrl+s, command+s', function (event, handler) {
    SaveAction()
  })
}

const Save = function () {
  SaveShortcut()
}

export default {
  Save
}
