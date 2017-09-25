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


function loadQuestion(){
  //Start
  if (position == 0){
    test.style.display = "none";
    testStatus.style.display = "none";
    beginButton.addEventListener('click', function(){
       console.log("beginButton");
       test.style.display = "block";
       testStatus.style.display = "block";
       beginButton.style.display = "none";
     });
  }
  //Finish, score
  if(position >= questions.length){
    testStatus.innerHTML = "Test zakończony";
    test.innerHTML = "<ul>Wyniki: <li>Inteligencja lingwistyczna "+lingw+" pkt.</li>"+
                                  "<li>Inteligencja logiczno-matematyczna "+logMat+" pkt.</li>"+
                                  "<li>Inteligencja przyrodnicza "+przyr+" pkt.</li>"+
                                  "<li>Inteligencja wizalno-przestrzenna "+wizPrze+" pkt.</li>"+
                                  "<li>Inteligencja muzyczna "+muzycz+" pkt.</li>"+
                                  "<li>Inteligencja interpersonalna "+interp+" pkt.</li>"+
                                  "<li>Inteligencja intrapersonalna "+intrap+" pkt.</li>"+
                                  "<li>Inteligencja fizyczno-kinestetyczna "+fizKine+" pkt.</li></ul>";
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
console.log(choices);

//Event on button "next"
function checkAnswer(){
  console.log("Next onclick!");

  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      var choice = choices[i].value;
      var q = position+1;
      console.log("In question "+q+" user selected "+choice);

      //Add:
      if((q==2)||(q==10)||(q==13)||(q==15)||(q==36)){
        lingw+=(parseInt(choices[i].value));
        console.log("lingw ="+lingw);
      }else if((q==1)||(q==18)||(q==24)||(q==27)||(q==34)){
        logMat+=(parseInt(choices[i].value));
        console.log("logMat = "+logMat);
      }else if((q==6)||(q==17)||(q==26)||(q==31)||(q==38)){
        przyr+=(parseInt(choices[i].value));
        console.log("przyr = "+przyr);
      }else if((q==9)||(q==19)||(q==28)||(q==33)||(q==37)){
        wizPrze+=(parseInt(choices[i].value));
        console.log("wizPrze = "+wizPrze);
      }else if((q==3)||(q==11)||(q==22)||(q==30)||(q==39)){
        muzycz+=(parseInt(choices[i].value));
        console.log("muzycz = "+muzycz);
      }else if((q==4)||(q==16)||(q==25)||(q==29)||(q==35)){
        interp+=(parseInt(choices[i].value));
        console.log("interp = "+interp);
      }else if((q==7)||(q==12)||(q==20)||(q==23)||(q==40)){
        intrap+=(parseInt(choices[i].value));
        console.log("intrap ="+intrap);
      }else if((q==5)||(q==8)||(q==14)||(q==21)||(q==32)){
        fizKine+=(parseInt(choices[i].value));
        console.log("fizKine = "+fizKine);
      }
    }
  }
}


window.addEventListener("load", loadQuestion);
