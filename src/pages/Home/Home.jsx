import { useEffect, useState } from "react";
import axios from "axios";
import { useStoreState } from "../../store/hooks.ts";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [searchMovieName, setSearchMovieName] = useState("abc");
  const [favMovieList, setFavMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const { email } = useStoreState((state) => state.loginModel);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [searchMovieName]); 

  async function fetchData() {
    const options = {
      method: "GET",
      url: "http://www.omdbapi.com/?",
      params: { s: searchMovieName, page: 1, apikey: "7d13a6a5" },
    };
    try {
      const response = await axios.request(options);
      setMovieList(response.data.Search || []);
      console.log(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  }

  function handleMovieSearchInput(e) {
    setSearchMovieName(e.target.value);
  }

  function handleMovieSearch() {
    fetchData(); 
  }

  function handleAddToFav(movie) {
    if (favMovieList.some((fav) => fav.Title === movie.Title)) {
      alert("Already in list, add another.");
    } else {
      setFavMovieList([...favMovieList, movie]);
      alert("Movie added successfully!");
    }
  }

  function removeFromFav(movieName) {
    const temp = favMovieList.filter((movie) => movie.Title !== movieName);
    setFavMovieList(temp);
    alert("Movie removed successfully!");
  }

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="container">
      <div
        className="row font-monospace text-bg-secondary"
        style={{ marginTop: "16px" }}
      >
        <div className="col-lg-9 offset-0 text-center">
          <div className="text-center shadow-lg">
            <label className="form-label" style={{ marginLeft: "80px" }}>
              Search&nbsp; :&nbsp;&nbsp;
              <input
                className="form-control-lg"
                type="search"
                placeholder="www.yourwebsite.com"
                style={{ width: "374.3px", marginTop: "12px" }}
                onChange={handleMovieSearchInput}
                value={searchMovieName}
              />
            </label>
            <button className="btn btn-primary mx-2" onClick={handleMovieSearch}>
              SEARCH
            </button>
          </div>
        </div>
        <div className="col">
          <label className="form-label">User Logged in :</label>
          <p className="text-end" style={{ width: "144px" }}>
            {email}&nbsp;
          </p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div
            className="font-monospace text-start"
            style={{ marginBottom: "22px", marginTop: "10px" }}
          >
            <h1
              className="text-start"
              style={{
                color: "var(--bs-red)",
                fontWeight: "bold",
                fontSize: "38.9px",
              }}
            >
              Watchlists
            </h1>
          </div>
          <div className="font-monospace text-start">
            <button
              className="btn btn-danger fs-6"
              type="button"
              style={{
                background: "var(--bs-danger)",
                width: "192.2px",
                height: "53.3px",
                marginBottom: "28px",
              }}
            >
              <i className="fa fa-home" style={{ paddingRight: "16px" }} />
              Home
            </button>
          </div>
          <hr />
          <div>
            <h1>My List</h1>
            <ul>
              {favMovieList.map((movie) => (
                <li key={movie.Title}>
                  <svg
                    onClick={() => removeFromFav(movie.Title)}
                    className="bi bi-x"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                  </svg>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    width="50"
                    height="75"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedMovie(movie)}
                  />
                  <span>{movie.Title}</span>
                  <button
                    onClick={() => removeFromFav(movie.Title)}
                    className="btn btn-danger btn-sm mx-2"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-9">
          <section className="photo-gallery py-4 py-xl-5">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                  <h2>Welcome to Watchlists</h2>
                  <p className="w-lg-50">
                    Browse movies, add them to watchlists and share them with
                    friends.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              {selectedMovie ? (
                <div className="text-center">
                  <img
                    src={selectedMovie.Poster}
                    alt={selectedMovie.Title}
                    className="img-fluid"
                  />
                  <p>
                    {selectedMovie.Title} ({selectedMovie.Year})
                  </p>
                </div>
              ) : (
                <div className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos">
                  {movieList.map((movie) => (
                    <div key={movie.imdbID} className="col item">
                      <img
                        className="img-fluid"
                        src={movie.Poster}
                        alt={movie.Title}
                      />
                      <p>
                        {movie.Title} ({movie.Year})
                      </p>
                      <button
                        className="btn btn-success"
                        onClick={() => handleAddToFav(movie)}
                      >
                        Add to My List
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
