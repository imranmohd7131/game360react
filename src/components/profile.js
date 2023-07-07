import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import base_url from "../api/bootapi";

const Profile = () => {
  const [score, SetScore] = useState();
  const [scoree, SetScoree] = useState();
  const [scoreee, SetScoreee] = useState();
  const [userInfo, setUserInfo] = useState([]);

  const getScore = () => {
    axios.get(`${base_url}/topScore`).then((response) => {
      SetScore(response.data);
      console.log(response.data);
    });
    axios.get(`${base_url}/topSecond`).then((response) => {
      SetScoree(response.data);
      console.log(response.data);
    });
    axios.get(`${base_url}/topThird`).then((response) => {
      SetScoreee(response.data);
      console.log(response.data);
    });
  };

  const user_Info = async () => {
    await axios.get(`${base_url}/user_info`).then((response) => {
      setUserInfo(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    if (getScore.length === 0) {
      getScore();
    }

    user_Info();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="welcome-wrapper">
        <div className="welcome">
          <div className="welcome-text">
            <h2>Welcome,</h2>
            <p>What would you like to play?</p>
          </div>
          {/* <div className="welcome-inner-img">
            <div className="welcome-img">
              {userInfo.map((img, i) => {
                return <img src={img.profile_img}></img>;
              })}
            </div>
          </div> */}
        </div>

        {/* <div className="search-box">
          <form className="search-box-inner">
            <div className="search-game">
              <span>
                <input
                  type="text"
                  name="game"
                  placeholder="Search Game"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
                {JSONDATA.filter((val) => {
                  if (searchTerm == "") {
                  } else if (
                    val.game_name
                      .toLowerCase()
                      .startsWith(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                }).map((val, key) => {
                  return <div className="fil">{val.game_name}</div>;
                })}
              </span>
            </div>
          </form>
        </div> */}
      </div>

      <div className="category-all">
        <div className="play-main-content">
          <div className="play-top-bar">
            <div className="back-btn">
              {/* <img src="img/back.png" /> */}
            </div>
            <div>
              <h2>My Profile</h2>
            </div>
          </div>

          <div className="entry-box">
            <span className="entry-text">ENTRY: </span>{" "}
            <span className="coins">10 Coins</span>
          </div>

          <div className="top-3-player">
            <div className="top-3-player-heading">
              <h3>TOP PLAYERS</h3>
            </div>

            <div className="top-3-player-img">
              <div className="top-3-img-inner mt-4">
                <div className="top-3-main-img">
                  <div className="main-img-box">
                    {userInfo.map((img, i) => {
                      return <img src={img.profile_img}></img>;
                    })}
                  </div>
                  <div className="img-top-count">
                    <span className="count1-h">2</span>
                    <span className="count2-h">#</span>
                  </div>
                </div>
                <h3 className="top-name">first name</h3>

                <p className="score">
                  Top Score
                  <span> {scoree}</span>
                </p>
              </div>

              <div className="top-3-img-inner">
                <div className="top-3-main-img">
                  <div className="main-img-box">
                    {userInfo.map((img, i) => {
                      return <img src={img.profile_img}></img>;
                    })}
                  </div>
                  <div className="img-top-count">
                    <span className="count1-h">1</span>
                    <span className="count2-h">#</span>
                  </div>
                </div>
                <h3 className="top-name">first name</h3>
                <p className="score">
                  Top Score
                  <span> {score}</span>
                </p>
              </div>

              <div className="top-3-img-inner mt-4">
                <div className="top-3-main-img">
                  <div className="main-img-box">
                    {userInfo.map((img, i) => {
                      return <img src={img.profile_img}></img>;
                    })}
                  </div>
                  <div className="img-top-count">
                    <span className="count1-h">3</span>
                    <span className="count2-h">#</span>
                  </div>
                </div>
                <h3 className="top-name">first name</h3>
                <p className="score">
                  Top Score
                  <span> {scoreee}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="main-score-card">
            <div className="score-inner-1">
              <h3>SCORE CARD :</h3>
            </div>
            <div className="score-inner-2">
              <span>Your Best</span>
              <span className="score-rank">267</span>
            </div>
            <div className="score-inner-2">
              <span>Your Rank</span>
              <span className="rank">5th</span>
            </div>
          </div>

          {/* <div className="reward">
            <ul className="nav nav-tabs reward-head" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link rewards-icon active"
                  data-bs-toggle="tab"
                  href="#home"
                >
                  <span className="rr-icon">
                    <img src="img/gg.png" />
                  </span>
                  <span>Rewards</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link leaderboard-icon"
                  data-bs-toggle="tab"
                  href="#menu1"
                >
                  {" "}
                  <span className="rr-icon">
                    <img src="img/tt.png" />
                  </span>
                  <span>
                    <Link to="#menu1">Leaderboard</Link>
                  </span>
                </a>
              </li>
            </ul>

            <div className="tab-content reward-content">
              <div id="home" className="tab-pane active">
                <br></br>
                <div className="top-100">
                  <div className="reward-renk">
                    <h3>Reward Breakup</h3>
                  </div>
                  <div className="reward-coin">
                    <h3>TOP 100 Players</h3>
                  </div>
                </div>
                <div className="rank-content-100">
                  <ul>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 1</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>100</span>
                      </div>
                    </li>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 2</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>75</span>
                      </div>
                    </li>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 3</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>50</span>
                      </div>
                    </li>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 4</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>25</span>
                      </div>
                    </li>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 5</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>10</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="menu1" className="tab-pane fade">
                <br></br>

                <div className="top-100">
                  <div className="reward-renk">
                    <h3>Reward Breakup</h3>
                  </div>
                  <div className="reward-coin">
                    <h3>TOP 100 Playerss</h3>
                  </div>
                </div>
                <div className="rank-content-100">
                  <ul>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 1</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>100</span>
                      </div>
                    </li>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 2</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>75</span>
                      </div>
                    </li>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 3</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>50</span>
                      </div>
                    </li>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 4</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>25</span>
                      </div>
                    </li>
                    <li>
                      <div className="top-renk-100">
                        <span>Rank 5</span>
                      </div>
                      <div className="rank-top-coin">
                        <span>10</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="btn-play-now">
            <a href="#">Play Now</a>
          </div> */}
        </div>
      </div>

      <div className="footer-icom">
        <div className="footer-icon-inner">
          <span>
            <i className="fa fa-home" aria-hidden="true"></i>
          </span>
          <p>Home</p>
        </div>
        <div className="footer-icon-inner Aplication">
          <span>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </span>
          <p>Application</p>
        </div>
        <div className="footer-icon-inner">
          <span>
            <i className="fa fa-play" aria-hidden="true"></i>
          </span>
          <p>Filam</p>
        </div>
        <div className="footer-icon-inner">
          <span>
            <i className="fa fa-book" aria-hidden="true"></i>
          </span>
          <p>Books</p>
        </div>
      </div>
    </main>
  );
};
export default Profile;
