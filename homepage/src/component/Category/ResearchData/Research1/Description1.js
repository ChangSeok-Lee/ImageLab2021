
import { Component } from "react";

class Description1 extends Component{
   
    render(){
        return(
            <div>
                <h1>AAM&2D-LDA를 이용한 얼굴인식</h1>
                <dl>
                    <dt>연구배경</dt>
                    <dd>2D-LDA는 영상의 전역적인 특징을 이용하여 사물을 인식하는 알고리즘으로 특히, 
                    얼굴인식 분야에서 널리 쓰이는 방법임. 하지만 학습 영상에서 동일 클래스간 분산이 커지게되는 회전이나, 
                    표정이 있는 경우, 인식에 실패할 수 있다는 단점이 있음. 
                    이러한 단점을 보완하고자 AAM을 이용하여 학습영상에서 회전되거나 표정이 있는 경우 주요 특징의 위치를 일정 모양으로 정규화한 후 재구성한다면, 
                    인식률이 올라갈 것이라고 가정함.</dd>
                    <dt>연구목적</dt>
                    <dd>AAM을 이용하여 눈, 코, 입등의 얼굴에서 나타나는 주요 특징의 위치를 정규화한 학습영상을 2D-LDA에 적용하였을 때, 인식률이 기존의 2D-LDA에 비하여 향상됨을 목적으로 함.</dd>
                    <dt>AAM</dt>
                    <dd><img src='/data/image/Research/r1_1.png'></img><img src='/data/image/Research/r1_2.png'></img></dd>
                    <dt>2D-LDA</dt>
                    <dd><img src='/data/image/Research/r1_3.png'></img></dd>
                </dl>
            </div>
        );
    }
}

export default Description1