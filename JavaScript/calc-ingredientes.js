// --- Còdigo que roda quando a página é carregada

let receitas = [
    {
        "id": 0,
        "nome": "Receita",
        "ingred1": "Ingrediente",
        "preparo": "Preparo"
    },

    {
        "id": 1,
        "nome": "Omelete",
        "ingred1Q": 2,
        "ingred1": "ovo(s).",
        "ingred2Q": 100,
        "ingred2": "g de queijo.",
        "preparo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
        "id": 2,
        "nome": "Brigadeiro",
        "ingred1Q": 1,
        "ingred1": "colher de sopa de manteiga.",
        "ingred2Q": 1,
        "ingred2": "caixinha de leite condensado.",
        "ingred3Q": 200,
        "ingred3": "g de chocolate em pó.",
        "preparo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

let selectReceitas = document.getElementById("select-receitas");
updateSelect();

// --- Fim do código

// --- Funções

function updateSelect(){
    let numeroDeReceitas = receitas.length;
    LimparSelect(numeroDeReceitas);
    for (let i = 0; i < receitas.length; i++){
        let rec = document.createElement("option");
        rec.text = receitas [i].nome;
        rec.value = receitas [i].id;
        selectReceitas.add(rec);
    }
}

function LimparSelect(numero) {
    for(i = numero-1; i >= 0; i--){
        selectReceitas.remove(i);
    }
}

//onchange="mostrarReceita()" no seletor e no input de numero de pessoas

function mostrarReceita(){
    let receita = receitas.find(receita => receita.nome === document.getElementById("select-receitas").options[document.getElementById("select-receitas").selectedIndex].text);

    let pessoas = Number(document.getElementById("id-num-pessoas").value);

    let textoRec = "<span class = 'titulo'>" + receita.nome + "</span><br><br><span class='subtitulo'>Ingredientes:</span><br><br>";

    if(receita.ingred1){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred1Q? (receita.ingred1Q * pessoas + " ") : 
    "") + receita.ingred1 + "<br>"}

    if(receita.ingred2){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred2Q? (receita.ingred2Q * pessoas + " ") : 
    "") + receita.ingred2 + "<br>"}

    if(receita.ingred3){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred3Q? (receita.ingred3Q * pessoas + " ") : 
    "") + receita.ingred3 + "<br>"}

    if(receita.ingred4){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred4Q? (receita.ingred4Q * pessoas + " ") : 
    "") + receita.ingred4 + "<br>"}

    if(receita.ingred5){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred5Q? (receita.ingred5Q * pessoas + " ") : 
    "") + receita.ingred5 + "<br>"}

    if(receita.ingred6){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred6Q? (receita.ingred6Q * pessoas + " ") : 
    "") + receita.ingred6 + "<br>"}

    if(receita.ingred7){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred7Q? (receita.ingred7Q * pessoas + " ") : 
    "") + receita.ingred7 + "<br>"}

    if(receita.ingred8){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred8Q? (receita.ingred8Q * pessoas + " ") : 
    "") + receita.ingred8 + "<br>"}

    if(receita.ingred9){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred9Q? (receita.ingred9Q * pessoas + " ") : 
    "") + receita.ingred9 + "<br>"}

    if(receita.ingred10){textoRec = textoRec + "&nbsp&nbsp• " + (receita.ingred10Q? (receita.ingred10Q * pessoas + " ") : 
    "") + receita.ingred10 + "<br>"}

    textoRec = textoRec + "<br><span class='subtitulo'> Preparo:</span><br><br>" + receita.preparo;
    document.getElementById("texto-receita").innerHTML = textoRec;
}

// onclick="adicionarReceita ()" no botão
function adicionarReceita(){
    let nome = document.getElementById("nome-receita").value;
    let ing1Q = document.getElementById("ing1Q").value;
    let ing1 = document.getElementById("ing1").value;
    let ing2Q = document.getElementById("ing2Q").value;
    let ing2 = document.getElementById("ing2").value;
    let ing3Q = document.getElementById("ing3Q").value;
    let ing3 = document.getElementById("ing3").value;
    let ing4Q = document.getElementById("ing4Q").value;
    let ing4 = document.getElementById("ing4").value;
    let ing5Q = document.getElementById("ing5Q").value;
    let ing5 = document.getElementById("ing5").value;
    let ing6Q = document.getElementById("ing6Q").value;
    let ing6 = document.getElementById("ing6").value;
    let ing7Q = document.getElementById("ing7Q").value;
    let ing7 = document.getElementById("ing7").value;
    let ing8Q = document.getElementById("ing8Q").value;
    let ing8 = document.getElementById("ing8").value;
    let ing9Q = document.getElementById("ing9Q").value;
    let ing9 = document.getElementById("ing9").value;
    let ing10Q = document.getElementById("ing10Q").value;
    let ing10 = document.getElementById("ing10").value;
    let preparo = document.getElementById("preparo").value;

    if(nome!="" && ing1!="" && preparo!=""){
        let receita =
            {
                "id": receitas.length,
                "nome": nome,
                "ingred1Q": ing1Q,
                "ingred1": ing1,
                "ingred2Q": ing2Q,
                "ingred2": ing2,
                "ingred3Q": ing3Q,
                "ingred3": ing3,
                "ingred4Q": ing4Q,
                "ingred4": ing4,
                "ingred5Q": ing5Q,
                "ingred5": ing5,
                "ingred6Q": ing6Q,
                "ingred6": ing6,
                "ingred7Q": ing7Q,
                "ingred7": ing7,
                "ingred8Q": ing8Q,
                "ingred8": ing8,
                "ingred9Q": ing9Q,
                "ingred9": ing9,
                "ingred10Q": ing10Q,
                "ingred10": ing10,
                "preparo": preparo
            }
        receitas.push(receita);
        updateSelect();
        alert("Receita adicionada!");
        limparFormulatio();   
    }else{
        alert("Por favor adicione Nome, Preparo e pelo menos um Ingrediente!")
    }
}

function limparFormulatio (){
    document.getElementById("nome-receita").value = "";
    document.getElementById("ing1Q").value = "";
    document.getElementById("ing1").value = "";
    document.getElementById("ing2Q").value = "";
    document.getElementById("ing2").value = "";
    document.getElementById("ing3Q").value = "";
    document.getElementById("ing3").value = "";
    document.getElementById("ing4Q").value = "";
    document.getElementById("ing4").value = "";
    document.getElementById("ing5Q").value = "";
    document.getElementById("ing5").value = "";
    document.getElementById("ing6Q").value = "";
    document.getElementById("ing6").value = "";
    document.getElementById("ing7Q").value = "";
    document.getElementById("ing7").value = "";
    document.getElementById("ing8Q").value = "";
    document.getElementById("ing8").value = "";
    document.getElementById("ing9Q").value = "";
    document.getElementById("ing9").value = "";
    document.getElementById("ing10Q").value = "";
    document.getElementById("ing10").value = "";
    document.getElementById("preparo").value = "";
}

// --- Fim das funções