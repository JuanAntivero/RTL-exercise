import Rows from "./Rows";

const MyComponent = ({ rows, type, title }) => (
  <div>
    <h1>{title}</h1>
    <Rows rows={rows} type={type} />
  </div>
);

export default MyComponent;
