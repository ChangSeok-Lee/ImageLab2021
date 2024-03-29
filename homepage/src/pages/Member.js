import '../App.css';
import Header_Content from '../component/Header_Content'
import Footer from '../component/footer.js'
import Side_Menu from '../component/Side_Menu.js'
import ArticleArea from '../component/articleArea.js'
import { Component } from 'react';
import Lab_Desc from '../component/Category/Lab Info/labDesc';




class Member extends Component {

    constructor(props){
        super(props);
    
          this.state={
            mode:'home',
            modelist:[ 'home','LabInfo','Research','Publication','Member','Board','test',],
            Subtitle:'null',
            Menu:
            [{id: 1, title:'LabInfo', Stitle:['교수소개', '연구실소개', '오시는길'] },
            {id: 2,title:'Research' ,Stitle:['1.사람과 사물 인식','2.사람과 사물 추적','3.실감형 콘텐츠']},
            {id: 3,title:'Publication' ,Stitle:['저널', '학회']},
            {id: 4,title:'Member' ,Stitle:['박사', '석사', '학부' , '졸업생', '연구실 사진']},
            {id: 5,title:'Board' ,Stitle:['공지사항', '자유게시판','일정']},
            {id: 6,title:'test' ,Stitle:['테스트용']},
            ]
        }
      }

  getContent()
  {
      var _article=null;
    {
      //other category
      _article = 
      <div> 
          <Side_Menu id={this.state.modelist.indexOf('Member')} category={this.state.Menu}>
          </Side_Menu>
          <div  className='articleArea'>
            <Lab_Desc></Lab_Desc>
          </div>
          
      </div>
        
    }
    return _article;
  }
  
  render(){
  return (
    <div>
      
      <Header_Content category={this.state.Menu}> 
      </Header_Content>

      {this.getContent()}
      
      <Footer></Footer>
      
     
    </div>
   
  );}
}

export default Member;
