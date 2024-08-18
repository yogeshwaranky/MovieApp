import { useStoreState, useStoreActions } from "../../store/hooks.ts";
import { useNavigate } from "react-router-dom";

function HomeHeader() {
  const { email } = useStoreState((state) => state.loginModel);
  const { setEmail } = useStoreActions((actions) => actions.loginModel);
  const navigate = useNavigate();

  function handleLogout() {

    setEmail(""); // Clear the email from the state
    navigate("/"); // Redirect to the login page
  }

  return (
    <div className="row font-monospace text-bg-secondary" style={{ marginTop: "16px" }}>
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
        <label style={{ float: 'left' }} className="form-label">
          User Logged in :
        </label>
        <p className="text-end" style={{ width: "144px", float: 'left' }}>
          {email}&nbsp;
        </p>
        <button
          className="btn btn-danger"
          style={{ marginLeft: '10px' }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;
