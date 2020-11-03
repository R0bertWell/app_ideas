let box_preview = document.getElementById("box-preview");

let input_top_l = document.getElementById("input-top-l");
let input_top_r = document.getElementById("input-top-r");
let input_bottom_l = document.getElementById("input-bottom-l");
let input_bottom_r = document.getElementById("input-bottom-r");
let btn_equal = document.getElementById("btn-equals");

let btn_coppy = document.getElementById("btn-coppy");

input_top_l.onchange = atualizarPreview;
input_top_r.onchange = atualizarPreview;
input_bottom_l.onchange = atualizarPreview;
input_bottom_r.onchange = atualizarPreview;

btn_coppy.onclick = copiarPropriedade;
btn_equal.onclick = equalizarPropriedade;

function atualizarPreview(){
    validarCampos(); 
    let propriedade = "border-radius: "
    +input_top_l.value+"px " +input_top_r.value+"px "
    +input_bottom_r.value+"px "+input_bottom_l.value + "px;";
    console.log(propriedade);
    document.getElementById("input-prop").value = propriedade;
    box_preview.style= propriedade; 
}

function validarCampos(){
    var inputs = [
        input_top_l,
        input_top_r,
        input_bottom_r,
        input_bottom_l
    ];
    for(valor of inputs){
        if(valor.value.length === 0 || valor.value<0 ){
            valor.value= 0;
        } else if(valor.value>350){
            valor.value=350;
        }
    }
}

function copiarPropriedade(){
    var input_prop = document.getElementById("input-prop");
    if(input_prop.value.length === 0) return;
    input_prop.select();
    input_prop.setSelectionRange(0,99999);
    document.execCommand("copy");
    window.alert("Propriedade copiada: " + input_prop.value);
}

function equalizarPropriedade(){
    var geral = "border-radius: "
    +input_top_l.value+"px "
    +input_top_l.value+"px "
    +input_top_l.value+"px "
    +input_top_l.value+"px;";
    input_bottom_l.value=input_top_l.value;
    input_bottom_r.value=input_top_l.value;
    input_top_r.value=input_top_l.value;
    document.getElementById("input-prop").value = geral;
    box_preview.style = geral;
}