
import { Component } from "react";

class Description4 extends Component{
   
    render(){
        return(
            <div>
                <h1>센서정보를 활용한 스마트폰 모션 인식</h1>
                <dl>
                    <dt>연구배경</dt>
                    <dd>- 스마트폰의 다양한 기능과는 달리 대부분의 입력 방식은 터치와 음성으로, 소수의 입력 방식만을 사용.</dd>
                    <dd>- 스마트폰에는 가속도 센서, 지자계 센서, 자이로 센서와 같은 다양한 위치 인식용 센서가 내장되어 있으며, 이는 입력 도구로 활용될 수 있음.</dd>
                    <dd>- 센서 정보를 활용한 모션 인식 방법은 특정 모션만이 아니라 사용자가 원하는 형태의 다양한 모션을 학습하고 인식할 수 있음.</dd>
                    <dt>연구목적</dt>
                    <dd>- 스마트폰에 내장된 가속도, 지자계, 자이로 센서 정보를 활용하여 스마트폰의 3차원 회전 변화를 계산하고, 이것의 연속적인 변화를 통하여 다양한 스마트폰 모션 인식.</dd>
                    <dt>사용되는 알고리즘</dt>
                    <dd>SIFT 알고리즘 / SLIC SuperPixel / Bag Of words</dd>
                    <dt>사진/흐름도</dt>
                    <dd><img src='/data/image/Research/r4_1.png'></img></dd>
                </dl>
            </div>
        );
    }
}

export default Description4