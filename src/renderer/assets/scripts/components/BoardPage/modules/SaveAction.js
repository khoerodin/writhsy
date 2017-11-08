'use strict'

const save = function (filePath, markdownContent) {
  const fs = require('fs')

  if (filePath === undefined) {
    return
  }

  fs.writeFile(filePath, markdownContent, (err) => {
    if (err) throw err
    document.querySelector('title').innerText = filePath
  })
}

export const SaveAction = function () {
  const fileState = JSON.parse(window.localStorage.getItem('fileState'))
  const {dialog} = require('electron').remote
  const toMarkdown = require('to-markdown')
  const content = document.querySelector('#editor')
  const markdownContent = toMarkdown(content.innerHTML, { gfm: true })

  if (fileState.state === 'open') {
    save(fileState.filePath, markdownContent)
  } else {
    dialog.showSaveDialog(
      {
        filters: [{
          name: 'Markdown',
          extensions: ['md']
        }]
      },
      (filePath) => {
        save(filePath, markdownContent)
      }
    )
  }
}
