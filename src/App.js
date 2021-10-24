import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React,{useState} from 'react';


function App() {
  const [mode,setmode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#0c2954';
      document.body.style.color = 'white';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color = 'black';
    }

  };
  return (
    <>
    <Navbar title="Data Edin" mode={mode} toggleMode={toggleMode}/>
    <div className="container" >
    <Form heading="Enter the Text to Analyze" mode={mode}/>
    </div>
    
    </>

  );
}

export default App;
