# 섹션1: 시작하기
[Rust Programming 핵심 강의](https://kmooc.udemy.com/course/rust-programming-korean/)를 듣고 메모한 내용입니다.

## 2. 도입
### Topic
- Computer Science fundamentals
    - Logic 
        - 프로그래미이 실행되는 동안 결정을 내리는 것을 뜻함.
    - Repetition
        - 조건에 따라 여러 작업을 반복하는 것을 뜻함.
    - Data
- Rust Code

### Teching Style
- Continuous reinforcement
     - Short lecture
     - Coding demonstration
     - Code exercise
        - Implement concepts presented
        - See alternative implementation
- Cod quality

## 3. 설치
```shell
$ brew install rustup-init
$ brew install --cask visual-studio-code
```

## 4. 기초:데이터 유형
### Data Types
- Memory only stores binary data  
    - Anyting can be represented in binary
- Program determines what the binary represents
- Basic types that are universally useful are provided by the language

### Basic Data Types
- Boolean
    - `true`, `false`
- Integer
    - `1`, `2`, `50`, `99` , `-2`
- Double / Float
    - `1.1`, `5.5`, `200.0001`, `2.0`
- Character
    - `'A', 'B', 'c', '6', '$'` 
- String
    - `"Hello", "string", "this is a string", "it's 42"`

### Recap
- Anything can be represented with binary
- Basic data types are:
    - boolean, integer, double & float, character, string

---

- 메모리는 바이너리 데이터만 저장할 수 있음. 즉, 무엇이든 바이너리로 표현할 수 있음. 바이너리 데이터에 대해서 신경 쓸 필요가 없으며, 바이너리 데이터가 나타내는 건 프로그램이 결정함. 작성한 코드는 자동적으로 바이너리 표현으로 변환됨.
- 기본 유형들은 보편적으로 유용하며, 언어 자체에서 제공함. 하지만 제공되는 유형만 사용할 수 있는 것은 아님. 개발자가 유형을 만들 수도 있음.

## 5. 기초:변수(variable)
- Assign data to a temporary memory location
    - Allows programmer to easily work with momory
- Can be set to any value & type
- Immutable by default, but can be mutable
    - Immutable: cannot be chanaged
    - Mutable: can be changed

---

- 변수는 데이터를 임시 메모리 위치에 할당하는 방법임. → 프로그래머가 메모리로 쉽게 작업할 수 있음. 전 강의에서 배운 메모리를 모두 변수로 추상화할 수 있으며, 변수가 그것들을 추척함. 따라서 프로그램 로직을 만들기 휠씬 쉬워짐.
- 변수 이름을 만들기만 하면 되고, 모든 것이 배후에서 처리됨.
- 변수는 어떤 값이나 데이터 유형으로도 설정할 수 있음. 기본적으로 변수는 불변(Immutable)이지만, 가변적(Mutable)으로 만들 수 있습니다.
- 불변(Immutable)은 변수가 만들어지고 나면 데이터를 변경할 수 없다는 뜻임.  
프로그램의 로직을 만들기 더 쉽고, 프로그래밍 오류가 발생할 가능성이 줄어듬.
- 가변적(Mutable)은 나중에 바꿀 수 있다는 뜻임. 

### Example
```rust
let two = ;
let hello = "hello"l
```