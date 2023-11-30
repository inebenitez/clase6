import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Form />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>

  );
}

export default App;