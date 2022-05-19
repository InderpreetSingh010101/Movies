import React from "react";


class Category extends React.Component{
    state = {
        allGenre: [],
    };

    componentDidMount(){

        fetch("\genre").then(function(res){
            return res.json()
        }).then((json)=>{
              this.setState({allGenre:json})
        })
    }

    render(){
        return(
            <ul class="list-group">

             <li class="list-group-item" key="AllGenre" onClick={()=>{
                 this.props.receiveGenre("AllGenre")
             }}>All Genre</li>

           {this.state.allGenre.map((el)=>{
               return(
              <li class="list-group-item" key={el.id} onClick={()=>{
                this.props.receiveGenre(el.name);
            }}>{el.name}</li>
           );
           })}
        </ul>

        );
    }
}

export default Category ;
