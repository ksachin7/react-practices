import React from "react";
import "./App.scss";
import { compose, pipe } from "lodash/fp";

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrap = type => str => `<${type}>${str}</${type}>`;

const transform = pipe(trim, toLowerCase, wrap("span"));

const input = "    my first webpack app    ";
const contents = transform(input);

function App() {
    return (
        <div className="app">
            <header>
                A Webpack App
            </header>
            <div>
                ${contents}
            </div>
        </div>
    );
}

export default App;