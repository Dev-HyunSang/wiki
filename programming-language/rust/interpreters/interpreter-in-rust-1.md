# Rust에서 인터프리터 작성하기: 가이드
- 본 자료는 [Writing Interpreters in Rust: a Guide](https://rust-hosted-langs.github.io/book/introduction.html)를 번역하여 한국어판으로 작성한 내용임.
- 오역 및 의역이 있을 수 있음.

## 환영합니다!
이 책에서는 Rust에서 해석 언어 구현의 기본 사항을 살펴보고, Rust 사용과 관련된 문제에 중점을 두고 설명합니다.

- 요약하면 다음과 같습니다:
    - 인터프리터에서 사용하기 위한 사용자 정의 얼로케이터
    - 할당에 대한 안전한 Rust 래퍼
    - 위의 두 레이어와 상호 작용하는 컴파일러 및 VM

이 책의 목표는 완전한 기능을 갖춘 언어를 다루는 것이 아니라 추가 기능을 구축할 수 있는 견고한 기반을 제공하는 것입니다. 그 과정에서 Rust std 컬렉션을 사용하는 대신 자체 메모리 관리 추상화 측면에서 가능한 한 많은 것을 구현할 것입니다.

## 난이도
밥 니스트롬의 '인터프리터 만들기'는 이 주제에 입문하는 초보자에게 추천하는 입문서입니다. Bob은 고품질의 접근하기 쉬운 작품을 만들었으며, 상당 부분 중복되는 부분이 있지만 이 책은 일부 복잡성, 최적화 및 Rust의 안전 대 비안전에 대한 논의를 추가하여 Bob의 작업을 기반으로 합니다.

이 책이 유익한 정보가 되길 바랍니다!

## 추가적 읽거나 기타 공부할 프로젝트:
아래의 모든 링크는 영감 또는 선행 기술로 인정됩니다.

### Interpreters
- Bob Nystrom's [Crafting Interpreters](https://craftinginterpreters.com/)
- [The Inko programming language](https://inko-lang.org/)
- [kyren](https://github.com/kyren) - [`luster`](https://github.com/kyren/piccolo) and [`gc-arena`](https://github.com/kyren/gc-arena)