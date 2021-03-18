import { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Form from './posting_new'
import '../../../ComponentCss/Category/Board/BoardTest.css'

axios.defaults.baseURL = 'http://localhost:3000';


class Posting extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount(){
        this.getData();
    }
    componentDidUpdate(){}
    componentWillUnmount(){}
    getData = ()=>{
        axios.get('postings')
        .then((response)=>{
          //const {id, title, author, content}=response.data[0];
          const logData = response.data;
          console.log({logData})
          const data = response.data
        //   console.log({data});
        //   console.log(data.id);
        //   console.log(data.title);
        //   console.log(data.author);
        //   console.log(data.content);
          this.setState({data});
        })
        .catch(function (error) {
          console.log(error);
        })
        
    };

    setData=()=>{
        const list =[]
        this.state.data.forEach((key)=>{
            list.push(<tr key={key+key.title}>
            <td>{key.title}</td>
            <td>{key.author}</td>
            <td>{key.content}</td>
            </tr>)
        })
        return list
    }

    render(){
        
        return(
            <div className='postings'>
                <div className='content'>
                <button>글 쓰기</button>
                <table border='1'>
                <thead>
                <tr>
                <th>TITLE</th>
                <th>AUTHOR</th>
                <th>CONTENT</th>
                </tr>      
                </thead>
                
                <tbody>
               
                    {this.setData()}
                
                </tbody>
                
                </table>
                    <Form/>
                </div>
            
            </div>
        )
    }
}

export default Posting;