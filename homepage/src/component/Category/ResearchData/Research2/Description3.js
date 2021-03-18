
import { Component } from "react";

class Description3 extends Component{
   
    render(){
        return(
            <div>
                <h1>PS(Pictorial Structures)기반 상반신 포즈 추적 및 제스처 인식</h1>
                <dl>
                    <dt>연구목적</dt>
                    <dd>- 본 연구의 목적은 다수의 관절로 이루어진 상반신을 추적하여 상반신 포즈를 제스처로 활용하기 위한 것에 있음.</dd>
                    <dd>- TOF(Time of Flight) 또는 스테레오(Stereo) 카메라로부터 인간 실루엣 영상을 얻으며, Pictorial Structures로 모델링된 상반신 모델을 정합하는 것이 주요 연구임.</dd>
                    <dd>- 최종적으로 추적된 상반신 포즈 결과 시퀀스로부터 HMM과 같은 실시간 상태결정 알고리즘을 통해 인간-로봇 상호작용 또는 인간-컴퓨터 상호작용에 응용하는 것이 최종 목표임.</dd>
                    <dt>연구내용</dt>
                    <dd>- 상반신 포즈 추적 과정은 Particle filtering에 의존함.</dd>
                    <dd>- Particle filtering은 예측, 업데이트로 구분됨.</dd>
                    <dd>- 예측부는 상반신 키 포즈 13개를 DB로 사용함.</dd>
                    <dd>- 예측부는 키포즈 유사도 및 마코프 체인 모션을 기반으로 예측된 후보샘플들을 생성함.</dd>
                    <dd>- 업데이트부는 예측된 후보샘플들의 가중치를 실루엣 영상으로부터 계산함</dd>
                    <dd>- 가중치 계산은 실루엣 우도, 에지우도를 결합한 우도와 같음.</dd>
                    <img src='/data/image/Research/r8_1.png'></img>
                    <dt>연구결과</dt>
                    <dd>[국내학술] 오치민, Md. Zahidul Islam, 김민욱, 이칠우, "그림모델과 파티클필터를 이용한 인간 정면 상반신 포즈 인식", 
                    HCI2009 Technosophia, pp. 186-192, 2008. 오치민, Md. Zahidul Islam, 이칠우, "Boosted 파티클 필터 기반 상반신 포즈 추적", 
                    제22회 신호처리합동학술대회, pp. 451-454, 2009. 오치민, Md. Zahidul Islam, 이칠우, "포즈 라이브러리 검색 및 파티클 필터 기반 상반신 포즈인식", 제22회 영상처리 및 이해에 관한 워크샵, 2010.</dd>
                    <dd>[국제학술] Chi-Min Oh, Md. Zahidul Islam, Jae-Wan Park, and Chil-Woo Lee, "A Gesture Recognition Interface with Upper Body Model-based Pose Tracking", 
                    International Conference on Computer Engineering and Technology, Vol. 7, pp. 531-534, 2010.</dd>
                    <dd>[국내출원]10-2009-0126823, 관절모델 DB을 이용한 포즈인식 시스템, 2009.12.18</dd>
                </dl>
                
            </div>
        );
    }
}

export default Description3