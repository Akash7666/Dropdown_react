import { useState } from "react";                              //importing hook
function Dropdown ({ selected, setSelected}) {
const [isActive, setIsActive] = useState(false);            //consist two states
const options = ["One", "Two", "Three"];                     // ArrayList
return (
    <div className="dropdown">
       <center><p><strong>Hover to select</strong></p></center><br></br>

        <div className="dropdown-btn"  onMouseOver={(e) =>   //Hover Logic
                                                            // selecting the chosen option
        setIsActive (!isActive)}>                          
            {selected}
            <span className="fas fa-caret-down"></span>
        </div> 
        {isActive && (                                     //to choose other option from the remained options
            <div className="dropdown-content"> 
                {options.map((option) => (
                    <div onClick={(e) => {
                        setSelected (option);
                        setIsActive(false);     //to close the option immediate after selecting
                        }} className="dropdown-item">
                        {option}
                    </div>
                    ))}
            </div>
        )}
    </div>
);
}
export default Dropdown;