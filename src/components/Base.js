import CustomNavbar from "./CustomNavbar";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0" style={{ fontFamily: 'Roboto, sans-serif',background: 'linear-gradient(to right, #f8cdda, #1d2b64)'}}>
      <CustomNavbar />
      {children}
    </div>
  );
};

export default Base;
