import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import avatar from './avatar.png'
import Btn from './btn';
import ModeToggler from './components/ModeToggler';
import React, {useState} from 'react';

function Logo(props){
  const image = <img src={avatar} width='130' height='100' alt='Logo'/>;
  return image;
}



function App() {

  const [word, setWord] = React.useState('Eat')

  function handleClick(){
    setWord('Drink')
  }
  
  return (
    <div>
      <Header msg={word + " at my Restuarant"}/>
      <Main/>
      <Sidebar/>
      <Logo/>
      <Btn/>
      <ModeToggler/>
      <button onClick={handleClick}>State</button>
    </div>
  )
}

export default App;
