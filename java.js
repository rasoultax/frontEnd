

$("#sVal").on("focusout",function(){
    let n1=$('#fVal').val();
    let n2=$('#sVal').val();
    let opr=$('#oper').val();
    let r=(n1+opr+n2)
    $("#pRes").html(eval(r));
    
    console.log

});