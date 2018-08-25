import React from 'react'
import AddJson from '../containers/AddJson';
import VisibleItemList from '../containers/VisibleItemList';
import AppRouter from '../routers/AppRouter';

const App = () => (
  <div className="container">
    <AppRouter />
    <AddJson />
    <VisibleItemList />
  </div>
);

export default App
