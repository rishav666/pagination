import React from 'react';
import Card from './Card.js'

const Posts = ({ posts }) => {


  return (
    <div className="row lg-3 sm-3 md-3">
      {posts.map(post => (


          <Card  name={post.name} location={post.location} email={post.email} pic={post.picture}/>

      ))}
    </div>
  );
};

export default Posts;
