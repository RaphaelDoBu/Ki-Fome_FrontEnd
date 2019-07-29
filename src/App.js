import React from 'react';
import Menu from './templates/menu'
// import Routers from '../src/routers/routers'
import Categorias from '../src/templates/categorias'
import Comidas from '../src/components/Comidas'

function App() {
  return (
    <div>
      <Menu></Menu>
      <Categorias></Categorias>
      
      {/* </div> */}
      {/* <div className="container">
        <Routers></Routers>
      </div> */}
    </div>

  );
}

export default App;
