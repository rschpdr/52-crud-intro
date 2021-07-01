import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CharacterList from "./CharacterList";

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        {/* R do CRUD (READ): Operação de leitura de todos os registros */}
        <Route exact path="/" component={CharacterList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
