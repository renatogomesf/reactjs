import React from 'react'

import VariaveisGlobais from './AULAS/aula27/VariaveisGlobais'

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
        <VariaveisGlobais></VariaveisGlobais>
      
    </div>
  );
}

export default App;
