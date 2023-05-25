import React from 'react'
import Button from './Button'

function Article(props) {
    const { key, news } = props
    const { title, url, imageUrl, summary, publishedAt, newsSite } = news
    return (
        <div className = "article flex flex-col place-items-center w-[400px] h-[600px] border-2 border-slate-950 hover:scale-110 hover:shadow-xl hover:shadow-slate-950 ease duration-100 bg-white">
            <img className = "w-[400px] h-[225px] object-cover" src= { imageUrl } />
            <h1 className = "font-bold p-3 text-2xl">{ title }</h1>
            <p className = "text-slate-500 font-thin">{ newsSite + " | " + publishedAt.slice(0,10) }</p>
            <p className = "flex-grow text-justify p-3 font-normal">{ summary.slice(0,150) + "..." }</p>
            <a href = { url } className = "flex-shrink p-5" target = "_blank"><Button className = "" text = { "Read More" }/></a>
        </div>
    )
}

export default Article