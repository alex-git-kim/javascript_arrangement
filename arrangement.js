// 자바스크립트는 대소문자를 구별하므로 NaN을 NAN, Nan, nan과 같이 표현하면 에러가 발생한다.

// 멀티라인 리터럴 : 
//  일반 문자열 내에서 줄바꿈 등의 공백을 표현하려면 이스케이프 시퀀스를 사용해야 함
//  하지만 템플릿 리터럴(''나 "" 대신 ``(백틱)을 사용함)을 사용하면 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 하용

// 표현식 삽입 :
//  템플릿 리터럴 내에서는 문자열을 연산자 +를 사용해 연결하는 방법 대신 삽입할 표현식을 ${}으로 감싼다.
//  표현식 삽입은 반드시 템플릿 리터럴 내에서 사용해야 한다. 템플릿 리터럴이 아닌 일반 문자열에서의 표현식 삽입은 문자열로 취급된다.

// 변수에 값이 없다는 것을 명시하고 싶을 때는 undefined를 할당하는 것이 아니라 null을 할당한다.

// 함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 한다.
// 예를 들어, HTML 요소를 검색해 반환하는 document.querySelector 메서드는 조건의 부합하는 HTML 요소를 검색할 수 없는 경우 에러 대신 null을 반환한다.

// 심벌 : 주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용

// 데이터 타입이 필요한 이유 :
//  1. 값을 저장할 때 확보해야 하는 메모리 공간의 크리를 결정하기 위해
//  2. 값을 참조할 때 한 번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해
//  3. 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

// 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론(type inference))된다.
// 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
// 이러한 특징을 동적 타이핑(dynamic typing)이라 한다.
// 이러한 언어를 동적 타입(dynamic/weak type) 언어라 한다.

// 변수는 꼭 필요한 경우에 한해 제한적으로 사용한다. 변수의 개수가 많으면 많을수록 오류가 발생할 확률도 높아진다. 따라서 변수의 무분별한 남발은 금물이며, 필요한 만큼 최소한으로 유지하도록 유지해야 한다.
// 변수의 유효 범위(스코프)는 최대한 좁게 만들어 변수의 부작용을 억제해야 한다. 변수의 유효 범위가 넓으면 넓을수폭 변수로 인해 오류가 발생할 확률이 높아진다.
// 전역 변수는 최대한 사용하지 않도록 한다. 전역 변수는 프로그램의 복잡성을 증가시키고 처리 흐름을 추적하기 어렵게 만들고, 오류가 발생할 경우 오류의 원인을 특정하기 어렵게 만든다.
// 변수보다는 상수를 사용해 값의 변경을 억제한다.
// 변수 이름은 변수의 목적이나 의미를 파악할 수 있도록 네이밍한다. 변수 이름뿐 아니라 모든 식별자(변수, 함수, 클래스 이름 등)는 존재 이유를 파악할 수 있는 적절한 이름으로 지어야 한다.

// 컴퓨터가 이해하는 코드는 어떤 바보도 쓸 수 있다. 하지만 훌륭한 프로그래머는 사람이 이해할 수 있는 코드를 쓴다. - Martin Fowler

var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이루어진다.
x++; // x = x + 1;
console.log(x); // 2
// -- 연산자도 마찬가지

// 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다.
// 이때 피연산자를 변경하는 것은 아니고 숫자 타입으로 변환한 값을 생성해서 반환한다. 따라서 부수 효과는 없다.

// + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다. 그 외의 경우는 산술 연산자로 동작한다.

// 문자연 연결 연산자
'1' + 2; // -> '12'
1 + '2'; // -> '12'

// true는 1로 타입이 변환된다.                 -> 암묵적 타입 변환(implicit coercion) or 타입 강제 변환(type coercion)
1 + true; // -> 2

// false는 0으로 타입이 변환된다.              -> 암묵적 타입 변환(implicit coercion) or 타입 강제 변환(type coercion)
1 + false; // -> 1;

// null은 0으로 타입 변환된다.                 -> 암묵적 타입 변환(implicit coercion) or 타입 강제 변환(type coercion)
1 + null; // -> 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN

// 할당문은 값으로 평가되는 표현식인 문으로서 할당된 값으로 평가된다.

// x == y -> x와 y의 값이 같음
// x === y -> x와 y의 값과 타입이 같음
// x != y -> x와 y의 값이 다름
// x !== y -> x와 y의 값과 타입이 다름

// 동등 비교(==) 연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
// 일치 비교(===) 연산자는 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true를 반환한다.

 NaN === NaN // -> false   NaN은 자기 자신과 일치하지 않는 유일한 값이다.

 // 삼항 조건 연산자(ternary operator) : 삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문이다.
 // 조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값
 var result = score >= 60 ? 'pass' : 'fail';
 
 var x = 2;

 // 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
 var result = x % 2 ? '홀수' : '짝수';
 console.log(result); // 짝수

 // 조건에 따라 어떤 값을 결정해야 한다면 삼항 조건 연산자 표현식을 사용하는 편이 유리하지만, 조건에 따라 수행해야 할 문이 하나가 아니라 여러 개라면 if...else문의 가독성이 더 좋다.

 // 논리 연산자(logical operator)
 // || -> 논리합(OR)
 // && -> 논리곱(AND)
 // ! -> 부정(NOT)

// 논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 표현된다.
'Cat' && 'Dog'; // -> 'Dog'

// 드 모르간의 법칙
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)

// typeof 연산자로 null 값을 연산해 보면 "null"이 아닌 "object"를 반환한다는 데 주의하자.
// 따라서 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용하자.
// 또한 선언하지 않은 식별자를 typeof 연산자로 연산해보면 ReferenceError가 발생하지 않고 undefined를 반환한다.
typeof undeclared; // -> undefined

// 할당 연산자(=), 증가/감소 연산자(++/--), delete 연산자는 다른 코드에 영향을 주는 부수 효과가 있다.

// 연산자는 종류가 많기 때문에 연산자 우선순위가 가장 높은 그룹 연산자를 사용하여 우선순위를 명시적으로 조절하는 것을 권장한다.

// 8. 제어문========================================================================================================

// 블록문(block statement/ compound statement) : 0개 이상의 문을 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부르기도 한다.
//  자바스크립트는 블록문을 하나의 실행 단위로 취급한다. 또한 자체 종결성을 갖기 때문에 블록문의 끝에는 세미콜론을 붙이지 않는다.

// 조건문 if...else 문
// 대부분의 if...else 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.
var x = 2;
var result;

if (x % 2) {
    result = '홀수';
} else {
    result = '짝수'
}
console.log(result);
//==========================================
var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result);
//==========================================
var num = 2;

var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind);
// 삼항 조건 연산자는 값으로 평가되는 표현식을 만든다. 따라서 삼함 조건 연산자 ㅍ현식은 값처럼 사용할 수 있기 때문에 변수에 할당할 수 있다.

// 조건문 switch문 : 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮긴다.
// 월을 영어로 변환한다. (11 -> 'November')
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January';
    case 2: monthName = 'Fabruary';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month'
}

console.log(month); // Invalid month
// 위 예제에서 'November'가 아닌 'Invalid month'가 출력된 것은 switch 문의 표현식의 평가 결과와 일치하는 case 문으로 실행 흐름이 이동하여
// 문을 실행한 것은 맞지만 문을 실행 후 switch 문을 탈출하지 않고 switch 문이 끝날 때까지 이후의 모든 case 문과 default 문을 실행했기 때문이다.
// 이를 폴스루(fall Through)라 한다.
// 이러한 현상을 해결하기 위해 case 문에 해당하는 문의 마지막에 break 문을 사용한다.
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January';
        break;
    case 2: monthName = 'Fabruary';
        break;
    case 3: monthName = 'March';
        break;
    case 4: monthName = 'April';
        break;
    case 5: monthName = 'May';
        break;
    case 6: monthName = 'June';
        break;
    case 7: monthName = 'July';
        break;
    case 8: monthName = 'August';
        break;
    case 9: monthName = 'September';
        break;
    case 10: monthName = 'October';
        break;
    case 11: monthName = 'November';
        break;
    case 12: monthName = 'December';
        break;
    default: monthName = 'Invalid month'
}// 이때 default 문은 switch 문의 맨 마지막에 위치하므로 별도로 break 문이 필요 없다.

// break 문을 생략한 폴스루가 유영한 경우의 예
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 좌항과 우항 둘 중 하나라도 'true'이면 29, 아니면 28 / 논리합 연산자(||)
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}

console.log(days);

// 반복문 for 문
//for (변수 선언문 또는 할당문; 조건식; 증감식) {
//    조건식이 참인 경우 반복 실행될 문;    
//}

// 무한루프
// for (;;) {}

// 이중 중첩 for문
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}

// 반복문 while 문 : 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다. 
// for 문은 반복 횟수가 명확할 때 주로 사용하고 while 문은 반복 횟수가 불명확할 때 주로 사용한다.
// while 문은 조건문의 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료한다. 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환하여 논리적 참, 거짓을 구별한다.
var count = 0;

while (count < 3) {
    console.log(count); // 0 1 2
    count++;
}

// 조건식의 평가 결과가 언제나 참이면 무한루프가 된다.
// while (true) {}

// 무한루프에서 탈출하기 위해서는 코드 블록 내에 if 문으로 탈출 조건을 만들고 break 문으로 코드 블록을 탈출한다.
var count = 0;

while (true) {
    console.log(count);
    count++;
    if (count === 3) break;
}

// 반복문 do...while 문 : 코드 블록을 먼저 실행하고 조건식을 평가한다. 따라서 코드 블록은 무조건 한 번 이상 실행된다.
var count = 0;

do {
    console.log(count);
} while (count < 3);

// break 문 : 레이블 문, 반복문, 또는 switch 문의 코드 블록을 탈출한다. 이외의 문에 사용하면 SyntaxError가 발생한다.
// cf) 레이블 문(label statement) : 식별자가 붙은 문
//      ex. foo: console.log('foo');
// 레이블 문은 프로그램의 실행 순서를 제어하는 데 사용한다.
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다
    console.log(2); // 실행되지 않음
}

// 중첩된 for 문의 내부 for 문에서 break 문을 실행하면 내부 for 문을 탈출하여 외부 for 문으로 진입한다.
// 이때 내부 for 문이 아닌 외부 for 문을 탈출하려면 레이블 문을 사용한다.
// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}
// 레이블 문은 중첩된 for 문 외부로 탈출할 때 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다.
// -> 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문

// break 문은 반복문을 더 이상 진행하지 않아도 될 때 불필요한 반복을 회피할 수 있어 유용하다.
var string = 'Hello World.';
var search = 'l';
var index;

for (var i = 0; i < string.length; i++) { // 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
    if (string[i] === search) {
        index = i;
        break; // 반복문을 탈출한다.
    }
}

// continue 문 : 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다. break 문처럼 반복문을 탈출하지 않는다.
var string = 'Hello World.';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] !== search) continue;
    count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count);
//==================================
var string = 'Hello World.';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (srting[i] === search) count++;
}
// 위와 같이 if 문 내에서 실행해야 할 코드가 한 줄이라면 continue 문을 사용했을 때보다 간편하고 가독성도 좋다.
// 하지만 if 문 내에서 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue 문을 사용하는 편이 가독성이 더 좋다.

// 9. 타입 변환과 단축 평가=======================================================================================================

// 명시적 타입 변환(explicit coercion)/타입 캐스팅(type casting) : 개발자의 의도에 따라 값의 타입을 변환하는 것
var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

// 암묵적 타입 변환(implicit coercion)/타입 강제 변환(type coercion) : 개발자의 의도와 상관없이 표현식을 평가하는 도중에 암묵적으로 타입이 변한되는 것
var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + '';
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

// 원시 값은 변경 불가능한 값(immutable value)이므로 변경할 수 없다.
// 자바스크립트 엔진은 표현식을 에러 없이 평가하기 위해 피연산자의 값을 암묵적 타입 변환해 새로운 타입의 값을 만들어 단 한 번 사용하고 버린다.
// 만약 타입 변환 결과를 예측하지 못하거나 예측이 결과와 일치하지 않는다면 오류를 생산할 가능성이 높아진다.

// 피연산자가 모두 문자열 타입이어야 하는 문맥
'10' + 2 // -> '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10' // -> 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0 // -> true
if (1) {}

// 심벌 타입을 문자열 타입으로 암묵적 타입 변환을 수행할 때
(Symbol()) + '' // -> TypeError : Cannot convert a Symbol value to a string

// 객체 타입을 문자열 타입으로 암묵적 타입 변환을 수행할 때
({}) + ''           // -> "[object object]"
Math + ''           // -> "[object Math]"
([]) + ''           // -> ""
[10, 20] + ''       // -> "10, 20"
(function(){}) + '' // -> "function(){}"
Array + ''          // -> "function Array() { [native code] }"

// 심벌 타입을 숫자 타입으로 암묵적 타입 변환을 수행할 때
+Symbol() // -> TypeError: Cannot convert a Symbol value to a nunmber

// 객체 타입을 숫자 타입으로 암묵적 타입 변환을 수행할 때
+{}             // -> NaN
+[]             // -> 0
+[10, 20]       // -> NaN
+(function(){}) // -> NaN

// undefined 타입을 숫자 타입으로 암묵적 타입 변환을 수행할 때
+undefined // -> NaN

// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy(참으로 평가되는 값) 또는 Falsy(거짓으로 평가되는 값)으로 구분한다.

// Q) 왜 {}와 []는 Truthy 값인가?
// -> {}와 []를 숫자 타입으로 암묵적 타입 변환한 후 이를 다시 불리언 타입으로 변환하면 false라는 결과가 나오겠지만
//    컴퓨터는 객체에서 숫자로 숫자에서 불리언으로 변환한 후 판단하지않기 때문에 {}와 []를 숫자 타입 변환한 결과가 NaN과 0이라고
//    {}와 []를 falsy value라고 생각하면 안된다.

// 문자열 타입으로 명시적 타입 변환
// 1) String 생성자 함수를 new 연산자 없이 호출하는 방법
String(1); // -> "1"
// 2) Object.prototype.toString 메서드를 사용하는 방법
(NaN).toString(); // -> "NaN"
// 3) 문자열 연결 연산자를 이용하는 방법
true + ""; // -> "true"

// 숫자 타입으로 명시적 타입 변환
// 1) Number 생성자 함수를 new 연산자 없이 호출하는 방법
Number('0'); // -> 0
// 2) parseInt, parseFloat 함수를 이용하는 방법(문자열만 변환 가능)
parseInt('1'); // -> 1
// 3) + 단항 산술 연산자를 이용하는 방법
+'1.53'; // -> 1.53

// 불리언 타입으로 명시적 타입 변환
// 1) Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
Boolean('x'); // -> true
// 2) ! 부정 논리 연산자를 두 번 사용하는 방법
!!undefined; // -> false

// 논리 연산자를 사용한 단축 평가
// 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다. 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
'Cat' && 'Dog' // -> 'Dog'
// 위 예제에서 알 수 있듯이 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피여난자, 즉 문자열 'Dog'를 그대로 반환한다.
'Cat' || 'Dog' // -> 'Cat'
// 위 예제에서 알 수 있듯이 논리합 연산자는 논리 연산의 결과를 결정한 첫 번째 피연산자, 즉 문자열 'Cat'을 그대로 반환한다.
// 이처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 변환한다. 이를 단축 평가(short-circuit evaluation)라 한다.

var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';

// 위 if 문은 단축 평가로 대체 가능하다.
message && '완료';
console.log(message); // 완료
//================================================
var done = false;
var message = '';

// 주어진 조건이 false일 때
if (!done) message = '미완료';

// 위 if 문은 단축 평가로 대체 가능하다.
message || '미완료';
console.log(message); // 미완료

// 객체를 가르키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null
// 이때 단축 평가를 사용하면 에러를 발생시키지 않는다.
var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; // -> null

// 함수 매개변수에 기본값을 설정할 때
// 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.
// 단축 평가를 사용한 매개변수의 기본값을 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength(); // -> 0
getStringLength('hi'); // -> 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

getStringLength(); // -> 0
getStringLength('hi'); // -> 2

// 옵셔널 체이닝 연산자(?.)
var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // undefined

// 옵셔널 체이닝 연산자 ?.는 좌항 피연산자가 false로 평가되는 falsy 값이라도 null 또는 undefined가 아니면 우항 프로퍼티 참조를 이어간다.
var str = '';

var length = str?.length;
console.log(length); // 0

// null 병합 연산자(??) : 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
// 변수에 기본값을 설정할 때 유용
var foo = null ?? 'default string';
console.log(foo); // "defualt string"

// 단축 평가를 이용한 기본값 설정 시 Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || "default string";
console.log(foo); // "default string"
//============================================
// null 병합 연산자 ??는 좌항의 피연산자가 false로 평가되는 Falsy value라도 null 또는 undefined가 아니면 좌항의 프로퍼티 참조를 이어간다.
var foo = '' ?? "default string";
console.log(foo); // ""

// 10. 객체 리터럴==================================================================================================================

// 객체 타입(object/reference type) : 다양한 타입의 값(원시 값 또는 다른 객체)을 하나의 단위로 구성한 복합적인 자료구조(data structure)
//                                   원시 값은 변경 불가능한 값(immutable value)이지만 객체는 변경 가능한 값(mutable value)이다.
// 프로퍼티 : 객체의 상태를 나타내는 값(data)
// 메서드 : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
// 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드(method)라 부른다.

// 객체 리터럴
var person = {
    name: 'Kim',
    sayHello: function () {
        console.log(`Hello! my name is ${this.name}.`);
    }
};

console.log(typeof person); // object
console.log(person); // {name: "Kim", sayHello: f}
//=================================================
var empty = {} // 빈 객체
console.log(typeof empty); // object

// 객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다는 데 주위하자.
// 하지만 객체 리터럴은 값으로 평가되는 표현식이므로 객체 리터럴의 닫는 중괄호 뒤에는 세미콜론을 붙인다.

// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
// 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값

// 프로퍼티 키는 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다.
var person = {
    firstName = 'yeong-suk'
//  last-name = 'Kim' // SyntaxError: Unexpected token =
};

// 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다. 이 경우 프로퍼티 키로 사용할 표현식을 대괄호로 묶어야 한다.
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world'};

console.log(obj); // {hello: "world"}

// 메서드(method)
var circle = {
    radius= 5,
    getDiameter: function () {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter()); // 10

// 프로퍼티 접근 방법
// 1) 마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법(dot notation)
// 2) 대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법(bracket notation)
var person = {
    name: 'Kim'
};

// 마침표 표기번
console.log(person.name);
// 대괄호 표기법
console.log(person['name']);
// 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.
console.log(person[name]); // ReferenceError: name is not defined

// 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다. ReferenceError가 발생하지 않는데 주의하자.

// ES6에서 추가된 객체 리터럴의 확장 기능(프로퍼티 키 생략(property shorthand))
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // {x: 1, y: 2}

// 계산된 프로퍼티 이름(computed property name)
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
//================================================================
// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 메서드 축약 표현
// ES6
var obj = {
    name: 'kim',
    //메서드 축약 표현
    sayHI() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi(); // Hi! kim

// 11. 원시 값과 객체의 비교==========================================================================================================

// 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실제 값이 저장된다. 이에 비해 객체를 변수에 할당하면 변수에는 참조 값이 저장된다.
// 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. 이를 값에 의한 전달(pass by value)이라 한다.
// 이에 비해 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. 이를 참조에 의한 전달(pass by reference)이라 한다.

// 원시 값이 변경 불가능하다는 것은 변수가 아니라 값에 대한 진술이다.
// 따라서 변수는 재할당을 통해 언제든지 변수 값을 변경(엄밀히 말하자면 교체)할 수 있다.

// 변수의 반대 개념인 상수는 재할당이 금지된 변수일 뿐이다.

// 불변성을 갖는 원시 값을 할당한 변수는 재할당 이외에 변수 값을 변경할 수 있는 방법이 없다.

var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
str[0];

console.log(str); // string

var score = 80;
var copy = score;
// "값에 의한 전달"은 사실은 값을 전달하는 것이 아니라 메모리 주소를 전달한다. 단, 전달된 메모리 주소를 통해 메모리 공간에 접근하면 값을 참조할 수 있다.
// 결국은 두 변수의 원시 값은 서로 다른 메모리 공간에 저장된 별개의 값이 되어 어느 한쪽에서 재할당을 통해 값을 변경하더라도 서로 간섭할 수 없다.

// 객체의 프로퍼티는 개수가 정해져 있지 않고, 동적으로 추가되거나 삭제할 수 있으며 값에도 제약이 없다.
// 따라서 객체는 원시 값과 같이 확보해야 할 메모리 공간의 크기를 사전에 정해둘 수 없다.

// 객체를 할당한 변수를 참조하면 메모리에 저장되어 있는 참조 값을 통해 실제 객체에 접근한다.

// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
var person = {
    name: 'Kim'
};

// person 변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다.
console.log(person); // {name: "Kim"}

// 객체는 재할당 없이 프로퍼티를 동적으로 추가할 수도 있고 프로퍼티 값을 갱신할 수도 있으며 프로퍼티 자체를 삭제할 수도 있다.
var person = {
    name: 'Kim'
};

// 프로퍼티 값 갱신
person.name = 'Lee';

// 프로퍼티 동적 생성
person.address = 'Seoul';

console.log(person); // {name: "Lee", address: "Seoul"}

// 얕은 복사(shallow copy)와 깊은 복사(deep copy)
// 얕은 복사의 경우에 여러 개의 식별자가 하나의 객체를 공유할 수 있다는 점에서 부작용이 있다.

const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o); // false
console.log(c1.x === o.x); // true
// 얕은 복사로 생성된 복사본은 중첩되어있는 객체를 복사하지 않기 때문에 c1.x === o.x이다.
// 이는 두 개의 식별자가 하나의 객체를 공유한다는 것을 의미하는데 이로 인해 원본 또는 사본 중 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.


const _ = require('lodash');
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false
// 깊은 복사로 생성된 복사본은 중첩되어있는 객체까지 복사했기 때문에 c2.x !== o.x이다.

// "값에 의한 전달"과 "참조에 의한 전달"은 식별자가 기억하는 메모리 공간에 저장되어 있는 값을 복사해서 전달한다는 면에서 동일하다.
// 따라서 자바스크립트에는 "참조에 의한 전달"은 존재하지 않고 "값에 의한 전달"만이 존재한다고 볼 수 있다.

var person1 = {
    name: 'Lee'
};

var person2 = {
    name: 'Lee'
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true
// 객체 리터럴은 평가될 때마다 객체를 생성하므로 person1 변수와 person2 변수가 가리키는 객체는 다른 메모리에 저장된 별개의 객체
// 하지만 person1.name과 person2.name은 값으로 평가될 수 있는 표현식으로 모두 원시 값 'Lee'로 평가된다. 따라서 true

// 12. 함수=============================================================================================================================

function add(x, y) {
    return x + y;
}

add(2, 5); // 7
// 매개변수(parameter): 함수 내부로 입력을 전달받는 변수 -> x, y
// 인수(argument): 입력 -> 2, 5
// 반환값(return value): 출력 -> x + y

// 함수 호출(function call/invoke); 인수(argument)를 매개변수를 통해 함수에 전달하면서 함수의 실행을 명시적으로 지시하는 것

// 코드의 중복을 억제하고 재사용성을 높이는 함수는 유지보수의 편의성을 높이고 실수를 줄여 코드의 신회성을 높이는 효과가 있다.

// 함수 리터럴도 평가되어 값을 생성하며, 이 값은 객체다. 즉, 함수는 객체다.
// 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 표현식
var add = function (x, y) {
    return x + y;
}

// Function 생성자 함수
var add = new Function('x', 'y', 'return x + y');

// 화살표 함수(ES6)
var add = (x, y) => x + y;

// 함수 선언문은 함수 이름을 생략할 수 없다.
// function (x, y) {return x + y;} -> SyntaxError: Function statements require a function name
// 함수 선언문은 표현식이 아닌 문이다. 만약 표현식인 문이라면 완료 값 undefined 대신 표현식이 평가되어 생성된 함수가 출력되어야 한다.

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() { console.log('bar'); })
bar(); //ReferenceError: bar is not defined
// 그룹 연산자 () 내에 있는 함수 리터럴(bar)은 함수 선언문으로 해석되지 않고 함수 리터럴 표현식으로 해석된다.
// 그룹 연산자의 피연산자는 값으로 평가될 수 있는 표현식이어야 한다. 따라서 표현식이 아닌 문인 함수 선언문은 피연산자로 사용할 수 없다.
