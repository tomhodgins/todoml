/*

# TodoML Interpreter
version 0.0.1

A lightweight markdown-like markup language for todo lists

## Usage

Write todoML inside <script type="text/todo"> tags inside HTML and include this JavaScript.

- author: Tommy Hodgins
- license: MIT

*/

function todoML() {

  var script = document.querySelectorAll('script[type="text/todo"]')

  for (var i=0; i<script.length; i++) {

    var output = document.createElement('div')
    var source = script[i].textContent.split('\n')
    var todoDoc = ''

    for (var j=0; j<source.length; j++) {

      var line = source[j].replace(/^\s+/, '')

      // HTML Tag
      ;/^<.+\>/.test(line)
      && (todoDoc += line)

      // Paragraph
      ;/^[^#<>`-]/.test(line)
      && (todoDoc += '<p>' + line + '</p>')

      // H1
      ;/^# /.test(line)
      && (todoDoc += '<h1>' + line.replace(/^# /, '') + '</h1>')

      // H2
      ;/^## /.test(line)
      && (todoDoc += '<h2>' + line.replace(/^## /, '') + '</h2>')

      // H3
      ;/^### /.test(line)
      && (todoDoc += '<h3>' + line.replace(/^### /, '') + '</h3>')

      // H4
      ;/^#### /.test(line)
      && (todoDoc += '<h4>' + line.replace(/^#### /, '') + '</h4>')

      // H5
      ;/^##### /.test(line)
      && (todoDoc += '<h5>' + line.replace(/^##### /, '') + '</h5>')

      // H6
      ;/^###### /.test(line)
      && (todoDoc += '<h6>' + line.replace(/^###### /, '') + '</h6>')

      // Blockquote
      ;/^\> /.test(line)
      && (todoDoc += '<blockquote>' + line.replace(/^\> /, '') + '</blockquote>')

      // List item
      ;/^- [^\[]/.test(line)
      && (todoDoc += '<ul><li>' + line.replace(/^- /, '') + '</li></ul>')

      // Empty checkbox
      ;/^- \[ \]/.test(line)
      && (todoDoc += '<label><ul><li><input type=checkbox>' + line.replace(/^- \[ \]/, '') + '</li></ul></label>')

      // Checked checkbox
      ;/^- \[x\]/.test(line)
      && (todoDoc += '<label><ul><li><input type=checkbox checked>' + line.replace(/^- \[x\]/, '') + '</li></ul></label>')

    }

    output.innerHTML = todoDoc

    script[i].parentNode.insertBefore(output, script[i])

  }

}

window.addEventListener('load', todoML)