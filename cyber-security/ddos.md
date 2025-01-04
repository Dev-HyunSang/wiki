# DDos, Distributed Denial of Service Attack

## 죽음의 핑, Ping of Death
- 규정 크기 이상의 ICMP 패킷으로 시스템을 마비시키는 공격 기법.
- Ping 명령을 실행하면 ICMP Echo Request 패킷을 원격 IP 주소에 송신하고 ICMP 응답을 기다림.
- 방화벽이 ICMP 패킷을 막지 않도록 되어 있다면 시스템 공격 수단으로 이용될 수 있음. 대표적인 것이 버퍼 크기를 초과하는 핑 패킷으로 공격대상의 IP 스택을 넘치게 하는 것.
    - 큰 서비스의 경우 Ping 요청을 받을 수 없도록 되어있음.

## HTTP GET Flooding