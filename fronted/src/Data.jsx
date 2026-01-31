import { useState } from "react";
import { supabase } from "../conf.js";

function Data() {
  const [data, setData] = useState([]);

  const init = async () => {
    const { data, error } = await supabase
      .from("task")
      .select("*");

    if (error) {
      console.error(error);
      return;
    }

    setData(data);
  };

  return (
    <div>
      {data.map((item,index) => (
        <h1 key={index}>{item.note}</h1>
      ))}

      <button onClick={init}>Click</button>
    </div>
  );
}

export default Data;
