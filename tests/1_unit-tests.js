const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translate = new Translator();

suite('Unit Tests', () => {
  test('1', function (done) {
    let str = "Mangoes are my favorite fruit.";
    let res = "Mangoes are my <span class=\"highlight\">favourite</span> fruit.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('2', function (done) {
    let str = "I ate yogurt for breakfast.";
    let res = "I ate <span class=\"highlight\">yoghurt</span> for breakfast.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('3', function (done) {
    let str = "We had a party at my friend's condo.";
    let res = "We had a party at my friend's <span class=\"highlight\">flat</span>.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('4', function (done) {
    let str = "Can you toss this in the trashcan for me?";
    let res = "Can you toss this in the <span class=\"highlight\">bin</span> for me?";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('5', function (done) {
    let str = "The parking lot was full.";
    let res = "The <span class=\"highlight\">car park</span> was full.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('6', function (done) {
    let str = "Like a high tech Rube Goldberg machine.";
    let res = "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('7', function (done) {
    let str = "To play hooky means to skip class or work.";
    let res = "To <span class=\"highlight\">bunk off</span> means to skip class or work.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('8', function (done) {
    let str = "No Mr. Bond, I expect you to die.";
    let res = "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('9', function (done) {
    let str = "Dr. Grosh will see you now.";
    let res = "<span class=\"highlight\">Dr</span> Grosh will see you now.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});
  
  test('10', function (done) {
    let str = "Lunch is at 12:15 today.";
    let res = "Lunch is at <span class=\"highlight\">12.15</span> today.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('11', function (done) {
    let str = "We watched the footie match for a while.";
    let res = "We watched the <span class=\"highlight\">soccer</span> match for a while.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('12', function (done) {
    let str = "Paracetamol takes up to an hour to work.";
    let res = "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('13', function (done) {
    let str = "First, caramelise the onions.";
    let res = "First, <span class=\"highlight\">caramelize</span> the onions.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('14', function (done) {
    let str = "I spent the bank holiday at the funfair.";
    let res = "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('15', function (done) {
    let str = "I had a bicky then went to the chippy.";
    let res = "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('16', function (done) {
    let str = "I've just got bits and bobs in my bum bag.";
    let res = "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('17', function (done) {
    let str = "The car boot sale at Boxted Airfield was called off.";
    let res = "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('18', function (done) {
    let str = "Have you met Mrs Kalyani?";
    let res = "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('19', function (done) {
    let str = "Prof Joyner of King's College, London.";
    let res = "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('20', function (done) {
    let str = "Tea time is usually around 4 or 4.30.";
    let res = "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});


  test('21', function (done) {
    let str = "Mangoes are my favorite fruit.";
    let res = "Mangoes are my <span class=\"highlight\">favourite</span> fruit.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('22', function (done) {
    let str = "I ate yogurt for breakfast.";
    let res = "I ate <span class=\"highlight\">yoghurt</span> for breakfast.";
		assert.equal(translate.convertAmericanToBritish(str),res);
    done();
	});

  test('23', function (done) {
    let str = "We watched the footie match for a while.";
    let res = "We watched the <span class=\"highlight\">soccer</span> match for a while.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});

  test('24', function (done) {
    let str = "Paracetamol takes up to an hour to work.";
    let res = "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.";
		assert.equal(translate.convertBritishToAmerican(str),res);
    done();
	});
});
