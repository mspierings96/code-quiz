var btnclearScores = document.getElementById('clearScores');

var getItems=localStorage.getItem("Mitchell");

for (var i=0; i<localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage[key];
    var listItem = document.createElement("li");
    listItem.innerHTML=key + " " + value;
    document.getElementById("scoresList").appendChild(listItem);
};

clearScores.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

returnHome.addEventListener("click", function () {
    window.location.replace("./index.html");
});