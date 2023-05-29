# 20230521 - What is FOTA and OTA

## FOTA(Fireware Over The Air)
FOTA는 **"펌웨어 업데이트 오버-더-에어"** 의 약어로, 이는 **모바일 기기나 장치의 소프트웨어(펌웨어)를 무선으로 업데이트하는 기술**을 가리킵니다. FOTA는 사용자가 추가적인 하드웨어나 케이블 연결 없이 펌웨어를 최신 버전으로 업데이트할 수 있도록 돕습니다.

FOTA는 **주로 스마트폰, 태블릿, 차량 시스템, IoT(사물 인터넷) 장치 등에서 사용**됩니다. 이를 통해 **제조업체는 소프트웨어 버그 수정, 기능 개선, 보안 패치 등을 빠르게 전파할 수 있습니다. 사용자는 펌웨어 업데이트 알림을 받고, Wi-Fi 또는 셀룰러 네트워크를 통해 소프트웨어 업데이트를 다운로드하고 설치할 수 있습니다.**

FOTA는 기기의 성능과 기능을 향상시키고, 보안 취약점을 해결하며, 새로운 기능과 서비스를 도입하는 등 소프트웨어 업데이트의 편리성과 유연성을 제공합니다.

## OTA(Over The Air)
OTA는 **"오버-더-에어"** 의 약어로, **이는 모바일 기기나 장치의 소프트웨어, 펌웨어, 운영 체제 등을 무선으로 업데이트하는 기술을 가리킵니다. OTA는 사용자가 추가적인 하드웨어나 케이블 연결 없이 소프트웨어를 최신 버전으로 업데이트할 수 있도록 돕습니다.**

OTA는 **주로 스마트폰, 태블릿, 스마트 TV, 차량 시스템, IoT(사물 인터넷) 장치 등에서 사용**됩니다. 이를 통해 제조업체는 **기기의 성능을 향상시키거나 버그를 수정하고, 새로운 기능을 추가하며, 보안 취약점을 해결하는 등의 업데이트를 제공할 수 있습니다.**

**사용자는 OTA 업데이트 알림을 받으면 Wi-Fi 또는 셀룰러 네트워크를 통해 업데이트 파일을 다운로드하고 설치할 수 있습니다. 이를 통해 사용자는 최신 기능과 개선 사항을 즉시 활용할 수 있으며, 기기의 안전성과 성능을 유지하면서 업그레이드할 수 있습니다.**

OTA는 제조업체에게 소프트웨어 관리와 업데이트의 편리성을 제공하고, 사용자에게는 불편함 없이 기기를 최신 상태로 유지할 수 있는 장점을 제공합니다.

## OTA는 어떻게 동작하는지
1. **업데이트 준비:** 소프트웨어 개발자나 제조업체는 새로운 소프트웨어 업데이트를 개발하고 테스트합니다. 업데이트는 기기의 기능 향상, 버그 수정, 보안 강화 등을 목적으로 할 수 있습니다.
2. **배포 계획:** 업데이트가 완료되면 배포 계획이 수립됩니다. 이 계획은 업데이트가 어떤 기기에 적용될 것인지, 배포 일정은 어떻게 되는지 등을 포함합니다.
3. **업데이트 알림:** 기기 소유자는 업데이트 가능한 새 버전이 있음을 알리는 알림을 받게 됩니다. 이 알림은 주로 기기의 사용자 인터페이스, 애플리케이션 또는 알림 메시지 형태로 제공됩니다.
4. **업데이트 다운로드:** 사용자는 업데이트를 다운로드하는데 동의하면서 인터넷 연결이 있는 기기를 통해 업데이트 파일을 다운로드합니다. 다운로드 속도는 인터넷 연결 상태와 파일 크기에 따라 달라질 수 있습니다.
5. **업데이트 설치:** 다운로드가 완료되면 기기는 자동으로 업데이트를 설치합니다. 이 과정에서 기기는 이전 소프트웨어 버전을 새로운 버전으로 대체하고, 필요한 경우 재부팅하여 업데이트를 적용합니다.
6. **업데이트 완료:** 설치가 완료되면 기기는 새로운 소프트웨어 버전으로 작동합니다. 사용자는 일반적으로 업데이트에 대한 확인 메시지를 받게 됩니다.

## 유명한 OTA 오픈소스
- [**cesanta/mongoose-os**](https://github.com/cesanta/mongoose-os) - Mongoose OS - an IoT Firmware Development Framework. Supported microcontrollers: ESP32, ESP8266, CC3220, CC3200, STM32F4, STM32L4, STM32F7. Amazon AWS IoT, Microsoft Azure, Google IoT Core integrated. Code in C or JavaScript.
  - [OTA - Over The Air firmware update](https://mongoose-os.com/docs/mongoose-os/userguide/ota.md) 
- [**JAndrassy/ArduinoOTA**](https://github.com/JAndrassy/ArduinoOTA) -Arduino library to upload sketch over network to Arduino board with WiFi or Ethernet libraries

## ESP32 with AWS IoT
- [ESP32 with AWS IoT -2-](https://velog.io/@cheesam31/ESP32-with-AWS-IoT-2-)
  - Based [Workshop: ESP32 with AWS IoT](https://catalog.us-east-1.prod.workshops.aws/workshops/5b127b2f-f879-48b9-9dd0-35aff98c7bbc/module1)
- [Connecting ESP32 to Amazon AWS IoT Core using MQTT](https://how2electronics.com/connecting-esp32-to-amazon-aws-iot-core-using-mqtt/)
- [Building an AWS IoT Core device using AWS Serverless and an ESP32](https://aws.amazon.com/blogs/compute/building-an-aws-iot-core-device-using-aws-serverless-and-an-esp32/)
- [cheesam31/AWS_IoT_ESP32_Workshop](https://github.com/cheesam31/AWS_IoT_ESP32_Workshop/tree/main) - AWS IoT ESP32 Workshop
- [espressif/esp-aws-iot](https://github.com/espressif/esp-aws-iot) - AWS IoT SDK for ESP32 based chipsets

### FreeRTOS
FreeRTOS는 **실시간 운영체제(Real-Time Operating System, RTOS)** 로서, **제한된 리소스를 가진 임베디드 시스템에서 실시간 응용 프로그램을 개발하기 위해 사용되는 오픈 소스 운영체제**입니다. 실시간 응용 프로그램은 **정해진 시간 내에 정확한 동작을 수행해야 하는 시스템**을 말합니다. 이러한 응용 프로그램은 자동차, 의료 기기, 산업 제어 시스템, 통신 장비 등 다양한 임베디드 시스템에서 사용됩니다.

**FreeRTOS는 작고 경량화된 설계로 알려져 있으며, 적은 메모리와 처리 능력을 요구하는 임베디드 시스템에서도 효율적으로 동작할 수 있습니다.** 이를 위해 **운영체제의 핵심 기능을 제공하면서도 최소한의 오버헤드를 유지**합니다. **FreeRTOS는 다양한 아키텍처(예: ARM, AVR, MSP430 등)와 여러 컴파일러에서 사용할 수 있으며, 다양한 장치 및 보드에 이식할 수 있는 포터블한 구조를 가지고 있습니다.**

FreeRTOS는 작업 스케줄링, 태스크 관리, 메모리 관리, 인터럽트 처리, 통신 및 동기화 기능 등을 제공합니다. 또한 이벤트 및 세마포어, 큐, 타이머 등 다양한 IPC(Inter-Process Communication) 메커니즘도 포함되어 있습니다. 이러한 기능들을 통해 개발자는 실시간 시스템을 쉽게 구축하고 관리할 수 있습니다.

FreeRTOS는 오픈 소스이므로 개발자들은 라이선스 비용 없이 자유롭게 사용하고 수정할 수 있습니다. 또한 커뮤니티에서는 다양한 예제 코드, 문서, 지원 등을 제공하여 개발자들이 보다 효율적으로 개발할 수 있도록 지원하고 있습니다.

- [FreeRTOS](https://www.freertos.org/)
- [FreeRTOS 무엇인가요?](https://docs.aws.amazon.com/ko_kr/freertos/latest/userguide/what-is-freertos.html)
- [ESP32에서 FreeRTOS 사용 - TASK 만들기](https://arsviator.blogspot.com/2018/04/esp32-freertos-task.html)

### FreeRTOS with OTA
- [FreeRTOS 무선 업데이트](https://docs.aws.amazon.com/ko_kr/freertos/latest/userguide/freertos-ota-dev.html)
- [OTA 업데이트 생성(AWS IoT 콘솔)](https://docs.aws.amazon.com/ko_kr/freertos/latest/userguide/ota-console-workflow.html)
- [AWS IoT무선 (OTA) 라이브러리](https://docs.aws.amazon.com/ko_kr/freertos/latest/userguide/ota-update-library.html)

---

<div style="text-align: right; color: #BFBFBF;">Based ChatGPT</div>