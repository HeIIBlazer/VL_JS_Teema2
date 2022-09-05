//функция расчета площади 
function areaRectangle(){
    var n1 = document.myForm.t1.value;//длина

    var n2 = document.myForm.t2.value;//ширина

    var s = n1*n2;
    //записать в поле
    document.myForm.result.value = s;
    
}