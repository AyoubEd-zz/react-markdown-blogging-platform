# Live demo

Changes are automatically rendered as you type.

- Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
- Renders actual, "native" React DOM elements
- Allows you to escape or skip HTML (try toggling the checkboxes above)
- If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

```js
var React = require("react");
var Markdown = require("react-markdown");

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById("content")
);
```

```cpp
class Solution {
public:
    bool isOneBitCharacter(vector<int>& bits) {
        int i = 0;
        while (i < bits.size() - 1) {
            i += bits[i] + 1;
        }
        return i == bits.size()-1;
    }
};
```

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔       |
| alignment | ✔       |
| wewt      | ✔       |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---

## A component by [Espen Hovlandsdal](https://espen.codes/)

title: Humane Typography in the Digital Age
date: "2017-08-19T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/humane-typography-in-the-digital-age/"
category: "Typography"
tags:

- "Design"
- "Typography"
- "Web Development"
  description: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts."

---

- [The first transition](#the-first-transition)
- [The digital age](#the-digital-age)
- [Loss of humanity through transitions](#loss-of-humanity-through-transitions)
- [Chasing perfection](#chasing-perfection)

An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.

The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.

But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. We have to go 500 years back in time to meet the first one.

## The first transition

A similar conflict emerged after the invention of the first printing press in Europe. Johannes Gutenberg invented movable type and used it to produce different compositions. His workshop could print up to 240 impressions per hour. Until then, the books were being copied by hand. All the books were handwritten and decorated with hand drawn ornaments and figures. A process of copying a book was long but each book, even a copy, was a work of art.

The first printed books were, at first, perceived as inferior to the handwritten ones. They were smaller and cheaper to produce. Movable type provided the printers with flexibility that allowed them to print books in languages other than Latin. Gill describes the transition to industrialism as something that people needed and wanted. Something similar happened after the first printed books emerged. People wanted books in a language they understood and they wanted books they could take with them. They were hungry for knowledge and printed books satisfied this hunger.

![42-line-bible.jpg](./media/42-line-bible.jpg)

_The 42–Line Bible, printed by Gutenberg._

_Originally published by [Matej Latin](http://matejlatin.co.uk/) on [Medium](https://medium.com/design-notes/humane-typography-in-the-digital-age-9bd5c16199bd?ref=webdesignernews.com#.lygo82z0x)._
