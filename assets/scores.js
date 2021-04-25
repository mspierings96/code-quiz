var btnclearScores = document.getElementById('clearScores');


btnclearScores.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});