import { Route, Routes } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import Guide from "./components/Guide";
import NavBar from "./components/Navbar";
import CheatSheet from "./components/CheatSheet";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";

import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import { ReactElement } from "react";

const App = (): ReactElement => {
  return (
    <div className="App mx-2 my-2">
      <ThemeContextDefaultProvider>
      <ErrorBoundary fallback={<ErrorPage/>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
        </ErrorBoundary>
      </ThemeContextDefaultProvider>
    </div>
  );
};

export default App;
