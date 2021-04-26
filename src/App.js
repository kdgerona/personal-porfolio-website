import './App.css';

// Components
import { 
  Header,
  Home,
  About,
} from './components'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About />
    </div>
  );
}

export default App;
