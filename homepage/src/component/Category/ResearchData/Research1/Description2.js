
import { Component } from "react";

class Description2 extends Component{
   
    render(){
        return(
            <div>
                <h1>PatchMatch기반 3차원 물체인식</h1>
                <dl>
                    <dt>연구배경</dt>
                    <dd>영상을 이용한 물체인식은 증강현실, 로봇비전, 내용기반 검색엔진등 다양한 분야에서 응용되는 기술임. 
                    하지만 영상을 통한 물체인식 시 영상의 다양한 변환이 적용된 영상 생성은 인식에 어려움이 따름. 
                    이 문제를 해결하기 위하여 영상의 크기 및 회전 변화에 강건한 SIFT 특징점 주변 영역 Pixel을 군집화 하여 Patch로 구성함. 
                    각 Patch들은 물체인식을 위한 의미 있는 작은 영역이 되고, 
                    동일 물체에 대한 Patch들의 기하학적 관계를 이용하여 코드북을 구성하고 이에 대한 비용함수를 정의하면 영상의 인식을 빠르고 효율적으로 할 수 있음.</dd>
                    <dt>연구목적</dt>
                    <dd>영상처리 분야에서 다양한 원근변환, 크기변환, Affine 변환이 발생한 동일 물체를 영상을 통해 인식하는 문제는 도전적인 과제임. 
                    본 연구는 영상의 의미 있는 작은 영역인 Patch을 중심으로 다양한 변환이 발생할 경우의 인식 문제를 다루고 Patch들의 기하학 관계를 연구하여 각 Patch들을 분류하고 인식의 결과를 최적화함.</dd>
                    <dt>사용되는 알고리즘</dt>
                    <dd>SIFT 알고리즘 / SLIC SuperPixel / Bag Of words</dd>
                </dl>
                사진/흐름도
                <img src='/data/image/Research/r2_1.png'></img><img src='/data/image/Research/r2_2.png'></img>
                <img src='/data/image/Research/r2_3.png'></img>
            </div>
        );
    }
}

export default Description2