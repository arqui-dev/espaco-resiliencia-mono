import React from 'react';

import 'bulma/css/bulma.css';
import './styles/main.css';

import { UnitList } from './components/units';
import { ProfessionalList } from './components/professionals';
import { Header } from './components/headar';

function App() {
  return (
    <>
      <Header />
      <UnitList />
      <ProfessionalList />
    </>
  );
}

export default App;
