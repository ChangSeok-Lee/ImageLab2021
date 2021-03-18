import React,{useState} from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
function Form(){
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] =useState("")

    const postHandle=async (e)=>{

        let form = new URLSearchParams();
        form.append('title', title);
        form.append('author', 'test-man');
        form.append('content', content);

        axios.post('postings', form)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log('error catched')
            console.log(error);
        });

        
    }

    //setAuthor('Test_author');
    const handleChange = ({target}) => {
        console.log(title)
        if(target.name=='title'){
            setTitle(target.value);
        }else if(target.name=='content'){
            setContent(target.value);
        }
    }
    return(
        <form onSubmit={postHandle} acceptCharset="utf-8" name="posting">
         <br/>
                <legend>새 글 작성</legend>
                <input value={title} name="title" onChange={(e)=>handleChange(e)}/><br/>
                <textarea name="content" onChange={(e)=>handleChange(e)} cols="50" rows="5"
                   value={content} placeholder="내용을 입력해주세요"/><br/>
                
            <button type="submit" >완료</button>
        </form>
    )
}

export default Form