import logo from './logo.svg';
import './App.css';
import TwitterFeed from './TwitterFeed';
import Navbar from './Navbar';
import { useState, useEffect } from 'react'
import axios from "axios";
import Home from './Home';
import GroupFinder from './GroupFinder';
import GrandExchange from './GrandExchange';
import { GlobalProvider, useGlobalState } from './context/GlobalState';
import Register from './Register';
import Login from './Login';
import Profile from './Profile'


function App() {
  const [page, setPage] = useState("Home");
  const [ge, setGe] = useState([])
  const [pagination, setPagination] = useState(1)
  const [searchItems, setSearchItems] = useState('')
  const [profile, setProfile] = useState('')
  const [ state, dispatch ] = useGlobalState();

 
  const api = `https://8000-dakotawbake-runelinkapi-zemha1opeck.ws-us78.gitpod.io/api/grandexchange?page=${pagination}`
  useEffect(() => {
    async function getData() {
      const response = await axios.get(api);
      setGe(response.data);
    }
    getData();
  }, [pagination]);
  async function getSearchData(searchParam) {
   
    const searchResponse = await axios.get(`https://8000-dakotawbake-runelinkapi-zemha1opeck.ws-us78.gitpod.io/api/gesearch?item=${searchParam}`);
    setSearchItems(searchResponse.data.item)

  }
  useEffect(() => {
    async function getUserProfile() {
      const loggedIn = state.currentUser.user_id
      console.log(loggedIn)
      const profileResponse = await axios.get(`https://8000-dakotawbake-runelinkapi-zemha1opeck.ws-us78.gitpod.io/api/users/${loggedIn}/`);
      setProfile(profileResponse.data);
    }
    getUserProfile();
  }, [page]);


  

  if (page === 'Home') {
  return (
    <GlobalProvider>
    <Navbar
    page = {setPage}
    />
    <GrandExchange
    items = {ge}
    pagination = {pagination}
    setPage = {setPagination}
    getSearchData = {getSearchData}
    searchItems = {searchItems}
    />
    </GlobalProvider>
  )
  }
  if (page === 'Finder') {
    return (
      <GlobalProvider>
      <Navbar 
      
      page = {setPage}
      />
      <GroupFinder
      page = {page}
      />
      </GlobalProvider>
    )
    }
  else if (page === 'Updates') {
    return (
      <GlobalProvider>
      <Navbar 
      page = {setPage}
     
      />
      <TwitterFeed />
      </GlobalProvider>
    )
    }
    else if (page ==='Register') {
      return (
        <GlobalProvider>
        <Navbar
       
        page = {setPage}
        />
        <Register />
        </GlobalProvider>
      )
    }
    else if (page === 'Login') {
      return (
        <GlobalProvider>
        <Navbar
  
        page = {setPage}
        />
        <Login />
        </GlobalProvider>
      )
    }
    else if (page === 'Profile') {
      return (
        <GlobalProvider>
        <Navbar
        page = {setPage}
        />
        <Profile 
        setProfile = {setProfile}
        profile = {profile}
        />
        </GlobalProvider>
      )
    }
    }
  


export default App;
