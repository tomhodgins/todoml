/*

# TodoML Interpreter
version 0.0.5

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

    var todoDoc = ''
    var source = script[i].textContent.split('\n')
    var output = document.createElement('div')

    for (var j=0; j<source.length; j++) {

      var line = source[j].replace(/^\s+/, '')

      // Bold
      line = line.replace(/(\*\*)([^\*]+)(\*\*)/g,
               function(string, open, match, close) {
                 return '<strong>' + match + '</strong>' })

      // Italic
      line = line.replace(/(\*)([^\*]+)(\*)/g,
               function(string, open, match, close) {
                 return '<em>' + match + '</em>' })

      // Underline
      line = line.replace(/(_)([\w\s]+)(_)/g,
               function(string, open, match, close) {
                 return '<u>' + match + '</u>' })

      // Strikethrough
      line = line.replace(/(~)([^~]+)(~)/g,
               function(string, open, match, close) {
                 return '<del>' + match + '</del>' })

      // Code
      line = line.replace(/`([^`]+)`/g,
               function(string, match) {
                 return '<code>' + match + '</code>' })

      // Hyperlink
      line = line.replace(/\[([^\]]+)\]\(([^\)]+)\)/g,
               function(string, text, link) {
                 return '<a href="' + link + '">' + text + '</a>' })

      // Raw HTML Tag
      ;/^<.+\>/.test(line) &&
        (todoDoc += line)

      // Paragraph
      ;/^[^#<>`-]/.test(line) &&
        (todoDoc +=
          '<p>'
          + line
          + '</p>')

      // Heading
      var heading = line.match(/^(#+)\s*/)
      var tag = heading && ('h' + heading[1].length)

      ;heading &&
        (todoDoc +=
          '<' + tag + '>'
          + line.replace(/^#+\s*/, '')
          + '</' + tag + '>')

      // Blockquote
      var blockquote = line.match(/^(>+)\s*/)
      var level = blockquote &&
                    ('class="level-' + blockquote[1].length + '"')

      ;blockquote &&
        (todoDoc +=
          '<blockquote ' + level + '>'
          + line.replace(/^(>+)\s*/, '')
          + '</blockquote>')

      // List item
      ;/^-\s+[^\[]/.test(line) &&
        (todoDoc +=
          '<ul><li>'
          + line.replace(/^- /, '')
          + '</li></ul>')

      // Empty checkbox
      ;/^-\s*\[\s+\]/.test(line) &&
        (todoDoc +=
          '<label><ul><li>'
          + '<input type=checkbox>'
          + line.replace(/^-\s*\[\s+\]/, '')
          + '</li></ul></label>')

      // Checked checkbox
      ;/^-\s*\[[xX]\]/.test(line) &&
      (todoDoc +=
        '<label><ul><li>'
        + '<input type=checkbox checked>'
        + line.replace(/^-\s*\[[xX]\]/, '')
        + '</li></ul></label>')

    }

    output.innerHTML = todoDoc

    script[i].parentNode.insertBefore(output, script[i])

  }

}

window.addEventListener('load', todoML)