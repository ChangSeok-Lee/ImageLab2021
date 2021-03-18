
import { Component } from "react";

class Description1 extends Component{
   
    render(){
        return(
            <div>
                <h1>MRF-Particle Filters 기반 다중 객체 추적</h1>
                <dl>
                    <dt>연구목표</dt>
                    <dd>- 연속적인 영상에서 다중 대상의 식별번호를 유지하는 멀티객체 추적 프레임워크 설계 및 테스트에 대한 연구임.</dd>
                    <dd>- 다수의 Particle filter들은 각 객체를 추적하는데 독립적으로 이용되지만, 거리가 가까운 객체들이 서로 부딪히거나, 교차하는 경우 식별번호를 유지하기위한 멀티객체 추적이 실패하는 현상이 발생함.</dd>
                    <dd>- 본 연구는 ECCV04 Khan이 제안한 MRF Motion Model을 독립적인 Particle filters들을 결합함으로써, 다중객체의 식별번호 유지가 실패하는 현상을 해결하기 위한 것임.</dd>
                    <dd>- 따라서 다중객체(예제 영상은 다중 터치) 사이의 상호작용이 발생하더라도 강건하게 추적할 수 있는 알고리즘을 개발함</dd>
                    <dt>연구내용</dt>
                    <dd>- Particle Filters는 각각 자신의 타겟을 Markov Chain Motion Model에 기반하여 추적</dd>
                    <dd>- MRF Motion Model은 가까운 객체끼리 서로의 움직임에 영향을 준다는 가설을 표현하는 알고리즘으로, Particle Filters의 Motion Model과 Particle의 Weight를 계산하는 단계에서 결합됨</dd>
                    <dd>- 가까운 객체간 움직임을 사전정보로 구축하기 위해 Panelty Graph를 구축하였으며 MRF-based Particle Filters에서 그래프가 구축된 객체들에 한해서만 가중치를 MRF Motion Model을 참고하여 계산함.</dd>
                    <dd>- 이를 통해 우도가 높은 객체가 다른 객체의 Particle filter를 뺏는 Hijacking 문제점을 해결함 (그림 참고).</dd>
                    <dt>- 사진</dt>
                    <dd><img src='/data/image/Research/r6_1.png'></img></dd>
                    <dt>연구결과</dt>
                    <dd>[국내출원] 10-2009-0107284, 멀티 터치 특징정보 추출방법 및 그 멀티 터치 특징정보를 이용한 멀티터치 제스처 인식방법, 2010.10.29</dd>
                    <dd>[국제출원] PCT-KR2010-008229, 멀티 터치 특징정보 추출방법 및 그 멀티 터치 특징정보를 이용한 멀티터치 제스처 인식방법, 2010.11.22</dd>
                </dl>
            </div>
        );
    }
}

export default Description1