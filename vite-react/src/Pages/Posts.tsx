import { useState, useEffect } from 'react';
import { Post } from '../Models/Post';
const Posts = () => {

    const [listaPosts, setlistaPosts] = useState<Post[]>([]);

    useEffect(() => {
      fetchPosts();
      return () => {
      }
    }, [])
    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setlistaPosts(data);
    }
    return (  
        <>
        {listaPosts && listaPosts.map((post) => (
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))}
        </>
    );
}
 
export default Posts;