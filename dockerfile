FROM node:14.17.6-alpine3.11

# work dir 생성
RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
# COPY package.json /usr/src/app/package.json

# ARG DEBIAN_FRONTEND=noninteractive
# ENV TZ=Asia/Seoul
# RUN apt-get autoclean
# RUN apt-get update

# RUN npm install -g react-scripts
RUN npm install && npm cache clean --force

# RUN pip install --upgrade pip
ENV PATH=/app/node_modules/.bin:$PATH
ENV NODE_ENV development
COPY . .

RUN npm run build
# work dir 에 build 폴더 생성 /app/build
# RUN npm install && npm cache clean --force
# RUN npm run build

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
# ADD ./build ./build

# nginx 의 default.conf 를 삭제
FROM nginx
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사

COPY ./nginx.conf /etc/nginx/conf.d

# 80 포트 오픈
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]