# 20230403 - Bazel with Golang
회사에서 팀 이동을 하면서 기존의 이동한 팀에서 운영하고 있는 서비스들을 유지보수 및 개발하면서 CI/CD 부분을 맞게 되어서 Bazel을 사용하게 되어서 공식 문서를 살펴보면서 공부한 내용.

## TOC
- [What is the Bazel?](#what-is-the-bazel)
- [Bazel on macOS Installation](#bazel-on-macos-installation)

## What is the Bazel?
> **Bazel은 오픈소스 빌드 및 테스트 도구로, Make, Maven, Gradle과 유사합니다. 사람이 읽을 수 있는 상위 수준의 빌드 언어를 사용합니다. Bazel은 여러 언어로 프로젝트를 지원하고 여러 플랫폼의 출력을 빌드합니다. Bazel은 여러 저장소에서 대규모 코드베이스와 많은 사용자를 지원합니다.**  
> [Bazel 소개](https://bazel.build/about/intro)

## Bazel on Install macOS
[macOS에 Bazel 설치](https://bazel.build/install/os-x?hl=ko)를 참고하여 작성함.

```shell
$ brew update && brew upgrade # 선택 사항
$ brew install bazel
$ bazel --version
$ brew upgrade bazel # Upgrade Bazel
```

## 참고한 자료
- [`bazelbuild/rules_go`](https://github.com/bazelbuild/rules_go)
- [Using Golang with Bazel - Step by Step](https://youtu.be/mXLrk0ipwz4)
- [Golang UK Conference 2017 | Paul Bellamy - Building Go with Bazel](https://youtu.be/2TKxuERTnks)
