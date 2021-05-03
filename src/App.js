import './App.css';

// Components
import { 
  Header,
  Home,
  About,
  Footer
} from './components'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
