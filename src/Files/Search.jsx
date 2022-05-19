


function Search(props){
  return(
    <div>

   <p> Showing {props.noOfMovies} Items From Data Base</p>
   
   <div class="input-group input-group-sm mb-2 mt-4">
   
   <input type="text" class="form-control" aria-label="Sizing example input"
     aria-describedby="inputGroup-sizing-sm" placeholder="Search..."
     onChange={(el)=>{
        props.receiveSearchParam(el.currentTarget.value)
     }}
     />

                     
 </div>
 <button type="button" class="btn btn-primary mt-2">Search</button>
  
</div>
   );

    
}

export default Search;