function HomeBodySearchFilter(props) {
  return (
    <div className="row" style={{ marginBottom: "22px" }}>
      <div className="col">
        <div className="input-group">
          <span
            className="input-group-text"
            style={{
              color: "#572d39",
              backgroundColor: "darkgrey",
              borderRadius: "25px 0px 0px 25px",
            }}
          >
            Type a Movie name here&nbsp;
          </span>
          <input
            className={
              props.searchError
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            type="text"
            style={{ backgroundColor: "white" }}
            placeholder="tom cruse movie"
            onChange={(e) => props.handleMovieSearchInput(e)}
          />

          <button
            className="btn btn-primary"
            type="button"
            onKeyUp={() => props.handleMovieSearch()}
            onClick={() => props.handleMovieSearch()}
            style={{
              backgroundColor: "#fc3b0a",
              borderRadius: "0px 25px 25px 0px",
              padding: "8px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
          >
            SEARCH
          </button>
          <div class="invalid-feedback">
            Invalid Movie name please enter atleast 3 char
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBodySearchFilter;
