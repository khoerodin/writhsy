'use strict'

export const OpenAction = function () {
  const fs = require('fs')
  const {dialog} = require('electron').remote
  const showdown = require('showdown')
  const converter = new showdown.Converter()
  converter.setFlavor('github')
  const content = document.querySelector('#editor')

  dialog.showOpenDialog(
    {
      filters: [{
        name: 'Markdown',
        extensions: ['md']
      }]
    },
    (filePaths) => {
      if (filePaths === undefined) {
        return
      }

      const filePath = filePaths[0]
      const htmlContent = converter.makeHtml(fs.readFileSync(filePath, 'utf-8'))

      try {
        content.innerHTML = htmlContent
        document.querySelector('title').innerText = filePath
        const fileState = {state: 'open', filePath: filePath}
        window.localStorage.setItem('fileState', JSON.stringify(fileState))
      } catch (err) {
        console.log('Error reading the file: ' + JSON.stringify(err))
      }
    }
  )
}
