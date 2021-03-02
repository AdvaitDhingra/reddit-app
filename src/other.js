import React, { useState, useEffect } from 'react'
import Article from './article'

export default function OtherSub(props)
{

    const [articles, setArticles] = useState([])
    

    useEffect(() => {

        const url = "https://www.reddit.com/r/" + props.sub + ".json"

        fetch(url).then(res => {
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
            <h3>r/{props.sub}:</h3>
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