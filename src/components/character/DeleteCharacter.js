import { Component } from "react";
import axios from "axios";

// D do CRUD (DELETE): Deleta um registro específico

class DeleteCharacter extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;

    axios
      .delete(`https://ih-crud-api.herokuapp.com/characters/${id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return <div>Deleting...</div>;
  }
}

export default DeleteCharacter;
