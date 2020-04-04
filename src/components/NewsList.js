import React from 'react';

import '../App.css'

function NewsList({ title, link, description, pubDate}) {
    const titles = title.replace(/<b>/gi,'"')
    const date = pubDate.replace(/Sat/gi,'토요일')
    const descriptions = description.replace(/<b>/gi,'"')
    return (
    <div>
    <a href = {link} className = "news-font" >제목: {titles}</a>
    <h5>{descriptions}</h5>
    <h5>{date}</h5>
    </div>
    )
    
}


export default NewsList;