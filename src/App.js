import "./styles.css";                  //importing CSS
import Dropdown from "./dropdown";      //importing jsx
import { useState } from "react";      
export default function App() {             
const [selected, setSelected] = useState("Choose");
                                        //returning the chosen option and displaying it
return (
<div className="App">      
<Dropdown selected={selected} setSelected={setSelected} />     
</div>
);
}