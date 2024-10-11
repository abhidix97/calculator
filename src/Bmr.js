import "./style.css";

const Bmr=()=>
{
const CalBmr=()=>
{
    let age=document.getElementById('age').value;
    let height=document.getElementById('height').value;
    let weight=document.getElementById('weight').value;


let ans=88.36 + (13.39 * weight) + (4.79 * height) - (5.67 * age);
var status="GOOD";
if(ans<1500)
{
    status="very bad!!";
}
if(ans>1500)
{
    status="GOOD!!"
}
document.getElementById('ans').innerHTML=" Your BMR is : " + ans + ", This is " + status;
}


return(
    <>
    <center>
    <div className="bodyy">
    <div className="containerss">
    <div class="btn">
             
    <div id="layout">
    <p style={{margin:'10px'}} id="agge" >Enter Age </p> <input type="text" id="age" />
    <br />
    <p style={{margin:'10px'}} id="agge">Enter  Height </p> <input type="text" id="height" />
    <br />
    <p style={{margin:'10px'}} id="agge">Enter Weight </p> <input type="text" id="weight" />
    <br />
    <br />
    <input style={{fontWeight:'bold'}} type="Button" onClick={CalBmr} id="mybtn" value="find BMR" /> 
    <br />
    <br />
    <br />
    <h2 input type="text" id="ans"></h2>
    </div>
    </div>
    </div>
    
    </div>
    
    </center>
    </>
);
}
export default Bmr;




