const type = "blue";

const withType = (Component) => {
  return (props) => <Component {...props} type={type} />;
};
export default withType;
