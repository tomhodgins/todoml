# todoml

**a simple markdown-like syntax for composing todo lists**

## Usage

Write todoML inside <script type="text/todo"> tags inside HTML and include `todoml.js`:

```html
<script type="text/todo">

  This is a TodoML document

</script>

<script src=todoml.js></script>
```

## Syntax

TodoML is similar to markdown, but much more simplified. It's a Domain-Specific Language created for writing todo lists and exists as a superset of HTML, so you're able to use any HTML you like in addition to these shorthands.

Within a TodoML document, each line is considered a separate thing. What HTML a line becomes is determined by the first few characters from the start of the line.

### HTML

Any line starting with a `<` will be passed through as raw HTML.

### Code

Within a line, any text that appears between pairs of <code>\`</code> backtick characters will be wrapped in HTML `<code>` tags.

### Hyperlinks

Similar to markdown, within any line hyperlinks can be defined with the follow synax `[link text](path/to/file)` where the `link text` is the text you want to display and the `path/to/file` is the URL you want to create a link to. These will be wrapped in an HTML `<a>` tag with the `path/to/file` as the value of the `href=""` attribute.

### Paragraph

Lines with no special characters in TodoML get wrapped in HTML `<p>` tags.

### Headings

Lines beginning with 1-6 `#` charcters followed by a space (`# `, `## `, `### `, `#### `, `##### `, `###### `) in TodoML get wrapper with the corresponding HTML heading tag from `<h1>`-`<h6>`.

### Lists

Lines starting with `- ` in TodoML get wrapped in HTML `<ul><li>` tags.

### Checkboxes

Lines starting with `- [ ]` or `- [x]` become checkboxes, and get wrapped in `<label><ul><li>` with an `<input type=checkbox>` or `<input type=checkbox checked>` depending on whether the `[x]` is present or not.

### Blockquote

Lines beginning with `> ` get wrapped in HTML `<blockquote>` tags.

## Demo

- [TodoML demo page](https://tomhodgins.github.io/todoml/)
