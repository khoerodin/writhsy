'use strict'

export const fileAction = function () {
  const fs = require('fs')
  const {dialog} = require('electron').remote
  const toMarkdown = require('to-markdown')
  var showdown = require('showdown')
  var converter = new showdown.Converter()

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

          const filePath = filePaths[0]
          var html = converter.makeHtml(fs.readFileSync(filePath, 'utf-8'))

          // create div element for modify element content
          var div = document.createElement('div')
          div.innerHTML = html

          // remove p tag inside blockquote tag
          var blockquote = div.getElementsByTagName('blockquote')
          for (var i = 0; i < blockquote.length; i++) {
            var blockElm = blockquote[i]
            var p = blockElm.getElementsByTagName('p')
            for (var a = 0; a < p.length; a++) {
              var parent = p[a].parentNode
              while (p[a].firstChild) parent.insertBefore(p[a].firstChild, p[a])
              parent.removeChild(p[a])
            }
            blockElm.innerHTML = blockElm.innerText.trim()
          }

          const htmlContent = div.innerHTML

          try {
            content.innerHTML = htmlContent
          } catch (err) {
            console.log('Error reading the file: ' + JSON.stringify(err))
          }
        }
      )
    })

    btnSave.addEventListener('click', () => {
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
            console.log('The file has been saved!')
          })
        }
      )
    })
  })
}
