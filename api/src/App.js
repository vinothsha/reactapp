import axios from 'axios';
import React,{useState,useEffect} from 'react';

function GetAxios() {
    const[posts,setPost] = useState([])
    useEffect(()=>{
         axios.get(`http://65.0.179.162:8080/getstudents`)

        .then(res=>{
            setPost(JSON.stringify(res.data))
            // var con=res.data
            // setPost(con)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return(<div>                            
      <h1>{posts}</h1>
  </div>)
}

export default GetAxios;
