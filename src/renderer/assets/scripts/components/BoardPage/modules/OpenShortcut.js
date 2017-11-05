'use strict'

import hotkeys from 'hotkeys-js'
import {OpenAction} from './OpenAction'

export const OpenShortcut = function () {
  hotkeys('ctrl+o, command+o', function (event, handler) {
    OpenAction()
  })
}
