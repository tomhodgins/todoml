/*

# TodoML Interpreter
version 0.0.3

A lightweight markdown-like markup language for todo lists

## Usage

Write todoML inside <script type="text/todo"> tags inside HTML and include this JavaScript.

- website: https://github.com/tomhodgins/todoml
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

      // Code
      line = line.replace(/`([^`]+)`/g, function(string, match) {

        return '<code>' + match + '</code>'

      })

      // Hyperlink
      line = line.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, function(string, text, link) {

        return '<a href="' + link + '">' + text + '</a>'

      })

      // Empty Checkbox
      line = line.replace(/\[ \]/g, function(string, match) {

        return '<input type=checkbox>'

      })

      // Checked Checkbox
      line = line.replace(/\[[xX]\]/g, function(string, match) {

        return '<input type=checkbox checked>'

      })

      // HTML Tag
      ;/^<.+\>/.test(line)
      && (todoDoc += line)

      // Paragraph
      ;/^[^#<>`-]/.test(line)
      && (todoDoc += '<p>' + line + '</p>')

      // Heading
      var heading = line.match(/^(#+) /)
      var tag = heading && ('h' + heading[1].length)

      heading
      && (todoDoc += '<' + tag + '>' + line.replace(/^#+ /, '') + '</' + tag +'>')

      // Blockquote
      ;/^> /.test(line)
      && (todoDoc += '<blockquote>' + line.replace(/^\> /, '') + '</blockquote>')

      // List item
      ;/^- [^\[<]/.test(line)
      && (todoDoc += '<ul><li>' + line.replace(/^- /, '') + '</li></ul>')

      // Empty checkbox
      ;/^- <input type=checkbox>/.test(line)
      && (todoDoc += '<label><ul><li><input type=checkbox>' + line.replace(/^- <input type=checkbox>/, '') + '</li></ul></label>')

      // Checked checkbox
      ;/^- <input type=checkbox checked>/.test(line)
      && (todoDoc += '<label><ul><li><input type=checkbox checked>' + line.replace(/^- <input type=checkbox checked>/, '') + '</li></ul></label>')

    }

    output.innerHTML = todoDoc

    script[i].parentNode.insertBefore(output, script[i])

  }

}

window.addEventListener('load', todoML)
