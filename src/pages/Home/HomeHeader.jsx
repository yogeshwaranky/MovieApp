import { useStoreState, useStoreActions } from "../../store/hooks.ts";
import { useNavigate } from "react-router-dom";

function HomeHeader() {
  const { email } = useStoreState((state) => state.loginModel);
  const { setEmail } = useStoreActions((actions) => actions.loginModel);
  const navigate = useNavigate();

  function handleLogout() {
    setEmail(""); 
    navigate("/"); 
  }

  return (
    <div
      className="row font-monospace text-bg-secondary"
      style={{
        backgroundColor: "#e6f7f7",
        color: "#7d3216",
        border: "2px solid #34898c", 
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <div
        className="col-lg-9 offset-0 text-center"
        style={{ backgroundColor: "#e6f7f7" }}
      >
        <div className="text-center shadow-lg">
          <label
            className="form-label"
            style={{
              marginLeft: "80px",
              padding: "20px 10px 10px 10px",
              fontSize: "20px",
              color: "#7d3216", 
            }}
          >
            Search&nbsp; :&nbsp;&nbsp;
            <input
              className="form-control-lg"
              type="search"
              placeholder="www.yourwebsite.com"
              style={{
                width: "374.3px",
                height: "30px",
                marginTop: "12px",
                background: "#495057", 
                color: "#ffffff", 
              }}
            />
          </label>
        </div>
      </div>
      <div className="col" style={{ backgroundColor: "#e6f7f7" }}>
        <label
          style={{ float: "left", color: "#7d3216", fontSize: "20px" }} 
          className="form-label"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#590d1f"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>{" "}
          User :
        </label>
        <p
          className="text-end"
          style={{
            width: "240px",
            float: "left",
            color: "#7d3216",
            fontSize: "", 
          }}
        >
          {email}&nbsp;
        </p>
        <button
          className="btn btn-danger"
          style={{
            marginLeft: "10px",
            float: "right",
            borderRadius: "15px", 
            padding: "6px 15px", 
            fontSize: "14px", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            backgroundColor: "#e6070b", 
            color: "#ffffff",
          }}
          onClick={handleLogout}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)"; 
            e.currentTarget.style.backgroundColor = "#a00633"; 
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; 
            e.currentTarget.style.backgroundColor = "#dc3545"; 
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;
