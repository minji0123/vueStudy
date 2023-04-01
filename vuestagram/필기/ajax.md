## 설치

```bash
npm install axios
yarn add axios
```


## 하는법

```js
import axios from 'axios'

axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((결과)=>{
          // 요청성공시 실행할 코드
          console.log(결과.data);
          // this.postData
        })
```

- 생명주기함수 안에 넣던지 이벤트핸들러 안에 넣던지이...   

## method

.get('url주소'): url주소로 get 요청할 수 있음   
.post('url주소', 데이터): url주소로 post 요청할 수 있음   
.then(): 요청 성공 시    
.catch(): 요청 실패 시   