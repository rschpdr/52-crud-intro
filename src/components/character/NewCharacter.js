import { Component } from "react";
import axios from "axios";

import TextInput from "../TextInput";
import ChoiceInput from "../ChoiceInput";

/* C do CRUD (CREATE): Operação de criação de um novo registro */

class NewCharacter extends Component {
  state = {
    name: "",
    occupation: "",
    debt: false,
    weapon: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://ih-crud-api.herokuapp.com/characters", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>New Character</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <TextInput
            label="Character name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
          <TextInput
            label="Character occupation"
            type="text"
            name="occupation"
            onChange={this.handleChange}
            value={this.state.occupation}
            required
          />
          <TextInput
            label="Character Weapon"
            type="text"
            name="weapon"
            onChange={this.handleChange}
            value={this.state.weapon}
            required
          />
          <ChoiceInput
            label="Is the character in debt?"
            type="checkbox"
            name="debt"
            onChange={() => {
              this.setState({ debt: !this.state.debt });
            }}
            checked={this.state.debt}
          />

          <hr />

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewCharacter;
