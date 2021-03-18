
import { Component } from "react";
import  '../../../ComponentCss/Category/ResearchData/researchCategory.css'
import Description1 from './Research2/Description1'
import Description2 from './Research2/Description2'
import Description3 from './Research2/Description3'
import Description4 from './Research2/Description4'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
      default :
        return <div>{data}</div>
    }
  }
class Research2 extends Component{
    constructor(props){
        super(props);
        this.state={
            research:
            [
                {id:1, title:'MRF-Particle Filters'},
                {id:2, title:'M.O.T'},
                {id:3, title:'PS기반 상반신 추적 및 제스처 인식'},
                {id:4, title:'보행자 추적기술'},
             ]
        }
    }
    
 
    render(){
        let data = [];
        for(let i =0; i<this.state.research.length;i++){
            data.push(
            <li key={"research2_"+i}>
                <Link to={`/Research/1/${i}`}>{this.state.research[i].title}</Link>
            </li>)
        }
        return(
            <div className='research' >
               <h2>2.사람과 사물 추적</h2>
              <SetContent data={data}/>
            </div>
        );
    }
}

export default Research2

