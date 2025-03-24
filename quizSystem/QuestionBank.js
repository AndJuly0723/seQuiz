//  QuestionBank 동적메서드 :
//  1️⃣ loadQuestions(filePath)  ➝ CSV 파일에서 문제를 불러오기
//  2️⃣ getRandomSubset(array, count) ➝ 배열에서 무작위 문제 섞기
//  3️⃣ getRandomQuestions()  ➝ 수도 문제 5개 + 일반 문제 15개 랜덤 선택
//  4️⃣ formatQuestion(questionObj, index)  ➝ 문제를 보기 좋은 형식으로 변환

const fs = require("fs"); // 파일 시스템 모듈(파일 읽기/쓰기)
const path = require("path"); // 파일 경로를 다루는 모듈
const Papa = require("papaparse"); // CSV 파일을 JavaScript 객체로 변환하는 라이브러리

class QuestionBank {
  constructor(filePath) {
    // 클래스가 생성될 때 filePath (CSV 파일 경로)를 받아서 this.questions에 문제 데이터를 저장함
    this.questions = []; // 문제 데이터를 저장할 배열
    this.loadQuestions(filePath); // 파일에서 문제를 불러오는 함수 실행
  }

  // 파일에서 문제 읽어오기
  loadQuestions(filePath) {
    const questionsPath = path.resolve(filePath); // 주어진 경로를 절대경로로 변환
    const fileContent = fs.readFileSync(questionsPath, "utf-8"); // CSV 파일 읽기(파일내용은 문자열로 읽어옴)    // fs.readFileSync() : Node.js의 fs(파일 시스템) 모듈에서 제공하는 동기적 파일 읽기 함수
    const parsedData = Papa.parse(fileContent, { header: true }).data; // CSV를 객체 배열로 변환
    this.questions = parsedData.filter((q) => q.문제); // 문제만(빈 값이 아닌 행) 필터링
  }

  // 특정 개수만큼 랜덤 문제 가져오는 함수
  getRandomSubset(array, count) {
    return array.sort(() => Math.random() - 0.5).slice(0, count); // 배열을 랜덤하게 섞고 count개수만큼 잘라서 반환
  }

  // 랜덤 문제 가져오기 (수도 문제 5개 포함)
  getRandomQuestions() {
    const capitalQuestions = this.questions.filter((q) => {
      const questionNum = parseInt(q["NO."], 10);
      return questionNum >= 201 && questionNum <= 250; // NO. 열 값이 201~250 범위인 문제(수도문제)만 필터링
    });

    const generalQuestions = this.questions.filter((q) => {
      const questionNum = parseInt(q["NO."], 10);
      return questionNum < 201; // NO. 열 값이 200 이하인 문제(일반문제)만 필터링
    });

    const selectedCapitalQuestions = this.getRandomSubset(capitalQuestions, 5); // 수도 문제에서 5개 랜덤선택
    const selectedGeneralQuestions = this.getRandomSubset(generalQuestions, 15); // 일반 문제에서 15개 랜덤선택

    return [...selectedCapitalQuestions, ...selectedGeneralQuestions]; // 총 20문제 반환
  }
}

module.exports = QuestionBank; // 다른 파일에서 require("./QuestionBank") 하면 QuestionBank 클래스를 사용할 수 있음
