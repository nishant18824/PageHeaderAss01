
import  ReactDOM  from "react-dom/client";

// how to functional component mad?
// first of all what is functional component is?
// it is a normal function in javascript

// normal function
// const Title = function() {
//     return <h1>Header</h1>
// }

const Subjective = function() {
    return <div>navbar</div>
} 

// arrow function
const Title = (a, b) => 
    (
        <div>
            <Subjective/>
            <h1>Header</h1>
        </div>
   ) 



const header = (

    <div className="title">
        {/* <Title()/> */
        Title(4, 5)
        }
        <h2>Heading 2</h2>        
        <h3>Heading 3</h3>
    </div>
    )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);