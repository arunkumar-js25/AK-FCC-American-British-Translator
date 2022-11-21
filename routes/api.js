'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log(req.body.text);
      let text = req.body.text;
      let locale = req.body.locale;
  
      if(text == undefined || locale == undefined){
        return res.json({ error: 'Required field(s) missing' });
      }
      
      if(text == ""){
        return res.json({ error: 'No text to translate' });
      }

      text = translator.removeSpaces(text);
      
      if(locale != "american-to-british" && locale != "british-to-american")
      {
        return res.json({ error: 'Invalid value for locale field' });
      }
      else if(locale == "american-to-british"){
        text = translator.convertAmericanToBritish(text);
      }
      else{
        text = translator.convertBritishToAmerican(text);
      }

      //Capitalize
      text = text[0].toUpperCase() + text.substring(1,text.length);
      //console.log(text);
      if(text == req.body.text){
        res.json({text: req.body.text, translation:"Everything looks good to me!"});
      }
      else{
        res.json({text: req.body.text, translation:text});
      }
      
    });
};
