import './App.css';

// Components
import { 
  Header,
  Home,
  About,
  Footer,
  Skills,
} from './components'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
