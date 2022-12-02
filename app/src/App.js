import logo from './logo.svg';
import './App.css';
import TwitterFeed from './TwitterFeed';
import Navbar from './Navbar';
import { useState, useEffect } from 'react'
import axios from "axios";
import Home from './Home';
import GroupFinder from './GroupFinder';
import GrandExchange from './GrandExchange';

// const counter = 1

function App() {
  const [page, setPage] = useState("Home");
  const [ge, setGe] = useState([])
  const [pagination, setPagination] = useState(1)
  const [searchItems, setSearchItems] = useState('')
  const api = `https://8000-dakotawbake-runelinkapi-zemha1opeck.ws-us77.gitpod.io/api/grandexchange?page=${pagination}`
  useEffect(() => {
    async function getData() {
      const response = await axios.get(api);
      setGe(response.data);
    }
    getData();
  }, [pagination]);
  async function getSearchData(searchParam) {
   
    const searchResponse = await axios.get(`https://8000-dakotawbake-runelinkapi-zemha1opeck.ws-us77.gitpod.io/api/gesearch?item=${searchParam}`);
    setSearchItems(searchResponse.data.item)
    console.log(searchItems)
  }
  if (page === 'Home') {
  return (
    <>
    <Navbar
    page = {setPage}
    />
    <GrandExchange
    items = {ge}
    pagination = {pagination}
    setPage = {setPagination}
    getSearchData = {getSearchData}
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
