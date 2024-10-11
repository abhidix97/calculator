const Home=()=>
{
    return(
        <>
        <h1>calculators</h1>
        <div class="row">
        <div class="col-9 w-50">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      class="d-block w-100" style={{height:"500px"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" 
      class="d-block w-100" style={{height:"500px"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1646477939907-03d78657d2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
      class="d-block w-100" style={{height:"500px"}} alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div class="col-1"></div>
<div class="col-5">
<h2>History</h2>
<p style={{fontsize:"55px"}}>In 1642, the Renaissance saw the invention of the mechanical calculator (by Wilhelm Schickard 
and several decades later Blaise Pascal), a device that was at times somewhat over-promoted as 
being able to perform all four arithmetic operations with minimal human intervention.
Pascal's calculator could add and subtract two numbers directly and thus, if the tedium could be borne,
 multiply and divide by repetition. Schickard's machine, constructed several decades earlier, 
 used a clever set of mechanised multiplication tables to ease the process of multiplication and 
 division with the adding machine as a means of completing this operation. There is a debate about 
 whether Pascal or Shickard should be credited as the known inventor of a calculating machine due to 
 the differences (like the different aims) of both inventions. Schickard and Pascal were followed by 
 Gottfried Leibniz who spentThe 18th century saw the arrival of some notable improvements, first by Poleni with the first fully functional calculating clock and four-operation machine, but these machines were almost always one of a kind. Luigi Torchi invented the first direct multiplication machine in 1834: this was also the second key-driven machine in the world, following that of James White (1822).[13] It was not until the 19th century and the Industrial Revolution that real developments began to occur. Although machines capable of performing all four arithmetic functions existed prior to the 19th century, the refinement of manufacturing and fabrication processes during the eve of the  </p>

</div>
</div>
        </>
    );
}
export default Home;