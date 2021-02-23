

import { Component } from "react";
import  '../../../ComponentCss/Category/Lab Info/profDesc.css'


class profDesc extends Component{
   
    render(){
        return(
            <div class='profPhoto' >
                <div>
                    <figure class='photo'>
                        <img src='/data/image/professor.jpg'  alt ='no image'></img>
                        <figcaption>이 칠 우</figcaption>
                    </figure>
                </div> 
               
            </div>
        );
    }
}

export default profDesc