import React from 'react';
import { Table } from './Table';

const Main = ({ pokemon }) => {
  return (
    <main id="main" className="pkmn-l-container">
      <div className="pkmn-l-table">
        <Table pokemon={pokemon} />
      </div>
    </main>
  )
}

export default Main