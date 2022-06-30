// import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Useeffect = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = () => {
    console.log("get the data");
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
    setCount(count + 1);
  }, []);
  const style = { color: "blue" };
  return (
    <div>
      Functional component
      {data.map((dat) => (
        <li>
          {" "}
          <p style={style}>
            {dat.name} {dat.id}{" "}
          </p>{" "}
        </li>
      ))}
      <h1 style={{ color: "green" }}>{count} </h1>
      <button style={style} onClick={() => setCount(count + 1)}>
        {" "}
        Click{" "}
      </button>
    </div>
  );
};

export default Useeffect;
