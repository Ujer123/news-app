import { useState, useEffect } from 'react';
import './App.css';
import Shopping from './pages/Shopping';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



function App() {
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState('');
  const [filteredTitle, setFilteredTitle] = useState([]);

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-04-17&to=2024-04-17&sortBy=popularity&apiKey=0db0f9b902d841ffb9eb5cc2f638591c`)
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.log('Error message: ' + error);
      });
  }, []);

  useEffect(() => {
    const filtered = news.filter(item => 
      item.title.toLowerCase().includes(searchNews.toLowerCase())
    );
    setFilteredTitle(filtered);
  }, [searchNews, news])

  

  return (
    <div className="container pt-5">
      <div className='seh-inp'>

       <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: '50px'}}
      >



      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search News"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={searchNews} 
        onChange={e => setSearchNews(e.target.value)}
        />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <SearchIcon />
      </IconButton>
    </Paper>
        </div>
      <div className="row">
        {filteredTitle.map((item, index) => (
          <div key={index} className="col-lg-4 mb-3">
            <Shopping
              index={index}
              title={item.title}
              image={item.urlToImage}
              overview={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
