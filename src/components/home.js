import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import JSONDATA from "./../gamename.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import base_url from "../api/bootapi";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [gameData, setGameData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const gameCategory = async () => {
    await axios.get(`${base_url}/gameCategory`).then((response) => {
      setApiData(response.data);
      console.log(response.data);
    });
  };

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  };

  useEffect(() => {
    if (apiData.length === 0) {
      gameCategory();
    }

    if (gameData.length === 0) {
      serviceInfo();
    }
    user_Info();
  }, []);

  return (
    <>
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

        <div className="more-game">
          <div className="more-game-inner">
            <div className="game-all">
              {apiData.slice(0, 1).map((img, i) => {
                return (
                  <div key={i}>
                    <Link to={"/install2/" + img.id}>
                      <div className="more-game-icon bg-blue1">
                        <img src={img.img}></img>
                      </div>
                    </Link>
                    <p>{img.name}</p>
                  </div>
                );
              })}
            </div>

            <div className="game-all">
              {apiData.slice(1, 2).map((img, i) => {
                return (
                  <div key={i}>
                    <Link to={"/install2/" + img.id}>
                      <div className="more-game-icon bg-blue2">
                        <img src={img.img}></img>
                      </div>
                    </Link>
                    <p>{img.name}</p>
                  </div>
                );
              })}
            </div>

            <div className="game-all">
              {apiData.slice(2, 3).map((img, i) => {
                return (
                  <div key={i}>
                    <Link to={"/install2/" + img.id}>
                      <div className="more-game-icon bg-pink">
                        <img src={img.img}></img>
                      </div>
                    </Link>
                    <p>{img.name}</p>
                  </div>
                );
              })}
            </div>

            <div className="game-all">
              <Link to="/category">
                <div className="more-game-icon bg-blue3">
                  <img src="img/more.png" alt="png" />
                </div>
              </Link>
              <p>More</p>
            </div>
          </div>
        </div>

        <div className="slider-game">
          <div className="popular-game-h">
            <h3>Popular Game</h3>
          </div>
          <div className="box">
            <Slider {...settings}>
              {gameData.map((image, index) => (
                <div key={index}>
                  <Link to={"/Install/" + image.gameId}>
                    <img
                      id="imgg"
                      src={image.imgUrl}
                      alt={`Slider Image ${index}`}
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <br></br>
          <br></br>
          {/* <div className="main-game-slider">
            <div className="story owl-carousel owl-theme">
              <div className="story-item item">
                <div className="slider-img-box">
                  {gameData.slice(0, 1).map((img, i) => {
                    return (
                      <div key={i}>
                        <Link to={"/Install/" + img.gameId}>
                          <img src={img.imgUrl}></img>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="story-item item">
                <div className="slider-img-box">
                  {gameData.slice(1, 2).map((img, i) => {
                    return (
                      <div key={i}>
                        <Link to={"/Install/" + img.gameId}>
                          <img src={img.imgUrl}></img>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="story-item item">
                <div className="slider-img-box">
                  {gameData.slice(2, 3).map((img, i) => {
                    return (
                      <div key={i}>
                        <Link to={"/Install/" + img.gameId}>
                          <img src={img.imgUrl}></img>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="story-item item">
                <div className="slider-img-box">
                  {gameData.slice(3, 4).map((img, i) => {
                    return (
                      <div key={i}>
                        <Link to={"/Install/" + img.gameId}>
                          <img src={img.imgUrl}></img>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="story-item item">
                <div className="slider-img-box">
                  {gameData.slice(4, 5).map((img, i) => {
                    return (
                      <div key={i}>
                        <Link to={"/Install/" + img.gameId}>
                          <img src={img.imgUrl}></img>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>  */}
        </div>

        <div className="newest-wrapper">
          <div className="newest">
            <h3>Newest game</h3>
          </div>
          <div className="newest-game">
            <div className="newest-game-img">
              <img src="img/s5.jpg" alt="img" />
            </div>
            <div className="newest-game-inner">
              <div className="newest-game-name">
                <p>Ori And The Blind Forest</p>
              </div>
              <div className="newest-game-reating">
                <div className="star-r">
                  <span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="instal-btn">
                  <a href="#">Install</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-icom">
          <div className="footer-icon-inner">
            <Link to="/" id="style">
              <span>
                <i className="fa fa-home" aria-hidden="true"></i>
              </span>
              <p id="style">Home</p>
            </Link>
          </div>
          <div className="footer-icon-inner Aplication">
          <Link to="/category" id="style">
            <span>
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </span>
            <p id="style">Application</p>
            </Link>
          </div>
          <div className="footer-icon-inner">
          <Link to="/category" id="style">
            <span>
              <i className="fa fa-play" aria-hidden="true"></i>
            </span>
            <p id="style">Filam</p>
            </Link>
          </div>
          <div className="footer-icon-inner">
          <Link to="/category" id="style">
            <span>
              <i className="fa fa-book" aria-hidden="true"></i>
            </span>
            <p id="style">Books</p>
            </Link>
          </div>
          <div className="footer-icon-inner">
          <Link to="/profile" id="style">
            <span>
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
            <p id="style">Profile</p>
            </Link>
          </div>
        </div>
      </main>
      <script></script>
    </>
  );
};

export default Home;

export const sendGameImg = (img) => {
  console.log("i " + img);
  return img.data;
};
