import { Component } from "react";
import axios from "axios";

import TextInput from "../TextInput";
import ChoiceInput from "../ChoiceInput";

/* U do CRUD (CREATE): Operação de atualização de um registro existente*/

class EditCharacter extends Component {
  state = {
    name: "",
    occupation: "",
    debt: false,
    weapon: "",
  };

  // Em formulários de edição, sempre precisamos primeiramente carregar os dados que já existem para dar ao usuário a possibiliadde de alterá-los. Por isso fazemos uma requisição GET e populamos o state.
  componentDidMount = async () => {
    try {
      const id = this.props.match.params.id; // Parâmetro de rota injetado pelo componente Route

      const response = await axios.get(
        `https://ih-crud-api.herokuapp.com/characters/${id}`
      );

      this.setState({ ...response.data });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const id = this.props.match.params.id;

    event.preventDefault();

    axios
      .put(`https://ih-crud-api.herokuapp.com/characters/${id}`, this.state)
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
        <h1>Edit Character</h1>
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

export default EditCharacter;
