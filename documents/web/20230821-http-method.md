# 20230821 - HTTP Method
- 웹 프로그래밍을 차분하게 다시 살펴보고자 한다.  
- 본 글에서는 웹에서 사용하는 메소드(Methods)를 사용하고자 한다.

> **HTTP는 요청 메서드를 정의하여, 주어진 리소스에 수행하길 원하는 행동을 나타냅니다. 간혹 요청 메서드를 "HTTP 동사"라고 부르기도 합니다. 각각의 메서드는 서로 다른 의미를 구현하지만, 일부 기능은 메서드 집합 간에 서로 공유하기도 합니다. 이를테면 응답 메서드는 안전하거나, 캐시 가능하거나, 멱등성을 가질 수 있습니다.** - [*Mozilla 공식 문서 - HTTP 요청 메서드*](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods)


## Method
### GET
- 서버에서 Resource를 보내도록 요청하는데 사용한다.
	- **서버의 Resource를 읽음.**
- 특정 리소스의 표시를 요청, 데이터의 수정 없이 데이터를 받기만 한다.

### HEAD
- GET과 동일한 응답이지만, 응답에 `body`가 포함되지 않음.

### POST
- 특정 리소스를 제출할 때 쓰임. 서버의 상태 변화나 부작용을 일으킬 수도 있음.

### PUT
- 목적 리소스의 모든 현재 표시를 요청하는 값으로 변경함.  

### DELETE
- 특정한 리소스를 삭제함.

### PATCH
- 리소스의 특정 부분만 수정함.

## HTTP 메서드 속성
각 HTTP 메서드마다 용도와 특징이 다름. 메서드 속성은 이렇한 특징을 알 수 있는 지표임.

- **안전(Safe Methods)**
- **멱등(Idempotent Methods)**
- **캐시 가능(Cacheable Methods)**
- **요청에 본문(`Body`) 존재**
- **성공 응답에 본문(`Body`) 존재**

### 안전(Safe)
- 안전(Safe)는 호출해도 리소스를 변경하지 않는 메서드 속성.
	- **데이터의 변경이 일어나지 않는다는 뜻.**
- **GET 메서드는 단순히 데이터를 가져올 때 사용하는데, 이러한 GET 같은 메서드를 안전(Safe)하다고 함.**

### 멱등(Idempotent)
- **몇 번을 호출하든 최종적인 결과는 똑같은 메서드 속성임.**
	- 데이터를 가져오거나(GET), 삭제하거나(DELTE), 완전히 대체하는(PUT) 작업은 몇 번이 수행되건 상관없이 결과는 같음.
	- 특정 데이터를 조회하는 것의 결과는 조회하는 것이고, 특정 데이터를 삭제하는 것의 결과는 그 데이터가 삭제된 것임.
- **POST의 경우는 다름. POST 메서드로 결제를 수행했다고 가정해봄.**
	- 해당 POST 메서드가 두 번 호출된다면 결제가 중복해서 발생할 수 있음.
	- 사용자의 돈이나 제품의 수량 같은 데이터가 지속해서 달라짐.  
	→ 따라서, 이러한 메소드는 멱등하지 않은 것임.
	- 이러한 속성은 서버의 문제로 클라이언트가 같은 요청을 다시해도 되는가?에 대한 판단 근거가 될 수 있음.

### 캐시 기능(Cacheable)
- **응답 결과 리소스를 캐시해서 사용해도 되는지에 대한 속성임.**
	- GET과 HEAD, POST, PATCH 메소드가 이 속성을 가짐.
	- 일반적으로 GET, HEAD 정도만 캐시로 사용함.

## CRUD 관점에서 보면
- **`GET`:** READ
- **`POST`:** Create
- **`PUT`:** Update - 기존의 정보를 덮어 씌움.
- **`PATCH`:** Update - 기존 정보의 일부를 수정함.
- **`DELETE`:** Delete

## 참고한 자료
- [HTTP method 정리](https://amkorousagi-money.tistory.com/entry/HTTP-method-%EC%A0%95%EB%A6%AC)
- [HTTP Method](https://medium.com/@lyhlg0201/http-method-d561b77df7)
- [HTTP 메서드 정리 (GET, POST, PUT, PATCH, DELETE ...)](https://rachel0115.tistory.com/entry/HTTP-%EB%A9%94%EC%84%9C%EB%93%9C-%EC%A0%95%EB%A6%AC-GET-POST-PUT-PATCH-DELETE)