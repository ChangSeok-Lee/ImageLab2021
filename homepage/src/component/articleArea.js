import React, { Component } from 'react'
import '../ComponentCss/articleArea.css'
import Prof_Desc from './Category/Lab Info/profDesc.js'

class articleArea extends Component{
    

    render()
    {
      
        var Subtitle = this.props.articleSub; // 표현하는 카테고리
        var title = this.props.articleTitle; //카테고리별 리스트

       
        
        return (
            <div  className='articleArea'>
              
                {/* {title}  */}
                {Subtitle}
                <Prof_Desc ></Prof_Desc>
            </div>
        );

    }


}

export default articleArea;