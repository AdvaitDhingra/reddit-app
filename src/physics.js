import React, { useState, useEffect } from 'react'
import Article from './article'

export default function Physics()
{

    const [articles, setArticles] = useState([])
    //var progress = 0;

    useEffect(() => {
        fetch("https://www.reddit.com/r/Physics.json").then(res => {
            if (res.status != 200)
            {
                return;
            }
                
                
            res.json().then(data => {
                if (data != null)
                {
                    setArticles(data.data.children)

                }
                
            })

        })
        console.log(articles)
    }, [])

    return(
        <div>
            <div className = "grid" >
            {
                articles.map(art => {
                    return(
                        <Article article = {art.data}/>
                    )
                })
            }
            </div>
        </div>
    )
}