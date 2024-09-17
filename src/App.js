import logo from './logo.svg';
import './App.css';
import { PostsList } from './components/PostLists';
import { Navbar } from './components/NavBar';
import { AddPostForm } from './components/AddPostForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <AddPostForm />
        <PostsList />
      </div>
    </>
  );
}

export default App;
