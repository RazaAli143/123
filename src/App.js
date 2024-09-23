import Home from "./Components/Home";
import About from "./Components/About";
import User from "./Components/User";
import Contactus from "./Components/Contact us";
import Services from "./Components/Services";
import Header from "./Components/Subcomponents/Header";
// import { Routes,Route } from "react-router-dom";

//3
function App(){
    return(
        <div>
            <Header/>
            <div className="container mt-3">
                <h2>Hello App components for Main component</h2>
                {/* <Routes>
                    <Route path="/" element={<Home/>}></Route>
                </Routes> */}
                <Home/>
                <About/>
                <User/>
                <Contactus/>
                <Services/>
            </div>
        </div>        
    )
}
export default App;
// //3







// // import Home from "./Components/Home";
// // import About from "./Components/About";
// // import User from "./Components/User";
// // import Contactus from "./Components/Contact us";


// function App(){
//     return(

// //         <div>
// //             <h2>Components for main Components</h2>
// //             <Home />
// //             <About />
// //             <User />
// //             <Contactus />
// //         </div>
// <h2>thisfdo</h2>
//     )
                
// }
// export default App;