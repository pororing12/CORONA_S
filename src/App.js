import React, {useState, useEffect} from 'react';
import axios from 'axios'
import News from './news'
// import User from './User';

function App() {
  const [coronas, setCorona] = useState([]);
  useEffect(() => {
    fetchApi();
  }, [])

  const BASE_URL = 'https://api.coronas.info/news/'

  const fetchApi = async () => {
    const response = await axios.get(BASE_URL)
    console.log(response.data.news);
    setCorona(response.data.news);
    
  }
  return (
    <div>
      {coronas.map((corona, index) => (
        <News 
          key = {index}
          title = {corona.title}
          originalLink = {corona.originalLink}
          link = {corona.link}
          description = {corona.description}
          pubDate = {corona.pubDate}
          />
      ))}
      {/* {coronas.map((corona) => (
        <User
          key = {corona.id}
          name = {corona.name}
          total = {corona.total}
          increase = {corona.increase}
          />
      ))} */}
    </div>
  )
  
}
export default App