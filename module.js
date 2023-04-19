let basicData = {
  subject: ["피카츄", "라이츄", "파이리", "꼬부기"],
  object: ["사과", "바나나", "포도", "딸기"],
  verb: ["먹었다.", "먹는다.", "먹을 것이다.", "먹을 것인가?", 1],
};

class sentenceGenerator {
  constructor(data) {
    //생성자 함수로부터 열려있는 매개변수 data가 객체인지 확인합니다.
    if (typeof data !== "object" || Array.isArray(data)) {
      throw new Error("데이터는 객체여야 합니다.");
    }
    //_data 객체를 초기화합니다.
    //빈 객체를 생성했으므로 위의 매개변수 data 와는 무관한 프로퍼티입니다.
    this._data = {};

    //아래의 setter를 사용하여
    //subject, object, verb를 검증하고 설정합니다.
    //여기에서는 언더바가 없는(숨기지 않은, 은닉화되지 않은) 매개변수로 들어온 객체를 말합니다.
    this.subject = data.subject;
    this.object = data.object;
    this.verb = data.verb;
  }
  //subject, object, verb 속성에 대한 setter를 정의합니다.
  //setter는 구성될 매개변수 하나하나에 모두 setter 기능을 하는 메서드를 정의한 것이
  //제법 번거롭지만, 의외의 데이터가 할당되는 것을 방지하기에, 버릇을 들이는 것이 중요합니다..
  set subject(subject) {
    this._data.subject = this._validateType(subject);
  }
  set object(object) {
    this._data.object = this._validateType(object);
  }
  set verb(verb) {
    this._data.verb = this._validateType(verb);
  }

  //값이 문자열인지 확인하는 은닉화된(숨겨진)helper method 입니다.
  //유틸리티 메서드라고도 부릅니다.
  //클래스가 호출될때 이것을 일반 메서드 처럼 사용할 수 없습니다.
  _validateType(value) {
    //값이 문자열이 아닌 경우 에러를 발생시킵니다.
    if (typeof value !== "string") {
      throw new Error(`값 ${value}은(는) 문자열이 아닙니다.`);
    }
    //값이 문자열인 경우 값을 반환합니다.
    return value;
    //결과적으로 위의 setter에서 확인해야할 타입검사를 헬퍼메서드가 대신해주는 형태입니다.
  }

  //임의의 subject, object, verb를 사용하여 문장을 생성하는 메서드입니다.
  generate() {
    // _data 객체에서 subject, object, verb를 추출합니다.
    //_data 속 객체 값은 setter를 통해 검증되었으므로,
    //'안정성'이 보장되었다고 할 수 있으며 generate 메서드는 외부에서 사용하기 위한 메서드입니다.

    //아래의 특이한 작성 방식은 객체 구조 분해 할당(옛날말로 비구조화 할당 )이라고 합니다.
    //객체가 크면클수록, 원하는 값이 깊숙이 들어있다면 구조분해할당이 매우 유용합니다.
    //destructuring assignment 라고 부릅니다.
    const { subject, object, verb } = this._data;

    //subject, object, verb 중에서 임의의 인덱스를 선택합니다.
    const subjectIndex = Math.floor(Math.random() * subject.length);
    const objectIndex = Math.floor(Math.random() * object.length);
    const verbIndex = Math.floor(Math.random() * verb.length);

    //선택된 subject, object, verb를 사용하여 문장을 생성합니다.
    const sentence = `${subject[subjectIndex]} ${verb[verbIndex]} ${object[objectIndex]}`;

    //문장을 반환합니다.
    return sentence;
  }
}

//basicData 객체를 사용하여 SentenceGenerator 클래스의 새 인스턴스를 생성합니다.
const sentenceGenerator1 = new sentenceGenerator(basicData);
console.log(sentenceGenerator1.generate());
