import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// R do CRUD (READ): Operação de leitura de todos os registros

class CharacterList extends Component {
  state = {
    characters: [], // Nosso state inicial precisa ser uma array vazia, pois a API pode nos retornar vários personagens, que estarão dentro de uma array. Como usamos o map pra renderizar a lista, o map não roda em uma array vazia, logo evitamos erros de sintaxe.
  };

  // Assim que o componente é montado na tela, fazemos a requisição HTTP pra buscar a lista de personagens
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ih-crud-api.herokuapp.com/characters"
      );

      // console.log(response);

      this.setState({ characters: [...response.data] });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <table className="table table-hover">
        {/* Cabeçalho da tabela */}
        <thead className="table-dark">
          {/* Uma linha do cabeçalho (tr => table row) */}
          <tr>
            {/* Cada coluna do cabeçalho (th => table header) */}
            <th>ID</th>
            <th>Name</th>
            <th>Occupation</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Corpo da tabela */}
        <tbody>
          {/* Cada linha do corpo da tabela (tr => table row) */}
          {/* Como a quantidade de linhas depende de um valor dinâmico (a quantidade de personagens no banco de dados), retornamos uma linha para cada personagem dentro do state */}
          {this.state.characters.map((character) => {
            return (
              <tr key={character.id}>
                {/* Cada coluna desta linha no corpo (td => table data) */}
                <td>{character.id}</td>
                <td>{character.name}</td>
                <td>{character.occupation}</td>
                <td>
                  <Link
                    className="me-2"
                    to={`/edit-character/${character.id}`}
                    title="Edit"
                  >
                    <i className="fas fa-edit"></i>
                  </Link>
                  <Link
                    className="me-2"
                    to={`/character/${character.id}`}
                    title="View details"
                  >
                    <i className="fas fa-info-circle"></i>
                  </Link>
                  <Link
                    to={`/delete-character/${character.id}`}
                    title="Delete character"
                    className="text-danger"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CharacterList;
