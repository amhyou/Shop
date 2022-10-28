import { useEffect } from "react"
const url = "http://127.0.0.1:8000"

function App() {
  useEffect(()=>{
    fetch(url+"/api/client").then(response => response.json()).then(data => console.log(data))
  },[])
  return (
    <div className=" bg-slate-600">App</div>
  )
}

export default App
