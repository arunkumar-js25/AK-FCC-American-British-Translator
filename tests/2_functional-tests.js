const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp); 

let Translator = require('../components/translator.js');

suite('Functional Tests', () => { 
  test('1', function (done) {
     chai
			.request(server)
			.post('/api/translate') 
			.send({ "text":"Paracetamol takes up to an hour to work.",
    "locale":"british-to-american"})
			.end(function (err, res) {
			  assert.equal(res.body.translation, '<span class=\"highlight\">Tylenol</span> takes up to an hour to work.');
			  done();
			});
	});

  test('2', function (done) {
     chai
			.request(server) 
			.post('/api/translate') 
			.send({ "text":"Paracetamol takes up to an hour to work.",
    "locale":"-to-american"}) 
			.end(function (err, res) {
			  assert.equal(res.body.error, 'Invalid value for locale field');
			  done();
			});
	});

  test('3', function (done) {
     chai
			.request(server)
			.post('/api/translate') 
			.send({ "locale":"british-to-american" }) 
			.end(function (err, res) {
			  assert.equal(res.body.error, 'Required field(s) missing');
			  done();
			});
	});

  test('4', function (done) {
     chai
			.request(server) 
			.post('/api/translate')
			.send({ "text":"Paracetamol takes up to an hour to work." }) 
			.end(function (err, res) {
			  assert.equal(res.body.error, 'Required field(s) missing');
			  done();
			});
	});

  test('5', function (done) {
     chai
			.request(server)
			.post('/api/translate')
			.send({
    "text":"",
    "locale":"british-to-american"}) 
			.end(function (err, res) {
			  assert.equal(res.body.error, 'No text to translate');
			  done();
			});
	});

  test('6', function (done) {
     chai
			.request(server) 
			.post('/api/translate') 
			.send({ "text":"I ate breakfast.",
    "locale":"british-to-american"})
			.end(function (err, res) {
			  assert.equal(res.body.translation, 'Everything looks good to me!');
			  done();
			});
	});
  
});
