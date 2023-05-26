import React from "react";

function Button(props){
    const { text } = props
    return (
        <button className = "text-white w-auto px-4 h-10 bg-slate-900 hover:scale-95 duration-150 ease hover:shadow-xl hover:shadow-slate-900 hover:outline-dashed hover:outline-offset-4 hover:outline-slate-900 hover:outline-4 active:scale-90 font-bold">{ text }</button>
    )

}

export default Button