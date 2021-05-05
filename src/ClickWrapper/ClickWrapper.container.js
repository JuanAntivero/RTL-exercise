import ClickWrapper from "./ClickWrapper";

const mapStateToProps = () => ({
  type: "blue" //lets supose we're accessing state to define is we want "blue" or "dropdown"
});

export default (props) => <ClickWrapper {...props} {...mapStateToProps()} />;
