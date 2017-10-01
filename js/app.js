var position = 0;
var test = document.getElementById("test");
var testStatus = document.getElementById("test-status");
var beginButton = document.getElementById("begin");

var counter = 0;

var questions = [
/*1*/   ["Lubię wykonywać działania matematyczne.", 0, 1, 2, 3, 4, 5],
/*2*/   ["Dużo zapamiętuję z wykładów i wypowiedzi innych ludzi.", 0, 1, 2, 3, 4, 5],
/*3*/   ["Uwielbiam słuchać muzyki – właściwie chciałbym ciągle to robić.", 0, 1, 2, 3, 4, 5],
/*4*/   ["Wolę przebywać w grupie niż w samotności.", 0, 1, 2, 3, 4, 5],
/*5*/   ["Lubię wykonywać prace wymagające dużej precyzji ruchów.", 0, 1, 2, 3, 4, 5],
/*6*/   ["Opieka nad zwierzętami sprawia mi przyjemność.", 0, 1, 2, 3, 4, 5],
/*7*/   ["Lubię uczyć się w ciszy i spokoju.", 0, 1, 2, 3, 4, 5],
/*8*/   ["Mam dobry refleks.", 0, 1, 2, 3, 4, 5],
/*9*/   ["Z łatwością przyswajam wiedzę w formie graficznej (tabela, schemat, wykres).", 0, 1, 2, 3, 4, 5],
/*10*/  ["Potrafię długo i ciekawie opowiadać.", 0, 1, 2, 3, 4, 5],
/*11*/  ["Muzyka wytwarza we mnie wiele emocji.", 0, 1, 2, 3, 4, 5],
/*12*/  ["Wiem, co jest dla mnie ważne i próbuję to osiągnąć.", 0, 1, 2, 3, 4, 5],
/*13*/  ["W wolnych chwilach sięgam po książkę.", 0, 1, 2, 3, 4, 5],
/*14*/  ["Ucząc się często chodzę lub bawię się przedmiotami.", 0, 1, 2, 3, 4, 5],
/*15*/  ["Łatwo przekonuję innych do własnych racji, swojego zdania.", 0, 1, 2, 3, 4, 5],
/*16*/  ["Praca w grupie sprawia mi przyjemność.", 0, 1, 2, 3, 4, 5],
/*17*/  ["Interesuję się sprawami związanymi z ochroną środowiska.", 0, 1, 2, 3, 4, 5],
/*18*/  ["Lubię przedmioty ścisłe.", 0, 1, 2, 3, 4, 5],
/*19*/  ["Lubię dekorować przestrzeń, przedmioty.", 0, 1, 2, 3, 4, 5],
/*20*/  ["Często zastanawiam się nad motywami działania innych ludzi.", 0, 1, 2, 3, 4, 5],
/*21*/  ["Jestem uzdolniony manualnie.", 0, 1, 2, 3, 4, 5],
/*22*/  ["Uważam, że ścieżka dźwiękowa jest bardzo ważnym elementem filmu.", 0, 1, 2, 3, 4, 5],
/*23*/  ["Lubię analizować swoje stany emocjonalne.", 0, 1, 2, 3, 4, 5],
/*24*/  ["Lubię i potrafię planować swój czas.", 0, 1, 2, 3, 4, 5],
/*25*/  ["Łatwo nawiązuję nowe znajomości.", 0, 1, 2, 3, 4, 5],
/*26*/  ["Oglądając telewizję wybieram programy przyrodnicze.", 0, 1, 2, 3, 4, 5],
/*27*/  ["Chętnie rozwiązuję zagadki logiczne.", 0, 1, 2, 3, 4, 5],
/*28*/  ["Moje wyobrażenia są bardzo plastyczne.", 0, 1, 2, 3, 4, 5],
/*29*/  ["Potrafię godzić ludzi, mediować w sporach i kłótniach.", 0, 1, 2, 3, 4, 5],
/*30*/  ["Bardzo lubię śpiewać.", 0, 1, 2, 3, 4, 5],
/*31*/  ["Interesują mnie zjawiska zachodzące w przyrodzie.", 0, 1, 2, 3, 4, 5],
/*32*/  ["Znajomi często mi mówią, że nie potrafię usiedzieć na miejscu.", 0, 1, 2, 3, 4, 5],
/*33*/  ["Łatwo zapamiętuję szczegóły obrazów.", 0, 1, 2, 3, 4, 5],
/*34*/  ["Szukam związków między zagadnieniami, przedmiotami.", 0, 1, 2, 3, 4, 5],
/*35*/  ["Uważam, że ludzie są fascynujący i lubię z nimi przebywać.", 0, 1, 2, 3, 4, 5],
/*36*/  ["Lubię krzyżówki, rymowanki i inne zabawy słowne.", 0, 1, 2, 3, 4, 5],
/*37*/  ["Dostrzegam i zapamiętuję znacznie więcej szczegółów niż inni ludzie.", 0, 1, 2, 3, 4, 5],
/*38*/  ["Chętnie zgłębiam wiedzę z biologii, geografii, meteorologii.", 0, 1, 2, 3, 4, 5],
/*39*/  ["Z łatwością zapamiętuję słowa piosenek i rymowanek.", 0, 1, 2, 3, 4, 5],
/*40*/  ["Analizuję własne błędy i wyciągam z nich wnioski na przyszłość.", 0, 1, 2, 3, 4, 5]
]

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
  var newQuestions = [];
    for (i=0; i<5; i++){
    randomQ = Math.round(Math.random()*(questions.length-1));
    newQuestions.push(questions[randomQ]);
  }

  //Finish, score
  if(position >= newQuestions.length){
    testStatus.innerHTML = "Twój wynik";
    test.innerHTML = "<dl>"+
                          "<dt>Masz "+counter+" punktów.</dt>"+
                            "<dd><span>Cechy charakterystyczne:</span><br>łatwość operowania słowem (pisanym, mówionym), umiejętność przemawiania i prezentowania własnego zdania i przekonań, zamiłowanie do książek, duży zasób słownictwa, wrażliwość na niuanse językowe.<br><span>Praca:</span><br>dziennikarz, tłumacz, pisarz, poeta, mówca, polityk, redaktor.<br><span>Życie codzienne:</span><br>pisz, czytaj, wstąp do klubu dyskusyjnego, załóż gazetkę szkolną, bierz udział w debatach</dd>"+
                        "</dl>";

    var dt = document.querySelectorAll('dt');
    dt.forEach(function(element){
      element.addEventListener("click", function(){
        var dd = element.nextSibling;
        if(dd.style.display === "block"){
          dd.style.display = "none";
        }else{
          dd.style.display = "block";
        }
      })
    })

    return false;
  }

  //Counter of questions
  testStatus.innerHTML = "<p>Pytanie "+(position+1)+" z 5</p>";

  //Connection
  var question = newQuestions[position][0];
  console.log(newQuestions[position][0]);
  optionA = newQuestions[position][1];
  optionB= newQuestions[position][2];
  optionC = newQuestions[position][3];
  optionD = newQuestions[position][4];
  optionE = newQuestions[position][5];
  optionF = newQuestions[position][6];

  //Body of test
  test.innerHTML = "<h3>"+question+"</h3>"+
      "<input type='radio' name='choices' value='0'>"+optionA+
      "<span>&ensp;</span><input type='radio' name='choices' value='1'>"+optionB+
      "<span>&ensp;</span><input type='radio' name='choices' value='2'>"+optionC+
      "<span>&ensp;</span><input type='radio' name='choices' value='3'>"+optionD+
      "<span>&ensp;</span><input type='radio' name='choices' value='4'>"+optionE+
      "<span>&ensp;</span><input type='radio' name='choices' value='5'>"+optionF+
      "<br><button onclick='checkAnswer()'>Dalej</button>";
}

var choices = document.getElementsByName("choices");

//Event on button "next"
function checkAnswer(){
  var isChecked = false;
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      var choice = choices[i].value;
      var q = position+1;
      isChecked = true;
      //Add:
      counter+=(parseInt(choices[i].value));
      uploadQuestion();
    }
  }
  if(!isChecked){
    alert("Aby przejść dalej musisz wybrać jedną z odpowiedzi!");
  }
}

function uploadQuestion(){
  position++;
  loadQuestion();
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
