import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <div className="home-container">
              <h1>First Backend Project</h1>
              <button onClick={() => window.location.href = '/create-post'}>Create Post</button>
            </div>
          } />
          <Route path='/create-post' element={<CreatePost />}/>
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
