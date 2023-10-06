
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';


function App() {
  return (

    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
