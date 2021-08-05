import './styles/Main.scss';
import Header from './components/Header'
import About from './components/About'
import Nav from './components/Nav'
import Works from './components/Works'
import Contact from './components/Contact'



function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
    <Works/>
    <Contact/>
    </>
  );
}

export default App;
