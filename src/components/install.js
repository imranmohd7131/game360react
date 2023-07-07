import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import base_url from "../api/bootapi";

const Install = () => {
  let { id } = useParams();
  let val = id;
  console.log(val);

  const [gameData, setGameData] = useState([]);
  const [result, setResult] = useState([]);

  console.log("result :-" + result);

  const gameInfo = async () => {
    await axios.get(`${base_url}/serviceInfo`).then((response) => {
      setGameData(response.data);
      console.log(response.data);
    });
  };

  const chkPoints = async () => {
    await axios.get(`${base_url}/chkPoints/${val}`).then(
      (response) => {
        setResult(response.data);
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

 
  useEffect(() => {
    if (gameData.length === 0) {
      gameInfo();
    }
    if (result.length !== 0) {
      chkPoints();
    }
    
  }, [gameData]);

  return (
    <main className="main-wrapper">
      <div className="ori-wrapper">
        <div className="ori-img">
        <div>
                      {(() => {
                        if (result === "failed") {
                          return (
                            <div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
</div>
                          );
                        }else{ if(result === 'success')
                          alert("you are eligible to play this game");
                          


                        }
                      })()}

                      
                    </div>
          {gameData.map((im, i) => {
            return (
              <>
                <img src={id == im.gameId ? im.imgUrl : ""}></img>
                {/* <div set={id == im.gameId ? im.gameUrl : ""}></div> */}
              </>
            );
          })}
          <span>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <div className="more-game">
        <div className="ori-game">
          <div className="ori-game-img">
            {gameData.slice(id - 1).map((im, i) => {
              return <img src={id == im.gameId ? im.imgUrl : ""}></img>;
            })}
          </div>
          <div className="ori-game-inner">
            <div className="ori-game-name">
              {gameData.slice(id - 1).map((im, i) => {
                return (
                  <>
                    <p>{id == im.gameId ? im.gameName : ""}</p>
                  </>
                );
              })}
            </div>
            <div className="ori-game-reating">
              <div className="star-r">
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {gameData.slice(id - 1).map((im, i) => {
                    return <>{id == im.gameId ? im.rating : ""}</>;
                  })}
                </span>
                <span>
                  <i className="fa fa-download" aria-hidden="true"></i>{" "}
                  {gameData.slice(id - 1).map((im, i) => {
                    return <>{id == im.gameId ? im.downloads : ""}</>;
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-game">
        <div className="popular-game-h">
          <h3>Popular Game</h3>
        </div>
        {/* <div className="main-game-slider">
          <div className="story owl-carousel owl-theme">
            <div className="story-item item">
              <div className="slider-img-box">
                <img src="img/ori.jpg" alt="img" />
              </div>
            </div>
            <div className="story-item item">
              <div className="slider-img-box">
                <img src="img/ori3.jpg" alt="img" />
              </div>
            </div>
            <div className="story-item item">
              <div className="slider-img-box">
                <img src="img/ori2.jpg" alt="img" />
              </div>
            </div>
            <div className="story-item item">
              <div className="slider-img-box">
                <img src="img/ori3.jpg" alt="img" />
              </div>
            </div>
            <div className="story-item item">
              <div className="slider-img-box">
                <img src="img/ori4.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="slider-content">
          {gameData.slice(id - 1).map((im, i) => {
            return (
              <>
                <p>{id == im.gameId ? im.description : ""}</p>
              </>
            );
          })}
        </div>
      </div>

      <div className="review-wrapper">
        <div className="review">
          <h3>Ratings and Review</h3>
        </div>
        <div className="review-game">
          <div className="review-game-img">
            {gameData.slice(id - 1).map((im, i) => {
              return (
                <>
                  <h2>{id == im.gameId ? im.rating : ""}</h2>
                </>
              );
            })}
          </div>
          <div className="review-game-inner">
            <div className="review-game-name">
              <div className="review-r">
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
            </div>
            <div className="review-game-reating">
              <p>
                {gameData.slice(id - 1).map((im, i) => {
                  return (
                    <>
                      <span>{id == im.gameId ? im.review : ""}</span>
                    </>
                  );
                })}
                Review
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="install-game">
        <span id="link" onClick={() => chkPoints(val)} data-target="#exampleModal">
          {gameData.slice(id - 1).map((im, i) => {
            return (
              <div key={i}>
                {id == im.gameId ? (
                  <Link id="link" to={result === "success" ? im.gameUrl : null}>
                    
                    Play
                  </Link> ) : ("") }
              </div>
            );
          })}
        </span>
      </div>  
    </main>
  );
};
export default Install;
