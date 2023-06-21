import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return (
    <div className="main">
        <div className="wrapper">{children}</div>
    </div>
  );
};

export default Wrapper;