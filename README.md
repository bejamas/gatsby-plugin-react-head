# gatsby-plugin-react-head

Provides drop-in support for server rendering data added with
[React Head](https://github.com/tizmagik/react-head/).

React Head is a component which lets you control your document head using
their React component.

With this plugin, attributes you add in their component, e.g. title, meta
attributes, etc. will get added to the static HTML pages Gatsby builds.

This is important not just for site viewers, but also for SEO -- title and description metadata stored in the document head is a key component used by Google in determining placement in search results.

## Why no react-helmet?

Size comparison:

| Package        | Size                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| `react-helmet` | [![bundlephobia](https://badgen.net/bundlephobia/minzip/react-helmet)](https://bundlephobia.com/result?p=react-head) |
| `react-head`   | [![bundlephobia](https://badgen.net/bundlephobia/minzip/react-head)](https://bundlephobia.com/result?p=react-head)   |

React Helmet is great and has more features than React Head, but sometimes you want less than more.

## Install

`npm i gatsby-plugin-react-head react-head`

or

`yarn add gatsby-plugin-react-head react-head`

## How to use

Add the plugin to the plugins array in your `gatsby-config.js`

```javascript
plugins: [`gatsby-plugin-react-head`];
```

You don't have to do anything else. Render one of head tag components whenever you want to inject a tag in the `<head />`.

```javascript
import React from "react";
import { Title, Link, Meta } from "react-head";

const Seo = () => (
  <>
    <Title>Hello world!</Title>
    <Meta name="description" content="Lorem ipsum dolor sit amet." />
    <Link rel="canonical" content="https://bejamas.io/" />
  </>
);
```

## Further reading:

1. [React Head documentation](https://github.com/tizmagik/react-head#readme)
