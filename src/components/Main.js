import React, { Component } from "react";

export default class Main extends Component {
  state = {
    filme: "",
    listaFilmes: []
  };

  handleChange = (event) => {
    this.setState({
      filme: event.target.value
    });
  };

  Send = (event) => {
    //event.preventDefault();
    //if (this.state.filme !== "")
    this.setState({
      listaFilmes: this.state.listaFilmes.concat({
        filme: this.state.filme,
        id: Date.now()
      }),
      filme: ""
    });
  };

  Remove = (id) => {
    this.setState({
      listaFilmes: this.state.listaFilmes.filter(
        (identificador) => identificador.id !== id
      )
    });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input value={this.state.filme} onChange={this.handleChange} />
        <button onClick={this.Send}>Send</button>
        {this.state.listaFilmes.map((item) => (
          <div>
            <ol>
              <li>{item.filme}</li>
            </ol>
            <button
              onClick={() => {
                this.Remove(item.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </form>
    );
  }
}
