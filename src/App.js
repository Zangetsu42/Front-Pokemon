import * as React from 'react';
import './App.css';
import Home from './components/Home';
import CreationNewPokemon from './components/CreationNewPokemon/CreationNewPokemon';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <><BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreationNewPokemon />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;