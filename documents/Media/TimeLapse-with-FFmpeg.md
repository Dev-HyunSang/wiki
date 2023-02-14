# FFmpeg를 이용한 타임랩스 생성하기
일단 들어가기 전에 레퍼런스를 살짝 살펴봤습니다. 살펴본 레퍼런스는 아래와 같습니다.

- [creating timelapse from still images (jpg) to mp4 using ffmpeg](https://superuser.com/questions/1499968/creating-timelapse-from-still-images-jpg-to-mp4-using-ffmpeg)
- [Creating a Time-Lapse Video Through the Command-Line (Using FFmpeg)](https://medium.com/@sekhar.rahul/creating-a-time-lapse-video-on-the-command-line-with-ffmpeg-1a7566caf877)

## 명령어
```shell
ffmpeg -framerate 30 -pattern_type glob -i "my-timelapse/*.jpg" -s:v 3840x2160 -c:v libx264 -crf 17 -pix_fmt yuv420p output.mp4
```

**`-pix_fmt`[:스트림_지정자] 형식(입력/출력, 스트림별)**  
픽셀 형식을 설정합니다. 지원되는 모든 픽셀 포맷을 표시하려면 -pix_fmts를 사용합니다. 선택한 픽셀 포맷을 선택할 수 없는 경우, ffmpeg는 경고를 출력하고 인코더에서 지원하는 최상의 픽셀 포맷을 선택합니다. 앞에 +가 붙으면 요청된 픽셀 포맷을 선택할 수 없는 경우 오류와 함께 ffmpeg가 종료되고 필터그래프 내부의 자동 변환이 비활성화됩니다. pix_fmt가 단일 +인 경우, ffmpeg는 입력(또는 그래프 출력)과 동일한 픽셀 형식을 선택하며 자동 변환이 비활성화됩니다.