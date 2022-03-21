import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import FormContextProvider from "./context/FormContext";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <FormContextProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/formularioIngreso" element={<Formulario />} />
          </Routes>
        </FormContextProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
