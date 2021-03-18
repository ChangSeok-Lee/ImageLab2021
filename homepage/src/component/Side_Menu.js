import { Component } from "react"
import '../ComponentCss/Side_Menu.css'
import {Link} from 'react-router-dom';


class Side_Menu extends Component{

    render(){
        console.log("render");
        var lists=[];
        var index = this.props.id; // 표현하는 카테고리
        var data = this.props.category; //카테고리별 리스트
        
        var i = 0;
        
        while(i<data[index-1].Stitle.length)
        {
            lists.push(
            <li key={data[index-1].title+i}>
                <Link to={`/${data[index-1].title}/${i}`}>{data[index-1].Stitle[i]}</Link>
            </li>)
            i++;
        }
        return (
                <div className='sideMenu'>
                    <div className='title'>{data[index-1].title}</div>                    
                    <ul key="side_menu">
                     {lists}
                    </ul>
                </div>
        )
    }
}
export default Side_Menu 
