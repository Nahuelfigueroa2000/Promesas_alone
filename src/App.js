import Cards from './components/promise';
import Capitulo from './components/chapter';
import './App.css';
import { useState } from 'react';
import axios from "axios";

function App() {
  const [books,setBooks] = useState();
  const [chapter,setChapter]=useState();

  function buttonCard(event){
    axios.get("https://the-one-api.dev/v2/book").then(function(books){
      setBooks([...books.data["docs"]])
      
    }).catch(function(error){
      console.log(error)
    })
    event.preventdefault();
  }
    
  function booksIds(id){
    axios.get(`https://the-one-api.dev/v2/book/${id}/chapter`).then(function(book){
      console.log(book)
      setChapter([...books.data["docs"]])
      setBooks(null);
    }).catch(function(error){
      console.log(error)
    })
  }



  return (
    <div className="App">
      <header className="App-header">
      <button onClick={buttonCard}>run Cards</button>
        {
          books?.map(function(value){
            return(
              <button onClick={event => booksIds(value["_id"])} className="body">
              <Cards name={value["name"]} id={value["_id"]}></Cards>
              </button>
            );
          })
        }
        {
          chapter?.map(function(value){


          })

          }

      </header>
    </div>
  );
}



//PCfKic1EDmB_2OcuFabs

export default App;
