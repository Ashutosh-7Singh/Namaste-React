const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am in h1 tag"),
        React.createElement("h2", {}, "I am in h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am in h1 tag"),
        React.createElement("h2", {}, "I am in h2 tag")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
