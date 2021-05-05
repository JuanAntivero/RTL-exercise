import "../styles.css";

const ClickWrapper = ({ children, onClick }) => (
  <div className={"clickPointer"} onClick={onClick}>
    {children}
  </div>
);

export default ClickWrapper;
