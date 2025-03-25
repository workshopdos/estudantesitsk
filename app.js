var arr = [];

function add(){
    if (localStorage.meuArr){
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }

    let nome = document.getElementById("nome").value;
    arr.push(nome);
    document.getElementById("nome").value = "";

    let sobrenome = document.getElementById("sobrenome").value;
    arr.push(sobrenome);
    document.getElementById("sobrenome").value = "";
    
    localStorage.meuArr = JSON.stringify(arr);

    if (localStorage.meuArr){
        arr = JSON.parse(localStorage.getItem('meuArr'));
    };

    for (var i in arr){
        console.log(arr[i]); 
    };
};
