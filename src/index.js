import React from 'react';
import  ReactDOM  from 'react-dom';
// import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia';
import BoaTarde, {BoaNoite} from './components/Multiplos';


// const elemento =  <h1>React 2</h1>
// ReactDOM.render(<h1>React 2 </h1>, document.getElementById('root'))
// ReactDOM.render(<Primeiro />, document.getElementById('root'))
// ReactDOM.render(<BomDia nome="Fernando"  />, document.getElementById('root'))

ReactDOM.render(
    <div>
        <BoaTarde nome="Fernando" /> 
        <BoaNoite nome="Talita" /> 
    </div>
, document.getElementById('root') )

