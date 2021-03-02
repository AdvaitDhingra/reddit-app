import React, { useState, useEffect } from 'react'
import Article from './article'

export default function PhysicsStudents()
{

    const [articles, setArticles] = useState([])
    

    useEffect(() => {
        fetch("https://www.reddit.com/r/PhysicsStudents.json").then(res => {
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
    })

    return(
        <div>
            <div className = "grid">
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