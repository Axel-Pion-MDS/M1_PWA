import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(localStorage.getItem(`post_${id}`) ? JSON.parse(localStorage.getItem(`post_${id}`) || '') : null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                localStorage.setItem(`post_${id}`, JSON.stringify(data));
            });
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;