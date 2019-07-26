import React from "react";
import { HeadProvider } from "react-head";

export const wrapRootElement = ({ element }) => {
  return <HeadProvider>{element}</HeadProvider>;
};
