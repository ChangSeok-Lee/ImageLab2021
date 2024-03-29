
import { Component } from "react";

class Description1 extends Component{
   
    render(){
        return(
            <div>
                <h1>스마트폰을 이용한 증강현실 실감형 콘텐츠</h1>
                <dl>
                    <dt>연구배경</dt>
                    <dd>- 실감형 콘텐츠(immersive contents)란 비디오/오디오 위주의 기존 멀티미디어 재현방식에 더하여 콘텐츠에 참여하는 사용자의 상호작용을 높임으로써 가상현실에 몰입할 수 있는 콘텐츠를 말함. 
                    즉 실감형 콘텐츠란 가상의 환경에서 공간과 시간의 제약을 극복하는 다양한 요소 정보를 체험할 수 있는 것을 의미함.</dd>
                    <dt>연구목적</dt>
                    <dd>- 사용자가 스마트폰의 내장 센서를 이용하여 실감형 콘텐츠를 체험할 수 있도록 하는 것이 목적임. 
                    그리고 위치기반 증강현실 콘텐츠 체험을 제공하기 위해 스마트폰에 내장된 GPS, 자이로, 터치스크린, 디스플레이 등의 센서를 사용함. 
                    위치기반 증강현실을 체험하면서 사용자가 자연스럽게 문화기술을 체험할 수 있는 실감형 융합콘텐츠를 제작하는 것이 최종 목표임.</dd>
                    <dt>사용되는 기술</dt>
                    <dd>Unity3D + QCAR</dd>
                    <dt>연구내용</dt>
                    <dd>- 실외 환경에 구애받지 않도록 체험자 개인이 휴대가 가능한 스마트폰에 해당 어플리케이션을 배포함. 
                    그리고 위치기반 증강현실 융합콘텐츠의 상호작용에 도움이 되는 가이드라인과 특정 인터페이스 버튼을 적절히 배치하여 효과적인 상호작용에 도움이 될 수 있도록 함.</dd>
                    <dd>- 3D 그래픽 제작 도구를 이용하여 3D 오브젝트 및 캐릭터 애니메이션을 제작하고 3D 게임 엔진을 이용하여 시나리오에 따른 전체 가상 씬 구현 및 실감 애니메이션을 적용함</dd>
                    <img src='/data/image/Research/r10_1.png'></img>

                </dl>
            </div>
        );
    }
}

export default Description1