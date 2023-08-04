import React from 'react'

const SearchResults = ({ results }) => {
  return (
    <div>{results.map((result) => (
        <div key={result.id}>
            <h2>Title: {result.title}</h2>
            <p>Authors: {result.authors.map((author) => author.name).join(', ')}</p>
            <p>Published Date: {result.publishedDate}</p>
            <p>Text: {result.fullText.substring(0, 500)}...</p>
            <a href={result.downloadUrl} target='_blank' noopener noreferrer>Read More</a>
        </div>
    ))}</div>
  )
}

export default SearchResults