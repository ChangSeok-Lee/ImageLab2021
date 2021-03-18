
import { Component } from "react";

class Description5 extends Component{
   
    render(){
        return(
            <div>
                <h1>원통좌표계를 이용한 상반신 포즈 인식</h1>
                <dl>
                    <dt>연구배경</dt>
                    <dd>- 인간이 어떠한 행동을 표현하기 위해서 사용하는 포즈는 다양한 의미를 가지고 있을 수 있음. 
                    이러한 포즈를 사용자 인터페이스로 사용하기 위해서는 정해진 상황에 필요한 포즈를 직관적으로 이해할 수 있도록 포즈를 인식하는 연구를 수행함.</dd>
                    <dt>연구목적</dt>
                    <dd>- 깊이영상을 기반으로 하는 인간의 상반신 포즈를 원통좌표계를 이용하여 표현하고, 원통좌표계에서의 원점에서의 각도와 거리를 이용하여 포즈 패턴을 구성함.</dd>
                    <dd>- SVM의 RBF커널에 적용할 수 있도록 원형 특징공간에 포즈 패턴을 사영하고 인식함.</dd>
                    <dd>- 좀 더 자세한 포즈 패턴을 얻기 위해 원통의 개수를 늘릴 수 있지만 깊이 영상의 특징상 유실되는 데이터를 위한 보간법이 필요함.</dd>
                    <dt>- 사진</dt>
                    <dd><img src='/data/image/Research/r5_1.png'></img></dd>
                    <dd><img src='/data/image/Research/r5_2.png'></img></dd>
                </dl>
            </div>
        );
    }
}

export default Description5