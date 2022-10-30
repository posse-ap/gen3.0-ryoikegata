"use strict";

{

  //配列
  let quiz = [
    {
      Number: "0",
      Text: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
      Img: "./assets/img/quiz/img-quiz01.png",
      Select1: "約28万人",
      Select2: "約79万人",
      Select3: "約183万人",
      Answer: "約79万人",
      quote: "経済産業省 2019年3月 - IT人材人材需給に関する調査",
    },
    {
      Number: "1",
      Text: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
      Img: "./assets/img/quiz/img-quiz02.png",
      Select1: "INTECH",
      Select2: "BIZZTECH",
      Select3: "X-TECH",
      Answer: "X-TECH",
    },
    {
      Number: "2",
      Text: "IoTとは何の略でしょう？",
      Img: "./assets/img/quiz/img-quiz03.png",
      Select1: "Internet of Things",
      Select2: "Integrate into Technology",
      Select3: "Information  on Tool",
      Answer: "Internet of Things",
    },
    {
      Number: "3",
      Text: "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
      Img: "./assets/img/quiz/img-quiz04.png",
      Select1: "Society 5.0",
      Select2: "CyPhy",
      Select3: "SDGs",
      Answer: "Society 5.0",
      quote: "Society5.0 - 科学技術政策 - 内閣府",
    },
    {
      Number: "4",
      Text: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
      Img: "./assets/img/quiz/img-quiz05.png",
      Select1: "Web3.0",
      Select2: "NFT",
      Select3: "メタバース",
      Answer: "Web3.0",
    },
    {
      Number: "5",
      Text: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
      Img: "./assets/img/quiz/img-quiz06.png",
      Select1: "約2倍",
      Select2: "約5倍",
      Select3: "約11倍",
      Answer: "約5倍",
      quote: "Accenture Technology Vision 2021",
    },
  ];

  const main = document.querySelector(".quiz_main");

  function createQuiz(i) {
    let page = ` <section class="js_quiz">
  <h1>Q${i + 1}</h1>
  <div class="quiz_text">
  <p>${quiz[i].Text}</p>
  </div>
  <img src="${quiz[i].Img}" alt="">
  <h2>A</h2>
  <div class="answer_item" >
  <button class="js-select-button${i}">${quiz[i].Select1}</button>
  <button class="js-select-button${i}">${quiz[i].Select2}</button>
  <button class="js-select-button${i}" >${quiz[i].Select3}</button>
  </div>
  <div class="js-answer-correct" id="correct${i}">
  <h3>正解!</h3>
  <div class="answer-text">
  <p class="js-answer-a">A</p>
  <p class="js-correct-answer">${quiz[i].Answer}</p></div>
  </div>
  <div class="js-answer-wrong" id="wrong${i}">
  <h3>不正解...</h3>
  <div class="answer-text">
  <p class="js-answer-a">A</p>
  <p class="js-correct-answer">${quiz[i].Answer}</p></div>
  </div>
  ${createNote(i)}
  </div>
  </section>`;

    main.insertAdjacentHTML("beforeend", page);
  }

  function createNote(i) {
    const noteHtml = `<div class="quiz_note">
  <img src="./assets/img/icon/icon-note.svg" alt="">
  <p>${quiz[i].quote}</p>
  </div>`;

    if (quiz[i].quote === undefined) {
      return "";
    } else {
      return noteHtml;
    }
  }
  function clickButton(i) {
    const btn = document.querySelectorAll(`.js-select-button${i}`);
    const correct = document.getElementById(`correct${i}`);
    const wrong = document.getElementById(`wrong${i}`);
    const quizAnswer = quiz[i].Answer;
    let btnClicked;

    btn.forEach((element) => {
      element.addEventListener("click", () => {
        const clickedAnswer = element.innerHTML;

        if (btnClicked !== true) {
          element.classList.add("js-selected");
          if (clickedAnswer === quizAnswer) {
            correct.classList.add("js-display");
          } else {
            wrong.classList.add("js-display");
          }
        }
        btnClicked = true;
      });
    });
  }

  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  quiz = shuffle(quiz);

  for (let i = 0; i < quiz.length; i++) {
    createQuiz(i);
    clickButton(i);
  }
}
