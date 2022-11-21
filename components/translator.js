const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  //Remove Extra spaces from input string
  removeSpaces(text){
    return text.replace(/\s+/g, " ");
  }

  compareAsc(str1,str2){
    return str1.length-str2.length;
  }
  compareDesc(str1,str2){
    return str2.length-str1.length;
  }
  
  convertBritishToAmerican(text){
    //britishOnly
    let data = Object.keys(britishOnly).map(function (key) { 
      let textLower = text.match(new RegExp(key, "gi"));
       for(let i=0;textLower != null && i<textLower.length
           && !(new RegExp(".*<span.*"+textLower[i]+".*span>.*","i").test(text))
                ;i++){
            text = text.replace(textLower[i],"<span class=\"highlight\">"+britishOnly[key]+"</span>");
       }
    });

    //British to american Spelling
    let valuesList = Object.values(americanToBritishSpelling);
    let keysList =  Object.keys(americanToBritishSpelling);
    data = valuesList.map(function (value,i) { 
            text = text.replace(value,"<span class=\"highlight\">"+keysList[i]+"</span>");
          });
    
    //British to american Titles
    let valuesTitlesList = Object.values(americanToBritishTitles);
    let keysTitlesList =  Object.keys(americanToBritishTitles);
    data = valuesTitlesList.map(function (value,index) { 
            let textLower = text.match(new RegExp(value, "gi"));
            for(let i=0;textLower != null && i<textLower.length 
                && !(new RegExp(".*<span.*"+textLower[i]+".*span>.*","i").test(text))
                ;i++){
              let newWord = keysTitlesList[index];
              newWord = newWord[0].toUpperCase() + newWord.substring(1,newWord.length);
              text = text.replace(textLower[i],"<span class=\"highlight\">"+newWord+"</span>");
              break;
            }
            
          });

    //timeStamp
    let textLower = text.match(new RegExp("\\d+(:|\\.)\\d+", "g"));
    for(let i=0;textLower != null && i<textLower.length;i++){
      let newWord =textLower[i];
      if(newWord.indexOf(".") >= 0){
        newWord = newWord.replace(".",":");
      }
      text = text.replace(textLower[i],"<span class=\"highlight\">"+newWord+"</span>");
    }
    
    return text;
  }

  convertAmericanToBritish(text){
    //americanOnly
    let data = Object.keys(americanOnly).map(function (key) { 
        let textLower = text.match(new RegExp(key, "gi"));
       for(let i=0;textLower != null && i<textLower.length
           && !(new RegExp(".*<span.*"+textLower[i]+".*span>.*","i").test(text))
                ;i++){
            text = text.replace(textLower[i],"<span class=\"highlight\">"+americanOnly[key]+"</span>");
       }
    });

    //american to British Spelling
    data = Object.keys(americanToBritishSpelling).map(function (key) { 
            text = text.replace(key,"<span class=\"highlight\">"+americanToBritishSpelling[key]+"</span>");
          });

    //american to British Titles
    data = Object.keys(americanToBritishTitles).map(function (key,index) { 
          let textLower = text.match(new RegExp(key, "gi"));
          for(let i=0;textLower != null && i<textLower.length
              && !(new RegExp(".*<span.*"+textLower[i]+".*span>.*","i").test(text))
                ;i++){
            let newWord = americanToBritishTitles[key];
              newWord = newWord[0].toUpperCase() + newWord.substring(1,newWord.length);
            text = text.replace(textLower[i],"<span class=\"highlight\">"+newWord+"</span>");
          }
          });

    //timeStamp
    let textLower = text.match(new RegExp("\\d+:\\d+", "g"));
    for(let i=0;textLower != null && i<textLower.length;i++){
      let newWord = textLower[i].replace(":",".");
      text = text.replace(textLower[i],"<span class=\"highlight\">"+newWord+"</span>");
    }
    
    return text;
  }
}

module.exports = Translator;