import "../../styles.css";
import ArrowDownIcon from "./ArrowDownIcon";

const Rows = ({ rows, type }) => {
  return (
    <div>
      {rows && rows
        .filter((row) => !row.hidden)
        .map((row, index) => (
          <div className={"row"} key={row.key}>
            {type === "blue" ? (
              <span className={"blue-circle"}>
                <p>{index + 1}</p>
              </span>
            ) : type === 'dropdown' && (
              <div className={"dropdown"}>
                <div>{index + 1}</div>
                <ArrowDownIcon />
              </div>
            )}
            <div className={"text"}>{row.caption}</div>
          </div>
        ))}
    </div>
  );
};

export default Rows;
