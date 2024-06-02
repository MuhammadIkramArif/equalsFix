import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const pathsList = [{ path: "/", component: <HomePage /> }];

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-bgBody">
        <Header />
        <div className="flex-1">
          <Routes>
            {pathsList.map((item, index) => (
              <Route
                path={`${item.path}`}
                element={item.component}
                key={index}
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
