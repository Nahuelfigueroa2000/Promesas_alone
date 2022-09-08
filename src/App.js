import Cards from './components/promise';
import './App.css';
import { useState } from 'react';
import axios from "axios";

function App() {
  const [books,setBooks] = useState([]);

  function buttonCard(event){
    axios.get("https://the-one-api.dev/v2/book").then(function(books){
      setBooks([...books.data["docs"]])
      
    }).catch(function(error){
      console.log(error)
    })
    event.preventdefault();
  }
    

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={buttonCard}>run Cards</button>
        {
          books.map(function(value){
            return(
              <button className="body">
              <Cards name={value["name"]} id={value["_id"]}></Cards>
              </button>
            );
          })
        }
      </header>
    </div>
  );
}


//PCfKic1EDmB_2OcuFabs

export default App;
