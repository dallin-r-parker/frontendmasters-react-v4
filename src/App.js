const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert(`you clicked the title`);
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleTitleClick }, "Adopt Me"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Brady",
        animal: "Dog",
        breed: "Labradoodle"
      }),
      React.createElement(Pet, {
        name: "Winston",
        animal: "Dog",
        breed: "Lab"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
