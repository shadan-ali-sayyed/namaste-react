

/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>

    <div
    id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

reactElement(object)  = html(browser understands)
 */



const parent = React.createElement("div",
{id:"parent" },[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"This Is Namaste React"),
    React.createElement("h2",{},"By Shadan Ali"),
]),

React.createElement("h1",{id: "child2"},[
    React.createElement("h1",{},"i'm an h1 tag"),
    React.createElement("h2",{},"i'm an h2 tag")

]),
]);

console.log("parent")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
