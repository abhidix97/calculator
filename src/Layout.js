import { Outlet, Link } from "react-router-dom";


const Layout=()=>
{
    return(
        <>
      
        <div className="m-0 p-0 bg-dark text-white rounded" style={{height:"150px"}}>
            <h1>CALCULATOR.NET</h1>
            <p>The first solid-state electronic calculator was created in the early 1960s. 
              Pocket-sized devices became available in the 1970s, especially after the Intel 4004, the first microprocessor, 
              was developed by Intel for the Japanese calculator company Busicom."</p>
        </div>
        

        <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"lightblue",height:"60px"}}>
      <div class="container-fluid">
    <a class="navbar-brand"  style={{fontWeight:"bold"}}>CALCI</a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mx-100px" >
        <li class="nav-item m-3" >
        <Link to="/" style={{textDecoration:"none",fontWeight:"bold"}}>Home</Link>
        </li>
        <li class="nav-item m-3">
        <Link to="/about" style={{textDecoration:"none",fontWeight:"bold"}}>About</Link>
        </li>
        
        <li class="nav-item m-3">
        <Link to="/contact" style={{textDecoration:"none",fontWeight:"bold"}}>Contact</Link>
        </li>
      </ul>
      
    </div>
    </div>
    </nav>

    <center> 
            <h1 style={{margin:"auto"}}> CALCULATORS</h1>
        </center>

    <div class="container" style={{height:"50px",backgroundColor:"lightblue"}}>
    <div class="row">
    <div class="col-4">
    <Link to="/standard" style={{textDecoration:"none",fontWeight:"bold",color:"darkblue",fontSize:"20px"}}>Standard Calculator</Link>
    </div>
    <div class="col-4">
    <div className="sci" style={{marginLeft:'30px'}}>
    <Link to="/scientific" style={{textDecoration:"none",fontWeight:"bold",color:"darkblue",fontSize:"20px"}}>Scientific Calculator</Link>
    </div>
    </div>
    <div class="col-4">
      <div className="bmr" style={{marginLeft:'75px'}}>
    <Link to="/bmr" style={{textDecoration:"none",fontWeight:"bold",color:"darkblue",fontSize:"20px"}}>Bmr Calculator</Link></div>
    </div>
    </div>
    </div>

   <Outlet />

    <div className="mt-4 p-5 bg-dark text-white rounded" style={{height:"100px"}}>
            <p> calculator use can even cause core mathematical skills to atrophy, or that such use can prevent understanding of advanced algebraic concepts.</p>
    </div>
        
        
      </>
      );
}
export default Layout;