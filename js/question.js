import { FinalScore } from "./result.js";

export class Quiz {
    constructor(finalQuestion) {

        this.scorePage = document.querySelector(".scorePage");
        this.questionPage = document.querySelector(".questionPage");

        this.score = 0;
        this.currentQuestionNo = 0;

        this.finalQuestion = finalQuestion;

        this.SubmitBtn = document.querySelector("#SubmitBtn");

        const newBtn = this.SubmitBtn.cloneNode(true);
        this.SubmitBtn.parentNode.replaceChild(newBtn, this.SubmitBtn);
        this.SubmitBtn = newBtn;

        this.SubmitBtn.addEventListener("click", this.nextQuestion);

        this.getQuestion();
    }

    getQuestion = () => {
        document.querySelector("#totalNo").innerHTML = this.finalQuestion.length;
        document.querySelector("#currentNo").innerHTML = this.currentQuestionNo + 1;

        document.querySelector("#quest").innerHTML =
            this.finalQuestion[this.currentQuestionNo].question;

        this.correctAnswer = this.finalQuestion[this.currentQuestionNo].correct_answer;
        this.wrongeAnswer = this.finalQuestion[this.currentQuestionNo].incorrect_answers;

        this.answers = [this.correctAnswer, ...this.wrongeAnswer];
        this.answers.sort(() => Math.random() - 0.5);

        this.displayAnswer();
    };

    displayAnswer = () => {
        let cartona = "";
        for (let i = 0; i < this.answers.length; i++) {
            cartona += `
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="answer" value="${this.answers[i]}">
                    <label class="form-check-label">${this.answers[i]}</label>
                </div>
            `;
        }
        document.querySelector(".inner").innerHTML = cartona;
    };

    nextQuestion = async () => {
        this.selectedOption = document.querySelector('input[name="answer"]:checked');

        if (!this.selectedOption) {
            Swal.fire({
                icon: "warning",
                title: "Select an answer first!",
                timer: 1500,
                showConfirmButton: false
            });
            return;
        }

        await this.verification();

        if (this.currentQuestionNo < this.finalQuestion.length - 1) {
            this.currentQuestionNo++;
            this.getQuestion();
        } else {
            this.scorePage.classList.remove("d-none");
            this.questionPage.classList.add("d-none");

            new FinalScore(this.score);
        }
    };

    verification = async () => {
        if (this.selectedOption.value === this.correctAnswer) {
            this.score++;

            await Swal.fire({
                icon: 'success',
                title: 'Correct!',
                text: 'Great job 🎉',
                timer: 1500,
                showConfirmButton: false
            });

        } else {
            await Swal.fire({
                icon: 'error',
                title: 'Wrong!',
                text: `The correct answer is: ${this.correctAnswer}`,
                timer: 1800,
                showConfirmButton: false
            });
        }
    };
}
