import React from 'react';
import PropTypes from "prop-types";

function News({ title, originalLink, link, description, pubDate}) {
    let titles = title.replace(/<b>/gi,'"')
    let date = pubDate.replace(/Sat/gi,'토요일')
    let descriptions = description.replace(/<b>/gi,'"')
    return (
    <div>
    <h1>제목: {titles}</h1>
    <h3>{originalLink}</h3>
    <h3>{link}</h3>
    <h3>{descriptions}</h3>
    <h3>{date}</h3>
    </div>
    )
    
}

News.propTypes = {
    title : PropTypes.string.isRequired,
    originalLink: PropTypes.string.isRequired,
    liink : PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired
}
export default News;