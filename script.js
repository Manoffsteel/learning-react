// ek element bana dega h1 ka jiska id or class diya gya hai or h1 mein kya hoga vo likha hua ha
const heading= React.createElement("h1",{"id": "my-header","xyz":"abc"},"hello world from react");

console.log(heading); //object
console.log(React.version);

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)

// creating nested div and then sibblings

const parent=   React.createElement("div",{id:"paent"},React.createElement("div",{id:"child"},[React.createElement("P",{},"HELLO I AM A PARA"), React.createElement("p",{}, "hello world from react i am another para")]));
console.log(parent);

// root.render(parent);
root.render(
    React.createElement(
        React.Fragment, 
        null, 
        heading, 
        parent
    )
);


