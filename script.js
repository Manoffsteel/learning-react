// ek element bana dega h1 ka jiska id or class diya gya hai or h1 mein kya hoga vo likha hua ha
const heading= React.createElement("h1",{"id": "my-header","xyz":"abc"},"hello world from react");

console.log(heading); //object
console.log(React.version);

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)




