/**
 * 이 문제는 많이 어렵습니다. Bare minimum requirements에 해당하지 않으니,
 * 더욱 깊게 공부하고 싶으신 분들만 풀어도 좋습니다.
 *
 * 1. spec/fixtures.js를 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 parse해 주어야할지 생각해 보세요.
 *
 * 2. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
 *  const parseJSON = JSON.parse;
 *
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?
 */
function parseJSON(jsonObj) {
  /* Strings to parse
  '[]',
  '{"foo": ""}',
  '{}',
  '{"foo": "bar"}',
  '["one", "two"]',
  '{"a": "b", "c": "d"}',
  '[null,false,true]',
  '{"foo": true, "bar": false, "baz": null}',
  '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
  '{"boolean, true": true, "boolean, false": false, "null": null }',

  // basic nesting
  '{"a":{"b":"c"}}',
  '{"a":["b", "c"]}',
  '[{"a":"b"}, {"c":"d"}]',
  '{"a":[],"c": {}, "b": true}',
  '[[[["foo"]]]]',

  // escaping
  '["\\\\\\"\\"a\\""]',
  '["and you can\'t escape thi\s"]'


  '["foo", "bar"',
  '["foo", "bar\\"]'


  */

  const REGEX_LIST = {
    'array' : /^\s*\[|\]\s*$/g,
    'dict' : /^\s*\{|\}\s*$/g,
    'string' : /^\"|\"$/g,
    'primitive' : /.*/,
  }

  const ERROR_LIST = [
    /^\s*\[.*[^\]]\s*$/,
    /^\s*[^\[].*\]\s*$/,
    /^(?!\[).*\]$/,
    // /\\/g,
  ]

  // Gets type : array, dict, string, primitive (default)
  function getType(tempJSON=jsonObj){
    /* Types
     - array * when array, using split leaves them with quotation marks still (needs unstringed)
     - dictionary
     - string ????
    */
    for (let type in REGEX_LIST){
      if (REGEX_LIST[type].test(tempJSON)) {
        return type;
      }
    }
  };

  function isEscapable(word){
    let testStr = String(word);

    try {
      console.log(c);
    }
    catch(error){
      return undefined
    }

    return null;
  }

  // Checks if unparseableStrings
  function isParseable(testJSON){
    for (let i=0;i<ERROR_LIST.length;i++){
      let happy = ERROR_LIST[i].test(testJSON)
      if (happy){
        throw new SyntaxError;
      }
    }
  }

  function trimSpaces(rawStr){
    return rawStr.replace(/\s/g, '');
  }

  function changeValue(tempVal){
    if (typeof tempVal === 'function'){
      throw new SyntaxError;
    } else if (tempVal === 'null'){
      return null;
    } else if (tempVal === 'undefined'){
      return undefined;
    } else if (tempVal === 'true'){
      return true;
    } else if (tempVal === 'false'){
      return false;
    } else if (!Number.isNaN(Number(tempVal))){
      return Number(tempVal);
    } else {
      return tempVal.replace(REGEX_LIST['string'], '');
    }
  }

  // Runs when array, returns array object
  function whenArray(tempJSON=jsonObj){
    // debugger;
    let resultArr = [];

    // Return if empty array
    if (/^\[\]$/g.test(tempJSON)){
      return [];
    }

    isParseable(tempJSON)
    // if (isEscapable(tempJSON)===undefined){
    //   return undefined;
    // }

    let tempArrStr = tempJSON.replace(REGEX_LIST['array'], '');
    // let tempArrList = trimSpaces(tempJSON).replace(REGEX_LIST['array'], '').replace(/"/g, '').split(',');
    let tempWord = '', counter =0;
    for (let i=0;i<tempArrStr.length;i++){
      // debugger;

      let currentChar = tempArrStr[i];

      if (currentChar === '{' || currentChar === '['){
        counter += 1;
      } else if (currentChar === '}' || currentChar === ']'){
        counter -= 1;
      }

      if (counter === 0){
        if (/^\,\s*"/.test(tempArrStr.slice(i)) || i === tempArrStr.length -1){

          if (i === tempArrStr.length-1){
            tempWord += currentChar;
          }

          tempWord = tempWord.replace(/\s+$/, '')
          tempWord = tempWord.replace(/^\s+/, '')

          for (let i=0;i<tempWord.length;i++){
            // debugger;
            if (/\\{2,}/g.test(tempWord)){
              tempWord = tempWord.replace(/(\\(?!\\))/g, '')
            }
          }

          let elType = getType(tempWord);

          if (elType === 'array'){
            tempWord = whenArray(tempWord)
            resultArr.push(tempWord)
          } else if (elType === 'dict'){
            tempWord = whenDict(tempWord);
            resultArr.push(tempWord);
          } else {
            // debugger;
            tempWord = changeValue(tempWord);
            if (/\\\s*$/.test(tempWord)){
              throw new SyntaxError;
            }
            resultArr.push(tempWord);
          }


          tempWord = '';
        } else if (/^\,\s*/.test(tempArrStr.slice(i)) || i === tempArrStr.length -1){
          let checkValuesArr = ['null', 'undefined', 'true', 'false'];

          let temp = tempWord.replace(/\s+$/, '');
          temp = temp.replace(/^\s+/, '');
          let tempType = getType(temp);

          if (checkValuesArr.some(val=>val===temp)){
            tempWord = changeValue(temp);
            resultArr.push(tempWord);

            tempWord = ''
          } else if (!isNaN(parseFloat(tempWord))){
            tempWord = changeValue(temp);
            resultArr.push(tempWord);

            tempWord = ''
          } else if (tempType === 'array'){
            tempWord = whenArray(tempWord)
            resultArr.push(tempWord)

            tempWord = ''
          } else if (tempType === 'dict'){
            tempWord = whenDict(tempWord);
            resultArr.push(tempWord);

            tempWord = ''
          }


        } else {
          tempWord += currentChar;
        }
        } else {
          tempWord += currentChar;
        }



    }

    return resultArr;
  }


  // Runs when dictionary, returns dictionary object
  function whenDict(tempJSON=jsonObj){
    // ;
    /* Methods
      Retrieve character by character of the dictJSON
      save until ':' as key
      checks first char of value:
        - if first char is '{' or '[' recognizes that value is dict or arr
        - if not, will save all within quotation marks using regex

        if first character is '{' or '[':
          recognizes it's nested
    */
    isParseable(tempJSON);
    isEscapable(tempJSON);

    if (/^\{\}$/g.test(tempJSON)){
      return {};
    };

    // Finding the key:value pairs
    let jsonDict = tempJSON.replace(/^\s*\{|\}\s*$/g, '');
    let isKey = true;

    let resultDict = {}, keyValuePair = Array(2), tempWord = '', counter = 0;
    let startKey = false; startValue = false;
    for (var i=0;i<jsonDict.length;i++){
      // debugger;
      // When taking a key word

      if (isKey){
        if (jsonDict[i] === '"'){
          startKey = !startKey;
        }

        if (startKey){
          if (jsonDict[i] !== ':'){
            // Storing up to ':'
            tempWord += jsonDict[i]
            continue;
          } else {
            keyValuePair[0] = changeValue(tempWord)
            tempWord = '';
            isKey = false;
          }
        } else if (jsonDict[i] === '"'){
          tempWord += jsonDict[i];
          keyValuePair[0] = changeValue(tempWord)
          tempWord = '';
          isKey = false;
        }
      } else {

        if (jsonDict[i] === '{' || jsonDict[i] === '['){
          startValue = true;
          counter += 1;
        } else if (jsonDict[i] === '}' || jsonDict[i] === ']'){
          counter -= 1;
        }
        if (counter === 0){
          if (jsonDict[i] !== ' ' & jsonDict[i] !== ':' && !startValue){
            startValue = true
          }
        }

        if (startValue){
          // When taking value
          // Check for array or dict
          if (jsonDict[i-1] === ':' && jsonDict[i] === ' '){
            continue;
          }

          if (counter === 0){
            if (/^\,\s*"/.test(jsonDict.slice(i+1)) || /^\s*$/.test(jsonDict.slice(i+1))){

              if (jsonDict[i] !== ','){
                tempWord += jsonDict[i];

              }

              let valType = getType(tempWord);

              if (valType === 'array'){
                keyValuePair[1] = whenArray(tempWord);
                tempWord = '';
                // isKey = true;

                resultDict[keyValuePair[0]] = keyValuePair[1];
              } else if (valType === 'dict'){
                keyValuePair[1] = whenDict(tempWord)
                tempWord = '';
                // isKey = true;

                resultDict[keyValuePair[0]] = keyValuePair[1];
              } else {
                keyValuePair[1] = changeValue(tempWord);
                tempWord = '';


                resultDict[keyValuePair[0]] = keyValuePair[1];
              }

              startValue = false;
              isKey = true;
            } else {
              tempWord += jsonDict[i]
            }
          } else {
            tempWord += jsonDict[i]
          }

        } // End if statement for startvalue


      } // End else for if value
    }
    return resultDict;
  }

  // Checks array | dict and returns in the same format
  function needToRun(){
    let jsonType = getType(jsonObj);
    let resultObj;

    switch(jsonType){
      case 'array':
        resultObj = whenArray();
        break;
      case 'dict':
        resultObj = whenDict();
        break;
    }

    return resultObj;
  }
  // debugger;
  return needToRun()
};
