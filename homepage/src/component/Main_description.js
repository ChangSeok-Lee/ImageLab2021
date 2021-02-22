import { Component } from "react"
import '../ComponentCss/Main_description.css'


class Main_description extends Component{

    render(){

        return (
         <div className='pfdesc'>
            <h3 className='pf_name'>이 칠 우 (Prof. Chill woo Lee)</h3>
            <ul className='pf_desc'> 
                <li>연구 분야</li>
                    <ul>
                        <li>컴퓨터비전/인터페이스</li>
        <li>지능형 휴먼인터페이스, 가상현실 정보가전, 응용소프트웨어, 실감형 디지털 콘텐츠 표현 및 제작</li>
                    </ul>

                <li>약력</li>
                    <ul>
                        <li>1992년 3월: 동경대학 대학원 전자공학과 졸업(공학박사)</li>
                        <li>1996년 1월~현재: 전남대학교 전자컴퓨터공학부 교수</li>
                        <li>2006년 3월~현재: 전남대학교 문화콘텐츠기술연구소 소장</li>
                        <li>2006년 3월~현재: 광주정보문화산업진흥원 이사</li>
                        <li>2009년 3월~현재: 광주 아시아문화전당 설계자문위원</li>
                        <li>2011년~현재: 한국문화기술연구원설립준비위원회 위원</li>

                    </ul>
            </ul>

          <a href='/' > 자세히 보기</a>
          
           
            
        </div>


        )
       
    
    }


}
export default Main_description ;