import { useEffect, useState } from "react";
import axios from 'axios';

function App(){

  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  /*
  useEffect(()=>{
    console.log(name);
  },[name])
  */

  useEffect(()=>{
    if(data){
      console.log(data);
    }
  },[data])
  
  useEffect(()=>{
    const fetchData = async() => {
      console.log((await axios.get('http://localhost:5000/')).data);
    }

    fetchData();
  },[])
  
  const updateName = (e) => {
    setName(e.target.value);
  }

  const sendData = async() => {
    const dataSend = await axios.post('http://localhost:5000/post', {name});
    console.log(dataSend);
    console.log(dataSend.data.saved);
    const savedName = dataSend.data.saved;
    setData((prev)=>{
      return [...prev, savedName];
    });
    setName("");
  }


  return(
    <>
      <input type="text" value={name} onChange={(e)=>{updateName(e)}}/>
      <button onClick={()=>{sendData()}}>send</button>
    </>
  )
  
}

export default App;