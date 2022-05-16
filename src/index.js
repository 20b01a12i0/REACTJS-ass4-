import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table.jsx';
import './styles.css'

const App=()=>{
    return(
      <>
      <Table guess1={22} guess2={15} guess3={12} guess4={11}/>
      </>
    )
  }
ReactDOM.render(
    <>
    <App />
   
    </>,
     document.getElementById('root')
)