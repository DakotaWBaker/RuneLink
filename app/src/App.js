import logo from './logo.svg';
import './App.css';
import TwitterFeed from './TwitterFeed';
import Navbar from './Navbar';
import { useState, useEffect } from 'react'
import Home from './Home';
import GroupFinder from './GroupFinder';



function App() {
  const [page, setPage] = useState("Home");
  if (page === 'Home') {
  return (
    <>
    <Navbar
    page = {setPage}
    />
    <Home />
    </>
  )
  }
  if (page === 'Finder') {
    return (
      <>
      <Navbar 
      page = {setPage}
      />
      <GroupFinder/>
      </>
    )
    }
  if (page === 'Updates') {
    return (
      <>
      <Navbar 
      page = {setPage}
      />
      <TwitterFeed />
      </>
    )
    }
}

export default App;
