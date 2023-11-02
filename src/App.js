import './App.css';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Content from './components/Content';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar/>
      <Header />
      <Content/>
      <Blog/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
