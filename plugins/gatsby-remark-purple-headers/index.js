const visit = require("unist-util-visit");
const toString = require("mdast-util-to-string");

module.exports = ({ markdownAST }, pluginOptions) => {
  // Manipulate AST

  visit(markdownAST, "heading", node => {
    let { depth } = node;
    // Skip if not an h1
    if (depth !== 1) return;
    // Grab the innerText of the heading node
    let text = toString(node);
    const html = `
        <h1 style="color: rebeccapurple">
          ${text}
        </h1>
      `;
    node.type = "html";
    node.children = undefined;
    node.value = html;
  });
  return markdownAST;
};
