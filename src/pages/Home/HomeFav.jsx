function HomeFav(props){

    function removeFromFav(movieName){
        const temp = props.favMovieList.filter((movie) => movieName !== movie);
        props.setFavMovieList(temp);
        props.setShowToast(true);
        props.setToastMessage("removed from Fav successfully")
      }
      
    return(
        <div className="col-md-6 col-lg-3" style={{backgroundColor: "#e6f7f7",
            color: "#ceabd4",
            border: "2px solid #34898c", // Border similar to HomeHeader
            borderRadius: "15px",
            padding: "20px",}}>
        <div className="font-monospace text-start" style={{ marginBottom: "22px", marginTop: "10px", }}>
          <h1 className="text-start" style={{ color: "var(--bs-red)", fontWeight: "bold", fontSize: "40.9px", textAlign:"center"}}>Watchlists</h1>
        </div>
        <div className="font-monospace"><input type="search" placeholder="Search" style={{ marginTop: "0px", marginBottom: "40px", marginRight:"0rem",borderRadius:"25px"}} /></div>
        <div className="font-monospace text-start"><p 
        style={{
            background: "var(--bs-danger)", width: "250.2px", height: "53.3px", marginBottom: "28px",
            borderRadius: "25px",
            padding: "8px 20px",
            display: "flex",
            color:"white",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}><i className="fa fa-home" style={{ paddingRight: "16px", }} />Home</p></div>
        <hr />
        
       
        <div className="font-monospace text-start"><p
        style={{
            background: "var(--bs-danger)", width: "250.2px", height: "53.3px", marginBottom: "28px",
            borderRadius: "25px",
            padding: "8px 20px",
            display: "flex",
            color:"white",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
        
        </svg >My list</p>
    
          <ul style={{listStyleType:"none"}}>
            {props.favMovieList.map((movie)=>(
            <li style={{ fontSize: '15px', marginBottom: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="black" class="bi bi-film" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
</svg><span> </span>
            <span style={{ color: '7d3216',backgroundColor:"black",borderRadius:"5px",paddingLeft:"20px",paddingRight:"20px" }}>{  movie  }</span><span> </span>
            <svg  onClick={() => removeFromFav(movie)} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>

          </li>
          ))}
          </ul>
        </div>
        
      </div>
    )
}

export default HomeFav;