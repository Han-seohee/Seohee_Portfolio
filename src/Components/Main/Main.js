import React from 'react';
import me from '../../image/hanseohee.jpg';
import mainMockup from '../../image/mainMockup.jpg';
import '../../Styles/Main.css';

function Main() {
    return( 
        <>
            <div className={'profileContainer'}>
            <img 
                src={me}/>
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
                    💌 : a67114585a@gmail.com
                    </p>
                </div>
            </div>
            <div className={'projectContainer'}>
                <h2>💻React Project<hr/></h2>
                <img src={mainMockup} className={'mainMockup'}/>
                <p>소개 : React를 사용한 포트폴리오 페이지 입니다. <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                왼쪽 메뉴에서 공항주차장, 날씨, 코로나19의 실시간 정보를 확인할 수 있습니다.<br/>
                진행 기간 : 2021/10/07~2021/11/17 <br/>
                Skills : React <br />
                </p>
            </div>
        </>
        
    )
}

export default Main;