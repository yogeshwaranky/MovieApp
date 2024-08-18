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
    <section
      className="photo-gallery py-4 py-xl-5"
      style={{
        backgroundColor: "#e6f7f7",
        color: "#7d3216",
        border: "2px solid #34898c", // Border similar to HomeHeader
        borderRadius: "15px",
        padding: "20px",
      }}
    >
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
            <div
              key={index}
              className="col item"
              style={{
                overflow: "hidden", // Ensure the zoom effect doesn't exceed the boundaries
              }}
            >
              <a
                href="#"
                onClick={() => handleAddToFav(movie.Title)}
              >
                <img
                  className="img-fluid"
                  src={movie.Poster}
                  style={{
                    height: "200px",
                    width: "200px",
                    transition: "transform 0.3s ease-in-out", // Smooth zoom effect
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // Zoom in on hover
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Zoom out on leave
                  alt={`${movie.Title} Poster`}
                />
              </a>
              <p>
                {movie.Title} ({movie.Year})
              </p>
              <button
                onClick={() => handleAddToFav(movie.Title)}
                style={{
                  backgroundColor: "#b80739",
                  color: "white",
                  borderRadius: "25px",
                  padding: "8px 12px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth button effects
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#a00633"; // Darken the button on hover
                  e.currentTarget.style.transform = "scale(1.05)"; // Slightly enlarge the button
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#b80739"; // Reset button color
                  e.currentTarget.style.transform = "scale(1)"; // Reset button size
                }}
              >
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
