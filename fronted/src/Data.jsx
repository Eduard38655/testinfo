import { useState } from "react";
import { supabase } from "../conf.js";

function Data() {
  const [data, setData] = useState([]);
  const [input, SetInput] = useState("")
  const [id, getid] = useState(null)

  const init = async (e) => {
    
    e.preventDefault()
    const { data, error } = await supabase
      .from("task")
      .select("*");

    if (error) {
      console.error(error);
      return;
    }
  

    setData(data);
  };

  async function update(params) {

    const { data, error } = await supabase.from("task").update({ note: input }).eq("taskid", id).select("*")
    if (error) {
      console.log(error);
      return
    }
    setData(data);


  }


  async function deleteinf(params) {

    const { data, error } = await supabase.from("task").delete().eq("taskid", id).select("*")
    if (error) {
      console.log(error);
      return
    }
        setData(data);




  }
  async function save(params) {

    const { data, error } = await supabase.from("task").insert({ note: input }).select("*")
    if (error) {
      console.log(error);
      return
    }
        setData((prev)=>[{...prev,data}]);




  }
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} onClick={(e) => { getid(item.taskid) }}>
          <h1>{item.note}{item.taskid}</h1>
        </div>
      ))}

      <input type="text" onChange={(e) => { SetInput(e.target.value) }} />
      <button onClick={init}>Ver</button>
      <button onClick={update}>update</button>
      <button onClick={deleteinf}>Delete</button>

      <button onClick={save}>gurdar</button>


    </div>
  );
}

export default Data;
