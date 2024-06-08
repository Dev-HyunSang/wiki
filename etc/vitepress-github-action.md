# Deploy VitePress on GitHub Action

[[toc]]

## GitHub Action 설정
```yml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm # 또는 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: yarn install
      - name: Build with VitePress
        run: yarn docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@master
        with:
          path: ./.vitepress/dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- VitePress 문서에 설명되어 있는 [VitePress Guide - Deploy](https://vitepress.vuejs.kr/guide/deploy) 코드를 사용했다.
    - 사용하면서 내 환경과 맞지 않는 코드로 인해서 빌드가 되지 않아서 일부분 수정했다.

## 오류 사항 고치기

```yml
# 기존 코드
- name: Upload artifact
    uses: actions/upload-pages-artifact@master
    with:
        path: docs/.vitepress/dist // [!code focus]

# 변경한 코드
- name: Upload artifact
    uses: actions/upload-pages-artifact@master
    with:
        path: ./.vitepress/dist // [!code focus]
```

- 자신이 사용하고 있는 로컬 환경 또는 개발 환경에서 알맞게 빌드하여 동작할 수 있도록 구성하면 된다.
- GitHub Action을 사용하는 경우 GitHub Page에서 GitHub Action을 선택해야지만 정상적으로 배포가 된다.