import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto">
      {/* header */}
      <Header />
      {/* page */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
