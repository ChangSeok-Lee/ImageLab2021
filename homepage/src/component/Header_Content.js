import { Component } from "react";
import style from "../ComponentCss/Header_Css.css";
import { Link } from 'react-router-dom';

class Header_Content extends Component{
    render(){

        var lists=[];
        var data= this.props.category;
        var i=0;
       
        // onClick={function(e){   
        //     e.preventDefault();
           
        //     this.props.onChange(e.target.id,'null'); 
        //     }.bind(this)}
        var keyIndex=0;
        while(i<data.length)
        {
            var temp =data[i].title;
            lists.push(
                <Link to= {`/${this.props.category[i].title}`} >
                    {this.props.category[i].title}
                </Link>)
          
            var j=0;
            var sub_list=[];
            while(j<data[i].Stitle.length)
            {
                sub_list.push(<tr key={keyIndex}><td><Link to = {`/${data[i].title}/${j}`}>
                        {this.props.category[i].Stitle[j]}</Link>
                    </td></tr>)
                j++;keyIndex++;
            }
            lists[lists.length-1] = <li key={i}>{lists[lists.length-1]}<table className='sub'><tbody>{sub_list}</tbody></table></li>
            i++;
        }

        

        return(
        <div className='head_banner'>
           <div className='logo' >
                <Link to='/'><img className='headlogo' src='/data/image/Lab_logo.png' alt ='no image'></img></Link>
            </div>
            <div className='category' >
                        <ul key='navigation'>
                            {lists}
                        </ul>
            </div>
            <hr border="0px" width="100%" z-index= '+1' height='10%'  className='underline'></hr>
        </div>
       
         );
    }

    
}

export default Header_Content
