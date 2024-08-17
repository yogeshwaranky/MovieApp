import { useEffect, useState } from "react";
import axios from "axios";
import { useStoreState } from "../../store/hooks.ts";
import Toast from "../Component/Toast.component.jsx";

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [searchMovieName, setSearchMovieName] = useState("abc");
  const [favMovieList, setFavMovieList] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { email } = useStoreState((state) => state.loginModel);
  
  useEffect(() => {
    fetchData();
  }, [setMovieList]);

  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 10000);
  }, [showToast]);

  async function fetchData() {
    // header setting
    const options = {
      method: "GET",
      url: "http://www.omdbapi.com/?",
      params: { s: searchMovieName, page: 1, apikey: "7d13a6a5" },
    };
    //api call
    await axios
      .request(options)
      .then(function (response) {
        setMovieList(response.data.Search);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log(movieList);
  }

  function handleMovieSearchInput(e) {
    setSearchMovieName(e.target.value);
  }

  function handleMovieSearch() {
    fetchData();
  }
  function handleAddToFav(movieName) {
    if (!favMovieList.includes(movieName))
      setFavMovieList([...favMovieList, movieName]);
    setShowToast(true);
    setToastMessage("Added to Fav successfully");
  }

  function removeFromFav(movieName) {
    const temp = favMovieList.filter((movie) => movieName !== movie);
    setFavMovieList(temp);
    setShowToast(true);
    setToastMessage("removed from Fav successfully");
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
              />
            </label>
          </div>
        </div>
        <div className="col">
          <label className="form-label">User Logged in :</label>
          <p className="text-end" style={{ width: "144px" }}>
            {email}&nbsp;
          </p>
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
          <div className="font-monospace">
            <input
              type="search"
              placeholder="Search"
              style={{ marginTop: "0px", marginBottom: "40px" }}
            />
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
                <li>
                  {" "}
                  {movie}{" "}
                  <svg
                    onClick={() => removeFromFav(movie)}
                    class="bi bi-x"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                  </svg>{" "}
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

                {showToast && (
                  <Toast
                    message={toastMessage}
                    showToast={showToast}
                    setShowToast={setShowToast}
                  />
                )}
              </div>
              <div className="row" style={{ marginBottom: "22px" }}>
                <div className="col">
                  <div className="input-group">
                    <span
                      className="input-group-text"
                      style={{ color: "black", backgroundColor: "darkgrey" }}
                    >
                      Type a Movie name here&nbsp;
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="tom cruse movie"
                      onChange={(e) => handleMovieSearchInput(e)}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => handleMovieSearch()}
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos"
                data-bss-baguettebox=""
              >
                {movieList.map((movie, index) => (
                  <div key={index} className="col item">
                    <a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                      <img className="img-fluid" src={movie.Poster} />
                    </a>
                    <p>
                      {movie.Title} ({movie.Year})
                    </p>
                    <button onClick={() => handleAddToFav(movie.Title)}>
                      Add to fav
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
