# 20230728-OpenAPI With Golang

- 최근 회사 프로젝트에서 사용하고 있는 OpenAPI를 어떻게 Go언어에서 함께 사용하는지 이야기 해 보고자 한다.  
- 아직 많이 실력이 부족하지만 함께 하고 있는 호재님께 감사인사를 드립니다.  
- **Ref:**
    - [OpenAPI Web Site](https://www.openapis.org/)
    - [`OpenAPITools/openapi-generator`](https://github.com/OpenAPITools/openapi-generator)
    - [`deepmap/oapi-codegen`](https://github.com/deepmap/oapi-codegen)

## OpenAPI Installation
```shell
$ go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest
```
