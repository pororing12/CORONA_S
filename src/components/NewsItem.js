import React, { useEffect, useState } from 'react';
import NewsList from './NewsList'
import axios from 'axios';

const BASE_URL = 'https://api.coronas.info/news/'

function NewsItem() {
    const [coronaNews, setCoronaNews] = useState([]);
    useEffect(() => {
        const fetchApi = async() => {
            const response = await axios.get(BASE_URL)
            console.log(response.data.news);
            setCoronaNews(response.data.news);
        }
        fetchApi();
    }, [])

    return (
        <div>
        {coronaNews.map((coronaNew, index) => (
            <NewsList
                key = {index}
                title = {coronaNew.title}
                originalLink = {coronaNew.originalLink}
                link = {coronaNew.link}
                description = {coronaNew.description}
                pubDate = {coronaNew.pubDate}
            />
      ))}
        </div>
    )
}

export default NewsItem;