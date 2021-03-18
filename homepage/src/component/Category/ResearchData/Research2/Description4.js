
import { Component } from "react";

class Description4 extends Component{
   
    render(){
        return(
            <div>
                <h1>정보연합과 입자필터를 이용한 보행자 추적기술</h1>
                <dl>
                    <dt>연구배경</dt>
                    <dd>- CCTV 등 보안 카메라에서 보행자를 추적하고 보행자의 자세인식/행동분석을 통해 다양한 응용을 할 수 있는 요소기술 제작</dd>
                    <dt>연구목적</dt>
                    <dd>- 알려진 보행자 검출기를 활용하여 보행자를 적절히 추적할 수 있는 정보연합 기술과 추적기술을 개발하는 것</dd>
                    <dt>사용되는 알고리즘</dt>
                    <dd>- HOG와 유사한 CENTRIST 특징 서술자를 이용하며 실시간으로 보행자 검출이 가능한 장점이 있음</dd>
                    <dd>- 영상 객체 추적에서 주로 이용되는 Tracklet처럼 관측정보인 보행자 검출 정보를 개선시키는 정보연합 기술과 기존 입자필터 기술을 이용함</dd>
                    <img src='/data/image/Research/r9_1.png'></img>
                    <dt>흐름도</dt>
                    <img src='/data/image/Research/r9_2.png'></img>
                </dl>
            </div>
        );
    }
}

export default Description4