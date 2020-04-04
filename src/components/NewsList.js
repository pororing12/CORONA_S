import React from 'react';

import '../App.css'

function NewsList({ title, link, description, pubDate}) {
    let titles = title.replace(/<b>/gi,'"')
    let date = pubDate.replace(/Sat/gi,'토요일')
    let descriptions = description.replace(/<b>/gi,'"')
    return (
    <div>
    <a href = {link} className = "news-font" >제목: {titles}</a>
    <h5>{descriptions}</h5>
    <h5>{date}</h5>
    </div>
    )
    
}


export default NewsList;