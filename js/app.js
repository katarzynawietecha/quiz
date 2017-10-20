var position = 0;
var test = document.getElementById("test");
var testStatus = document.getElementById("test-status");
var beginButton = document.getElementById("begin");
var newQuestions = [];

var questions = [
  /*0*/   ["Mam ochotę powiedzieć wszystkim co rzeczywiście o nich myslę.", ["Nigdy, przecież wiedzą co o nich myślę.", "Czasem.", "Często.", "Prawie codziennie!"]],
  /*1*/   ["Lubię szybką jazdę samochodem lub motorem.", ["Nie spieszy mi się na drugi świat.", "Trochę.", "Tak, ale nie swoim:)", "Uwielbiam!"]],
  /*2*/   ["Co powiesz na samotny, wieczorny spacer po lesie?", ["Nigdy w życiu!", "Wolę inne miejsca.", "Czemu nie.", "Pójdę nawet dziś!"]],
  /*3*/   ["Zwierzęta to nasi najlepsi przyjaciele.", ["Ja tam z nimi nie gadam...", "Czasem dostrzegam jakąś nić porozumienia.", "Kot, pies tak, byle tylko nie żmija!", "Święta racja."]],
  /*4*/   ["Co myślisz o wyjeździe Fiatem 126p po frytki do McDrive.", ["Kto jeszcze tym jeździ?", "Jeśli nie będzie trzeba pchać to może być.", "Pojadę, ale tylko czerownym.", "To gdzie ten maluch?"]],
  /*5*/   ["Lubisz dzieci?", ['A co to jest "dzieci?"', "Jak śpią i jeść nie wołają...", "Cudze i z daleka - tak!", "Są urocze!"]],
  /*6*/   ["Która z podanych czynności jest dla Ciebie najważniejsza?", ["Słuchanie muzyki.", "Picie porannej kawy.", "Spanie do południa.", "Spotkania z przyjaciółmi."]],
  /*7*/   ["Czego boisz się najbardziej?", ["Czarnej wdowy chodzącej po mojej pościeli.", "Policji przy zjeździe z autostrady.", "Niczego!", "Dziewczynki z The Ring."]],
  /*8*/   ["Czy rozmawiasz czasem ze sobą?", ["Oczywiście, że nie!", "Od czasu do czasu, gdy nikt nie słyszy...", "Kiedy muszę się wyżalić.", "Jasne, jestem jedyną osobą, która zawsze mnie słucha."]],
  /*9*/   ["Czujesz głód, sprawdzasz lodówkę, a w niej nic nie ma oprócz światła. Co teraz?", ["Wracam do pokoju, aby tam umrzeć z głodu.", "Biegnę do sklepu, zanim mnie siły opuszczą.", "Przyjdę sprawdzić za chwilę, może coś się zmieni?", "Mamooooooo!"]],
  /*10*/  ["Czy słyszysz czasem wibrowanie swojego telefonu, chociaż nikt nie dzwonił i nie pisał?", ["Mam gołębia od przynoszenia mi wieści, ale on nie wibruje.", "Nie, jeszcze mi się to nie zdarzyło.", "Tak!", "Tak, ...słyszę też różne głosy."]],
  /*11*/  ["Kiedy rozmawiasz z obcymi ludźmi?", ["Nigdy, najwyżej podsłuchuję cudze rozmowy.", "Tylko jeśli pytam o drogę.", "Kiedy chcę zapalić, a nie mam fajek.", "Obcy to przyjaciele, których jeszcze nie poznaliśmy!"]],
  /*12*/  ["Ilu masz przyjaciół?", ["Na facebooku ponad 200.", "Jednego, prawdziwego.", "Całe stadko.", "A friendzone się liczy?"]],
  /*13*/  ["Kim wolisz zostać w następnym wcieleniu?", ["Ewą Chodakowską.", "Donaldem Trumpem.", "Gołębiem.", "Głazem."]],
  /*14*/  ["Co robisz podczas kłótni?", ["Walczę na argumenty.", "Uznaję swoją rację, bo moja racja jest najświętsza!", "Szukam kompromisu.", "Proponuję rozmówcy piwo dla złagodzenia sytuacji."]],
  /*15*/  ["Jakie książki preferujesz?", ["Science fiction.", "Kryminalne.", "Romanse.", "Audiobooki:)"]]
]

var hiddenDreams = [
    {
        dream: 'Pojechać na biegun południowy. Stanąć na rękach. Podtrzymywać ziemię!',
        image: 'images/1297513718050_ORIGINAL.jpg',
        altText: 'Odwrocone zdjęcie człowieka stojącego na rękach, na biegunie',
        youNeed: 'Białe niedźwiedzie polarne i mroźny wiatr Ci nie straszne, bo w głębi duszy pragniesz na własnych barkach trzymać świat. Jedyne czego potrzebujesz, by zrealizować swoje ukryte marzenie to bilet na Biegun Poludniowy i ciepłe ubranie!'
    },
    {
        dream: 'Kupić konia wyścigowego i nazwać go "Oskar obejmuje prowadzenie"!',
        image: 'images/476264.jpg',
        altText: 'Wyścigi konne',
        youNeed: 'Twoja podświaomość wie, że pragniesz wygrywać za wszelką cenę. Aby zrealizować swoje marzenie potrzebny Ci będzie tylko ...koń!'
    },
    {
        dream: 'Skok z dywanu na podłogę!',
        image: 'images/maxresdefault.jpg',
        altText: 'Świnka morska na krawędzi dywanu',
        youNeed: 'Życie dostarcza Ci wspaniałych wrażeń. Nie trzeba Ci wiele, żeby poziom adrenaliny skoczył w górę. Do realizacji celu, o którym skrycie marzysz wystarczy  Ci kawałek dywanu i podlogi!'
    },
    {
        dream: 'Wejść do zatłoczonej windy i powiedzieć: pewnie się zastanawiacie czemu was tu zgromadziłem/am?',
        image: 'images/g-10.jpg',
        altText: 'Ludzie w windzie',
        youNeed: 'Twój umysł wie najlepiej czego potrzebujesz. Chcesz, żeby ludzie słuchali Cię z oczami pełnymi niedowierzania? Zrealizuj swe ukryte marzenie, do tego porzebujesz tylko windy i kilku przypadkowych osób!'
    }
  ]

var counterDreamA = 0;
var counterDreamB = 0;
var counterDreamC = 0;
var counterDreamD = 0;

//Sounds
var clickSound = new Audio("sounds/Click-SoundBible.com-1387633738.mp3");
var finalSound = new Audio("sounds/TaDa-SoundBible.com-1884170640.mp3");
var errorSound = new Audio("sounds/ComputerError-SoundBible.com-69768060.mp3");

function play(sound){
  sound.play();
}

//Navigation
var page1 = document.querySelector(".page1");
var page1Div = document.getElementById("page1-div");
page1Div.style.display = "block";
var page2Div = document.getElementById("page2-div");
page2Div.style.display = "none";
var page3Div = document.getElementById("page3-div");
page3Div.style.display = "none";
var page4Div = document.getElementById("page4-div");
page4Div.style.display = "none";

page1.addEventListener('click', function(){
  if(page1Div.style.display == "none"){
    page1Div.style.display = "block";
    page2Div.style.display = "none";
    page3Div.style.display = "none";
    page4Div.style.display = "none";
  }
});

var page2 = document.querySelector(".page2");
page2.addEventListener('click', function(){
  if(page2Div.style.display == "none"){
    page2Div.style.display = "block";
    page1Div.style.display = "none";
    page3Div.style.display = "none";
    page4Div.style.display = "none";
  }
});

var page3 = document.querySelector(".page3");
page3.addEventListener('click', function(){
  if(page3Div.style.display == "none"){
    page3Div.style.display = "block";
    page1Div.style.display = "none";
    page2Div.style.display = "none";
    page4Div.style.display = "none";
  }
});

var page4 = document.querySelector(".page4");
page4.addEventListener('click', function(){
  if(page4Div.style.display == "none"){
    page4Div.style.display = "block";
    page1Div.style.display = "none";
    page2Div.style.display = "none";
    page3Div.style.display = "none";
  }
});

//Section of test
function loadQuestion(){
  //Start
  if (position == 0){
    test.style.display = "none";
    testStatus.style.display = "none";
    var instruction = document.getElementById("instruction");
    beginButton.addEventListener('click', function(){
       test.style.display = "block";
       testStatus.style.display = "block";
       instruction.style.display = "none";
     });
  }

  //Random questions
  function lottery(){
    for (i=0; i<1; i++){
      randomQ = Math.round(Math.random()*(questions.length-1));
        if(newQuestions.indexOf(questions[randomQ]) == -1){
          newQuestions.push(questions[randomQ]);
        }else{
          lottery();
        }
      }
    }
  lottery();

  //Finish, score
  if(position >= 5){
    var myResult = function(){
      var dreamsArray = [counterDreamA, counterDreamB, counterDreamC, counterDreamD];
      var newDreamsArray = dreamsArray.sort(function(a, b) {
        return b - a;
      });

      console.log("A = "+counterDreamA+", B = "+counterDreamB+", C = "+counterDreamC+", D = "+counterDreamD+".");
      console.log("newDreamsArray[0] = "+newDreamsArray[0]);
      console.log("newDreamsArray[1] = "+newDreamsArray[1]);
      console.log("newDreamsArray[2] = "+newDreamsArray[2]);
      console.log("newDreamsArray[3] = "+newDreamsArray[3]);

      //Choosing the dream
      if(newDreamsArray[0] == counterDreamA){
        result = '<h1>'+hiddenDreams[0].dream+'</h1><img class="narrowPicture" src='+hiddenDreams[0].image+' alt='+hiddenDreams[0].altText+'><p>'+hiddenDreams[0].youNeed+'</p>';
      }else if(newDreamsArray[0] == counterDreamB){
        result = '<h1>'+hiddenDreams[1].dream+'</h1><img src='+hiddenDreams[1].image+' alt='+hiddenDreams[1].altText+'><p>'+hiddenDreams[1].youNeed+'</p>';
      }else if(newDreamsArray[0] == counterDreamC){
        result = '<h1>'+hiddenDreams[2].dream+'</h1><img src='+hiddenDreams[2].image+' alt='+hiddenDreams[2].altText+'><p>'+hiddenDreams[2].youNeed+'</p>';
      }else{
        result = '<h1>'+hiddenDreams[3].dream+'</h1><img src='+hiddenDreams[3].image+' alt='+hiddenDreams[3].altText+'><p>'+hiddenDreams[3].youNeed+'</p>';
      }
      return result;
    }

    testStatus.innerHTML = "Twoje ukryte marzenie to...";

    setTimeout(function(){
      testStatus.style.display = "none";
      play(finalSound);
    }, 1000);

    test.innerHTML = "<div class='finalDiv'>"+myResult()+"</div><button id='play-again' onclick='playAgain();play(clickSound)'>Zagraj ponownie</button>";
    test.style.display = "none";

    setTimeout(function(){
      test.style.display = "block";
    }, 1000);

    return false;
  }

  //Counter of questions
  testStatus.innerHTML = "<p>Pytanie "+(position+1)+" z 5</p>";

  //Connection
  var question = newQuestions[position][0];
  optionA = newQuestions[position][1][0];
  optionB= newQuestions[position][1][1];
  optionC = newQuestions[position][1][2];
  optionD = newQuestions[position][1][3];

  //Body of test
  test.innerHTML = "<h3>"+question+"</h3>"+
  '<div class="optionBox">'+
    "<label><input type='radio' name='choices' value='A'>"+optionA+"</label>"+
    "<br><label><input type='radio' name='choices' value='B'>"+optionB+"</label>"+
    "<br><label><input type='radio' name='choices' value='C'>"+optionC+"</label>"+
    "<br><label><input type='radio' name='choices' value='D'>"+optionD+"</label>"+
  "</div><button onclick='checkAnswer();play(clickSound)'>Dalej</button>";
}

var choices = document.getElementsByName("choices");

//Event on button "next"
function checkAnswer(){
  var isChecked = false;
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      var choice = choices[i].value;
      isChecked = true;
      //Add:
      if(choice == "A"){
        counterDreamA+=1;
      }else if(choice == "B"){
        counterDreamB+=1;
      }else if(choice == "C"){
        counterDreamC+=1;
      }else{
        counterDreamD+=1;
      }
      uploadQuestion();
    }
  }
  if(!isChecked){
    play(errorSound);
    alert("Aby przejść dalej musisz wybrać jedną z odpowiedzi!");
  }
}

function uploadQuestion(){
  position++;
  loadQuestion();
}

//Play again event function
function playAgain(){
  position = 0;
  newQuestions = [];
  counter = 0;
  loadQuestion();
  test.style.display = "none";
  testStatus.style.display = "none";
  instruction.style.display = "block";
}

//Form checking
var form = document.querySelector("form");
var nameElem = form.elements.name;
var emailElem = form.elements.email;
var messageElem = form.elements.message;
var errorMsg = form.querySelector('.error-message');
var successMsg = form.querySelector('.success-message');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var errorText = '';

    if(nameElem.value.trim().length <= 2 ){
        nameElem.classList.add('box-error');
        errorText += 'Twoje imię jest za krótkie<br>';
    }else{
        nameElem.classList.remove('box-error');
    }

    if(emailElem.value.indexOf('@') == -1){
        emailElem.classList.add('box-error');
        errorText += 'Email musi posiadać znak @<br>';
    }else{
        emailElem.classList.remove('box-error');
    }

    if(messageElem.value.trim().length <= 10 ){
        nameElem.classList.add('box-error');
        errorText += 'Nie wpisano wiadomości lub jest za którka<br>';
    }else{
        messageElem.classList.remove('box-error');
    }

    errorMsg.innerHTML = errorText;

    if(errorMsg.innerHTML.trim().length == 0){
        successMsg.innerText = 'Formularz wysłano';
        form.submit();
    }
})

window.addEventListener("load", loadQuestion);
