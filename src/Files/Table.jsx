import React from "react";

class Table extends React.Component {
    state = {
        allMovies: [],
        currPage:1,
        
       };
   
      
    componentDidMount(){
        fetch("\movies").then(function(res){
            return res.json()
        }).then((json)=>{
              this.setState({allMovies:json})
              this.props.sendData(json.length);
              
        })

        
    }

    render() {
         let moviesToDisplay=[];


          if(this.props.currGenre != "AllGenre"){
              moviesToDisplay = this.state.allMovies.filter((el)=>{
                  return el.genre.name == this.props.currGenre
              })
          }else{
            moviesToDisplay = this.state.allMovies ;
        }
          

          if(this.props.search){
            let strToComp = this.props.search.toLowerCase() ;

             moviesToDisplay = moviesToDisplay.filter((el)=>{
               return el.title.toLowerCase().includes(strToComp);
             }) ;

            
          }


        
        let numOfPages = Math.ceil(moviesToDisplay.length / 5);
        let arr = [];
         for(let i = 1 ; i<=numOfPages ; i++){
             arr.push(i);
         } 
         
         let starting = (this.state.currPage - 1)*5 ;
         let ending = this.state.currPage*5 - 1 ;

          moviesToDisplay = moviesToDisplay.slice(starting, Math.min(ending , moviesToDisplay.length - 1) + 1)
         
          
        return (
            <>
               {}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {moviesToDisplay.map((el) => {
                            return(
                            <tr key={el._id}>
                                <td>{el.title}</td>
                                <td>{el.genre.name}</td>
                                <td>{el.numberInStock}</td>
                                <td>{el.dailyRentalRate}</td>
                                <td onClick={()=>{
                                    let a = this.state.allMovies ;
                                    let idx = a.findIndex((e)=>{
                                        return e._id == el._id
                                    })
                                    a[idx].like = true ;
                                    this.setState({allMovies:a});
                                }}>{(el.like)? "Liked !!" : "like"}</td>
                                <td><button type="button" class="btn btn-danger" onClick={()=>{
                                    let tempMovies = this.state.allMovies ;
                                    tempMovies = tempMovies.filter((ele)=>{
                                        return el._id !==ele._id;
                                    })
                                    
                                    this.setState({allMovies:tempMovies});

                                    this.props.sendData(tempMovies.length);

                                }}>Delete</button></td>

                            </tr>
                            );
                        })}


                        

                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item" onClick={()=>{
                            
                              let p = this.state.currPage - 1 ;
                              if(p === 0)
                                p = 1 ;
                                this.setState({currPage:p});
                          }}><a class="page-link" href="#">Previous</a></li>
                        
                        {arr.map((el)=>{
                            return(
                          <li class="page-item" onClick={()=>{
                              this.setState({currPage:el});
                          }}><a class="page-link" href="#">{el}</a></li>
                            );
                        })}
                        
                        
                        <li class="page-item" onClick={()=>{
                           
                              let p = this.state.currPage +1 ;
                              if(p >= numOfPages)
                                p = numOfPages ;
                                this.setState({currPage:p});
                          }}><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Table;