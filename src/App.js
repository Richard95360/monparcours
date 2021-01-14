import Accueil from './components/Accueil'
import Header from './components/Header'
import Contact from './components/Contact'
import Profess from './components/profess';
import Formation from './components/formation'
import Competences from './components/competences'
import Interet from './components/interet'
import Footer from './components/footer'
import resumeData from './ResumeData';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {
  return (
    <>
    

      <Header />
      <Accueil/>
      <Contact resumeData={resumeData} />
      <Profess/>
      <Formation/>
      <Competences/>
      <Interet/>
      <Footer/>
    
      
    </>
  );
}

export default App;
