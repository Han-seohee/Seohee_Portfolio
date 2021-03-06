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
                <div className={'profile'}><h1>๐๐ปโโ๏ธProfile</h1>
                    <hr />
                    <p>name : ํ์ํฌ<br />
                    college : ์ฉ์ธ์ก๋ด๋ํ๊ต (์คํด) <br />
                    completion : ์ด์  ์์นด๋ฐ๋ฏธ ์ปดํจํฐํ์<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    (2021.01~2021.06)<br />
                    interest : ์ฐ๊ทน, ๋ฒ ์ดํน<br />
                    certificate : ์ปดํจํฐํ์ฉ๋ฅ๋ ฅ 2๊ธ<br />
                    Click Here ๐ <a href="https://github.com/Han-seohee" target={"_blank"}>github</a> <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    ๐ <a href="https://velog.io/@hsh1" target={"_blank"}>velog</a> <br/>
                    ๐ : 010-6711-4585 <br/>
                    ๐ : a67114585a@gmail.com <br/>
                    โ๏ธ React / JavaScript / HTML / CSS
                    
                    </p>
                </div>
            </div>
            <div className={'projectContainer'}>
                <h2>๐ป React Project<hr/></h2>
                <img src={mainMockup} className={'Mockup'}/>
                <h3 className={'pjtitle'}>๐Seohee's React Project</h3>
                <p>์๊ฐ : React๋ฅผ ์ฌ์ฉํ ํฌํธํด๋ฆฌ์ค ํ์ด์ง ์๋๋ค. <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ์ผ์ชฝ ๋ฉ๋ด์์ ๊ณตํญ์ฃผ์ฐจ์ฅ, ๋ ์จ, ์ฝ๋ก๋19์ ์ค์๊ฐ ์ ๋ณด๋ฅผ ํ์ธํ  ์ ์์ต๋๋ค.<br/>
                ์งํ ๊ธฐ๊ฐ : 2021/10/07~2021/11/17 <br/>
                Skills : REACT, HTML, CSS <br />
                ๐<a href="https://github.com/Han-seohee/currentInfo" target="_blank">Repository</a>
                </p>
            </div>
            <div className={'webPageContainer'}>
                <h2>๐ฅ๏ธ Wep Page Project<hr/></h2>
                <img src={lushMockup} className={'Mockup'}/>
                <h3 className={'pjtitle'}>๐Lush</h3>
                <p>์๊ฐ : ์ฝ์ค๋ฉํฑ ๋ธ๋๋ 'LUSH KOREA'์ ์ฌ์ดํธ๋ฅผ ๋ฆฌ๋์์ธํ ์นํ์ด์ง์๋๋ค. <br/>
                ์งํ๊ธฐ๊ฐ : 2021/03~2021/04 <br/>
                Skills : HTML, CSS, jQuery <br/>
                ๐<a href="http://hsh1.dothome.co.kr/" target="_blank">site</a><br/>
                ๐<a href="https://github.com/Han-seohee/LUSH" target="_blank">Repository</a> <br />
                ๐<a href="https://www.figma.com/file/xZeG0qukUxQVhJwpStCabs/%EB%9F%AC%EC%89%AC%EC%BD%94%EB%A6%AC%EC%95%84_%ED%95%9C%EC%84%9C%ED%9D%AC_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=0%3A1" target="_blank">
                figma
                </a>
                </p>
            </div>
            <div className={'webPageContainer'}>
                <img src={sthgMockup} className={'Mockup'}/>
                <h3 className={'pjtitle'}>๐STONEHENgE</h3>
                <p>์๊ฐ : ์ฃผ์ผ๋ฆฌ ๋ธ๋๋ '์คํคํจ์ง'์ ์ฌ์ดํธ๋ฅผ ๋ฆฌ๋์์ธํ ๋ฐ์ํ ์นํ์ด์ง์๋๋ค. <br/>
                ์งํ๊ธฐ๊ฐ : 2021/04~2021/06 <br/>
                Skills : HTML, CSS, jQuery <br/>
                ๐<a href="http://hsh2.dothome.co.kr/" target="_blank">site</a><br/>
                ๐<a href="https://github.com/Han-seohee/STONEHENgE-Responsive-Web-page" target="_blank">Repository</a> <br />
                ๐<a href="https://www.figma.com/file/Qc3D05b82bfAPhUEVbBzH5/%EC%8A%A4%ED%86%A4%ED%97%A8%EC%A7%80-%EB%B0%98%EC%9D%91%ED%98%95_%ED%95%9C%EC%84%9C%ED%9D%AC_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4" target="_blank">figma</a>
                </p>
            </div>
            <div className={'introduceContainer'}>
                <h2>๐ฉ๐ปโ๐ป ์๊ธฐ์๊ฐ์<hr/></h2>
                <h3 className={'introtitle'}>๐ฑ์ง๊ธ์ ํ์ํฌ</h3>
                <p className={'intro'}>&nbsp;์ ๋ ๋งค์ผ ๋ฐ๋ณต๋๋ ์ผ์์ ๋ณํ๋ฅผ ์ฃผ๊ธฐ ์ํด ์ฐ๊ทน ๋ํธํ์ ๋ค์ด๊ฐ์ต๋๋ค.
                ์ฐ๊ทน ์ฐ์ต์ ํ์ฐฝ ์งํ๋ ์ํฉ์ด์๊ณ  ํจ๊ป ํ๋ ์ฌ๋๋ค์ ์ ๋ณด๋ค ๋์ด๊ฐ ๋ง์ ๋ถ๋ค์ด ๋๋ถ๋ถ์ด์์ต๋๋ค.
                ์ฐ๊ทน์ ๋ํ ๊ฒฝํ์ด ์๋ ์ ๋ ์ด๋ฏธ ์์  ์ด๋ค์ ๋ฐ๋ผ ํ๊ธฐ์ ๋ฐ๋นด๊ณ ,
                ์ฐ๊ทน์ ์์ฑ๋์ ๋ํ ๋ถ๋ด๊ฐ์ ์ ์  ์ปค์ก์ต๋๋ค. <br/><br/>
                &nbsp;ํ์ง๋ง ์ ์ ์ ํ์ด์๊ธฐ์ ์ฌ๋ ์๊ฐ์๋ ์ฐ์ต์ ๋งค์งํ์ต๋๋ค.
                ์๊ฐํ ๋๋ก ๋ชธ์ด ์์ง์ฌ์ฃผ์ง ์์ ํ๋ค์์ง๋ง ๊ฐ์ด ์ฐ์ตํ๋ ๋๋ฃ๋ค์ ์ง์ง์ ๊ณต๊ฐ์ผ๋ก
                ์ฑ๊ณต์ ์ธ ๋ง๋ฌด๋ฆฌ๋ฅผ ์ง์ ์ ์์์ต๋๋ค. ํ๋  ๋ธ๋ ฅ ๋์ ๋ฌด๋๋ฅผ ๋ง์น๋ฉฐ ์ฑ์ทจ๊ฐ๊ณผ ์์ ๊ฐ์ ์ป์์ต๋๋ค.
                ์ด๋ฌํ ์ด๋ ค์์ ๋ถ๋ช ์์ผ๋ก์ ์  ์ธ์์ ๋ฒ๋ฒ์ด ์๊ฒจ๋  ๊ฒ์๋๋ค. ๊ทธ๋๋ง๋ค ์ข์ ํ์ง ์๊ณ  ํค์ณ๋๊ฐ๋ฉฐ
                ๊ฐ๋ฐ์ ๋๋ฃ๋ค๊ณผ ํจ๊ป ์ฑ์ฅํ  ๊ฒ์๋๋ค.</p>

                <h3 className={'introtitle'}>๐ฟ์์น์ฒ๋ผ ์๋ผ๋๋ ํ์ํฌ</h3>
                <p className={'intro'}>&nbsp;์  ์ถ์ ์๋๋ ฅ์ ์ฑ์ทจ๊ฐ์๋๋ค.
                    ์ฝ๋ฉ์ ์์ํ๋ฉด์ ์ง๊ธ ๋ณด๊ณ  ์๋ ์ปดํจํฐ์ ์ ๊ฐ ํ ์ฝ๋ฉ์ ๊ฒฐ๊ณผ๊ฐ ๋ฐ๋ก ๋์ ๋ณด์ด๋ ๊ฒ์ ํฅ๋ฏธ๊ฐ ์๊ฒผ์ต๋๋ค.
                    ์ด ๋ถ์ผ์ ๋์ ํ๊ธฐ ์ , ์ ๋ ๋ณ์์์ ์ผ์ ํ์ต๋๋ค.
                    ๋ค๋ฅธ ๋๋ฃ ์ง์ ์์ด ์ ์์ ์๋ฉ, ์๋ฃ๋ณด์กฐ ๋ฑ์ ํ๋ฉฐ ๋ณ์์ ๋ชจ๋  ๊ฒ์ ํผ์
                    ๊ด๋ฆฌํด์ผ ํ์ต๋๋ค. ํผ์์ ํ์ผ๋ก ์ฌ๋ฌ ์ผ์ ๋์์ ํ๋ค๋ ๊ฒ์ ํ๋  ์ผ์ด์๊ณ ,
                    ๋ฌธ๋ ์จ๋ผ์ธ์ผ๋ก ์์ฝ๊ณผ ๋ฌธ์๋ฅผ ๋ฐ์ ์ ์๋ ์๋น์ค๋ฅผ ๋ง๋ค๋ฉด ์ด๋จ๊น ํ๋
                    ์๊ฐ์ด ๋ค์ด ๊ฐ๋ฐ์๋ผ๋ ์ง์์ ๊ด์ฌ์ ๊ฐ๊ฒ ๋์์ต๋๋ค.</p>

                <h3 className={'introtitle'}>๐ณ์กฐ๊ธ ๋๋ ๋ฏ ํ์คํ๊ฒ</h3>
                <p className={'intro'}>&nbsp;์ ์ ์ฅ์ ์ ์ฑ์คํจ๊ณผ ์ฌํ์ฑ์๋๋ค.
                    ์นดํ์์ ์๋ฅด๋ฐ์ดํธ๋ฅผ ํ  ๋ ์ง์๋ค๋ฟ๋ง ์๋๋ผ ์๋๋ค๊ณผ๋ ๋๋ฃจ๋๋ฃจ ์นํ๊ฒ ์ง๋์ต๋๋ค.
                    ๋จ๊ณจ์๋ ์ค ํ ์์ฃผ๋จธ๋๋ ์ ๊ฐ ๋ง๋ค์ด ๋๋ฆฌ๋ ์๋ฃ๋ง ๋์๊ฒ ๋ค๋ฉฐ ๋ค๋ฅธ ์ง์์ด ์์ด๋
                    ์ ๊ฐ ํด๋ฌด์ธ ๋ ์ ๊ทธ๋ฅ ๋์๊ฐ์๊ณค ํ์ต๋๋ค. <br /><br />
                    &nbsp;๋ํ ์ง๊ฐํ๋ ๊ฒ์ ํนํ ์ซ์ดํด ์ถ๊ทผ ์๊ฐ๋ณด๋ค ์กฐ๊ธ ๋ ์ผ์ฐ ๋์ฐฉํด ์ค๋น๋ฅผ ๋๋ง์น๊ณค ํ์ต๋๋ค.
                    ์ด๋ฅผ ์ข๊ฒ ๋ด ์ฃผ์  ์ ์ฅ๋ ์ถ์ฒ์ผ๋ก ์๋ฅด๋ฐ์ดํธ์์ ์ง์์ผ๋ก ์ ํํด ๊ทผ๋ฌดํ๊ฒ ๋์์ต๋๋ค. <br/><br />
                    &nbsp;์ ์ ๋จ์ ์ ๋ฌธ์  ํด๊ฒฐ์ ์์ด ๊ฒฐ์ ์ ๋ด๋ฆฌ๋ ๋ฐ์ ์๊ฐ์ด ๋ค์ ๊ฑธ๋ฆฌ๋ ํธ์๋๋ค.
                    ๋ฐ์ํ  ์ ์๋ ๋ชจ๋  ๊ฒฝ์ฐ์ ํด๊ฒฐ ๋ฐฉ๋ฒ์ ๊ณ ๋ คํ๊ณ  ํ์ธ์ ์๊ฒฌ์ ๋ชจ๋ ๋์น์ง ์์ผ๋ ค ํ๋ค ๋ณด๋
                    ๋จ๋ค์ด ๋ต๋ตํ๊ฒ ์๊ฐํ๊ธฐ๋ ํฉ๋๋ค. ๊ทธ๋ฌ๋ ํ๋ A, ํ๋ B ๋ฑ์ ๊ณ ๋ คํ์ฌ ์์ํ๊ธฐ ๋๋ฌธ์ ๋ฌธ์ ๊ฐ ์๊ฒจ๋
                    ํด๊ฒฐ ๋ฐฉ์์ ๋น ๋ฅด๊ฒ ์ฐพ์ ์ ์์ต๋๋ค. ์์์ ๋๋ฆด ์ ์์ผ๋ ์กฐ๊ธ ๋ ๋์ ๊ฒฐ๊ณผ๋ฅผ ๋ด๋ ๋ฐ๊น์ง ๊ฑธ๋ฆฌ๋ ์๊ฐ์ ๋จ์ถํ  ์ ์์ต๋๋ค.</p>
            </div>
        </>
        
    )
}

export default Main;