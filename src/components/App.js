import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";

import CharacterList from "./character/CharacterList";
import NewCharacter from "./character/NewCharacter";
import EditCharacter from "./character/EditCharacter";
import CharacterDetails from "./character/CharacterDetails";
import DeleteCharacter from "./character/DeleteCharacter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        {/* R do CRUD (READ): Operação de leitura de todos os registros */}
        <Route exact path="/" component={CharacterList} />

        {/* C do CRUD (CREATE): Operação de criação de um novo registro */}
        <Route path="/new-character" component={NewCharacter} />

        {/* U do CRUD (Update): Operação de edição de um registro existente*/}
        <Route path="/edit-character/:id" component={EditCharacter} />

        {/*  R do CRUD (READ): Operação de leitura de um registro específico identificado pelo seu ID */}
        <Route path="/character/:id" component={CharacterDetails} />

        {/* D do CRUD (DELETE): Deleta um registro específico */}
        <Route path="/delete-character/:id" component={DeleteCharacter} />
      </div>
    </BrowserRouter>
  );
}

export default App;
