import logo from './logo.svg';
import './App.css';
import { Header, Counters} from './components';
import { ItemDetailConteiner } from './components/ItemDetailConteiner';
import { ItemListContainer } from './components';

function App() {
  return (
    <div className="App">      
      <Header />
      <main>
      <section className="App-content">
        <ItemListContainer />        
        {/* <ItemDetailConteiner /> */}
        <Counters />
        <img src={logo} className="App-logo" alt="logo" />
        </section>
      </main>
    </div>
  );
}

export default App;
