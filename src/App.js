import React, {useState, useEffect} from 'react';

import axios from 'axios'

import './App.css';
import Header from '../src/components/ui/Header'
import CharacterGrid from '../src/components/characters/CharacterGrid'
import Search from '../src/components/ui/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters?name=${query}`);

      setItems(result.data);
      setIsLoading(false)
    }

    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=> setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
