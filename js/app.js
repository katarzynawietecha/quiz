var position = 0;
var test = document.getElementById("test");
var testStatus = document.getElementById("test-status");
var beginButton = document.getElementById("begin");

var lingw = 0;
var logMat = 0;
var przyr = 0;
var wizPrze = 0;
var muzycz = 0;
var interp = 0;
var intrap = 0;
var fizKine = 0;

var questions = [
/*1*/   ["Lubię wykonywać działania matematyczne.", 0, 1, 2, 3, 4, 5],
/*2*/   ["Dużo zapamiętuję z wykładów i wypowiedzi innych ludzi.", 0, 1, 2, 3, 4, 5],
/*3*/   ["Uwielbiam słuchać muzyki – właściwie chciałbym ciągle to robić.", 0, 1, 2, 3, 4, 5],
/*4*/   ["Wolę przebywać w grupie niż w samotności.", 0, 1, 2, 3, 4, 5],
/*5*/   ["Lubię wykonywać prace wymagające dużej precyzji ruchów.", 0, 1, 2, 3, 4, 5]//,
// /*6*/   ["Opieka nad zwierzętami sprawia mi przyjemność.", 0, 1, 2, 3, 4, 5],
// /*7*/   ["Lubię uczyć się w ciszy i spokoju.", 0, 1, 2, 3, 4, 5],
// /*8*/   ["Mam dobry refleks.", 0, 1, 2, 3, 4, 5],
// /*9*/   ["Z łatwością przyswajam wiedzę w formie graficznej (tabela, schemat, wykres).", 0, 1, 2, 3, 4, 5],
// /*10*/  ["Potrafię długo i ciekawie opowiadać.", 0, 1, 2, 3, 4, 5],
// /*11*/  ["Muzyka wytwarza we mnie wiele emocji.", 0, 1, 2, 3, 4, 5],
// /*12*/  ["Wiem, co jest dla mnie ważne i próbuję to osiągnąć.", 0, 1, 2, 3, 4, 5],
// /*13*/  ["W wolnych chwilach sięgam po książkę.", 0, 1, 2, 3, 4, 5],
// /*14*/  ["Ucząc się często chodzę lub bawię się przedmiotami.", 0, 1, 2, 3, 4, 5],
// /*15*/  ["Łatwo przekonuję innych do własnych racji, swojego zdania.", 0, 1, 2, 3, 4, 5],
// /*16*/  ["Praca w grupie sprawia mi przyjemność.", 0, 1, 2, 3, 4, 5],
// /*17*/  ["Interesuję się sprawami związanymi z ochroną środowiska.", 0, 1, 2, 3, 4, 5],
// /*18*/  ["Lubię przedmioty ścisłe.", 0, 1, 2, 3, 4, 5],
// /*19*/  ["Lubię dekorować przestrzeń, przedmioty.", 0, 1, 2, 3, 4, 5],
// /*20*/  ["Często zastanawiam się nad motywami działania innych ludzi.", 0, 1, 2, 3, 4, 5],
// /*21*/  ["Jestem uzdolniony manualnie.", 0, 1, 2, 3, 4, 5],
// /*22*/  ["Uważam, że ścieżka dźwiękowa jest bardzo ważnym elementem filmu.", 0, 1, 2, 3, 4, 5],
// /*23*/  ["Lubię analizować swoje stany emocjonalne.", 0, 1, 2, 3, 4, 5],
// /*24*/  ["Lubię i potrafię planować swój czas.", 0, 1, 2, 3, 4, 5],
// /*25*/  ["Łatwo nawiązuję nowe znajomości.", 0, 1, 2, 3, 4, 5],
// /*26*/  ["Oglądając telewizję wybieram programy przyrodnicze.", 0, 1, 2, 3, 4, 5],
// /*27*/  ["Chętnie rozwiązuję zagadki logiczne.", 0, 1, 2, 3, 4, 5],
// /*28*/  ["Moje wyobrażenia są bardzo plastyczne.", 0, 1, 2, 3, 4, 5],
// /*29*/  ["Potrafię godzić ludzi, mediować w sporach i kłótniach.", 0, 1, 2, 3, 4, 5],
// /*30*/  ["Bardzo lubię śpiewać.", 0, 1, 2, 3, 4, 5],
// /*31*/  ["Interesują mnie zjawiska zachodzące w przyrodzie.", 0, 1, 2, 3, 4, 5],
// /*32*/  ["Znajomi często mi mówią, że nie potrafię usiedzieć na miejscu.", 0, 1, 2, 3, 4, 5],
// /*33*/  ["Łatwo zapamiętuję szczegóły obrazów.", 0, 1, 2, 3, 4, 5],
// /*34*/  ["Szukam związków między zagadnieniami, przedmiotami.", 0, 1, 2, 3, 4, 5],
// /*35*/  ["Uważam, że ludzie są fascynujący i lubię z nimi przebywać.", 0, 1, 2, 3, 4, 5],
// /*36*/  ["Lubię krzyżówki, rymowanki i inne zabawy słowne.", 0, 1, 2, 3, 4, 5],
// /*37*/  ["Dostrzegam i zapamiętuję znacznie więcej szczegółów niż inni ludzie.", 0, 1, 2, 3, 4, 5],
// /*38*/  ["Chętnie zgłębiam wiedzę z biologii, geografii, meteorologii.", 0, 1, 2, 3, 4, 5],
// /*39*/  ["Z łatwością zapamiętuję słowa piosenek i rymowanek.", 0, 1, 2, 3, 4, 5],
// /*40*/  ["Analizuję własne błędy i wyciągam z nich wnioski na przyszłość.", 0, 1, 2, 3, 4, 5]
]

//Navigation
var navElements = document.querySelectorAll("nav li");
navElements.forEach(function(element){
  element.addEventListener("click", function(){
    var nestedNavDiv = element.children[0];
    if(nestedNavDiv.style.display === "block"){
      nestedNavDiv.style.display = "none";
    }else{
      nestedNavDiv.style.display = "block";
    }
  })
})

//Section of test
function loadQuestion(){
  //Start
  if (position == 0){
    test.style.display = "none";
    testStatus.style.display = "none";
    beginButton.addEventListener('click', function(){
       test.style.display = "block";
       testStatus.style.display = "block";
       beginButton.style.display = "none";
     });
  }
  //Finish, score
  if(position >= questions.length){
    testStatus.innerHTML = "Twój wynik";
    test.innerHTML = "(kliknij w wybrany rodzaj inteligencji, aby zobaczyc opis)"+
                        "<dl>"+
                          "<dt>Inteligencja lingwistyczna - "+lingw+" pkt.</dt>"+
                            "<dd><span>Cechy charakterystyczne:</span><br>łatwość operowania słowem (pisanym, mówionym), umiejętność przemawiania i prezentowania własnego zdania i przekonań, zamiłowanie do książek, duży zasób słownictwa, wrażliwość na niuanse językowe.<br><span>Praca:</span><br>dziennikarz, tłumacz, pisarz, poeta, mówca, polityk, redaktor.<br><span>Życie codzienne:</span>pisz, czytaj, wstąp do klubu dyskusyjnego, załóż gazetkę szkolną, bierz udział w debatach</dd>"+
                          "<dt>Inteligencja logiczno-matematyczna - "+logMat+" pkt.</dt>"+
                            "<dd><span>Cechy charakterystyczne:</span><br>umiejętność liczenia, dokonywania operacji na liczbach, dobrze rozwinięte myślenie abstrakcyjne, łatwość rozwiązywania zagadek logicznych, kryminalnych, dostrzeganie zależności przyczynowo-skutkowych, przedstawianie faktów w sposób uporządkowany.<br><span>Praca:</span><br>ekonomista, księgowy, informatyk, fizyk, astronom, detektyw, myśliwy, adwokat, sędzia.<br><span>Życie codzienne:</span><br>rób plany działania, rozwiązuj zadania metodyczne, łącz nową wiedzę z dotychczas zdobytą.</dd>"+
                          "<dt>Inteligencja przyrodnicza - "+przyr+" pkt.</dt>"+
                            "<dd><span>Cechy charakterystyczne:</span><br>zainteresowanie naturą i zjawiskami w niej zachodzącymi, zamiłowanie do roślin i zwierząt, wrażliwość ekologiczna.<br><span>Praca:</span><br>biolog, zoolog, ekolog, rolnik, sadownik, weterynarz.<br><span>Życie codzienne:</span><br>spędzaj jak najwięcej czasu na łonie natury, bierz udział w akcjach ekologicznych, zapisz się na wolontariat w schronisku dla zwierząt, uprawiaj rośliny.</dd>"+
                          "<dt>Inteligencja wizalno-przestrzenna - "+wizPrze+" pkt.</dt>"+
                            "<dd><span>Cechy charakterystyczne:</span><br>myślenie za pomocą obrazów, łatwość czytania map, wykresów i schematów, bogata wyobraźnia, całościowe postrzeganie przestrzeni, dobre wyczucie kształtu, koloru, przestrzeni.<br><span>Praca:</span><br>artysta, architekt, projektant, nawigator, rzewodnik, pilot.<br><span>Życie codzienne:</span><br>ucząc się, twórz mapy myśli, używaj kolorów, podkreśleń, zestawień, poznaj techniki grafiki komputerowej, rozwijaj wyobraźnię coraz bardziej ubarwiając własne myśli, nadając im kolor, smak, zapach.</dd>"+
                          "<dt>Inteligencja muzyczna - "+muzycz+" pkt.</dt>"+
                            "<dd><span>Cechy charakterystyczne:</span><br>wrażliwość na muzykę i dźwięki oraz ich ładunek emocjonalny, łatwość zapamiętywania treści mających podkład muzyczny, wrażliwość na tembr głosu rozmówcy.<br><span>Praca:</span><br>kompozytor, piosenkarz, dyrygent, muzyk, krytyk/dziennikarz muzyczny, stroiciel instrumentów.<br><span>Życie codzienne:</span><br>słuchaj jak najwięcej muzyki, ucz się przy muzyce (najlepiej barokowej), ucząc się wierszy, czy wyliczanek, znajdź dla nich rytm, wpływaj na swój nastrój poprzez muzykę (relaksacja, wyładowanie nadmiaru emocji czy wytworzenie pozytywnego nastroju).</dd>"+
                          "<dt>Inteligencja interpersonalna - "+interp+" pkt.</dt>"+
                            "<dd><span>Cechy charakterystyczne:</span><br>chęć przebywania z ludźmi, łatwość nawiązywania kontaktów i zawierania przyjaźni, ekstrawersja, predyspozycje do pracy w grupie.<br><span>Praca:</span><br>wymagająca kontaktów z ludźmi: sprzedawca, mediator, psycholog, nauczyciel, menadżer.<br><span>Życie codzienne:</span><br>spędzaj jak najwięcej czasu z innymi, ucz się w grupie, ćwicz umiejętności komunikacji interpersonalnej, zgłębiaj tajniki psychologii i socjologii.</dd>"+
                          "<dt>Inteligencja intrapersonalna - "+intrap+" pkt.</dt>"+
                            "<dd><span>Cechy charakterystyczne:</span><br>umiejętność planowania, świadomość własnych potrzeb i celów, uczenie się na własnych błędach, wgląd w siebie, łatwość nazywania i rozpoznawania własnych stanów emocjonalnych.<br><span>Praca:</span><br>poeta, psycholog, terapeuta, przywódca duchowy, filozof, teolog.<br><span>Życie codzienne:</span><br>obserwuj i nazywaj swoje stany emocjonalne, ucz się w samotności i ciszy, pielęgnuj własną niezależność.</dd>"+
                          "<dt>Inteligencja fizyczno-kinestetyczna - "+fizKine+" pkt.</dt>"+
                            "<dd><span>Cechy charakterystyczne:</span><br>duża potrzeba ruchu, zamiłowanie do ćwiczeń fizycznych, niepokój ruchowy, tendencja do manipulowania przedmiotami, duża precyzja ruchów, dobry refleks.<br><span>Praca:</span><br>sportowiec, akrobata, aktor, tancerz, chirurg, dentysta, modelarz, zegarmistrz, osoby pracujące na wysokościach.<br><span>Życie codzienne:</span><br>ucz się, chodząc lub udając teatr, zapisz się na zajęcia sportowe, rozwijaj sprawność manualną (modelarstwo, haftowanie, robienie biżuterii).</dd>"+
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
  testStatus.innerHTML = "<p>Pytanie "+(position+1)+" z "+questions.length+"</p>";

  //Connection
  var question = questions[position][0];
  optionA = questions[position][1];
  optionB= questions[position][2];
  optionC = questions[position][3];
  optionD = questions[position][4];
  optionE = questions[position][5];
  optionF = questions[position][6];

  //Body of test
  test.innerHTML = "<h3>"+question+"</h3>"+
      "<br><input type='radio' name='choices' value='0'>"+optionA+
      "<br><input type='radio' name='choices' value='1'>"+optionB+
      "<br><input type='radio' name='choices' value='2'>"+optionC+
      "<br><input type='radio' name='choices' value='3'>"+optionD+
      "<br><input type='radio' name='choices' value='4'>"+optionE+
      "<br><input type='radio' name='choices' value='5'>"+optionF+
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
      if((q==2)||(q==10)||(q==13)||(q==15)||(q==36)){
        lingw+=(parseInt(choices[i].value));
      }else if((q==1)||(q==18)||(q==24)||(q==27)||(q==34)){
        logMat+=(parseInt(choices[i].value));
      }else if((q==6)||(q==17)||(q==26)||(q==31)||(q==38)){
        przyr+=(parseInt(choices[i].value));
      }else if((q==9)||(q==19)||(q==28)||(q==33)||(q==37)){
        wizPrze+=(parseInt(choices[i].value));
      }else if((q==3)||(q==11)||(q==22)||(q==30)||(q==39)){
        muzycz+=(parseInt(choices[i].value));
      }else if((q==4)||(q==16)||(q==25)||(q==29)||(q==35)){
        interp+=(parseInt(choices[i].value));
      }else if((q==7)||(q==12)||(q==20)||(q==23)||(q==40)){
        intrap+=(parseInt(choices[i].value));
      }else if((q==5)||(q==8)||(q==14)||(q==21)||(q==32)){
        fizKine+=(parseInt(choices[i].value));
      }
      uploadQuestion();
    }
  }
  if(!isChecked){
    alert("Aby przejść dalej zaznacz którąś odpowiedź.");
  }
}

function uploadQuestion(){
  position++;
  loadQuestion();
}

window.addEventListener("load", loadQuestion);
