import logo from './logo.svg';
import './App.css';
import { Header, Counters} from './components';
import { ItemDetailConteiner } from './components/ItemDetailConteiner';
import { ItemListContainer } from './components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='HOME' element={<ItemListContainer />}/>
        <Route path='zapatos' element={<ItemListContainer />}/>
        <Route path='botas' element={<ItemListContainer />}/>
        <Route path='contacto' element={<div>Contacto</div>}/>
      </Routes>
    </ BrowserRouter>    
  )
}

export default App;


// function App() {
//   return (
//     <div className="App">      
//       <Header />
//       <main>
//       <section className="App-content">        
//         {/* <ItemListContainer greeting={'greeting'}/> */}
//         <ItemDetailConteiner />
//         {/* Contador */}
//         <Counters />
//         <img src={logo} className="App-logo" alt="logo" />
//         </section>
//       </main>
//     </div>
//   );
// }
