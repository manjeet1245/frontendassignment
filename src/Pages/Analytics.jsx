import React from 'react'
import { Header } from '../Components/Header';
import { Table } from '../Components/Table';
import './app.css'


function Analytics() {
  return (
<>
<Header/>
<main>
  <div className="table__container">
    <Table/>
  </div>
</main>
</>
  )
}

export default Analytics