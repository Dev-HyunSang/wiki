# 2.1 정렬(Alignment)

메모리 액세스 정렬에는 미묘한 차이가 있습니다.  

- 일부 하드웨어 아키텍처와 구현은 정렬되지 않은 메모리 액세스로 인하여 오류가 발생할 수도 있습니다.
- 원자 연산(Atomic operation)는 단어에 맞춰진 액세스가 필요합니다.
    - 원자 연산(Atomic operations)이란 필요한 부분은 멀티스레드 프로그램에서 공유 자원들에 대해 여러 스레드가 서로 동시에 액세스 하는 경쟁상태(race Condition)을 막시 위한 하나의 방법 / **동기화를 위한 하나의 방법**

## 번외 : 공부하면서 함께 보면 좋을 자료
- [Vaert Street - Atomic Operation 이란?](https://vaert.tistory.com/39)
- [파수 - SIMD (Single Instruction Multiple Data)에 대한 집중탐구](https://blog.naver.com/fs0608/221650925743)
- [hyunsooo - SIMD (Single Instruction Multiple Data)](https://velog.io/@khs0415p/SIMD-Single-Instruction-Multiple-Data)