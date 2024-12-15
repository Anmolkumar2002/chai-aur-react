import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("MediumBlue")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"MediumBlue"}}>Blue</button>
          <button onClick={() => setColor("DarkOrange")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"DarkOrange"}}>Orange</button>
          <button onClick={() => setColor("DeepPink")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"DeepPink"}}>Pink</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={() => setColor("Aqua")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Aqua"}}>Aqua</button>
          <button onClick={() => setColor("Chartreuse")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Chartreuse"}}>Lightgreen</button>
          <button onClick={() => setColor("Crimson")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Crimson"}}>Crimson</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={() => setColor("indigo")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"indigo"}}>Indigo</button>
          <button onClick={() => setColor("DarkSlateGrey")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"DarkSlateGrey"}}>Grey</button>
          <button onClick={() => setColor("brown")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"brown"}}>Brown</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
