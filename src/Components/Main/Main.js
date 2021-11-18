import React from 'react';
import me from '../../image/hanseohee.jpg';
import mainMockup from '../../image/mainMockup.jpg';
import lushMockup from '../../image/lushMockup.png';
import sthgMockup from '../../image/sthgMockup.png';
import '../../Styles/Main.css';

function Main() {
    return( 
        <>
            <div className={'profileContainer'}>
            <img 
                src={me} className={'me'}/>
                <div className={'profile'}><h1>🙋🏻‍♀️Profile</h1>
                    <hr />
                    <p>name : 한서희<br />
                    college : 용인송담대학교 (중퇴) <br />
                    completion : 이젠아카데미 컴퓨터학원<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    (2021.01~2021.06)<br />
                    interest : 연극, 베이킹<br />
                    certificate : 컴퓨터활용능력 2급<br />
                    Click Here 👉 <a href="https://github.com/Han-seohee" target={"_blank"}>github</a> <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    👉 <a href="https://velog.io/@hsh1" target={"_blank"}>velog</a> <br/>
                    📞 : 010-6711-4585 <br/>
                    💌 : a67114585a@gmail.com <br/>
                    ✒️ React / JavaScript / HTML / CSS
                    
                    </p>
                </div>
            </div>
            <div className={'projectContainer'}>
                <h2>💻 React Project<hr/></h2>
                <img src={mainMockup} className={'Mockup'}/>
                <h3 className={'pjtitle'}>🌟Seohee's React Project</h3>
                <p>소개 : React를 사용한 포트폴리오 페이지 입니다. <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                왼쪽 메뉴에서 공항주차장, 날씨, 코로나19의 실시간 정보를 확인할 수 있습니다.<br/>
                진행 기간 : 2021/10/07~2021/11/17 <br/>
                Skills : REACT, HTML, CSS <br />
                🔗<a href="https://github.com/Han-seohee/currentInfo" target="_blank">Repository</a>
                </p>
            </div>
            <div className={'webPageContainer'}>
                <h2>🖥️ Wep Page Project<hr/></h2>
                <img src={lushMockup} className={'Mockup'}/>
                <h3 className={'pjtitle'}>🌟Lush</h3>
                <p>소개 : 코스메틱 브랜드 'LUSH KOREA'의 사이트를 리디자인한 웹페이지입니다. <br/>
                진행기간 : 2021/03~2021/04 <br/>
                Skills : HTML, CSS, jQuery <br/>
                🔗<a href="http://hsh1.dothome.co.kr/" target="_blank">site</a><br/>
                🔗<a href="https://github.com/Han-seohee/LUSH" target="_blank">Repository</a> <br />
                🔗<a href="https://www.figma.com/file/xZeG0qukUxQVhJwpStCabs/%EB%9F%AC%EC%89%AC%EC%BD%94%EB%A6%AC%EC%95%84_%ED%95%9C%EC%84%9C%ED%9D%AC_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=0%3A1" target="_blank">
                figma
                </a>
                </p>
            </div>
            <div className={'webPageContainer'}>
                <img src={sthgMockup} className={'Mockup'}/>
                <h3 className={'pjtitle'}>🌟STONEHENgE</h3>
                <p>소개 : 주얼리 브랜드 '스톤헨지'의 사이트를 리디자인한 반응형 웹페이지입니다. <br/>
                진행기간 : 2021/04~2021/06 <br/>
                Skills : HTML, CSS, jQuery <br/>
                🔗<a href="http://hsh2.dothome.co.kr/" target="_blank">site</a><br/>
                🔗<a href="https://github.com/Han-seohee/STONEHENgE-Responsive-Web-page" target="_blank">Repository</a> <br />
                🔗<a href="https://www.figma.com/file/Qc3D05b82bfAPhUEVbBzH5/%EC%8A%A4%ED%86%A4%ED%97%A8%EC%A7%80-%EB%B0%98%EC%9D%91%ED%98%95_%ED%95%9C%EC%84%9C%ED%9D%AC_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4" target="_blank">figma</a>
                </p>
            </div>
            <div className={'introduceContainer'}>
                <h2>👩🏻‍💻 자기소개서<hr/></h2>
                <h3 className={'introtitle'}>🌱지금의 한서희</h3>
                <p className={'intro'}>&nbsp;저는 매일 반복되는 일상에 변화를 주기 위해 연극 동호회에 들어갔습니다.
                연극 연습은 한창 진행된 상황이었고 함께 하는 사람들은 저보다 나이가 많은 분들이 대부분이었습니다.
                연극에 대한 경험이 없던 저는 이미 앞선 이들을 따라 하기에 바빴고,
                연극의 완성도에 대한 부담감은 점점 커졌습니다. <br/><br/>
                &nbsp;하지만 저의 선택이었기에 쉬는 시간에도 연습에 매진했습니다.
                생각한 대로 몸이 움직여주지 않아 힘들었지만 같이 연습하는 동료들의 지지와 공감으로
                성공적인 마무리를 지을 수 있었습니다. 힘든 노력 끝에 무대를 마치며 성취감과 자신감을 얻었습니다.
                이러한 어려움은 분명 앞으로의 제 인생에 번번이 생겨날 것입니다. 그때마다 좌절하지 않고 헤쳐나가며
                개발자 동료들과 함께 성장할 것입니다.</p>

                <h3 className={'introtitle'}>🌿새싹처럼 자라나는 한서희</h3>
                <p className={'intro'}>&nbsp;제 삶의 원동력은 성취감입니다.
                    코딩을 시작하면서 지금 보고 있는 컴퓨터에 제가 한 코딩의 결과가 바로 눈에 보이는 것에 흥미가 생겼습니다.
                    이 분야에 도전하기 전, 저는 병원에서 일을 했습니다.
                    다른 동료 직원 없이 접수와 수납, 의료보조 등을 하며 병원의 모든 것을 혼자
                    관리해야 했습니다. 혼자의 힘으로 여러 일을 동시에 한다는 것은 힘든 일이었고,
                    문득 온라인으로 예약과 문의를 받을 수 있는 서비스를 만들면 어떨까 하는
                    생각이 들어 개발자라는 직업에 관심을 갖게 되었습니다.</p>

                <h3 className={'introtitle'}>🌳조금 더딘 듯 확실하게</h3>
                <p className={'intro'}>&nbsp;저의 장점은 성실함과 사회성입니다.
                    카페에서 아르바이트를 할 때 직원들뿐만 아니라 손님들과도 두루두루 친하게 지냈습니다.
                    단골손님 중 한 아주머니는 제가 만들어 드리는 음료만 드시겠다며 다른 직원이 있어도
                    제가 휴무인 날은 그냥 돌아가시곤 했습니다. <br /><br />
                    &nbsp;또한 지각하는 것을 특히 싫어해 출근 시간보다 조금 더 일찍 도착해 준비를 끝마치곤 했습니다.
                    이를 좋게 봐 주신 점장님 추천으로 아르바이트에서 직원으로 전환해 근무하게 되었습니다. <br/><br />
                    &nbsp;저의 단점은 문제 해결에 있어 결정을 내리는 데에 시간이 다소 걸리는 편입니다.
                    발생할 수 있는 모든 경우와 해결 방법을 고려하고 타인의 의견을 모두 놓치지 않으려 하다 보니
                    남들이 답답하게 생각하기도 합니다. 그러나 플랜 A, 플랜 B 등을 고려하여 시작하기 때문에 문제가 생겨도
                    해결 방안을 빠르게 찾을 수 있습니다. 시작은 느릴 수 있으나 조금 더 나은 결과를 내는 데까지 걸리는 시간은 단축할 수 있습니다.</p>
            </div>
        </>
        
    )
}

export default Main;