import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CharacterList from "./character/CharacterList";
import NewCharacter from "./character/NewCharacter";
import EditCharacter from "./character/EditCharacter";

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        {/* R do CRUD (READ): Operação de leitura de todos os registros */}
        <Route exact path="/" component={CharacterList} />
        {/* C do CRUD (CREATE): Operação de criação de um novo registro */}
        <Route path="/new-character" component={NewCharacter} />
        {/* U do CRUD (Update): Operação de edição de um registro existente*/}
        <Route path="/edit-character/:id" component={EditCharacter} />
      </BrowserRouter>
    </div>
  );
}

export default App;
