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