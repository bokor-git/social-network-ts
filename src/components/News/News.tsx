import React from 'react';
import s from "./News.module.css"

type NewsPropsType = {
    newsData: Array<{
        title:string
    }>
}

const News =({newsData}:NewsPropsType)=> {
    return <div className={s.news}>
        <h1>News!</h1>
        {newsData.map(n=><div>{n.title}</div>)}
    </div>
}

export default News;