const getCountDown=document.getElementById("getCountDown");

$(document).ready(function () {
    $('#date-input').dateDropper({
        large: true,
    });
});
var selectedDate;
var strSelectedTime;
var selectedTimeHours;
var selectedTimeMinutes;
$('#date-input').change(function () {
        
    selectedDate= new Date($(this).val());
});
$('#time-input').change(function () {
    selectedTime= $(this).val();
    strSelectedTime=selectedTime.toString();
    selectedTimeHours=parseInt(strSelectedTime.substring(0,2));
    selectedTimeMinutes=parseInt(strSelectedTime.substring(3,5));
    console.log(selectedTimeHours);
    console.log(selectedTimeMinutes);
});


function countDown(){
    let nowDate = new Date();
    console.log(nowDate);
    
    let resultDate=nowDate-selectedDate;
    let cYears=nowDate.getFullYear()-selectedDate.getFullYear();
    let cDay=Math.floor((resultDate/1000) /60/60/24);
    let cHours=Math.floor((resultDate/1000) /60/60%24)-selectedTimeHours;
    let cMin=Math.floor((resultDate/1000) /60%60)-selectedTimeMinutes;
    let cSec=Math.floor((resultDate/1000) %60);
    
    if(cMin<0){
        cMin+=60;
        cHours--;
    }
    if(cHours<0){
        cHours+=24;
        cDay--;
    }
    if(cDay<0){
        alert("Lütfen Tekrar Deneyiniz.")
    }

    console.log(addZero(cYears),'-',addZero(cDay),'-',addZero(cHours),'-',addZero(cMin),'-',addZero(cSec))
    getCountDown.innerHTML=addZero(cDay)+'-'+addZero(cHours)+'-'+addZero(cMin)+'-'+addZero(cSec);
}
setInterval(countDown,1000);



function addZero(value){
    if(value<10)
        return "0"+value;
    else
        return value;
}