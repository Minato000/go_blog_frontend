import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './features/common/Header';
import Post from './features/post/Post';
import PostList from './features/post/postList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact children={<PostList />}/>
            <Route path="/posts/:postId" children={<Post />} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
