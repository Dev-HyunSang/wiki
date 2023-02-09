# 20230208 - 네이버 클라우드 플랫폼과 AWS SDK for Go
회사에서 업무 중 NCP(Naver Cloud Platform)를 만져볼 기회가 생겼는데, `aws-sdk-golang-v2`로 이미 AWS S3 관련 기능을 개발한 상태였습니다.  
네이버 클라우드 플랫폼은 AWS SDK를 사용해서 Object Storage를 사용하도록 하고 있어서 기존의 코드를 재활용하려고 하였습니다. 하지만 인증 관련 오류 발생으로 인해서 해결 방안을 찾아보고 기록하고 있습니다.

> Naver Cloud Platform SDK 개발자 분들...ㅠ [NaverCloudPlatform/ncloud-sdk-go-v2](https://github.com/NaverCloudPlatform/ncloud-sdk-go-v2)에 Object Storage도 추가해 주시거나 Go용 AWS SDK 예제 문서화해 주시면 정말로 감사하겠습니다ㅠㅠ  
>  조금 더 많은 프로그래밍 언어가 네이버 클라우드 플랫폼을 사용할 수 있을 듯 해요...ㅠ

## JavaScript용 AWS SDK를 통한 테스트
- 권한 인가 관련 문제인지 확인하기 위해서 [Javascript용 AWS SDK](https://guide.ncloud-docs.com/docs/storage-storage-8-4) 예제를 활용하여 테스트 진행하였습니다.
- 결론 → 권한 문제가 아니라 코드 문제인 듯 합니다.

### SDK Installation
```shell
npm install --save aws-sdk@2.348.0
```
- JavaScript용 AWS SDK에서도 특정 버전의 패키지를 사용하는 점.

### Code
```javascript
const AWS = require('aws-sdk');

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = 'ACCESS_KEY';
const secret_key = 'SECRET_KEY';

const S3 = new AWS.S3({
    endpoint,
    region,
    credentials: {
        accessKeyId : access_key,
        secretAccessKey: secret_key
    }
});


const bucket_name = 'sample-bucket';


(async () => {

    await S3.createBucket({
        Bucket: bucket_name,
        CreateBucketConfiguration: {}
    }).promise()

})();
```
- JavaScript용 SDK는 정말 간단 그 자체의 코드인데... 왜 Go는...ㅠ

## 문제 상황
```go
func NcpCreateNewBucket(bucketName string) (*s3.CreateBucketOutput, error) {
	creds := credentials.NewStaticCredentialsProvider("","", "") // 인증키 입력하여 실행함.

	ncpResolver := aws.EndpointResolverWithOptionsFunc(func(service, region string, options ...interface{}) (aws.Endpoint, error) {
		return aws.Endpoint{
			URL:           "https://kr.object.ncloudstorage.com",
			SigningRegion: "kr-standard",
		}, nil
	})

	cfg, err := config.LoadDefaultConfig(context.Background(),
		config.WithEndpointResolverWithOptions(ncpResolver),
		config.WithCredentialsProvider(creds))
	if err != nil {
		return nil, err
	}

	client := s3.NewFromConfig(cfg)

	output, err := client.CreateBucket(context.Background(), &s3.CreateBucketInput{
		Bucket: &bucketName,
	})

	log.Println(err)

	return output, err
}
```
```shell
operation error S3: CreateBucket, https response error StatusCode: 403, RequestID: 1a44f9c6-5aac-4e62-8c7a-fc42e1f522d0, HostID: , api error AccessDenied: Access Denied
```
- `AccessDenied: Access Denied`라는 오류가 뜨게 됩니다. 
왜 오류가 날까 고민해 본 결과는 아래와 같습니다.
  - `aws-sdk-go-v2`를 사용하는 것이 아닌 `aws-sdk-go`를 사용하면 정상적으로 작동될까?
  - `aws-sdk-go-v2`에서도 되지만 코드를 잘못 작성한 것이 아닌가?
    - 확률 낮음. 이미 개발 완료하여 사용하고 있는 기능들이 있음.

```go
func NcpBucketList() (*s3.ListBucketsOutput, error) {
	creds := credentials.NewStaticCredentialsProvider("","", "")

	ncpResolver := aws.EndpointResolverWithOptionsFunc(func(service, region string, options ...interface{}) (aws.Endpoint, error) {
		return aws.Endpoint{
			URL:           "https://kr.object.ncloudstorage.com",
			SigningRegion: "kr-standard",
		}, nil
	})

	cfg, err := config.LoadDefaultConfig(context.Background(),
		config.WithEndpointResolverWithOptions(ncpResolver),
		config.WithCredentialsProvider(creds))
	if err != nil {
		return nil, err
	}

	client := s3.NewFromConfig(cfg)
	
	output, err := client.ListBuckets(context.Background(), &s3.ListBucketsInput{}, func(options *s3.Options) {})

	log.Println(output)
	log.Println(err)

	return output, err
}
```
- **오잉 리스트 부르는 기능은 또 정상적으로 작동 되네...?**
  - 그러면... 버킷 생성하는 기능만 관련해서 오류가 발생하는 건가...?  
  그러면 왜 JavaScript용 AWS SDK에서는 작동되는 걸까...?

```json
{
    "Buckets": [
        {
            "CreationDate": "2020-06-10T06:56:43.483Z",
            "Name": ""
        }
    ],
    "Owner": {
        "DisplayName": "",
        "ID": ""
    },
    "ResultMetadata": {}
}
```
- 실제로는 데이터가 있습니다. 회사 정보보안을 위해서 삭제하였습니다.

## 결론
- 특정 기능만 가능하다...? 아직까지 완벽하게 해결하지 않아서 나중에 해결하고 나서 수정할 예정.