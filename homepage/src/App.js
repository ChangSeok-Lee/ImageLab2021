import logo from './logo.svg';
import './App.css';
import Header_Content from './component/Header_Content'
import Footer from './component/footer.js'
import Side_Menu from './component/Side_Menu.js'
import Main_center from './component/Main_center.js'
import ArticleArea from './component/articleArea.js'

import Carousel from './component/Carousel_main.js'
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);

      this.state={
        mode:'home',
        modelist:['home', 'Lab Info','Research','Publication','Member','Board','test'],
        stitleIndex:'',
      Menu:
        [{id: 1, title:'Lab Info', Stitle:['교수소개', '연구실소개', '오시는길'] },
        {id: 2,title:'Research' ,Stitle:['교수소개', '연구실소개', '오시는길']},
        {id: 3,title:'Publication' ,Stitle:['저널', '학회']},
        {id: 4,title:'Member' ,Stitle:['박사', '석사', '학부' , '졸업생', '연구실 사진']},
        {id: 5,title:'Board' ,Stitle:['공지사항', '자유게시판','일정']},
        {id: 6,title:'test' ,Stitle:['테스트용']},
        ]
    }
  }
    

  getContent()
  {
   
    var _article=null
    if(this.state.mode==='home')
    { //home
     _article= <div>        <Carousel></Carousel>      <Main_center></Main_center> </div>
      
    }else
    {
      //other category
      _article = 
      <div> 
          <Side_Menu
            id={this.state.modelist.indexOf(this.state.mode)} category={this.state.Menu}>
              onChange={function(subIndex){
              this.setState({stitleIndex:subIndex}); console.log("change");
            }.bind(this)}
          </Side_Menu> 
          <ArticleArea></ArticleArea>
      </div>
        
        

    }
    return _article;
  }
  

  render(){
  return (
    <div>
      <div>
      <Header_Content onChange={function(text,subIndex){
        this.setState({mode:text, stitleIndex:subIndex}); console.log("change");
      }.bind(this)}   category={this.state.Menu}> </Header_Content>

      {this.getContent()}
      <Footer></Footer>
      </div>
    </div>
   
  );}
}

export default App;
