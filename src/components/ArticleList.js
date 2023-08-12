import React from "react";
import Article from "./Article"

function ArticleList({ posts }) {
    // console.log(posts)
    const articles = posts.map(article => {
        // console.log(article)
        const { title, date, preview, id } = article
        return <Article key={id} id={id} title={title} date={date} preview={preview} />
    })

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;