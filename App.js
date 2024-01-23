// const heading = React.createElement("h1",{id:"abc"}, "Hello World by React" );
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent= React.createElement("parent", { id: "parent"}, 

    [
        React.createElement("child", {id:"child"},
            [
                React.createElement("h1", {}, "I'm a h1 tag insed two divs"),
                React.createElement("h2", {}, "I'm a h2 tag insed two divs and sibling of h1")
            ]
        ),
        React.createElement("child2", {id:"child2"},
            [
                React.createElement("h1", {}, "I'm a h1 tag insed two divs"),
                React.createElement("h2", {}, "I'm a h2 tag insed two divs and sibling of h1"),
            ]
        )

    ]
)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

