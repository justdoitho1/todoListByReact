// ES6 문법 정리
/*
1. 유효범위(SCOPE)
var : 함수 단위 스코프
 => for문에서 var 로 i 를 선언할 경우 바깥에서도 i를 사용할 수 있음. 
 그러나  let 으로 선언하면 바깥에서 못 씀. 
 블록은 중괄호 {}. 이 안에서만 쓸 수 있다는 얘기고, 그 외는 불가능. 
let, const : 블록 단위 스코프 

왜 그럼 var 를 이용하지 않나
- 유효 범위가 너무 넓어서. 
- hoisting 때문에. 변수끼리 겹쳐버리기 때문에, 변수 사용이 불편해짐. 
앞에서 정의되지 않은 변수를 사용할 경우 let const는 에러를 뱉을 수 있는데
var는 에러를 뱉지 않음... 


그러나 let, const가 호이스팅이 안 되는 건 아님. 
hoisting : 아래에서 선언한 변수를 위로 끌어올리는 것. hoist : 감아올리기

2. 재할당 가능
var, let : 가능
const : 불가능 

*/

/*
2. 화살표함수

기존 표현방법
 1) 함수선언식
  function add(a,b){}
 2) 함수표현식
 const minus = function(a,b){}

  함수선언식으로 선언할 경우, 호이스팅 시 함수 전체가 따라올라간다. 
  함수가 선언되기 전에 함수를 실행해버리면 함수가 호이스팅될거고, 함수 내용이 
  모두 호이스팅되어 return 까지 스무스하게 나옴
  ex. add(a,b); function add(a,b){};

  함수표현식으로 선언할 경우, 선언은 됐는데 함수가 아니라는 에러가 발생. 함수 전체가 아니라 변수만 호이스팅됨.
  ex. minus(a,b); const minus = function(a,b){};

  화살표함수
  const minus2 =(a, b) => {
    return a-b;
  }

  화살표함수는 아래와 같이 줄여쓸 수 있다.

    const minus2 = (a,b) => a-b;

*/

/*
3. 비구조할당 
변수 선언을 쉽게 하는 문법.
객체, 배열에서 활용 가능. 
 */

const person1 = {
  name: "amy",
  age: 19,
  major: "computer",
};

const locationInfo = {
  country: "Korea",
  city: "Seoul",
};

const subMajor = "Math"; // 변수와 key값이 같으면 그냥 선언해줘도 알아서 key: value 로 들어감

const person2 = { ...person1, age: 24, ...locationInfo, subMajor }; //age의 값이 덮어씌워져서 person2의 age는 24이 될 것

const { name, age, major } = person1;
//const {name} = person1;
//const name = person1.name;

//하나하나 person1.name 식으로 선언하지 않아도 된다.
// 변수와 객체의 key를 일치시킨 뒤 할당하면 알아서 value가 할당된다.

console.log(name);
console.log(age);
console.log(major);

//배열에서 비구조할당 활용
const arr1 = [1, 2, 3, 4];
//const first = arr1[0];
const [first, second] = arr;

/*
4. default parameter
  선언해놓은 함수에 인자가 들어오지 않을 경우 , 디폴트 파라미터 지정 가능
*/
const minus2 = (a, b = 5) => {
  //b가 들어오지 않았을 때 5를 디폴트로
  return a - b;
};

/*5. 템플릿 리터럴
 * 백틱 사용
 */
console.log(`이름은 ${name}입니다.`);

/**
 * 6. 펼침연산자
 * 객체와 배열의 값을 복사해오고 싶을 때.
 */
const arr2 = [...arr1];

/**
 * 원시타입 : numbers, string, boolean, null, undefined
 * 참조타입 : Obj, Array. 재할당 시 배열이 가진 값 자체를 담는 게 아니라, array가 가진 주소를 할당한다.
 * const 로 선언해도, 객체의 값은 변경할 수 있는 이유 : 객체와 배열의 주소를 변경하는 게 아니기 때문에
 *
 *
 * 단,
 * const obj = { array : [1, 2, 3], type : 'm'}
 * const obj2 = {...obj}; 했을 때 안의 array는 주소만 복사된다.
 */

/**
 * 리액트는 왜 사용하나요
 * js , jquery는 id나 클래스로 직접 돔에 접근해서 변화를 줬음
 * 그러나 리액트는 값이 바뀌면 화면도 같이 변화하는 방식으로 개발
 */

//html 파일이 하나인 것을 single page application spa라고 함

//리액트 명령어 모음
// 서버 시작 : npm start
// 빌드파일 생성 : npm run build
// https://gocoder.tistory.com/2190

//리액트를 도와주는 도구들
// webpack : js 파일들을 묶어주는 번들러. 브라우저에는  js 파일을 import 하는 기능이 없어 번들러가 필요
// index.js에서 시작으로 필요한 파일들 불러와서 번들링
// babel : 구버전 브라우저를 위해 최신 문법을 예전 문법으로 벼형
// polyfill : 구버전 브라우저에 없는 함수를 채워줌
