import { Component } from "react"
import '../ComponentCss/Side_Menu.css'



class Side_Menu extends Component{

    render(){
        var lists=[];
        var index = this.props.id; // 표현하는 카테고리
        var data = this.props.category; //카테고리별 리스트
        
        var i = 0;
        
        while(i<data[index-1].Stitle.length)
        {
            lists.push(
            <li >
                <a href='/' id={data[index-1].Stitle[i]} onClick={function(e){
                    e.preventDefault();
                    
                    this.props.onChangeSubIndex(e.target.innerText);
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
