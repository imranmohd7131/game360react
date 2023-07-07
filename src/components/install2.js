import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import JSONDATA from "./../gamename.json";
import { Link } from "react-router-dom";
import base_url from "../api/bootapi";

const Install2 = () => {
  let { id } = useParams();

  const [userInfo, setUserInfo] = useState([]);
  const [gameData, setGameData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const serviceInfo = async () => {
    await axios.get(`${base_url}/serviceInfo`).then((response) => {
      setGameData(response.data);
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
    if (gameData.length === 0) {
      serviceInfo();
    }

    if (userInfo.length === 0) {
      user_Info();
    }
  }, [gameData]);

  return (
    <main className="main-wrapper">
      <div className="welcome-wrapper">
        <div className="welcome">
          <div className="welcome-text">
            <h2>Welcome,</h2>
            <p>What would you like to play?</p>
          </div>
          <div className="welcome-inner-img">
            <div className="welcome-img">
              {userInfo.map((img, i) => {
                return <img src={img.profile_img}></img>;
              })}
            </div>
          </div>
        </div>

        <div className="search-box">
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
        </div>
      </div>

      <div className="category-all"  id="bottom">
        <div className="category-main-box">
          <div className="category-box">
            <div id="category-box-inner_id">
              {gameData.slice().map((img, i) => {
                return (
                  <div key={i}>
                    <div id="category-img_id">
                      <Link to={"/install/" + img.gameId} >
                        { id == img.category_id ? 
                        <div><img src={img.imgUrl}
                        ></img></div>  : '' }
                      </Link>
                    </div>
                    <p>{id==img.category_id ? img.gameName :''}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="category-box">
          <div className="category-box-inner">
            {gameData.slice(1, 2).map((img, i) => {
              return (
                <div key={i}>
                  <div className="category-img" >
                    <Link to={"/install2/" + img.id}>
                      <img src={img.imgUrl} ></img>
                    </Link>
                  </div>
                  <p>{img.name}</p>
                </div>
              );
            })}
          </div>
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
export default Install2;
