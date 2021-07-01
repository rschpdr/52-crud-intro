import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CharacterList from "./character/CharacterList";
import NewCharacter from "./character/NewCharacter";

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        {/* R do CRUD (READ): Operação de leitura de todos os registros */}
        <Route exact path="/" component={CharacterList} />
        {/* C do CRUD (CREATE): Operação de criação de um novo registro */}
        <Route path="/new-character" component={NewCharacter} />
      </BrowserRouter>
    </div>
  );
}

export default App;
