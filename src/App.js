import Category from "./Files/Category";
import Navbar from "./Files/Navbar";
import React from "react";
import Search from "./Files/Search";
import Table from "./Files/Table";

class App extends React.Component {
  
  state = {
    noOfMovies:0,
    searchStr:"",
    currGenre:"AllGenre"
  };

  receiveMoviesData = (number)=>{
     this.setState({noOfMovies:number});
  }
   
  receiveSearchParam = (str)=>{
    this.setState({searchStr:str});
  }

  receiveGenre =(genre)=>{
    this.setState({currGenre:genre});
  }
  

  render(){
    
    return (
    
      <React.Fragment>
  
      
  
      <div class="row">
        <div class="col-2 p-4">
          <Category receiveGenre={this.receiveGenre}/>
          
  
         </div>
        
  
        <div class ="col-10 p-4">
          <div class="row">
            <div class ="col-3">
             <Search noOfMovies={this.state.noOfMovies} 
                receiveSearchParam={this.receiveSearchParam}/>
            </div>
          </div>
          <div class="row">
            <div class="col-9">
              <Table sendData ={this.receiveMoviesData} search ={this.state.searchStr} currGenre={this.state.currGenre} />
             </div>
          
          </div>
          
  
        </div>
       </div>
    </React.Fragment>
  
  
      // <div className="App">
      //   {/* <h1>This is working</h1>  */}
      //   {/* Conditional Rendering VVVVvVVvVVVV */}
      //   {/* {(props.val)?<div>This is True</div>:<div>This is False</div>} */}
        
        
      
      
      // </div>
      
    );
  }
}

export default App;
