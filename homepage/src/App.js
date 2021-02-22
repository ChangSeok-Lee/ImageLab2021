import logo from './logo.svg';
import './App.css';
import Header_Content from './component/Header_Content'
import Footer from './component/footer.js'
import Side_Menu from './component/Side_Menu.js'
import Main_center from './component/Main_center.js'

import Carousel from './component/Carousel_main.js'
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);

      this.state={
        mode:'home',
        modelist:['home', 'Lab Info','Research','Publication','Member','Board','test'],
      Menu:[{title:'Lab Info', Stitle:['교수소개', '연구실소개', '오시는길'] },
      {title:'Research' ,Stitle:['교수소개', '연구실소개', '오시는길']},
      {title:'Publication' ,Stitle:['저널', '학회']},
      {title:'Member' ,Stitle:['박사', '석사', '학부' , '졸업생', '연구실 사진']},
      {title:'Board' ,Stitle:['공지사항', '자유게시판','일정']},
      {title:'test' ,Stitle:['테스트용']},
      ]
    }
  }
    

  getContent()
  {
   
    var _article=null
    if(this.state.mode==='home')
    { 
     _article= <div>        <Carousel></Carousel>      <Main_center></Main_center> </div>
      
    }else
    {
      
      _article = <div>  <Side_Menu></Side_Menu>   </div>

    }
    return _article;
  }
  

  render(){
  return (
    <div>
      <div>
      <Header_Content onChange={function(text){
        this.setState({mode:text}); console.log("change");
      }.bind(this)}> </Header_Content>
      {this.getContent()}
      <Footer></Footer>
      </div>
    </div>
   
  );}
}

export default App;
