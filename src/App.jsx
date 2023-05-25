import React, { useState, useEffect } from 'react'
import './App.css'
import Article from './components/article'

function App() {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
      const json  = await response.json()
      setNewsList(json)
    }
    fetchData()
  }, [])

  return (
    <div className = "App flex flex-col place-items-center">
      <h1 className = "text-6xl font-bold m-10 text-center">Top 10 Space News of the hour</h1>
      <div className = "news-container grid grid-cols-3 gap-10">
        {newsList.map((news, key) => {
          return <Article key = { key } news = { news } />
        })}
      </div>
      <h1 className = "font-thin text-slate-500 m-[100px]">Created by Kumar Piyush (vocarista)</h1>
    </div>
  )
}

export default App
