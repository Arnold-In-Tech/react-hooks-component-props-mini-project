import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    
    const postsArray = posts.map((postObj) => {
        return <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} />
    })

    return(
        <main>
            {postsArray}
        </main>
    )
}

export default ArticleList