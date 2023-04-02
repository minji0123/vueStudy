# props


## component 사용 시 문제점

- 자식 -> 부모 데이터를 따로 넘겨줘야 한다.  

- 넘겨받은 데이터는 readonly 여서 수정, 재할당하면 오류남  
- 근데 데이터를 수정해야될 상황이 분명이 있단말이지
- 그럴때는 부모한테 바꿔달라고 요청해야 된다.

## 데이터 넘겨주기 순서
## 데이터 수정, 재할당 순서

---

## 데이터 넘겨주기 순서

부모  
1. 자식에게 데이터 넘겨주기   

```html
<DetailModal :data1="data1"
                :data2="data2"
                :data3="data3"
                />
```
    

자식  
2. 자식파일 props 키에 넘겨받은 데이터 value (타입도 적어주면 유지보수하기 좋음)  

```js
props:{
        data1 : Array,
        data2: Number,
        data3: Boolean,
    },
```

3. 자식파일에 사용하기  

```html
<h4>{{data1[data2].title}}</h4>
```


## 데이터 수정, 재할당 순서

- $emit 사용하기  

보통 이벤트 작동 시 데이터를 수정, 재할당 하는데, 
자식 컴포넌트에서는 데이터를 바꿀 수가 없다.  
그래서 부모한테 바꿔달라고 요청해야된다.


1. 자식 컴포넌트 이벤트 핸들러 함수에 다음과 같이 작성
    - 이때 이벤트 핸들러 함수는 methods 에다 넣어줌  

    ```js
    <template>
        <div>
            <img :src=" data.image" 
                class="room-img" 
                        @click="클릭"
                >
        </div>
    </template>

    methods:{
        클릭(){
            this.$emit('openModal', this.data.id)
        }
    }
    ```

    - $emit 첫번째 인자는 이름(맘대로), 두번째 인자는 넘겨줄 데이터  


2. 부모 컴포넌트

부모 컴포넌트에 

@자식 첫번째 인자="데이터 = $자식 두번째 인자"

로 넣어줘야됨

```html

  <MainProducts @openModal=" clickData = $event;"/>
  
```