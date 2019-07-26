import React from "react";
import { HeadProvider } from "react-head";
import { renderToString } from "react-dom/server";

let collectHeadTags = [];

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const headTags = [];
  collectHeadTags = headTags;

  const bodyHTML = renderToString(
    <HeadProvider headTags={headTags}>{bodyComponent}</HeadProvider>
  );

  replaceBodyHTMLString(bodyHTML);
};

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(collectHeadTags);
};
