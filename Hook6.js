// named 1.js and other 2 compenent file uc1 and uc2 passd first name and last name form main.js uc2.js and 
// display msg in browser welcome first name last name 
import { createContext } from "react";
import Uc1 from "./Uc1";
const Fname=createContext()
const Lname=createContext()

function Hook6(){
    return(
        <>
        <Fname.Provider value="Shah">  

            <Lname.Provider value="Yashvi">

                <Uc1/>

            </Lname.Provider>

        </Fname.Provider>
        </>
    )
}
export default Hook6

export {Fname,Lname}