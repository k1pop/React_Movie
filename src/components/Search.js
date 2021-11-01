import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getSearch();
    showInfo();
  }, [search]);

  /////////////////////SEARCH////////////////////

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = () => {
    if (search) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&query=${search}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setMovies(res.results);
        });
    }
  };

  //////////////////////Search info show and hide
  const showInfo = () => {
    const message = document.getElementById("infoSearch");
    const elem = document.getElementById("searchInput").value.length;

    if (elem > 0) {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  };

  console.log(search);
  return (
    <>
      <div className="search">
        {" "}
        <input
          id="searchInput"
          type="text"
          placeholder="search..."
          onChange={handleOnChange}
        ></input>
      </div>
      <div id="infoSearch" className="infosSearch">
        <div className="search-container">
          {movies.length > 0 &&
            movies.map((res) => {
              return (
                <div className="search-movie">
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + res.poster_path}
                    alt={res.title}
                  />
                  <div className="search-movie-info">
                    <h3>{res.title}</h3>
                    <span>Vue: {res.popularity}</span>
                    <br />
                    <span id="search-vote-average">
                      &#9734;{res.vote_average}
                    </span>
                    <span> {res.vote_count} vote</span>

                    <div>
                      <div>
                        <Link to={{ pathname: `/details/${res.id}` }}>
                          <div className="search-over">
                            <div id="search-more-info">
                              <span>&#10148;</span> <br /> More info
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Search;
