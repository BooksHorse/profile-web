# profile.sencha.moe

website แนะนำตัว

## วิธีการ Run

### Live Demo

Live demo ที่ <https://profile.bocchichan.moe/>

### Docker

build image
`docker build -t profile-sencha-moe .`

run image
`docker run --name profile-sencha-moe -d -p 8080:80 profile-sencha-moe`

เข้า <http://localhost:8080/> ใน Browser

### HTTP server

`python3 -m http.server` ที่ directory ที่มี `index.html`

เข้า <http://localhost:8000/> ใน Browser
