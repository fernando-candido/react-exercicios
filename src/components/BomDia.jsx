import React, {Fragment} from 'react'




// 1° Opção: usar uma div (a opção que mais vou usar.)
export default props =>
    <div>
    <h1> Bom dia {props.nome}!</h1>
    <h2 >  Até breve! </h2>
    </div>


// ou

// 2° Opção: Usar uma tag personalizada (outra saída, mas prioridade para a div.)
// export default props => 
// <Fragment>
// <h1> Bom dia {props.nome}!</h1> 
// <h2> Até breve! </h2>
// </Fragment>

//ou

// 3° Opção: Colocar dentro de uma lista. ([último caso.)

// export default props => [
// <h1> Bom dia {props.nome}!</h1>,
// <h2 >  Até breve! </h2>
// ]





    
    
