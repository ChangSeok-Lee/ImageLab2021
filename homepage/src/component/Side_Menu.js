import { Component } from "react"
import '../ComponentCss/Side_Menu.css'



class Side_Menu extends Component{

    render(){
        var lists=[];
        var index = this.props.id;
        var data = this.props.category;
        
        var i = 0;
        
        while(i<data[index-1].Stitle.length)
        {
            lists.push(
            <li >
                <a href='/' onClick={function(e){
                    e.preventDefault();
                    this.props.onChange(e.target.dataset.id);
                alert(i);
                }.bind(this)                
            }> {data[index-1].Stitle[i]}</a></li>)
            i+=1;
        }

        return (
           
                <div className='sideMenu'>
                    
                    {data[index-1].title}
                    <ul>
                    <li>{lists}</li>


                    </ul>
                </div>
                
         
        )
    }


}
export default Side_Menu 
