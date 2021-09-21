import './styles/Main.scss';
import Header from './components/Header'
import About from './components/About'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Contact from './components/Contact'



function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
