import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const localPosts = localStorage.getItem('posts');
        if (localPosts) {
            const parsedPosts = JSON.parse(localPosts);
            if (Array.isArray(parsedPosts)) {
                setPosts(parsedPosts);
                return;
            }
        }

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                localStorage.setItem('posts', JSON.stringify(data));
            });
    }, []);


    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;