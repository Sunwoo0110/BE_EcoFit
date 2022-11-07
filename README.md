# 🌿EcoFit🌿 (Team Tori)

## 🪄서비스 소개
`환경보호`를 위한 습관 형성 안드로이드 앱 서비스
- 본 서비스는 2022 소프트웨어융합대학 공동 해커톤을 위해 제작되었습니다.
- 환경보호 실천 문화를 조성합니다.
- 기후 위기에 모두가 관심을 갖고 행동할 수 있는 시민 의식을 제고합니다.
- 기존 챌린지 어플과 달리 환경보호에 초점을 맞췄습니다.

[Presentation Slides](https://drive.google.com/file/d/19aQZixMDa-gGTCC0TOfD8PeZLG_41U7a/view?usp=sharing) / [Demo Video](https://www.youtube.com/watch?v=m8oeYZGmA88)


<br>

## ⚙️ 시현방법
```bash
 git clone https://github.com/D8tori/BE_EcoFit.git
```
### 해당 위치로 이동
```bash
 npm i or npm install
```
.env파일 작성 (database)

### 시작하기
```bash
 npm start
```
<br>

## 👨‍💻 백엔드 측 개발 참여자 및 역
- 박민건 (동서대학교)
  - ubuntu 서버 구축 및 실행환경 구성
  - 데이터 베이스 개념적 설계 & 논리적 설계
  - Challenge API 이미지 전송 파트 구현
  - Market API 구현
  - swagger 문서 구현
- 김선우 (성균관대학교)
  - 데이터 베이스 개념적 설계 & 논리적 설계
  - User API 구현
  - Habit API 구현
  - Challenge API 구현


<br>


## 📌주요 기능 

<table>
  <tr>
    <td><img width="200" src="https://user-images.githubusercontent.com/63237214/175440257-7fcf199c-e3f1-4a91-a187-ebfbe3202d36.png"></td>
    <td><img width="200" src="https://user-images.githubusercontent.com/63237214/175440324-3349ac40-c1d6-4227-a9d8-89bf205fbe65.png"></td>
  </tr>
  <tr>
    <td align="center"><b>스플래시</b></td>
    <td align="center"><b>습관 탭</b></td>
  </tr>
</table>
<table>
  <tr>
    <td><img width="200" src="https://user-images.githubusercontent.com/63237214/175440346-f450f8b0-e370-4bb2-9761-6a7b996559e5.png"></td>
    <td><img width="200" src="https://user-images.githubusercontent.com/63237214/175440395-52be145b-b78f-4fcf-904c-799f3c6cd51d.png"></td>
    <td><img width="200" src="https://user-images.githubusercontent.com/63237214/175440433-38968a1a-5f1f-49f2-886d-87ca1ebb182c.png"></td> 
  </tr>
  <tr>
    <td align="center"><b>챌린지 탭</b></td>
    <td align="center"><b>챌린지 상세</b></td>
    <td align="center"><b>챌린지 참여</b></td>
  </tr>
</table>
<table>
  <tr>
    <td><img width="200" src="https://user-images.githubusercontent.com/63237214/175440522-72934043-f3df-4620-8f82-6e4cdf1de382.png"></td>
    <td><img width="200" src="https://user-images.githubusercontent.com/63237214/175440599-338416c1-cdb2-4b4b-8d0b-cd14bd9b196c.png"></td>
  </tr>
  <tr>
    <td align="center"><b>마켓 탭</b></td>
    <td align="center"><b>마켓 상품 등록</b></td>
  </tr>
</table> 
<table>
  <tr>
    <td><img width="200" src="https://user-images.githubusercontent.com/63237214/175441283-db777079-4e5c-4033-8272-ffc5505a43e7.png"></td>
    <td><img width="200" src="https://user-images.githubusercontent.com/63237214/175440669-329eb6b3-925f-42b4-9ae6-30f3b08c78cf.png"></td>
  </tr>
  <tr>
     <td align="center"><b>마이페이지</b></td>
     <td align="center"><b>챌린지 참여 내역</b></td>
  </tr>
</table>
  
  <br>

## 💻 Tech Stack
<table class="tg">
<tbody>
  <tr>
    <td><b>BackEnd</b></td>
        <td>
            <img alt="Node.js" width=130 src ="https://img.shields.io/badge/NODE.JS -16.15.1-009639.svg?&style=for-the-badge&logo=Node.js&logoColor=white"/>
            <img width=130  src="https://img.shields.io/badge/Express-16.15.0-009639?style=for-the-badge&logo=express&logoColor=white">
            <img width=120 src="https://img.shields.io/badge/nginx-1.22.0-009639?style=for-the-badge&logo=nginx&logoColor=white">
            <img width=120 src="https://img.shields.io/badge/Mysql-8.0.29-009639?style=for-the-badge&logo=Mysql&logoColor=white">
            <img width=105 src="https://img.shields.io/badge/PM2-5.2.0-009639?style=for-the-badge&logo=PM2&logoColor=white">
            <img width=130 src="https://img.shields.io/badge/Ubuntu-18.04.6-009639?style=for-the-badge&logo=Ubuntu&logoColor=white">
          </td>    
        </td>
  </tr>
<tr>

<td><b>Cloud</b></td>
<td>
  Naver Cloud (대회운영측 제공)
<br>
  <strong>vCPU 4 RAM 8<strong>
</td>
</tr>
 <tr>
    <td><b>node library</b></td>
<td>
  <img width=130 src="https://img.shields.io/badge/Swagger-2.2.1-009639?style=for-the-badge&logo=Swagger&logoColor=white">
  <img width=180 src="https://img.shields.io/badge/Swagger_ui_express-4.4.0-009639?style=for-the-badge&logo=Swagger&logoColor=white">
  <img width=180 src="https://img.shields.io/badge/Swagger_autogen-2.21.4-009639?style=for-the-badge&logo=Swagger&logoColor=white">
  <img width=120 src="https://img.shields.io/badge/Doenv-2.21.4-009639?style=for-the-badge&logo=Enpass&logoColor=white">
  <img width=130 src="https://img.shields.io/badge/Express-16.15.0-009639?style=for-the-badge&logo=Express&logoColor=white">

  <img width=120 src="https://img.shields.io/badge/Mysql-2.18.1-009639?style=for-the-badge&logo=Mysql&logoColor=white">
</td>
</tr>
<tr>
    <td><b>Strategy</b></td>
<td>RESTful API</td>
</tr>
<tr>
    <td><b>Other Tool</b></td>
<td>Notion, Slack</td>
</tr>
</tbody>
</table>
<br>

## 👍 시스템 구조
![iShot_2022-06-27_15 15 47](https://user-images.githubusercontent.com/72367040/175872280-9e81691d-775a-449a-9f46-dc8681552c03.jpg)

<br>

## 🗂 Floder Map
```bash
* 📦 BE_Ecofit
  ├──  package-lock.json
  ├──  package.json
  ├──  README.md
  ├──  src
  │   ├──  app.js
  │   ├──  config
  │   │   └──  config.js
  │   ├──  routes
  │   │   ├──  challenge
  │   │   │   ├──  challenge.ctrl.js
  │   │   │   ├──  index.js
  │   │   │   └──  uploads
  │   │   ├──  db.js
  │   │   ├──  habit
  │   │   │   ├──  habit.ctrl.js
  │   │   │   └──  index.js
  │   │   ├──  index.js
  │   │   ├──  market
  │   │   │   ├──  index.js
  │   │   │   └──  market.ctrl.js
  │   │   └──  user
  │   │       ├──  index.js
  │   │       └──  user.ctrl.js
  │   └──  server.js
  ├──  swagger-output.json
  └──  swagger.js
```

<br>

## ⚙️ 개발 환경
### 1. Software requirement
- Visual Code + node
- nvm 설치환경
- npm이 설치되어있음.
### 2. Hardware requirement
- Ubuntu 22.04 LTS ( 박민건 )
- Window 10 ( 김선우 )
