import { useState, useEffect } from 'react';
import './App.css';
import Template from './components/Templates';
import Meme from './components/Meme';

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);


  useEffect(() =>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
      setTemplates(data.data.memes);
      // console.log(data.data.memes)
    })
  }, []);
  return (
    <div className="App">
      <h1>  Meme Baba </h1>
      {meme === null ? <Template templates={templates} setMeme={setMeme}/> : <Meme meme={meme}/>}
    </div>
  );
}

export default App;
