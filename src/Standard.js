import "./style.css";


const Standard=()=>
{
const BackDel=()=>
{
  let mydata=document.getElementById('mytext').value;
  let MyText=mydata.slice(0, -1);
  document.getElementById("mytext").value=MyText;
}
    return(
        <>
        <body>
        <div class="container">
            <div class="display">
                <input type="text" id="mytext" />
            </div>
            <div class="btn">
              <div class="bt">
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
export default Standard;