import React from 'react';
import { ExpenseItem } from './components/expense-item.component';

import './App.css';
import PersistentDrawerLeft from './components/navigation/navigation.component';

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft />

      <ExpenseItem title="Walmart" date="11 Abril" amount={`$30000`} />
    </div>
  );
}

export default App;
