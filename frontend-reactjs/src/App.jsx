import { useEffect } from "react"
import Anouncement from "./componenets/Anouncement"
import BriefPro from "./componenets/BriefPro"
import FAQs from "./componenets/FAQs"
import Footer from "./componenets/Footer"
import Header from "./componenets/Header"
import Hero from "./componenets/Hero"
import Testimonials from "./componenets/Testimonials"


const url = "http://127.0.0.1:8000"

function App() {
  useEffect(()=>{
    //fetch(url+"/api/client").then(response => response.json()).then(data => console.log(data))
  },[])
  return (
    <div className="bg-slate-500">
      <Anouncement />
      <Header />
      <Hero />
      <BriefPro />
      <FAQs />
      <Testimonials />
      <Footer />
      
    </div>
  )
}

export default App
