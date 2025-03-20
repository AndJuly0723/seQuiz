function startQuiz() {
    console.log("퀴즈를 시작합니다!");

    // 문제 불러오기
    this.questions = this.questionBank.getRandomQuestions();

    if (this.questions.length === 0) {
        console.log(" 퀴즈를 종료합니다.");
        return;
    }

    // 첫 번째 문제 출력
    this.askQuestion();
}
