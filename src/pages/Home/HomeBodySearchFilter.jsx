function HomeBodySearchFilter(props){
    return(
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
              className={props.searchError? "form-control is-valid" : "form-control is-invalid"}
              type="text"
              style={{backgroundColor:'white'}}
              placeholder="tom cruse movie"
              onChange={(e) => props.handleMovieSearchInput(e)}
            />
          
            <button
              className="btn btn-primary"
              type="button"
              onKeyUp={() => props.handleMovieSearch()}
              onClick={() => props.handleMovieSearch()}
            >
              SEARCH
            </button>
            <div class="invalid-feedback">Invalid Movie name please enter atleast 3 char</div>
          </div>
        </div>
      </div>
    )
}

export default HomeBodySearchFilter;