import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import FormContextProvider from "./context/FormContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </FormContextProvider>
    </div>
  );
}

export default App;
