export class FinalScore {
    constructor(score) {
        this.myScore = document.querySelector("#myScore");
        this.score = score;

        this.myScore.innerHTML = `Your score is ( ${this.score} )`;

        this.retryBtn = document.querySelector("#retryBtn");

        this.retryBtn.addEventListener("click", () => {
            document.querySelector(".scorePage").classList.add("d-none");
            document.querySelector(".mainPage").classList.remove("d-none");

            this.myScore.innerHTML = "";
            document.querySelector("#amount").value = "";

            document
              .querySelectorAll('input[name="difficulty"]')
              .forEach(input => input.checked = false);

            document.querySelector("#easy").checked = true;
        });
    }
}
