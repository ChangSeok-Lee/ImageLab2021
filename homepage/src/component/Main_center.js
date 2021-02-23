import { Component } from "react"

import '../ComponentCss/Main_center.css'
import Main_description from './Main_description'





class Main_center extends Component{

    render(){

        return (
        <article class="wrapper">
                

            <div>
                <img class='photo' src='/data/image/professor.jpg' alt ='no image'></img>
            </div>
            <div>
                <div> <Main_description></Main_description></div>
            </div>


        </article>)
       
    
    }


}
export default Main_center 