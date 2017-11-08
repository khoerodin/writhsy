'use strict'

export const SaveAction = function () {
  const fileState = JSON.parse(window.localStorage.getItem('fileState'))

  const fs = require('fs')
  const {dialog} = require('electron').remote
  const toMarkdown = require('to-markdown')
  const content = document.querySelector('#editor')
  const markdownContent = toMarkdown(content.innerHTML)

  console.log(fileState)

  if (fileState.state === 'open') {
    if (fileState.filePath === undefined) {
      return
    }

    fs.writeFile(fileState.filePath, markdownContent, (err) => {
      if (err) throw err
      document.querySelector('title').innerText = fileState.filePath + ' - saved again'
    })
  } else {
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
        fs.writeFile(filePath, markdownContent, (err) => {
          if (err) throw err
          document.querySelector('title').innerText = filePath
        })
      }
    )
  }
}
