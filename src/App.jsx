import { useEffect, useState } from "react";
import "./App.scss";
import { marked } from "marked";

const defautlText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
  \`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

function App() {
  const [content, setContent] = useState(defautlText);

  useEffect(() => {
    const parsedText = marked.parse(content, { breaks: true });
    const previewDom = document.getElementById("preview");
    previewDom.innerHTML = parsedText;
  }, [content]);

  return (
    <>
      <section className="section">
        <div className="section__header">
          <label className="title" htmlFor="editor">
            (🔥) Editor
          </label>
        </div>
        <textarea
          className="section__main"
          id="editor"
          name="editor"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </section>

      <section className="section">
        <div className="section__header">
          <p className="title">(🔥) Previewer</p>
        </div>
        <div className="section__main" id="preview" name="preview"></div>
      </section>
    </>
  );
}

export default App;
