import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import {
  BrowserRouter as BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Link to="/createpost">Create A Post</Link>
        <Link to="/">Home Page</Link>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/createpost" exact element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
