import React from 'react';
import PropTypes from "prop-types";

function News({ title, originalLink, link, description, pubDate}) {
    let titles = title.replace(/<b>/gi,'"')
    let date = pubDate.replace(/Sat/gi,'토요일')
    let descriptions = description.replace(/<b>/gi,'"')
    return (
    <div>
    <h5>제목: {titles}</h5>
    <h5>{originalLink}</h5>
    <h5>{link}</h5>
    <h5>{descriptions}</h5>
    <h5>{date}</h5>
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