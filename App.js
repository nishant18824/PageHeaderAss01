import React from "react";
import  ReactDOM  from "react-dom/client";

const header1 = React.createElement(
    "h1",
    {id:"i1"},
    "Hello"
)

const header2 = React.createElement(
    "h2",
    {id:"i2"},
    "Hello 2"
)

const header3 = React.createElement(
    "h3",
    {id:"i3"},
    "Hello 3"
)

const header = React.createElement(
    "div",
    {className: "title"},
    [header1, header2 ,header3],
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);