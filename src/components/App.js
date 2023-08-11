import React from "react";
import blogData from "../data/blog";
import About from "./About"
import Header from "./Header"
import ArticleList from "./ArticleList"

// console.log(blogData);

const { name, image, about } = blogData

function App() {
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
