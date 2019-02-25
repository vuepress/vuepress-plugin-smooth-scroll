---
sidebar: auto
---

# vuepress-plugin-smooth-scroll

## Introduction

A simple plugin to make Vuepress scroll smoothly.

It simply does two things:

- Use `window.scrollTo({ behavior: 'smooth' })` for [scrollBehavior](https://router.vuejs.org/api/#scrollbehavior)
  - [Reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)
  - [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo#Browser_Compatibility)
  - [smoothscroll-ployfill](https://github.com/iamdustan/smoothscroll)
- Add `scroll-behavior: smooth;` to the `<html>` element
  - [Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
  - [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior#Browser_compatibility)

::: tip
- The first one only works with `<RouterLink to="#anchor">`
- The second one works with both `<RouterLink to="#anchor">` and `<a href="#anchor">`

You may notice that the browser compatibility of this two features are quite different, so we currently use both of them.

For better browser compatibility, we suggest to use `<RouterLink to="#anchor">` if possible.
:::

::: warning
This plugin may not work well with `@vuepress/plugin-active-header-links`, which is used in the default theme of Vuepress.

The problem is that, `@vuepress/plugin-active-header-links` watches the `scroll` event to set the active sidebar link, and `vuepress-plugin-smooth-scroll` will trigger the `scroll` event for sure.

Click the sidebar of this page and you will see what the problem is.

If you are using your own theme without `@vuepress/plugin-active-header-links`, you can have a try on this plugin.
:::

## Usage

### Installation

Install `vuepress-plugin-smooth-scroll` via NPM:

```bash
npm install vuepress-plugin-smooth-scroll
```

### Use the plugin

> See [Vuepress Offical Docs](https://vuepress.vuejs.org/plugin/using-a-plugin.html) for how to use a plugin in detail


```js
// .vuepress/config.js

module.exports = {
  plugins: {
    'vuepress-plugin-smooth-scroll': true,
  },
}
```

## Demo

- Click the links in the sidebar 
- Click the header anchors

```


This



is



used



to



make



the



page



longer


```

### End of the page
