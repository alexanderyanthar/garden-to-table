import { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import './App.css';

const API_KEY = "s2n0daYoDNeIXCKZkvbRljTfgQzEtBAy";
const API_URL = 'https://api.core.ac.uk/v3/search';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const fetchResearchPapers = async (query) => {
    try {
      const response = await axios.get(`${API_URL}/works`, {
        params: {
          apiKey: API_KEY,
          q: query,
        },
      });

      console.log(response.config.url);
      console.log(response.data.results);

      setSearchResults(response.data.results);
    } catch(err) {
      console.error('Error fetching research papers:', err);
    }
  };

  console.log("search results", searchResults);

  return (
    <div>
      <h1>Garden to Table</h1>
      <SearchForm onSubmit={fetchResearchPapers} />
      <SearchResults results={searchResults} />
    </div>
  )
}

export default App
