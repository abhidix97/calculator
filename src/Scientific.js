import "./style.css";


const Scientific=()=>
{
const BackDel=()=>
{
  let mydata=document.getElementById('mytext').value;
  let MyText=mydata.slice(0, -1);
  document.getElementById("mytext").value=MyText;
}

const sin=()=>{
  document.getElementById("mytext").value=Math.sin(document.getElementById("mytext").value)
}

const cos=()=>{
  document.getElementById("mytext").value=Math.cos(document.getElementById("mytext").value)
}

const tan=()=>{
  document.getElementById("mytext").value=Math.tan(document.getElementById("mytext").value)
}

const root=()=>{
  document.getElementById("mytext").value=Math.sqrt(document.getElementById("mytext").value)
}

    return(
        <>
        <body>
        <div class="containersses">
            <div class="display">
                <input type="text" id="mytext" />
            </div>
            <div class="btn">
              <div class="bt">
            <button type="button"  id="sin" value="sin" 
            onClick={sin}>sin</button>

            <button type="button"  id="cos" value="cos" 
            onClick={cos}>cos</button>

            <button type="button"  id="tan" value="tan" 
            onClick={tan}>tan</button>

            <button type="button"  id="root" value="root" 
            onClick={root}>√</button>
            <br />

            <button type="button"  id="btn7" value="7" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn7').value}>7</button>

            <button type="button"  id="btn8" value="8" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn8').value}>8</button>

            <button type="button"  id="btn9" value="9" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn9').value}>9</button>

            <button type="button" id="btndiv" value="/" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btndiv').value}>/</button>
            <br />
            <button type="button" id="btn4" value="4" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn4').value}>4</button>

            <button type="button" id="btn5" value="5" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn5').value}>5</button>

            <button type="button" id="btn6" value="6" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn6').value}>6</button>

            <button type="button" id="btnmul" value="*" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btnmul').value}>*</button>
            <br />
            <button type="button" id="btn1" value="1" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn1').value}>1</button>

            <button type="button" id="btn2" value="2" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn2').value}>2</button>

            <button type="button" id="btn3" value="3" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn3').value}>3</button>

            <button type="button" id="btnminus" value="-" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btnminus').value}>-</button>
            <br />
            <button type="button" id="btndot" value="." 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btndot').value}>.</button>

            <button type="button" id="btn0" value="0" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn0').value}>0</button>

            <button type="button" id="btnans" value="ans" 
            onClick={()=>document.getElementById('mytext').value=eval(document.getElementById('mytext').value)}>=</button>
            
            <button type="button" id="btnplus" value="+" 
            onClick={()=>document.getElementById('mytext').value+=document.getElementById('btnplus').value}>+</button>
            <br />
            <button type="button" 
            onClick={BackDel}>Back</button>

            <button type="button"
            onClick={()=>document.getElementById('mytext').value=""}> All Clear</button>
        </div>
        </div>
        </div>
        </body>
        </>
    );
}
export default Scientific;






// import React  from 'react';
// const Scientific=()=>{

//         const sinfun=()=>{
//           document.getElementById("result").value=Math.sin(document.getElementById("result").value)
//         }

//         const cosfun=()=>{
//           document.getElementById("result").value=Math.cos(document.getElementById("result").value)
//         }

//         const tanfun=()=>{
//           document.getElementById("result").value=Math.tan(document.getElementById("result").value)
//         }

//         const root=()=>{
//           document.getElementById("result").value=Math.sqrt(document.getElementById("result").value)
//         }

//         const btnclr=()=>{
//             const res=document.getElementById("result").value;
//             const abc=res.slice(0,-1);
//             document.getElementById("result").value=abc;
//         }
        
//     return(
//         <>
//        <div class="container-lg my-4 mx-auto text-center bg-dark calc2">
//         <input type="text" class="text-wrap bg-info" id="result" />

//         <br/>
//         <div class="text-center m-2 " id="buttons">
//         <button type="button" value="+" id="btnplus" onClick={()=>document.getElementById("result").value+= 
//         document.getElementById("btnplus").value} 
//          class="btn btn-warning m-2">+</button>

//         <button type="button" value="-" id="btnminus" 
//         onClick={()=>document.getElementById("result").value+= 
//         document.getElementById("btnminus").value}
//         class="btn btn-warning m-2">-</button>

//         <button type="button" value="*" id="btnmulti" 
//         onClick={()=>document.getElementById("result").value+= 
//         document.getElementById("btnmulti").value}
//         class="btn btn-warning m-2">x</button>

//         <button type="button" value="/" id="btndiv"
//         onClick={()=>document.getElementById("result").value+= 
//         document.getElementById("btndiv").value} class="btn btn-warning m-2">/</button>
//         </div>



//         <div class="text-center " id="buttons">

//         <button type="button" class="btn btn-success px-2 mx-2" onClick={sinfun} id="btndiv" >sin</button>

//         <button type="button" class="btn btn-success px-2 mx-2 " onClick={cosfun} id="btndiv">cos</button>

//         <button type="button" class="btn btn-success px-2 mx-2" onClick={tanfun} id="btndiv">tan</button>

//         <button type="button"  id="btndiv" class="btn btn-success px-4 mx-2" onClick={root} >√</button>
//         </div>

//         <div class="text-center m-2 " id="buttons">
//         <button type="button" value="1" id="btn1" class="btn btn-primary m-2"
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn1").value}>1</button>

//         <button type="button" value="2" id="btn2" 
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn2").value}
//         class="btn btn-primary m-2">2</button>

//         <button type="button" value="3" id="btn3" 
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn3").value}
//         class="btn btn-primary m-2">3</button>

//         <button type="button" value="4" id="btn4" 
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn4").value}
//         class="btn  btn-primary m-2">4</button>
//         </div>

//         <div class="text-center m-2 " id="buttons">
//         <button type="button" value="5" id="btn5" class="btn btn-primary m-2"
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn5").value}>5</button>

//         <button type="button" value="6" id="btn6" 
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn6").value}
//         class="btn btn-primary m-2">6</button>

//         <button type="button" value="7" id="btn7" 
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn7").value}
//         class="btn btn-primary m-2">7</button>

//         <button type="button" value="8" id="btn8" 
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn8").value}
//         class="btn  btn-primary m-2">8</button>
//         </div>
        
//         <div class="text-center m-2 " id="buttons">
//         <button type="button" value="9" id="btn9" 
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn9").value}
//         class="btn btn-primary m-2">9</button>

//         <button type="button" value="0" id="btn0" 
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btn0").value}
//         class="btn btn-primary m-2">0</button>

//         <button type="button" value="." id="btndot" 
//         onClick={()=>document.getElementById("result").value+=document.getElementById("btndot").value}
//         class="btn btn-primary m-2">.</button>

//         {/* result */}
//         <button type="button" value="=" id="btnres" 
//         onClick={()=>document.getElementById("result").value=eval(document.getElementById("result").value)}
//         class="btn btn-lg btn-danger m-2">=</button>
//         </div>

//         <div class="text-center m-2 " id="buttons">
//         <button type="button" value="C" id="clear" 
//         onClick={btnclr}
//         class="btn btn-warning m-2">C</button>

//         <button type="button" value="AC" id="AC" 
//         onClick={()=>document.getElementById("result").value=" "}
//         class="btn btn-lg btn-warning m-2">AC</button>
//         </div>
//        </div>
//         </>

//     );
// }
// export default Scientific;