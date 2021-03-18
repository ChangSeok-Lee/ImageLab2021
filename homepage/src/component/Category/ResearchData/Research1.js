
import { Component } from "react";
import  '../../../ComponentCss/Category/ResearchData/researchCategory.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Description1 from './Research1/Description1'
import Description2 from './Research1/Description2'
import Description3 from './Research1/Description3'
import Description4 from './Research1/Description4'
import Description5 from './Research1/Description5'


function SetContent({data}) {
    let { id, des } = useParams();
    console.log({des})
    let result;
    switch({des}.des){
      case '0':
        return <Description1/>
      case '1':
        return <Description2/>
        case '2':
        return <Description3/>
      case '3':
        return <Description4/>
        case '4':
        return <Description5/>
      
      default :
        return <div>{data}</div>
    }
  }
  
  
class Research1 extends Component{
   constructor(props){
       super(props);
       this.state={
           research:
           [
            {id:1, title:'AAM&2D-LDA를 이용한 얼굴인식'},
             {id:2, title:'PatchMatch기반 3차원 물체인식'},
             {id:3, title:'PRUP-based Model'},
             {id:4, title:'센서정보를 활용한 스마트폰 모션 인식'},
             {id:5, title:'원통좌표계를 이용한 상반신 포즈 인식'}
            ]
       }
   }
   

    render(){
        let data = [];
        for(let i =0; i<this.state.research.length;i++){
            data.push(
            <li key={"research1_"+i}>
                <Link to={`/Research/0/${i}`}>{this.state.research[i].title}</Link>
            </li>)
        }
        return(
            <div className='research' >
               <h2>1.사람과 사물 인식</h2>
               
              <SetContent data={data}/>
            </div>
        );
    }
}

export default Research1