var dateEl = document.getElementById('date');
var timeEl = document.getElementById('time');
var date = moment().format("MMMM Do, YYYY - hh:mm:ss a");

var updateDate = function() {
    var time = moment().format('hh:mm:ss a');
    var date = moment().format("MMMM Do, YYYY");

    dateEl.textContent = date;
    timeEl.innerHTML = time;
};

updateDate();
setInterval(updateDate, 100);


//hour  text shtuff

var nineEl = document.getElementById('9am');
var ten = document.getElementById('10am');
var elevenEl = document.getElementById('11am');
var twelveEl = document.getElementById('12am');
var oneEl = document.getElementById('13am');
var twoEl = document.getElementById('14am');
var threeEl = document.getElementById('15am');
var fourEl = document.getElementById('16am');
var fiveEl = document.getElementById('17am');

var hour = moment().hours();

checkTime = function() {
    var times = document.getElementsByClassName('hours')

    for (let i = 0; i < times.length; i++) {
        if (hour > times[i].id) {
            times[i].classList.add("bg-danger");
        } else if (hour < times[i].id) {
            times[i].classList.add("bg-success")           
        } else {
            times[i].classList.add("bg-light")
        }
    }
}

$(".addBtn").on("click", function() {
    event.preventDefault();
    var text = document.getElementById("5pm");
    text.innerHTML=text.value;
    console.log(text.value)
})


checkTime();
