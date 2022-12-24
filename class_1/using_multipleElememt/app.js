const heading = React.createElement("h1", {id:"heading",key:"1"}, "Namastey React!");
const heading1 = React.createElement("h2", {id:"heading1",key:"2"}, "I am heading1!");
const container = React.createElement("div", {id: "container"}, [heading,heading1]);
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);