'use strict'

import hotkeys from 'hotkeys-js'
import {OpenAction} from './OpenAction'

const OpenShortcut = function () {
  hotkeys('ctrl+o, command+o', function (event, handler) {
    OpenAction()
  })
}

const Open = function () {
  OpenShortcut()
}

export default {
  Open
}
