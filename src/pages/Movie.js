import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);
  /////////////////////MOVIES////////////////////
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&page=1"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMovies(res.results);
      });
  };
  return (
    <>
      {" "}
      {/* <Search /> */}
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((res) => {
            return (
              <div className="movie">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + res.poster_path}
                  alt={res.title}
                />
                <div className="movie-info">
                  <h3>{res.title}</h3>
                  <span>Vue: {res.popularity}</span>
                  <br />
                  <span id="vote-average">&#9734;{res.vote_average}</span>
                  <span> {res.vote_count} vote</span>

                  <div>
                    <Link to={{ pathname: `/details/${res.id}` }}>
                      <div className="over">
                        <div id="more-info">
                          <span>&#10148;</span> <br /> More info
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Movie;
