import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Posts />} />
                <Route exact path="/post/:id" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;