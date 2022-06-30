// import './App.css';
import React from "react";

class Api2 extends React.Component{
  constructor(props){
    super(props);
    this.state={posts:[]}
  }
  
  componentDidMount(){
   this.fetchData();
  
  }


  componentDidUpdate(prevProps,prevState){
    if(prevProps.data!==this.props.data){
      this.fetchData();
    }
  }

  componentWillUnmount(){
    this.setState({data:[]});
  }

  fetchData(){
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>res.json())
  .then((posts) => {
    this.setState({
      posts
    });
  }
)
.catch(err=>alert("server is down"));
  }
  render(){
    return(
      <div>
        {this.state.posts.map((post, index) => (
            <li key={index}>
              <h1>{post.title}</h1>
              <h4>post body: {post.body}</h4>
              
            </li>
          ))}
      </div>
    )
  }
}

export default Api2;