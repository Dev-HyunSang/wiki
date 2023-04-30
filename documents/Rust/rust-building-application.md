# 20230430 - 명령줄 애플리케이션 구축
- [Rust : 실제 애플리케이션 구축을 통한 Rust 완벽 정복](https://udemy.com/course/rust-building-application)을 보면서 공부한 내용들을 기록한 내용임.

## 기본적인 데이터 유형(Basic Data Types)
- **Boolean - 블리언**
	- `bool` → `true`, `false`
	- `1byte` 크기이며, bool 키워드를 통해서 선언 가능.
- **Characters - 문자**
	- `char` → 하나의 유니코드 값을 가짐.
	-  `4byte` 크기임. 예를 들어서 ASCII 문자 집합을 `char`로 저장하게 된다면 메모리 낭비임.
- **Integers - 정수**
	- `u8`, `i8`
		- `u`는 무부호 정수(양수) → 부호가 없는 정수
		- `i`는 유부호 정수(양수 or 음수) → 부호가 있는 정수
		- `8bit` → `1byte` / in Rust 128bit ok!
	- `u16`, `i16`
	- `u32`, `i32`
	- `u64`, `i64`
	- `u128`, `i128`
	- `usize`, `iszie`
		- 아키텍쳐에 종속된 타입, 
		- 32비트 아키텍쳐 환경에서는 32bit, 64bit 
- **Floats - 부동 소수점**
	- `f32`, `f64`
		- `f64` → `f32`보다 2배의 정밀도를 갖고 있음.

### 함수(Function)
- Rust에서는 함수를 선언하기 위해서는 키워드 `fn(){}`을 사용해야함.
	- 특별한 점은 없고, 선언과정은 다른 프로그래밍 언어와 동일함.
- Rust에서는 함수와 변수를 선언할 때 **스케이크 케이스(Snake Case)** 를 사용함.
	- **Ex)** `fn hello_world(){}`
	- 표기법에 대해서 더 정확한 내용을 알고 싶다면 [표기법 - 스네이크 케이스, 파스칼 케이스, 카멜 케이스](https://velog.io/@leyuri/%ED%91%9C%EA%B8%B0%EB%B2%95-%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC-%EC%BC%80%EC%9D%B4%EC%8A%A4-%ED%8C%8C%EC%8A%A4%EC%B9%BC-%EC%BC%80%EC%9D%B4%EC%8A%A4-%EC%B9%B4%EB%A9%9C-%EC%BC%80%EC%9D%B4%EC%8A%A4)를 살펴보길 바람.
- **반환문:**
	- `return 50.0` 혹은 `50.0`만 적어도 반환이 됨.
		- 암묵적으로 반환할 수 있도록 함.

### 매크로(Macro)
- 매크로(Macro) → [메타 프로그래밍(Metaprogramming)](https://ko.wikipedia.org/wiki/%EB%A9%94%ED%83%80%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)의 줄임말.
- 변수, 다수의 매개변수 그리고 매번 다른 유형으로 처리될 수 있음. 효율적인 방법.
- 매크로의 단점은 매크로를 정의하는 것이 함수 정의보다 더 복잡하다는 점.  
결론적으로는 **더 많은 Rust 코드를 작성하는 Rust 코드를 작성하기 때문이고 이것은 읽고 관리하기 훨씬 더 어렵습니다.**
- `println()!`가 매크로인 이유는 다수의 인수를 받고 있기 때문임. 단일 문자열로 호출할 수 있고, 중괄호를 포함하는 문자열로 호출 될 수도 있음.
	- **Ex)** `println!("Nubmer: {}, String:{}, 100, "Hello")`
- 더 많은 Rust 코드로 확장되는 방법을 더 잘 이해하고 싶다면 [`cargo-expand`](https://github.com/dtolnay/cargo-expand)를 사용하면 됨.