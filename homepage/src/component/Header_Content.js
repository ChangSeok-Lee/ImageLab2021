import { Component } from "react";
import style from "../ComponentCss/Header_Css.css"

class Header_Content extends Component{


    render(){

        var lists=[];
        var data= this.props.category;
        var i=0;
        while(i<data.length)
        {
            var temp =data[i].title;
            lists.push(<a href='/' id={this.props.category[i].title} 
            onClick={function(e){   
                e.preventDefault();
                this.props.onChange(e.target.id,0); 
                }.bind(this)}>{this.props.category[i].title}</a>)
          
            var j=0;
            var sub_list=[];
            while(j<data[i].Stitle.length)
            {
                sub_list.push(<li><a id={this.props.category[i].Stitle[j]} title={this.props.category[i].title} href='/'  
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChange(e.target.title,e.target.id); 
                     
                    }.bind(this)}

                    >
                            {this.props.category[i].Stitle[j]}</a></li>)
                j++;
            }
            lists[lists.length-1] = <li>{lists[lists.length-1]}<ul className='sub'>{sub_list}</ul></li>
            i++;
        }

        

        return(
        <div className='head_banner'>
           <div className='logo' >
                <a className='logo' href='/'  onClick={function(e){
            e.preventDefault();
            this.props.onChange('home',0);
        }.bind(this)}><img classname='headlogo' src='/data/image/Lab_logo.png' alt ='no image'></img></a>
            </div>
            <div className='category' >
                        <ul >
                            {lists}
                        </ul>
            </div>
            <hr border="0px" width="100%" z-index= '+1' height='10%'  className='underline'></hr>
        </div>
       
         );
    }

    
}

export default Header_Content
