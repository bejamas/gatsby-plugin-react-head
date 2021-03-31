import React from "react";
import { HeadProvider } from "react-head";

let headTags = []

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headTags);
};

export const wrapRootElement = ({ element }) => {
  headTags = [];

  return <HeadProvider headTags={headTags}>{element}</HeadProvider>;
};
