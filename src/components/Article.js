import React from "react";

function Article(props) {
    // console.log(props)
    const { id, title, date = "January 1, 1970", preview} = props;
    console.log(id)
    return (
        <article key={id}>
            <h3 key={title}>{title}</h3>
            <small key={date}>{date}</small>
            <p key={preview}>{preview}</p>
        </article>
    );
};

export default Article;