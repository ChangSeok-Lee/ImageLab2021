import { Component } from "react";
import style from "../ComponentCss/Header_Css.css"




class Header_Content extends Component{


    render(){

        return(
        <div className='head_banner'>
           <div className='logo' >
                <a className='logo' href='/'  onClick={function(e){
            e.preventDefault();
            this.props.onChange('home');
        }.bind(this)}><img classname='headlogo' src='/data/image/Lab_logo.png' alt ='no image'></img></a>
            </div>
            

            <div className='category' >
                        <ul >
                            <li><a href='/' onClick={function(e){e.preventDefault();
                                        this.props.onChange('Lab Info');
                                    }.bind(this)}>Lab Info</a>
                               
                                    <ul className='sub'>
                                        <li><a href="">sub1</a></li>
                                        <li><a href="">sub2</a></li>
                                        <li><a href="">sub3</a></li>
                                        <li><a href="">sub4</a></li>
                                    </ul>
                               
                            </li>
                            <li><a href='/'>Research</a>
                                <ul className='sub' >
                                    <li><a href="">sub1</a></li>
                                    <li><a href="">sub2</a></li>
                                    <li><a href="">sub3</a></li>
                                    <li><a href="">sub4</a></li>
                                </ul>
                            </li>
                            <li><a href='/'>Publication</a>
                                <ul className='sub' >
                                    <li><a href="">sub1</a></li>
                                    <li><a href="">sub2</a></li>
                                    <li><a href="">sub3</a></li>
                                    <li><a href="">sub4</a></li>
                                </ul>
                            </li>
                            <li><a href='/'>Member</a>
                                <ul className='sub' >
                                    <li><a href="">sub1</a></li>
                                    <li><a href="">sub2</a></li>
                                    <li><a href="">sub3</a></li>
                                    <li><a href="">sub4</a></li>
                                </ul>
                            </li>
                            <li><a href='/'>Board</a>
                                <ul className='sub' >
                                    <li><a href="">sub1</a></li>
                                    <li><a href="">sub2</a></li>
                                    <li><a href="">sub3</a></li>
                                    <li><a href="">sub4</a></li>
                                </ul>
                            </li>
                            <li><a href='/'>Test</a>
                                <ul className='sub' >
                                    <li><a href="">sub1</a></li>
                                    <li><a href="">sub2</a></li>
                                    <li><a href="">sub3</a></li>
                                    <li><a href="">sub4</a></li>
                                </ul>
                            </li>

                       
                        </ul>
            </div>
            <hr width="100%" z-index= '+1'></hr>
        </div>
       
         );
    }

    
}

export default Header_Content
