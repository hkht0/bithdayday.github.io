localStorage.clear();

const btnDarkMode = document.querySelector('.dark-mode-btn')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
}

if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-btn--active')
	document.body.classList.remove('dark')
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
	const newColorScheme = event.matches ? "dark" : "light";

	if (newColorScheme === 'dark') {
		btnDarkMode.classList.add('dark-mode-btn--active')
		document.body.classList.add('dark')
		localStorage.setItem('darkMode', 'dark')
	} else {
		btnDarkMode.classList.remove('dark-mode-btn--active')
		document.body.classList.remove('dark')
		localStorage.setItem('darkMode', 'light')
	}
})


// Включение ночного режима по кнопке

btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	const isDark = document.body.classList.toggle('dark');

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
}

var prevScrollpos = window.window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
	
	
  } else if(currentScrollPos < 15){
	document.getElementById("nav").style.top = "0";
  }else {
    document.getElementById("nav").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

window.scroll = function() {
    if ($(this).scrollTop() == 0) {
		document.getElementById("nav").style.top = "0";

    }
};


function doSomething() {
	var text = document.getElementById("myInput").value;
  
	if (text.includes("apple")) {
		document.getElementById("error").style.visibility = "hidden";

	}else if (text.includes("ball")) {
		error.innerHTML = `<p>еще раз...</p>
		<input placeholder="Ввевиде пароль с опроса" type="text" id="myInput" onsubmit="doSomething">
	<button id='accept' class="content-list__btn" onclick="doSomething()">Check</button>
	`;
		document.getElementById("error").style.visibility = "visible";
	}
	else {
		error.innerHTML = `<p>еще раз</p>
		<input placeholder="Ввевиде пароль с опроса" type="text" id="myInput" onsubmit="doSomething">
	<button class="content-list__btn" onclick="doSomething()">Check</button>
	`;
		document.getElementById("error").style.visibility = "visible";
		}
  }

 

	const quizData = [
    {
      question: "Дата начала отношений?",
	  variant: 'Можешь не спешить:',
	  asddsa: 'img/projects/40.jpeg',
      options: ["Когда-то", "Вчера", "9.01.2023", "10.01.2023"],
      answer: "9.01.2023"
    },
    {
      question: "Мой любимый цвет?",
	  variant: 'Угадай:',
	  asddsa: 'img/projects/33.jpeg',
      options: ["Зеленый", "Красный", "Розовый", "Не знаю"],
      answer: "Зеленый"
    },
    {
		question: "В каком году был 2025 год?",
		variant: 'Внимательно:',
		asddsa: 'img/projects/34.png',
		options: ["в 2025", "вчера", "в след году", "не було"],
		answer: "не було"
	},
	{
		question: "Любимая марка машин у твоего отца?",
		variant: '+1 правильный ответ:',
		asddsa: 'img/projects/35.png',
		options: ["Bugatti", "Range rover", "BMW\u2665", "Не знаю"],
		answer: "BMW\u2665"
	},
    {
		question: "Вопрос на логику",
		variant: 'Выбери номер места на котором стоит автомобиль:',
		options: ["87", "68", "99", "60"],
		asddsa: 'img/projects/30.jpg',
		answer: "87"
	},
	{
		question: "У Влада сестёр и братьев поровну.",
		variant: ' Кого в семье больше: сыновей или дочерей?:',
		options: ["Поровну", "Дочерей", "Меня", "Сыновей"],
		asddsa: 'img/projects/31.png',
		answer: "Сыновей"
	},
   
  ];
  
  const imagesElement = document.getElementById('images')
  const questionElement = document.getElementById("question");
  const variantElement = document.getElementById("variant");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  let asddsa = 0;

  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
	variantElement.innerText = question.variant;
	imagesElement.src=question.asddsa;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function changeImageSrc(newSrc) {
	var image = document.getElementById('images');
	image.src = newSrc;
  };

  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    if (score<6){
		quiz.innerHTML = `
		<p>Правильных ответов: ${score}/${quizData.length}</p>
		<h1>как-то мало нужно хотя-бы все</h1>
      <button id='reload' onClick="window.location.reload();">Reload</button>
	  
    `;
	}else{
		quiz.innerHTML = `
      <h1>Опрос успешно пройден!</h1>
      <p>Правильных ответов: ${score}/${quizData.length}</p>
	  <p>Пароль: i_love_you </p>`
	  error.innerHTML = `
	  <input placeholder="Ввевиде пароль с опроса" type="text" id="myInput" onsubmit="doSomething">
	<button class="content-list__btn" onclick="doSomething()">Check</button>
    `;
	}
	
  }
  
  showQuestion();

  document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('button').addEventListener('click', int)
});
  
function int() {
    console.log('calling');
    var source = document.getElementById('j1_64_anchor').click();
}

var coll = document.getElementsByClassName("collapsible");
var i;
  