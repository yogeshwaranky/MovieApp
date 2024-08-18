

function HomeFav(props){

    function removeFromFav(movieName){
        const temp = props.favMovieList.filter((movie) => movieName !== movie);
        props.setFavMovieList(temp);
        props.setShowToast(true);
        props.setToastMessage("removed from Fav successfully")
      }
      
    return(
        <div className="col-md-6 col-lg-3">
        <div className="font-monospace text-start" style={{ marginBottom: "22px", marginTop: "10px", }}>
          <h1 className="text-start" style={{ color: "var(--bs-red)", fontWeight: "bold", fontSize: "38.9px", }}>Watchlists</h1>
        </div>
        <div className="font-monospace"><input type="search" placeholder="Search" style={{ marginTop: "0px", marginBottom: "40px", marginRight:"10rem"}} /></div>
        <div className="font-monospace text-start"><button className="btn btn-danger fs-6" type="button" style={{ background: "var(--bs-danger)", width: "192.2px", height: "53.3px", marginBottom: "28px", }}><i className="fa fa-home" style={{ paddingRight: "16px", }} />Home</button></div>
        <hr />
        <div>
          <h1>My List</h1>
    
          <ul>
            {props.favMovieList.map((movie)=>(
            <li> {movie}  <svg onClick={()=>removeFromFav(movie)} class="bi bi-x" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
          </svg> </li>
          ))}
          </ul>
        </div>
      </div>
    )
}

export default HomeFav;