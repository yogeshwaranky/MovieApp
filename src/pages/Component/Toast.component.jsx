function Toast({message,showToast,setShowToast}){
  return (
      <div className={showToast === true ? 'toast fade show text-bg-warning' : 'toast fade'} id="toast-1" role="alert" style={{ display:"block", }}>
      <div className="toast-header text-bg-warning"><img className="me-2" /><strong className="me-auto">Movie Notification</strong>
      <button
          className="btn-close ms-2 mb-1 "
          type="button"
          aria-label="Close"
          onClick={()=> setShowToast(false)}
          data-bs-dismiss="toast" /></div>

      <div className="toast-body text-bg-warning" role="alert">
          <p>{message}</p>
      </div>
  </div>
  );
}

export default Toast;