'use strict'

export const SaveAction = function () {
  const fileState = window.localStorage.getItem('fileState')
  console.log(JSON.parse(fileState))

  const fs = require('fs')
  const {dialog} = require('electron').remote
  const toMarkdown = require('to-markdown')
  const content = document.querySelector('#editor')
  const markdownContent = toMarkdown(content.innerHTML)

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
