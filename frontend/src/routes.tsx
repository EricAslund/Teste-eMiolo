import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import CharacterPage from './pages/CharacterPage';
import Films from './pages/Films';
import FilmPage from './pages/FilmsPage';
import Home from './pages/Home';
import StartshipPage from './pages/StarshipPage';
import ListaVisitasPage from './pages/ListaVisitasPage';

import VehiclePage from './pages/VehiclePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/characters/:id" element={<PageLayout />}>
        <Route index element={<CharacterPage />} />
      </Route>
      <Route path="/films" element={<PageLayout />}>
        <Route index element={<Films />} />
        <Route path="/films/:id" element={<FilmPage />} />
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/starships/:id" element={<StartshipPage />} />
        <Route path="/vehicles/:id" element={<VehiclePage />} />
        <Route path ="/lista_visitas" element={<ListaVisitasPage />}/>
     </Route>
    </Routes>
  );
}

export default App;
