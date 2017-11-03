'use strict'

export const fileAction = function () {
  const fs = require('fs')
  const {dialog} = require('electron').remote

  document.addEventListener('DOMContentLoaded', function () {
    var btnLoad = document.querySelector('#load')
    var btnSave = document.querySelector('#save')
    var content = document.querySelector('.ql-editor')

    btnLoad.addEventListener('click', () => {
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

          var filePath = filePaths[0]

          try {
            content.innerHTML = fs.readFileSync(filePath, 'utf-8')

            console.log('Loaded file:' + filePath)
          } catch (err) {
            console.log('Error reading the file: ' + JSON.stringify(err))
          }
        }
      )
    })

    btnSave.addEventListener('click', () => {
      dialog.showSaveDialog(
        {
          filters: [{
            name: 'Markdown',
            extensions: ['md']
          }]
        },
        (filePath) => {
          if (filePath === undefined) {
            return
          }
          fs.writeFile(filePath, content.innerHTML, (err) => {
            if (err) throw err
            console.log('The file has been saved!')
          })
        }
      )
    })
  })
}
