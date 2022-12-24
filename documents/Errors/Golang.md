# Golang

## AWS SDK
### `operation error S3: CreateMultipartUpload, failed to resolve service endpoint, an AWS region is required, but was not found` 오류
1. `aws-sdk-go-v2`를 이용하여 AWS S3 버킷에 오브젝트를 업로드 하는 경우 `operation error S3: CreateMultipartUpload, failed to resolve service endpoint, an AWS region is required, but was not found` 오류 메세지가 발생합니다.  
2. 만약 환경변수로 AWS 관련 설정을 불러온다면 환경변수에서 리전이 등록되지 않아서 발생하는 경우로 환경 변수 또는 `.env` 파일에 변수를 제대로 등록해야지 오류없이 제대로 동작되는 것을 알 수 있습니다.