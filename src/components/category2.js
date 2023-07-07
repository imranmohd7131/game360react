import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import JSONDATA from "./../gamename.json";
import { useParams } from "react-router-dom";

const Category2 = () => {
  let cat_id = useParams();

  const [userInfo, setUserInfo] = useState([]);
  const [gameData, setGameData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAll2 = async () => {
    const api = await axios.get("http://localhost:8082/gameInfo");
    setGameData(api.data);
    console.log(api.data);
  };

  const getAll3 = async () => {
    const api = await axios.get("http://localhost:8082/user_info");
    setUserInfo(api.data);
  };

  useEffect(() => {
    if (gameData.length === 0) {
      getAll2();
    }
    if (userInfo.length === 0) {
      getAll3();
    }
  }, [gameData, searchTerm]);

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

      <div className="category-all">
        <div className="category-main-box">
          <div className="category-box">
            <div className="category-box-inner">
              {/* {gameData.slice(cat_id - 1, 2).map((img, i) => {
                return (
                  // <img src={ cat_id == img.category_id ? img.imgUrl : ''} />
                  <>
                    <img src={img.imgUrl} />
                  </>
                );
              })} */}
              {gameData.map((im, i) => {
                return <img src={cat_id == im.category_id ? im.imgUrl : ""}></img>;
              })}
            </div>
          </div>
          {/* <div className="category-box">
            <div className="category-box-inner">
              {gameData.slice(1, 2).map((img, i) => {
                return (
                  <div key={i}>
                    <div className="category-img">
                      <img src={img.img}></img>
                    </div>
                    <p>{img.name}</p>
                  </div>
                );
              })}
            </div>
          </div> */}
          {/* <div className="category-box">
            <div className="category-box-inner" >
              {apiData.slice(2, 3).map((img, i) => {
                return (
                  <div key={i}>
                    <div className="category-img">
                      <img src={img.img}></img>
                    </div>
                    <p>{img.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="category-box">
            <div className="category-box-inner">
              {apiData.slice(3, 4).map((img, i) => {
                return (
                  <div key={i}>
                    <div className="category-img">
                      <img src={img.img}></img>
                    </div>
                    <p>{img.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="category-box">
            <div className="category-box-inner">
              {apiData.slice(4, 5).map((img, i) => {
                return (
                  <div key={i}>
                    <div className="category-img">
                      <img src={img.img}></img>
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

export default Category2;
