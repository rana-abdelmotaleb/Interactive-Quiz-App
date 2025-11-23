import { Quiz } from "./question.js"

export class Setting{
    constructor(){
     this.category = document.querySelector("#category")
     this.startBtn = document.querySelector("#startBtn")
     this.difficulty = document.getElementsByName("difficulty")
     this.amount = document.querySelector("#amount")
     this.mainPage = document.querySelector(".mainPage")
     this.questionPage = document.querySelector(".questionPage")
this.startBtn.addEventListener("click", this.startQuiz);
    }


    startQuiz=async()=>{
      let category =this.category.value;
      let difficulty= Array.from(this.difficulty).find((input)=>{return input.checked}).value;
      let amountOfQuestion =this.amount.value;
          if (amountOfQuestion === "" || isNaN(amountOfQuestion) || amountOfQuestion <= 0) {
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "please Enter Number Of Questions !",
});
      return; 
    }
      let apiUrl =`https://opentdb.com/api.php?amount=${amountOfQuestion}&category=${category}&difficulty=${difficulty}`
     let finalQuestion =await this.quizApi (apiUrl)
     
      this.mainPage.classList.add("d-none")
      this.questionPage.classList.remove("d-none")
      let question = new Quiz(finalQuestion)
     };



       quizApi= async(apiUrl)=>{
 let response = await fetch(apiUrl)
        let finalData = await response.json()
         return finalData.results;
 
}
}


 








