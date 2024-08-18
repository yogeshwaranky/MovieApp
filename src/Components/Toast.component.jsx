function Toast({ message, showToast, setShowToast }) {
  return (
    <div
      className={
        showToast === true ? "toast fade show text-bg-warning" : "toast fade"
      }
      id="toast-1"
      role="alert"
      style={{
        color: "#21181a",
        display: "block",
        position: "fixed",
        top: "20px",
        right: "400px",
        zIndex: 1050,
        minWidth: "300px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="toast-header text-bg-warning">
        <strong
          className="me-auto"
          style={{
            color: "#21181a",
          }}
        >
          Movie Notification
        </strong>
        <button
          className="btn-close ms-2 mb-1"
          type="button"
          aria-label="Close"
          onClick={() => setShowToast(false)}
          data-bs-dismiss="toast"
        />
      </div>

      <div className="toast-body text-bg-warning" role="alert">
        <p
          style={{
            color: "#21181a",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default Toast;
