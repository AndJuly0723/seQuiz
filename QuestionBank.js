const fs = require("fs");
const path = require("path");
const readline = require("readline"); // 사용자 입력 모듈
const Papa = require("papaparse"); // CSV 파싱 라이브러리

// QuestionBank 클래스 정의
class QuestionBank {
    constructor(filePath) {
        this.questions = [];
        this.loadQuestions(filePath);
    }

    // 파일에서 문제 읽어오는 메서드
    loadQuestions(filePath) {
        const questionsPath = path.resolve(filePath);
        const fileContent = fs.readFileSync(questionsPath, "utf-8");
        const parsedData = Papa.parse(fileContent, { header: true }).data;
        this.questions = parsedData.filter(q => q.문제);
    }

    // 특정 개수만큼 랜덤하게 문제 선택하는 함수
    getRandomSubset(array, count) {
        return array.sort(() => Math.random() - 0.5).slice(0, count);
    }

    // 랜덤 문제 가져오기 (수도 문제 5개 포함)
    getRandomQuestions() {
        const capitalQuestions = this.questions.filter(q => {
            const questionNum = parseInt(q["NO."], 10);
            return questionNum >= 201 && questionNum <= 250;
        });

        const generalQuestions = this.questions.filter(q => {
            const questionNum = parseInt(q["NO."], 10);
            return questionNum < 201;
        });

        const selectedCapitalQuestions = this.getRandomSubset(capitalQuestions, 5);
        const selectedGeneralQuestions = this.getRandomSubset(generalQuestions, 15);

        return [...selectedCapitalQuestions, ...selectedGeneralQuestions];
    }

    // 문제 포맷
    formatQuestion(questionObj, index) {
        return `Q${index + 1}. ${questionObj.문제} (O/X)`;
    }
}

// CSV 파일 경로
const csvPath = path.resolve(__dirname, "seQUIZsheet.csv");

// QuestionBank 인스턴스 생성
const qb = new QuestionBank(csvPath);

// 랜덤 20개 문제 가져오기
const randomQuestions = qb.getRandomQuestions();

// 사용자 입력을 위한 인터페이스
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0;
let currentQuestion = 0;

// 키보드 입력 감지 (O/X)
process.stdin.setRawMode(true); // 한 글자씩 입력받도록 설정
process.stdin.resume();
process.stdin.setEncoding("utf8");

console.log("OX 퀴즈 시작! O 또는 X 키를 눌러 정답을 선택하세요.\n");

// 문제 출력 및 정답 확인
function askQuestion() {
    if (currentQuestion < randomQuestions.length) {
        const questionObj = randomQuestions[currentQuestion];
        console.log(qb.formatQuestion(questionObj, currentQuestion));

        process.stdin.once("data", (key) => {
            key = key.trim().toUpperCase(); // 입력값을 대문자로 변환

            if (key === "O" || key === "X") {
                const correctAnswer = questionObj.정답.trim().toUpperCase();

                if (key === correctAnswer) {
                    console.log("정답입니다!\n");
                    score++;
                } else {
                    console.log(`틀렸습니다! 정답: ${correctAnswer}\n`);
                }

                currentQuestion++;
                setTimeout(askQuestion, 500); // 0.5초 후 다음 문제 출력
            } else {
                console.log("O 또는 X를 눌러주세요!\n");
                askQuestion(); // 다시 입력 요청
            }
        });
    } else {
        console.log(`퀴즈 종료! 최종 점수: ${score} / 20`);
        process.exit(); // 프로그램 종료
    }
}

// 퀴즈 시작
askQuestion();
