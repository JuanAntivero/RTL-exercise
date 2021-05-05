import MyComponent from "./MyComponent";
import ClickWrapper from "./ClickWrapper";
import withType from "./withType";
import "./styles.css";
const rows = [
  {
    caption: "caption1",
    key: "1"
  },
  {
    caption: "caption2",
    key: "2"
  },
  {
    caption: "caption3",
    key: "3"
  },
  {
    caption: "caption4",
    key: "4"
  }
];
export default function App() {
  const TypedComponent = withType(MyComponent);
  return <TypedComponent title={"My rows"} rows={rows} />;
}
