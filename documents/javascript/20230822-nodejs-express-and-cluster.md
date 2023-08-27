# 20230822 - Node.js and Cluster

- node.js는 기본적으로 하나의 프로세스가 `32bit`에서는 512MB 메모리를 사용할 수 있으며, `64bit`에서는 1.5GB 메모리를 사용하도록 제한 되어 있음.
- Chrome V8 Engine의 제한사항을 그대로 반영하여 사용하는 것임. 설정을 통해서 더 늘려서 사용할 수도 있지만 worker를 늘리는 것을 권장하고 있음.
- 여러 개의 워커들이 병렬로 동작하며 효율을 극대화하는 것을 바람직한 방향으로 권고하고 있음.

## worker를 생성하는 방법

- Node.js에서는 worker를 생성하는 방법은 두 가지임.
  - `child_process`, `cluster` 정도로 요약할 수 있음.
- **`cluster`** 는 Node.js v0.8부터 소개 되었음. 큰 부하를 노드 프로세스들의 클러스터를 통해 다루려는 목적으로 시작됨.
  - 이 프로세스들은 서버의 포트들을 공유할 수 있기 때문에 Web Application에 매우 적합함.
- 프로세스들을 단순하게 병렬로 실행하는 것은 `child_process.fork()`로 가능하고, 로드밸런싱과 포트 공유 등이 필요하다면 클러스터로 접근하는 것이 좋음.
  - IPC(Inter-Process Communication)로 process 간의 통신이 가능하기 때문에 로드 밸런싱 등의 추가적인 기능이 필요한 경우 클러스터를 활용하고 워크를 직접적으로 컨트롤 해야하는 경우 `child_process`를 주로 활용하게 됨.
- 새로운 `child_process`는 모두 V8의 인스턴스이기 때문에 30ms의 시작시간과 `10MB` 가량의 메모리를 소모함.

## 클러스터의 스케쥴링 방식
```js
var cluster = require("cluster");

cluster.schedulingPolicy = cluster.SCHED_NONE;

cluster.schedulingPolicy = cluster.SCHED_RR;
```

- 클러스터는 `cluster` 모듈을 가지고 온다.
- `cluster` 모듈을 가지고 왔다면, 실제 클러스터를 생성하기 전에 스케쥴링 방식을 설정할 수 있음.
- **`cluster.SCHED_NONE`:** 워커 스케쥴을 OS에 맡김.
- **`cluster.SCHED_RR`:** 워커 스케쥴을 Round Robin 방식으로 함.
  - **Round Robin:** 시분할 시스템을 위해 설계된 선점형 스케쥴링의 하나로서, 프로세서들 사이에 우선순위를 두지 않고, 순서대로 시간단위(Time Quantum/Slice)로 CPU를 할당하는 방식의 CPU 스케줄링 알고리즘.
- 기본적으로 스케쥴을 OS에 맡기는 방식이었음, 하지만 특정 워커에 작업이 몰리는 경우가 많아짐.
  - 이러한 문제점을 해결하기 위해서 순차적으로 하나식 작업을 배분하는 Round Robin 방식이 Node.js v0.12에서 추가됨.

### Master and Worker
```js
if (cluster.isMaster) {
	console.log('Master');
}

if (cluster.isWorker) {
	console.log('Worker');
}

var worker = cluster.fork();
```

- 클러스터 모듈은 지금 실행된 인스턴스가 마스터(`isMaster`) 혹은 워커(`isWorker`)인지 확인할 수 있습니다.
- 워커 생성은 `fork`를 수행만큼 생성됨.
- 동일한 JavaScript 파일을 실행하면서 처음 실행되면 기본적은 마스터가 됨.
  - 마스터에서는 `cluster.fork()` 메서드를 통해서 워커들을 생성하면 생성된 워커들도 마찬가지로 동일한 JavaScript 파일을 실행하게 됨.  
  이때 이미 마스터 클러스터가 존재하는 경우 새롭게 실행되는 프로세스는 워커 클러스터가 됨.  
- 마스터와 워커가 수행해야할 각 작업은 `isMaster`, `isWorker` 메서드를 활용해서 마스터와 워커를 구분해서 규정해 줌.
  - 마스터인 경우 되도록 워커들을 생성하고 관리하는 로직만 포함하고 그 외 로직은 적게 가져가는 것이 좋음.

## Woker 생성 · 제거 이벤트
- 워커가 생성되면 online 이벤트가 발생함. 워카가 죽으면 exit 이벤트가 발생함.
- 이벤트들을 활용해서 워커가 생성되었을 때 필요한 로직들과 워커가 죽었을 때 복구를 위한 작업들을 설정해 줄 수 있음.

```js
cluster.on('online', function(worker) {
  console.log(`생성된 워커의 아이디: ${worker.process.pid}`);
});

cluster.on('exit', function(worker, code, signal) {
  console.log(`죽은 워커의 아이디: ${worker.process.pid}`);
  console.log(`죽은 워커의 exit code: ${code}`);
  console.log(`죽은 워커의 signal: ${signal}`);
});
```

## 공부하기 위해 참고한 자료
- [Round-Robin(RR)이란? , CPU-Scheduling들](https://jwprogramming.tistory.com/17)
- [[NodeJS] 클러스터(cluster)에 대한 정리](https://programmingsummaries.tistory.com/384)
- [Express를 이용한 서버 클러스터 구성.](https://smoh.tistory.com/339)