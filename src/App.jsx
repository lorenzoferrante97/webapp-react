import { GlobalProvider, useGlobalContext } from "./contexts/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // router
import DefaultLayout from "./layouts/DefaultLayout"; // layouts
import Home from "./pages/Home"; // pages
import Movie from "./pages/Movie";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Home}></Route>
            <Route path='/movie/:id' Component={Movie}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
