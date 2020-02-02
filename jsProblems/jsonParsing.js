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
  */

  const REGEX_LIST = {
    'array':/^\[|\]$/g,
    'dict':/^\{|\}$/g,
    'string':/^\"|\"$/g,
    'primitive':/.*/,
  }

  const ERROR_LIST = [
    /^\[.*(?!\])$/,
    /^(?!\[).*\]$/,
    /\\$/g,
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

    // debugger;
    let tempArrList = trimSpaces(tempJSON.replace(/"/g, '').replace(REGEX_LIST['array'], '')).split(',');
    // let tempArrList = trimSpaces(tempJSON).replace(REGEX_LIST['array'], '').replace(/"/g, '').split(',');

    for (let i=0;i<tempArrList.length;i++){
      let elCurrent = tempArrList[i];
      elCurrent = changeValue(elCurrent);
      resultArr.push(elCurrent);
    }

    return resultArr;
  }

  // Runs when dictionary, returns dictionary object
  function whenDict(tempJSON=jsonObj){
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

    if (/^\{\}$/g.tempJSON){
      return {};
    };

    let resultDict = {};

    // Finding the key:value pairs
    let keyValuePairsList = [];
    let counter = 0;
    for (let i=0;i<tempJSON.length;i++){
      let char = tempJSON[char];

      if (char === '{' | char === '['){
        counter += 1;
      } else if (char === '}' | char === ']'){
        counter -= 1;
      }

      if (counter === 0, char === ','){
        keyValuePairsList.push(i);
      }

    }



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
  debugger;
  return needToRun()
};
