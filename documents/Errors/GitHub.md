# GitHub

## subtree를 이용한 GitHub Pages 배포 방법
1. `yarn build`를 실행해서 `/build` 디렉토리를 생성합니다.
2. `git add build` 및 `git commit -m "docs: update ~~"`를 합니다.
3. `git subtree push --prefix build origin gh-pages`를 하여서 `gh-pages` 브랜치에 배포합니다.  
4. 만약 3번 명령어로 커밋되지 않고 오류가 발생한 경우 아래 명령어를 사용하여 커밋하면 정상적으로 배포됩니다.  
```shell
$ git push origin `git subtree split --prefix build master`:gh-pages --force
```
[Deploying a subfolder to GitHub Pages](https://gist.github.com/cobyism/4730490)를 참고하였습니다.