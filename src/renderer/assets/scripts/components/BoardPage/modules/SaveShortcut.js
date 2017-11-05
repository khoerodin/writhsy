'use strict'

import hotkeys from 'hotkeys-js'
import {SaveAction} from './SaveAction'

export const SaveShortcut = function () {
  hotkeys('ctrl+s, command+s', function (event, handler) {
    SaveAction()
  })
}
