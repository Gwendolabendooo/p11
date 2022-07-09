import './App.scss';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './views/Home'
import Habitation from './views/Habitation'

import data from './data/data.json'

console.log(data[0])

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data}></Home>} />
        <Route path="/Habitation" element={<Habitation data={data}></Habitation>} />
        <Route path="*" element={"pas de page"} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
