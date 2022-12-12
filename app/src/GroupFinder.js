import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import request from "./services/api.request";
import axios from "axios";
import { GlobalProvider, useGlobalState } from "./context/GlobalState";
import moment from "moment";

export default function GroupFinder( {page}) {
  const [state, dispatch] = useGlobalState();
  const [postView, setPostView] = useState([]);
  const [user, setUser] = useState({
    body: "",
    activity: "",
    players_needed: "",
    user: state.currentUser.user_id,
  });
console.log(user)
  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  async function handleRegister(e) {
    console.log(request);
    e.preventDefault();
    let options = {
      url: "groupfinder/",
      method: "POST",
      data: user,
    };
    console.log(options);
    let resp = await request(options);
  }

  useEffect(() => {
    async function returnRegister() {
      console.log(request);
      let options = {
        url: "groupfinder/",
        method: "GET",
        data: user,
      };
      console.log(options);
      let resp = await request(options);
      setPostView(resp.data);
    }
    returnRegister();
      setInterval(returnRegister, 2000)
  }, []);

  console.log(postView);
  return (
    <>
      <div className="c-form">
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="body">Body</label>
            <input
              type="text"
              id="body"
              name="body"
              onChange={(e) => handleChange("body", e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="activity">Activity</label>
            <input
              type="activity"
              id="pass"
              name="activity"
              minLength="8"
              required
              onChange={(e) => handleChange("activity", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="players_needed">Players Needed</label>
            <input
              type="players_needed"
              id="pass"
              name="players_needed"
              required
              onChange={(e) => handleChange("players_needed", e.target.value)}
            />
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
      {postView.map((el) => {
        return (
          <div className="container postsContainer">
            <div className="row">
              
              <div className="col"> <h4>Posted by: {el.user.username}</h4></div>
              <div className="col"><h4>{moment(el.time_posted).fromNow()}</h4></div>
            </div>
            <div className="row">
              <div className="col">{el.body}</div>
            </div>
            <div className="row">
              <div className="col">{el.activity}</div>
            </div>
            </div>
        );
      })}
    </>
  );
}
