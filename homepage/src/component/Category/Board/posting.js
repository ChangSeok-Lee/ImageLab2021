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
            obj: null,    //상세 보기에서 보여 줄 글에대한 객체
            pageType: 0, //0은 전체 글, 1은 새글 작성, 2는 특정 글 상세

        };
    }
    componentDidMount(){
        this.getData();
    }
    componentDidUpdate(){}
    componentWillUnmount(){}
    getData = ()=>{//db로부터 데이터를 불러옴
        axios.get('postings')
        .then((response)=>{
          const logData = response.data;
          console.log({logData})
          const data = response.data
          this.setState((prev, props)=>{
            return {data: data};
          })
        })
        .catch(function (error) {
          console.log(error);
        })
        
    };

    deleteData=(dt)=>{
        axios.delete('postings/'+dt.id)
        .then((response)=>{
            console.log("delete success");
        })
        .catch(function (error){
            console.log(error);
        })
    }
    setData=()=>{//모든 게시물을 표시
        const list =[]
        this.state.data.forEach((dt)=>{
            list.push(<tr key={dt.title+dt.id}>
            <td onClick={(e)=>{
                this.setState((prev, props)=>{
                    console.log({dt});
                    return {obj: dt, pageType: 2}
                })
            }}>{dt.title}</td>
            <td>{dt.author}</td>
            <td>{dt.content}</td>
            <td><button onClick={()=>{this.deleteData(dt);
            window.location.reload()}}>x</button></td>
            </tr>)
        })
        return list;
    }
    
    setContent = ()=>{//페이지 타입에 따라서 나타나는 화면이 다름 (뒤로가기 처리 문제 => 상태를 되돌리기?, 개별적인 페이지를 생성하고 인자를 전달하는 식으로 변경)
        const type = this.state.pageType;
        switch(type){
            case 0:
                return <div className='content'>
                <button onClick={(e)=>{
                    this.setState((prev, props)=>{
                        return {pageType: 1}
                    })
                }}>글 쓰기</button>
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
                    
                </div>

            case 1:
                return <Form/>
            case 2:
                return <div className='describe'>
                    <h2>
                        {this.state.obj.title}
                    </h2>
                    <p>
                        {this.state.obj.content}
                    </p>
                    <button onClick={()=>{
                        this.setState(()=>{
                            return {pageType: 0}
                        })
                    }}>목록으로</button>
                </div>
                break;
        }
        return
    };
    render(){
        
        return(
            <div className='postings'>
               {this.setContent()}
            
            </div>
        )
    }
}

export default Posting;