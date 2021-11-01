import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DetailsMovie = (res) => {
  const [details, setDetails] = useState([]);
  const [annonces, setAnnonces] = useState([]);
  const [genres, setGenres] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getDetails();
    getAnnonces();
    timeconv();
  }, []);

  ////////////DETAILS OF FILM////////////////
  const getDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${res.match.params.id}?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr `
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setDetails(res);
        setGenres(res.genres);
        setCompanies(res.production_companies);
      });
  };

  /////////YTB ANNONCE/::::::///////
  const getAnnonces = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${res.match.params.id}/videos?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setAnnonces(res.results[0]);
      });
  };

  //////convertion du runtime en heure + minute a la place de minutes///////
  const timeconv = (n) => {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "min.";
  };

  console.log(annonces);

  return (
    <div className="main-details">
      <h1>{details.title}</h1>

      <div className="all-details">
        <div className="details-info">
          <span>
            <strong>date de sortie: </strong>
            {details.release_date}
          </span>
          <br />
          <span>
            <strong>durée:</strong> {timeconv(details.runtime)}
          </span>{" "}
          <div>
            {" "}
            <strong>Genres :</strong>
            {genres.map((res) => {
              return <span>/{res.name}/ </span>;
            })}
          </div>
          <div>
            {" "}
            <strong>Production Companies :</strong>
            {companies.map((res) => {
              return <span>/{res.name}/ </span>;
            })}
          </div>
          <span>
            <strong>Vue: </strong>
            {details.popularity}
          </span>
          <br />
          <span id="vote-average">
            <strong>&#9734;{details.vote_average}</strong>
          </span>
          <span>
            {" "}
            {details.vote_count} <strong>vote</strong>
          </span>
          <br />
          <br />
          <p>
            <h3>Synopsis</h3>

            {details.overview}
          </p>
        </div>
        <div className="details-img">
          <img
            src={"https://image.tmdb.org/t/p/w500" + details.poster_path}
            alt={details.title}
          />
        </div>
      </div>
      <div className="ytb-details">
        <h2>Bande Annonce:</h2>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + annonces.key}
          title={details.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DetailsMovie;
