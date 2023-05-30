# Golang

## Package
### 2023.02.20 - `implicit function instantiation requires go1.18 or later` 오류
```shell
ent/photo/where.go:220:36: implicit function instantiation requires go1.18 or later (-lang was set to go1.17; check go.mod)
ent/photo/where.go:225:39: implicit function instantiation requires go1.18 or later (-lang was set to go1.17; check go.mod)
ent/photo/where.go:225:39: too many errors
# github.com/teamgrit-lab/scorpion-v2/ent/videoinfo
ent/videoinfo/where.go:30:40: implicit function instantiation requires go1.18 or later (-lang was set to go1.17; check go.mod)
```
- 어느날 회사 프로젝트를 실행하던 도중 아래와 같은 오류가 발생합니다.
- 오류 메시지에서 확인할 수 있듯이 `go.mod`에서 현재 사용하고 있는 버전이 18버전보다 아래 버전인 17버전이라 오류가 발생하게 되는 것을 알 수 있습니다.  
- 간단하게 해결할 수 있습니다. `go.mod`에서 `Go 1.17`로 되어있으면 `Go 1.18`로 변경하시면 됩니다.
- **관련 문서:**
  - [Why do I get "undeclared name: any (requires version go1.18 or later)" when using any instead of interface{}? I am using Go 1.18](https://stackoverflow.com/questions/71487498/why-do-i-get-undeclared-name-any-requires-version-go1-18-or-later-when-usin)

## `aws-sdk-go-v2`
### `operation error S3: CreateMultipartUpload, failed to resolve service endpoint, an AWS region is required, but was not found` 오류
1. `aws-sdk-go-v2`를 이용하여 AWS S3 버킷에 오브젝트를 업로드 하는 경우 `operation error S3: CreateMultipartUpload, failed to resolve service endpoint, an AWS region is required, but was not found` 오류 메세지가 발생합니다.  
2. 만약 환경변수로 AWS 관련 설정을 불러온다면 환경변수에서 리전이 등록되지 않아서 발생하는 경우로 환경 변수 또는 `.env` 파일에 변수를 제대로 등록해야지 오류없이 제대로 동작되는 것을 알 수 있습니다.