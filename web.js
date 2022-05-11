// node_modules의 express 패키지를 가져온다.
const express = require('express');
const router = express.Router();

// app이라는 변수에 express 함수의 변환 값을 저장한다.
const app = express();

// 환경변수에서 port를 가져온다. 환경변수가 없을시 8001포트를 지정한다.
const port = app.listen(process.env.PORT || 8001);

// REST API의 한가지 종류인 GET 리퀘스트를 정의하는 부분.
// app.get이라고 작성했기 때문에 get 요청으로 정의가 되고 app.post로 작성할 경우 post 요청으로 정의가 된다.
// REST API의 종류 (get, post, update, delete 등등)을 사용하여 End Point를 작성하실 수 있습니다.
app.use('/', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/about-company', function(req, res) {
    res.render('about-company');
});
app.get('/business/finance', function(req, res) {
    res.render('business/finance');
});
app.get('/business/platform', function(req, res) {
    res.render('business/platform');
});
app.get('/business/solution', function(req, res) {
    res.render('business/solution');
});
app.get('/solution/sp1-apps', function(req, res) {
    res.render('solution/sp1-apps');
});
app.get('/solution/sp1-framework', function(req, res) {
    res.render('solution/sp1-framework');
});
app.get('/sub/customer', function(req, res) {
    res.render('sub/customer');
});
app.get('/sub/partner', function(req, res) {
    res.render('sub/partner');
});
app.get('/sub/portfolio', function(req, res) {
    res.render('sub/portfolio');
});
app.get('/recruit/talent', function(req, res) {
    res.render('recruit/talent');
});
app.get('/recruit/welfare', function(req, res) {
    res.render('recruit/welfare');
});
app.get('/recruit/employInfo', function(req, res) {
    res.render('recruit/employInfo');
});
app.get('/contact', function(req, res) {
    res.render('contact');
});

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
app.listen(port, function() {
    console.log('start! express server');
});