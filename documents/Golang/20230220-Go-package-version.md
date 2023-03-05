# 20230220 - implicit function instantiation requires go1.18 or later (-lang was set to go1.17; check go.mod) 오류 해결하기
- 어느날 회사 프로젝트를 실행하던 도중 아래와 같은 오류가 발생합니다.

```shell
ent/photo/where.go:220:36: implicit function instantiation requires go1.18 or later (-lang was set to go1.17; check go.mod)
ent/photo/where.go:225:39: implicit function instantiation requires go1.18 or later (-lang was set to go1.17; check go.mod)
ent/photo/where.go:225:39: too many errors
# github.com/teamgrit-lab/scorpion-v2/ent/videoinfo
ent/videoinfo/where.go:30:40: implicit function instantiation requires go1.18 or later (-lang was set to go1.17; check go.mod)
```

- 오류 메시지에서 확인할 수 있듯이 `go.mod`에서 현재 사용하고 있는 버전이 18버전보다 아래 버전인 17버전이라 오류가 발생하게 되는 것을 알 수 있습니다.  
- 간단하게 해결할 수 있습니다. `go.mod`에서 `Go 1.17`로 되어있으면 `Go 1.18`로 변경하시면 됩니다.