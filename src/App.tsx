import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import { AnimatedPage } from "layout";

function App() {
  return (
    <Routes>
      <Route element={<AnimatedPage />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
