# 20230824 - Node.js Express Error Handling

- 본 글은 []()의 강의를 보면서 미들웨어에서 오류 핸들링과 관련된 내용을 보고 나서 자세히 알기 위해서 작성함.
- [**에러 처리를 위한 익스프레스 가이드**](https://jeonghwan-kim.github.io/node/2017/08/17/express-error-handling.html)를 참고하여 효율적이고 안전하게 오류를 처리할 수 있는 방법에 대해서 공부하고자 함.
	- 영어 자료를 한국어로 번역하면서 한국어와 문맥이 잘 어울리지 않는 경우 임의로 수정함.

## 기본적인 오류 핸들링 방법
```js
app.get('/user', async function(req, res) {
	let users;
	try {
		users = await db.collection('user').find().toArray();
	} catch(err) {
		res.status(500).json({
			err: err.toString();
		});
	}
	res.json({
		users
	})
});
```

- `try`, `catch`를 사용하여 처리하는 방법이 있음. 대중적인 오류 처리 방법임.
	- 한 두개의 엔드포인트라면 이러한 패턴이 잘 동작하겠지만, 여러 개를 유지해야한다면 많이 복잡하고 혼란해질 것임.

## 에러 처리 미들웨어 정의하기
- Express Middleware는 인자의 갯수에 따라 여러가지 유형이 있음.
	- 4개의 인자(`err, req, res, next`)를 취하는 미들웨어를 "오류 처리 미들웨어"라고 부르며, 오류 발생 시에만 호출 됨.

```js
const express  = require('express');

const app = express();

app.get('*', function(req, res, next) {
	throw new Error('woops');
});

app.get('*', function (req, res, next) {
	console.log('this will not print');
});

app.use(function (err, req, res, next) {
	res.json({
		message: err.message
	});
})

app.listen(3000);
```

- Middleware는 익스프레스로 에러를 알리는 여러 가지 방법이 있음.
	- 하나는 위 코드에서 보았듯이 틱(tick)에서 예외를 던지는 것. 자바스크립트의 비동기 본성 때문에 쓸모 있는 코드는 아님. 에러를 비동기로 처리하는 경우 서버에 오류가 많게 됨.

```js
const express = require('express');

const app = express();

app.get('*', function (req, res, next) {
	setImmediate(() => {
		throw new Error('woops');
	});
});

app.use(function (err, req, res, next) {
	res.json({ message: err.message });
});

app.listen(3000);
```
- 에러 처리를 사용하기 위해서는 익스프레스를 통해서 에러를 알리는 유일한 방법은 일반적인 미들웨어로 세번째 인자인 `next()`를 사용하는 것임.
	- 평범한 라우트 처리기(`app.get('/'), function(req, res) {}`) 같은 `next()` 함수를 인자로 취할 수 있음.
