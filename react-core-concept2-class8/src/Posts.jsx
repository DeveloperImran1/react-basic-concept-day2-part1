import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post"

export default function Posts(){
    const [posts, setPosts] = useState([])   // aikhane useState a pore jei data load korbo ta string hole "" empty string dibo, boolean hole true or false dibo. Number type er hole 0 dibo. Abar array hle [] empty array or object hole empty {} object dita hoi.

    useEffect( ()=>{
          fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(data => setPosts(data))
    } , [])
    return(
        <div className='post'>
            <h3>Post: {posts.length} </h3>

            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}


/**
 * 1. create a state to store the data
 * 2. create use effect with no dependencied
 * 3. use fetch to load data
 */