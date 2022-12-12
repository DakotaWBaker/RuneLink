import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import request from "./services/api.request";
import axios from "axios";
import { GlobalProvider, useGlobalState } from "./context/GlobalState";
import moment from "moment";
import comment from "./assets/message.png";
import pp from "./assets/blankpic.png";

export default function GroupFinder({ page }) {
  const [state, dispatch] = useGlobalState();
  const [postView, setPostView] = useState([]);
  const [commentPost, setCommentPost] = useState("");
  const [commentReturn, setCommentReturn] = useState("");
  const [user, setUser] = useState({
    body: "",
    activity: "",
    user: state.currentUser.user_id,
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  async function handlePost() {
    let options = {
      url: "groupfinder/",
      method: "POST",
      data: user,
    };

    let resp = await request(options);
  }

  useEffect(() => {
    async function returnPost() {
      let options = {
        url: "groupfinder/",
        method: "GET",
      };
      let resp = await request(options);
      setPostView(resp.data);
    }
    returnPost();
    // setInterval(returnPost, 2000)
  }, []);

  useEffect(() => {
    async function getComments() {
      let options = {
        url: "comment/",
        method: "GET",
        params: {
          user: state.currentUser.user_id,
        },
      };
      let resp = await request(options);
      setCommentPost(resp.data);
    }
    getComments();
    // setInterval(getComments, 2000)
  }, []);

  async function postComment(postId) {
    console.log(postId);
    let options = {
      url: "comment/",
      method: "POST",
      data: {
        comment: commentPost,
        user: state.currentUser.user_id,
        post: postId,
      },
    };

    let resp = await request(options);
    setCommentPost([...commentPost, resp.data]);
  }
  console.log(commentReturn);
  return (
    <>
      <div className="container mt-5">
        <div className="row formRow justify-content-center">
          <form onSubmit={handlePost}>
            <div className="col">
              <div className="wrap">
                <div className="panel panel-default contact-us-form">
                  <div className="panel-body">
                    <h2 className="title">Make Post</h2>
                    <form action="">
                      <div className="form-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Activity Type"
                            onChange={(e) =>
                              handleChange("activity", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            rows={4}
                            className="form-control mt-1"
                            placeholder="Post Message"
                            defaultValue={""}
                            onChange={(e) =>
                              handleChange("body", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label></label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-outline-light submit-form me-2"
                          onClick={() => handlePost()}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>{" "}
                {/* /wrap */}
              </div>
            </div>
          </form>
        </div>
      </div>

      {postView.map((el, i) => {
        return (
          <div className="container justify-content-center mt-3 postsContainerOuter">
            <div className="row justify-content-center">
              <div className="col">
                {" "}
                <h4 className="mt-3">{el.user.username}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5>
                  Rsn: "{el.user.rsn}" - {moment(el.time_posted).fromNow()}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5>Activity type: {el.activity}</h5>
              </div>
              <div className="row text-center">
                <div className="col align-self-center mt-5 ">
                  <h5>{el.body}</h5>
                </div>
              </div>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item mt-5">
                  <h2 class="accordion-header" id={`heading${i}`}>
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${i}`}
                      aria-expanded="true"
                      aria-controls={`collapse${i}`}
                    >
                      <img className="commentImg" src={comment} />{" "}
                      <span className="commentSpan"> Comment </span>
                    </button>
                  </h2>
                  <div
                    id={`collapse${i}`}
                    class="accordion-collapse collapse show"
                    aria-labelledby={`heading${i}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="formContainer mb-3">
                        <input
                          type="text"
                          onChange={(e) => setCommentPost(e.target.value)}
                          id="post"
                          rows="4"
                          placeholder="Comment..."
                          required
                        />
                        <button
                          className="btn send-button btn-outline-light "
                          id="submit"
                          type="submit"
                          value="SEND"
                          onClick={() => postComment(el.id)}
                        >
                          <div className="alt-send-button">
                            <i class="bi bi-send-fill"> </i>
                          </div>
                        </button>
                      </div>
                      {el.comments.map((c) => (
                        <div key={c.id} className="row">
                          <div className="col">
                            <img className="commentPicture" src={pp} />{" "}
                            {c.user.username}
                          </div>
                          <div className="row">
                            <div className="col">{c.comment}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="align-items:center px-3 py-2 border-t dark:border-gray-600"></div>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          // </div>
        );
      })}
    </>
  );
}
