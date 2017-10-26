# todoml

**a simple markdown-like syntax for composing todo lists**

![](https://i.imgur.com/BRQd8Ey.gif)

## Usage

Write todoML inside `<script type="text/todo">` tags inside HTML and include `todoml.js`:

```html
<script type="text/todo">

  This is a TodoML document

</script>

<script src=todoml.js></script>
```

## Syntax

TodoML is similar to markdown. It's a Domain-Specific Language created for writing todo lists and exists as a superset of HTML, so you're able to use any HTML you like in addition to these shorthands.

Within a TodoML document, each line is considered a separate thing. What HTML a line becomes is determined by the first few characters from the start of the line.

### Headings

Lines beginning with 1-6 `#` characters (`#`, `##`, `###`, `####`, `#####`, `######`) in TodoML get wrapped with the corresponding HTML heading tag from `<h1>`-`<h6>`.

### Paragraph

Lines with no special characters in TodoML get wrapped in HTML `<p>` tags.

### Bold

Within a line, any text that appears between pairs of `**` characters will be wrapped in `<strong>` tags.

### Italic

Within a line, any text that appears between pairs of `*` characters will be wrapped in `<em>` tags.

### Underline

Within a line, any text that appears between pairs of `_` characters will be wrapped in `<u>` tags.

### Strikethrough

Within a line, any text that appears between pairs of `**` characters will be wrapped in HTML `<del>` tags.

### Code

Within a line, any text that appears between pairs of <code>\`</code> backtick characters will be wrapped in HTML `<code>` tags.

### Hyperlinks

Similar to markdown, hyperlinks can be defined with the following synax `[link text](path/to/file)` where the `link text` is the text you want to display and the `path/to/file` is the URL you want to link. These will be wrapped in an HTML `<a>` tag with the `path/to/file` as the value of the `href=""` attribute.

### Lists

Lines starting with `-` in TodoML get wrapped in HTML `<ul><li>` tags.

### Checkboxes

Lines starting with `- [ ]` or `- [x]` become checkboxes, and get wrapped in `<label><ul><li>` with an `<input type=checkbox>` or `<input type=checkbox checked>` depending on whether the `[x]` (or `[X]`) is present or not.

### Blockquotes

Lines beginning with 1-3 `>` characters (`>`, `>>`, `>>>`) get wrapped in HTML `<blockquote>` tags, with a class of `level-n` where `n` is equal to the blockquote level.

### HTML

Any line starting with `<` will be passed through as raw HTML.

## Demo

- [TodoML demo page](https://tomhodgins.github.io/todoml/)
