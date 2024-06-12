import Markdown from "markdown-to-jsx";
import React from 'react'
import * as reactDom from 'react-dom'

export default function Page() {
  return (
    <div>
      <Markdown children={""}>{}</Markdown> 
    </div>
  );
}