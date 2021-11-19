# 💁🏻‍♀️Seohee's Portfolio

<img src="https://user-images.githubusercontent.com/86407453/142332319-ad9952c3-69e2-4526-a5a5-2dc6eb598c6e.jpg"/>

> React로 작성한 포트폴리오 페이지 입니다. 공항 주차장 정보, 현재 날씨, COVID19-Chart를 실시간으로 확인할 수 있습니다.

<br />

## ⚙️Install

* **Axios** <br/>
api를 호출하기 위한 라이브러리
```
npm install axios
```
```js
import axios from "axios"; 
```

* **BootStrap** <br/>
빠르고 간편한 웹 디자인을 위한 프레임워크 <br/>
install후 CDN을 import한다.

```
npm install react-bootstrap bootstrap
```

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

* **Chart.js** <br/>
차트를 그리는 툴 <br/>
필요한 타입의 차트를 import

```
npm install chart.js
```

```js
import { Pie } from "react-chartjs-2";
```

```js
import { Bar } from 'react-chartjs-2';
```

* **random Color** <br/>
임의의 색상을 생성하기 위한 스크립트

```
npm install randomcolor
```

```js
import randomColor from 'randomcolor';
```

* **Moment.js** <br/>
시간이 포함된 데이터를 받아 조작해야 할 경우 사용하는 라이브러리

```
npm install moment
```

```js
import moment from 'moment';
```

<br/>

## 🗂️Components

- Parking 👉🏻 class component 
- Weather, Covid 👉🏻 function component

> async & await을 이용한 비동기처리

<img src="https://user-images.githubusercontent.com/86407453/142582680-f4468340-3e59-4a2f-a6f1-e3ca713ad0df.png"/>

<br/>

> 배열이 아닌 데이터 또한 호출하기 위한 조건문

<img src="https://user-images.githubusercontent.com/86407453/142582769-06dd91fc-dfda-4f77-94be-9ddf4697cfb3.png"/>

<br/>

>try-catch문

<img src="https://user-images.githubusercontent.com/86407453/142583280-545f8cb0-406c-4622-be32-06d03de4c862.png"/>
<img src="https://user-images.githubusercontent.com/86407453/142583300-5dc10a61-f5f6-4a50-aeaa-c216d986eedd.png"/>

 try 👉🏻 실행할 코드 <br />

 catch 👉🏻 예외 발생시 응답 지정 
 
 <br/>
 
> 삼항연산자와 반복문

 <img src="https://user-images.githubusercontent.com/86407453/142585025-04c9a048-1e8a-4f8e-8251-34acf8aeb11b.png"/> 
 
* data변수에 데이터가 있으면
map반복문을 돌려 ParkingChart를 출력한다.
data변수에 데이터가 없다면 비어있는 div만 출력된다.

