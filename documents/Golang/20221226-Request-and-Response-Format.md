# 20221226-요청 및 응답 구조체에 대한 고찰
REST API를 개발 시에 구조와 응답에 구조체에 대해서 생각을 많이하게 됩니다.  

## 참고한 자료들 속에서
- [Is there any standard for JSON API response format?](https://stackoverflow.com/questions/12806386/is-there-any-standard-for-json-api-response-format)
- [Standard JSON API response format](https://medium.com/@bojanmajed/standard-json-api-response-format-c6c1aabcaa6d)
- [rest api response format](https://stackoverflow.com/questions/39613798/rest-api-response-format)
- [`instagram.json`](https://gist.github.com/mgcm/4d4ddf687b1399b87de4)

위 글을 참고해 보았습니다.

```json
{
    "meta": {
         "error_type": "OAuthException",
         "code": 400,
         "error_message": "..."
    }
    "data": {
         ...
    },
    "pagination": {
         "next_url": "...",
         "next_max_id": "13872296"
    }
}
```

위 응답은 Instgram에서 사용하는 응답 포맷으로써 이 방법을 주로 사용하기로 했습니다.  
이유는 간단합니다. 반복되는 코드를 입력하게 될텐데 그때마다 다른 응답 구조체처럼 중복되는 내용을 계속 치고 싶지 않아서 위와 같은 포맷을 사용하기로 했습니다.

위 응답 포맷을 Go언어로 변환하면 아래와 같습니다.
```go
type MetaData struct {
    Status string `json:"status"`
    StatusCode int `json:"status_code"`
    Message string `json:"message"`
    Success bool `json:"success"`
}

type Data struct {
    ...
}

type Pagination struct {
    NextURL string `json:"next_url"`
    NextMaxID string `json:"next_max_id"`
}

type Resoponse struct {
    MeatData `json:"meta"`
    Data `json:"data"`
    Pagination `json:"pagination"`
    ResoponsedAt time.time `json:"resoponsed_at"`
}
```
위와 같은 방식으로 응답 구조를 사용하고자 합니다. `MetaData{}` 구조체 값들은 임의로 일부분 추가하였습니다.  


