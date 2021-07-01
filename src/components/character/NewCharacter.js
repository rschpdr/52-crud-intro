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

  // Atualizar o state com o valor interno do input quando o usuário dispara o evento 'change'
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
  handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

    axios
      .post("https://ih-crud-api.herokuapp.com/characters", this.state)
      .then((response) => {
        // console.log(response);
        this.props.history.push("/"); // Redireciona a aplicação de volta pra lista de personagens
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
