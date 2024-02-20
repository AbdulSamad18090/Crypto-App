import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Exchanges from "./Components/Exchanges";
import Coins from "./Components/Coins";
import CoinDetails from "./Components/CoinDetails";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Exchanges />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coindetails/:id" element={<CoinDetails />} />
          <Route path="*" element={<NotFound />} /> {/* Define 404 route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
