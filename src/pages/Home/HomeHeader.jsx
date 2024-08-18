import { useStoreState } from "../../store/hooks.ts";

function HomeHeader(){
    const {email}=useStoreState((state)=> state.loginModel);
    return(
    <div className="row font-monospace text-bg-secondary" style={{ marginTop: "16px", }}>
    <div className="col-lg-9 offset-0 text-center">
      <div className="text-center shadow-lg"><label className="form-label" style={{ marginLeft: "80px", }}>Search&nbsp; :&nbsp;&nbsp;<input className="form-control-lg" type="search" placeholder="www.yourwebsite.com" style={{ width: "374.3px", marginTop: "12px", }} /></label></div>
    </div>
    <div className="col" ><label style={{float:'left'}} className="form-label">User Logged in :</label>
      <p className="text-end" style={{ width: "144px",float:'left' }}>{email}&nbsp;</p>
    </div>
  </div>
    )
}
export default HomeHeader;