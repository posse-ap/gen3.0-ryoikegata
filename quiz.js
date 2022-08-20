'use strict';

{
const quiz = [
  {
    Number: '0',
    Text: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    Img: "./assets-ph1-website/img/quiz/img-quiz01.png",
    Select1: '約28万人',
    Select2: '約79万人',
    Select3: '約183万人',
    Answer: '約79万人',
    quote: '経済産業省 2019年3月 - IT人材人材需給に関する調査',
  },
  {
    Number: '1',
    Text: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    Img: './assets-ph1-website/img/quiz/img-quiz02.png',
    Select1: 'INTECH',
    Select2: 'BIZZTECH',
    Select3: 'X-TECH',
    Answer: 'X-TECH',
  },
  {
    Number: '2',
    Text: 'IoTとは何の略でしょう？',
    Img: './assets-ph1-website/img/quiz/img-quiz03.png',
    Select1: 'Internet of Things',
    Select2: 'Integrate into Technology',
    Select3: 'Information  on Tool',
    Answer: 'Internet of Things',
  },
  {
    Number: '3',
    Text: '日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',
    Img: './assets-ph1-website/img/quiz/img-quiz04.png',
    Select1: 'Society 5.0',
    Select2: 'CyPhy',
    Select3: 'SDGs',
    Answer: 'Society 5.0',
    quote:'Society5.0 - 科学技術政策 - 内閣府',
  },
  {
    Number: '4',
    Text: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    Img: './assets-ph1-website/img/quiz/img-quiz05.png',
    Select1: 'Web3.0',
    Select2: 'NFT',
    Select3: 'メタバース',
    Answer: 'Web3.0',
  },
  {
    Number: '5',
    Text: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    Img: './assets-ph1-website/img/quiz/img-quiz06.png',
    Select1: '約2倍',
    Select2: '約5倍',
    Select3: '約11倍',
    Answer: '約5倍',
    quote:'Accenture Technology Vision 2021',
  },
  
];

//   function bottonClick(){
//   const selectQuestion = document.querySelectorAll('.js-select-botton');
//   const selectedBox =document.querySelectorAll('.js-answer-box');
//   const selectedText = document.querySelectorAll('.js-correct-text');
//   const selectedAnswer= document.querySelectorAll('js-correct-answer');



//     if(quiz[0].Answer === selected){
//       classList.add("correct");
//   }else{
//     classList.add("not-correct");
// }
//   }
function clickButton(i) {
  const btn = document.querySelectorAll(`.js-select-button${i}`);
  const correct = document.getElementById(`correct${i}`);
  const wrong = document.getElementById(`wrong${i}`);
  const quizAnswer =quiz[i].Answer;
  let btnClicked;
  
  btn.forEach((element) => {
    element.addEventListener('click', () => {
      const clickedAnswer = element.innerHTML;

      if (btnClicked !== true) {
        element.classList.add('js-selected');
        if (clickedAnswer === quizAnswer) {
          correct.classList.add('js-display');
        } else {
          wrong.classList.add('js-display');
        }

      }
      btnClicked = true;
    })
  });
};
for(let i=0;i<=5;i++){
clickButton(i);

};
}
