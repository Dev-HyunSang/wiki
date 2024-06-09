# Go언어에서의 Generics
[[toc]]

## 제네릭이란 무엇인가?
- 제네릭(Generic)은 일반화된 코드를 작성할 수 있게 해주는 프로그래밍 기법
- 제네릭의 장점은 코드의 재사용성을 높이고, 타입 안정성을 보장하여 코드의 안전성과 가독성을 향상 시킴.
- Java, C++, C# 등 다양한 언어에서 제네릭 기능을 제공하고 있음.

## 제네릭의 장점
- 제네릭을 사용하면, 코드를 일반화할 수 있어서, 타입 별로 중복 코드를 작성하지 않아도 됨.
- 타입 안정성이 보장되므로, 런타임 시 타입 관련 오류가 발생하는 경우를 방지할 수 있음.

## 사용법
- 제니릭 함수(Generic Function)는 함수 내에서 다양한 타입의 매개변수를 사용할 수 있도록 하는 함수.

```go
func doSmething[T any](arg1 T, arg2 T) {
    // T 타입의 인자를 사용하여 함수 로직을 작성함.
}
```
- 위 예시 코드에서 `[T any]`는 제네릭 타입 매개변수임. `T`는 함수 내에서 사용될 타입을 나타냄.
- `any` 키워드는 모든 타입을 허용한다는 의미임.
- 제네릭 타입(Generic Type)은 여러 타입에서 동일한 동작을 수행할 수 있는 타입임. Go언어에서는 제네릭 타입을 아래와 같이 작성할 수 있음.

```go
type exampleType[T any] struct {
    // T 타입의 필드를 정의합니다.
}
```
- 위 예시 코드에선 `[T any]`는 제네릭 타입 매개변수임. `T`는 해당 타입에서 사용될 타입을 나타내며, `any` 키워드는 모든 타입을 허용한다는 의미임.
- 제네릭 타입을 사용하면, 타입 안정성이 보장되면서도 여러 타입에서 동일한 동작을 수행할 수 있음.

## Example:Using Generics With Multiple Types
- 아래 예시 코드에선 제네릭 함수와 제네릭 타입을 사용하여, 다양한 타입에서 동작하는 코드를 작성함.

```go
package main

import log

func swap[T any](a,b *T) {
    temp := *a
    *a = *b
    *b = temp
}

type Stack[T any] struct {
    data []T
}

func (s *Stack[T])Push(elem T) {
    s.data = append(s.data, elem)
}

func(s *Stack[T])Pop() T {
    if len(s.data) == 0 {
        panic("stack is empty")
    }

    elem := s.data[len(s.data) - 1]
    s.data = s.data[:len(s.data) - 1]
    return elem
}

func main() {
    var x,y int = 1, 2
    log.Println("before swap:", x,y)
    swap(&x, &y)
    log.Println("after swap:", x,y)

    var stackInt Stack[int]
    stackInt.Push(1)
    stackInt.Push(2)
    stackInt.Push(3)
    log.Println(stackInt.Pop()) // Result : 3
    log.Println(stackInt.Pop()) // Result : 2
    log.Println(stackInt.Pop()) // Result : 1

    var stackStr Stack[string]
    stackStr.Push("hello")
    stackStr.Push("world")
    log.Println(stackStr.Pop()) // Result : "world"
    log.Println(stackStr.Pop()) // Result : "hello"
}
```

- 위 예시 코드에선 `swap` 함수는 `int`, `float64`, `string` 등 다양한 타입에서 동작하며, `Stack` 타입은 `int`와 `string` 등 다양한 타입에서 사용할 수 있음.
- 이러한 방법으로 제네릭 함수와 제네릭 타입을 사용하여, Go언어에서 제네릭을 구현할 수 있음.

## Example : Restricting Generic Types
- Go언어에서는 인터페이스를 사용하여 제네릭 타입에 제한을 둘 수 있음.이를 "Restricting Generic Types"라고 함.
- 예를 들어, 다음과 같이 `swap` 함수를 구현할 때, `T` 타입에 제한을 두어서 `swap` 함수가 호출 될 수 있는 타입을 제한할 수 있음.

```go
package main

import (
    "golang.org/x/exp/constraints"
    "log"
)

func swap[T interface{ Number }](a,b *T) {
    temp := *a
    *a = *b
    *b = temp
}

type Number interface {
    constraints.Float | constraints.Integer
}

func main() {
    x, y := 1, 2
    swap(&x, &y)
    log.Println(x, y) // Result : 2 1

    a, b := 1.5, 2.5
    swap(&a, &b)
    log.Println(a, b) // Result : 2.5 1.5
}
```

- 위 코드에서 `interface{Number}`는 `T` 타입이 숫자형 타입(`int`, `float64` 등) 이어야 한다는 의미임.
- 따라서, `swap` 함수는 `int`, `float64` 등 숫자형 타입에서만 호출 할 수 있음. 이러한 방법으로 제네릭 타입에 제한을 두어, 코드의 안정성과 가독성을 높일 수 있음.
- **`string` 타입은 `swap` 함수가 호출이 불가능함.**

## 참고
- [[Go] Generics 의 사용 및 예제](https://1minute-before6pm.tistory.com/60)
- [Tutorial: Getting started with generics](https://go.dev/doc/tutorial/generics)
- [The Go Programming Language Specification - Type Parameters](https://go.dev/ref/spec#Type_parameters)
- [The Go Programming Language Specification - Numeric types](https://go.dev/ref/spec#Numeric_types)
- [`constraints` - Go Package](https://pkg.go.dev/golang.org/x/exp/constraints)