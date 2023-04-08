import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
