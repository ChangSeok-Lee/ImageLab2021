
import { Component } from "react";
import  '../../../ComponentCss/Category/ResearchData/researchCategory.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Description1 from './Research3/Description1'
import Description2 from './Research3/Description2'
function SetContent({data}) {
    let { id, des } = useParams();
    console.log({des})
    let result;
    switch({des}.des){
      case '0':
        return <Description1/>
      case '1':
        return <Description2/>
      default :
        return <div>{data}</div>
    }
  }

class Research3 extends Component{
   
    constructor(props){
        super(props);
        this.state={
            research:
            [
             {id:1, title:'스마트폰을 이용한 증강현실 콘텐츠'},
             {id:2, title:'디지펫'},
             ]
        }
    }
    
 
     render(){
        let data = [];
        for(let i =0; i<this.state.research.length;i++){
            data.push(
            <li key={"research3_"+i}>
                <Link to={`/Research/2/${i}`}>{this.state.research[i].title}</Link>
            </li>)
        }
        return(
            <div className='research' >
               <h2>3.실감형 콘텐츠</h2>
              <SetContent data={data}/>
            </div>
        );
    }
}

export default Research3