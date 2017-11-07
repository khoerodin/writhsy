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
      const html = converter.makeHtml(fs.readFileSync(filePath, 'utf-8'))

      // create div element for modify element content
      const div = document.createElement('div')
      div.innerHTML = html

      // remove p tag inside blockquote tag
      const blockquote = div.getElementsByTagName('blockquote')
      for (var i = 0; i < blockquote.length; i++) {
        const blockElm = blockquote[i]
        const p = blockElm.getElementsByTagName('p')
        for (var a = 0; a < p.length; a++) {
          const parent = p[a].parentNode
          while (p[a].firstChild) parent.insertBefore(p[a].firstChild, p[a])
          parent.removeChild(p[a])
        }
        blockElm.innerHTML = blockElm.innerText.trim()
      }

      const htmlContent = div.innerHTML

      try {
        content.innerHTML = htmlContent
        document.querySelector('title').innerText = filePath
        const fileState = {state: 'open', path: filePath}
        window.localStorage.setItem('fileState', JSON.stringify(fileState))
      } catch (err) {
        console.log('Error reading the file: ' + JSON.stringify(err))
      }
    }
  )
}
