import Accueil from './components/Accueil'
import Header from './components/Header'
import Contact from './components/Contact'
import Profess from './components/profess';
import Formation from './components/formation'
import Competences from './components/competences'
import Interet from './components/interet'
import Footer from './components/footer'
import resumeData from './ResumeData';
import React ,{Component} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';




class App extends Component {

  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }
  render() {
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
}

export default App;
