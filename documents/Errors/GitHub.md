# GitHub

## subtree를 이용한 GitHub Pages 배포 방법
1. `yarn build`를 실행해서 `/build` 디렉토리를 생성합니다.
2. `git add build` 및 `git commit -m "docs: update ~~"`를 합니다.
3. `git subtree push --prefix build origin gh-pages`를 하여서 `gh-pages` 브랜치에 배포합니다.  
[Deploying a subfolder to GitHub Pages](https://gist.github.com/cobyism/4730490)를 참고하였습니다.