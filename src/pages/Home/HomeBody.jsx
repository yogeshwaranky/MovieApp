import Toast from "../../Components/Toast.component.jsx";
import HomeBodySearchFilter from "./HomeBodySearchFilter.jsx";
import { useState } from "react";

function HomeBody(props) {
  const [searchError, setSearchError] = useState(false);

  function handleAddToFav(movieName) {
    if (props.favMovieList.includes(movieName)) {
      props.setShowToast(true);
      props.setToastMessage("Already in the list! Please select another movie.");
    } else {
      props.setFavMovieList([...props.favMovieList, movieName]);
      props.setShowToast(true);
      props.setToastMessage("Added to Fav successfully");
    }
  }

  function handleMovieSearchInput(e) {
    if (e.target.value.length > 2) {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
    props.setSearchMovieName(e.target.value);
  }

  function handleMovieSearch() {
    props.fetchData();
  }

  return (
    <section className="photo-gallery py-4 py-xl-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Welcome to Watchlists</h2>
            <p className="w-lg-50">
              Browse movies, add them to watchlists and share them with friends.
              <br />
              <br />
            </p>
          </div>
          {props.showToast && (
            <Toast
              message={props.toastMessage}
              showToast={props.showToast}
              setShowToast={props.setShowToast}
            />
          )}
        </div>
        <HomeBodySearchFilter
          handleMovieSearch={handleMovieSearch}
          handleMovieSearchInput={handleMovieSearchInput}
          searchError={searchError}
        />
        <div
          className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos"
          data-bss-baguettebox=""
        >
          {props.movieList.map((movie, index) => (
            <div key={index} className="col item">
              <a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                <img
                  className="img-fluid"
                  src={movie.Poster}
                  style={{ height: "200px", width: "200px" }}
                />
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
  );
}

export default HomeBody;
