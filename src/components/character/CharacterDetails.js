import { Component } from "react";
import axios from "axios";

// R do CRUD (READ): Operação de leitura de um registro específico identificado pelo seu ID

class CharacterDetails extends Component {
  state = {
    id: "",
    name: "",
    occupation: "",
    debt: false,
    weapon: "",
  };

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

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>
          <strong>ID: </strong>
          {this.state.id}
        </p>
        <p>
          <strong>Occupation: </strong>
          {this.state.occupation}
        </p>
        <p>
          <strong>Weapon: </strong>
          {this.state.weapon}
        </p>
        <p>
          <strong>Is the character in debt? </strong>
          {this.state.debt ? "Yes" : "No"}
        </p>
      </div>
    );
  }
}

export default CharacterDetails;
