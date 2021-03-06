# ๐๐ปโโ๏ธSeohee's Portfolio

<img src="https://user-images.githubusercontent.com/86407453/142332319-ad9952c3-69e2-4526-a5a5-2dc6eb598c6e.jpg"/>

> React๋ก ์์ฑํ ํฌํธํด๋ฆฌ์ค ํ์ด์ง ์๋๋ค. ๊ณตํญ ์ฃผ์ฐจ์ฅ ์ ๋ณด, ํ์ฌ ๋ ์จ, COVID19-Chart๋ฅผ ์ค์๊ฐ์ผ๋ก ํ์ธํ  ์ ์์ต๋๋ค.

<br />

## โ๏ธInstall

* **Axios** <br/>
api๋ฅผ ํธ์ถํ๊ธฐ ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
```
npm install axios
```
```js
import axios from "axios"; 
```

* **BootStrap** <br/>
๋น ๋ฅด๊ณ  ๊ฐํธํ ์น ๋์์ธ์ ์ํ ํ๋ ์์ํฌ <br/>
installํ CDN์ importํ๋ค.

```
npm install react-bootstrap bootstrap
```

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

* **Chart.js** <br/>
์ฐจํธ๋ฅผ ๊ทธ๋ฆฌ๋ ํด <br/>
ํ์ํ ํ์์ ์ฐจํธ๋ฅผ import

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
์์์ ์์์ ์์ฑํ๊ธฐ ์ํ ์คํฌ๋ฆฝํธ

```
npm install randomcolor
```

```js
import randomColor from 'randomcolor';
```

* **Moment.js** <br/>
์๊ฐ์ด ํฌํจ๋ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์ ์กฐ์ํด์ผ ํ  ๊ฒฝ์ฐ ์ฌ์ฉํ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

```
npm install moment
```

```js
import moment from 'moment';
```

<br/>

## ๐๏ธComponents

- Parking ๐๐ป class component 
- Weather, Covid ๐๐ป function component

<br/>

### ๐parking

> async & await์ ์ด์ฉํ ๋น๋๊ธฐ์ฒ๋ฆฌ

<img src="https://user-images.githubusercontent.com/86407453/142582680-f4468340-3e59-4a2f-a6f1-e3ca713ad0df.png"/>

* ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๊ธฐ ์ํ ํจ์
* await๋ค์์ ์๋ ๊ฒ๋ค์ ์์์ด ๋๋  ๋ ๊น์ง ๊ธฐ๋ค๋ฆฐ๋ค.

<br/>

> ๋ฐฐ์ด์ด ์๋ ๋ฐ์ดํฐ ๋ํ ํธ์ถํ๊ธฐ ์ํ ์กฐ๊ฑด๋ฌธ

<img src="https://user-images.githubusercontent.com/86407453/142582769-06dd91fc-dfda-4f77-94be-9ddf4697cfb3.png"/>

<br/>

>try-catch๋ฌธ

<img src="https://user-images.githubusercontent.com/86407453/142583280-545f8cb0-406c-4622-be32-06d03de4c862.png"/>
<img src="https://user-images.githubusercontent.com/86407453/142583300-5dc10a61-f5f6-4a50-aeaa-c216d986eedd.png"/>

 try ๐๐ป ์คํํ  ์ฝ๋ <br />

 catch ๐๐ป ์์ธ ๋ฐ์์ ์๋ต ์ง์  
 
 <br/>
 
> ์ผํญ์ฐ์ฐ์์ ๋ฐ๋ณต๋ฌธ

 <img src="https://user-images.githubusercontent.com/86407453/142585025-04c9a048-1e8a-4f8e-8251-34acf8aeb11b.png"/> 
 
* data๋ณ์์ ๋ฐ์ดํฐ๊ฐ ์์ผ๋ฉด
map(๋ฐ๋ณต๋ฌธ)์ ๋๋ ค ParkingChart๋ฅผ ์ถ๋ ฅํ๋ค.
data๋ณ์์ ๋ฐ์ดํฐ๊ฐ ์๋ค๋ฉด ๋น์ด์๋ div๋ง ์ถ๋ ฅ๋๋ค.

<br/>

> Button

<img src="https://user-images.githubusercontent.com/86407453/142587389-4bed3853-2746-4993-accc-f492bb28912e.png"/>

* onClick ์ด๋ฒคํธ๋ฅผ ์ด์ฉํด parking.js์์ changeAirportํจ์๋ฅผ ๋ฐ์์ ๋ฒํผ์ ๋ง๋ค์๋ค.

<br/>

### โWeather

> useEffect

<img src="https://user-images.githubusercontent.com/86407453/142592623-c0a8adf9-368d-4f34-ba0c-5e1a1a25b615.png"/>

* componentDidMount์ ๊ฐ์ ์๋ฆฌ๋ก ์ปดํฌ๋ํธ๊ฐ ์ฒ์ ํ๋ฉด์ ๋ํ๋  ๋ call_Apiํจ์๋ฅผ ํธ์ถํ๋ค.

<br/>

### ๐Covid

>useEffect

<img src="https://user-images.githubusercontent.com/86407453/142596747-e0fc4e66-15b5-47e4-a3cf-4d0c1490e368.png"/>

* [filter]๊ฐ์ด ๋ฐ๋ ๋ ๋ง๋ค CallApiํจ์๊ฐ ํธ์ถ

