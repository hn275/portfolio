import { Routes, Route, useLocation } from "react-router-dom";
import Home from "pages/Home/Home";
import { Links } from "pages/Links/Links";
import { AnimatedPage } from "layout";
import { AnimatePresence } from "framer-motion";
import { ROUTES } from "config/routes";

function App() {
  const location = useLocation();
  return (
    <div className="bg-main">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<AnimatedPage />}>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.links} element={<Links />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
