//code for Total carbs, protein , fats , calories;
var table=document.getElementById('table');
var carbs = 0, protein = 0, fats = 0, calories = 0;
for(var i=1; i<table.rows.length-1;i++){
    carbs+=parseFloat(table.rows[i].cells[1].innerHTML)
    carbs=Math.round(carbs)
    protein+=parseFloat(table.rows[i].cells[2].innerHTML)
    protein=Math.round(protein)
    fats+=parseFloat(table.rows[i].cells[3].innerHTML)
    fats=Math.round(fats)
    calories+=parseFloat(table.rows[i].cells[4].innerHTML)
    calories=Math.round(calories)
}
//inserting data in the each column
document.getElementById("totalCarbs").innerHTML = '<b>' + carbs + '(gm)</b>'
document.getElementById("totalProtien").innerHTML = '<b>' + protein + '(gm)</b>'
document.getElementById("totalFats").innerHTML = '<b>' + fats + '(gm)</b>'
document.getElementById("totalCalories").innerHTML = '<b>' + calories + '(kcal)</b>'

//code for progress bar
calper=(calories/2000)*100;
document.getElementsByClassName('progress-bar')[0].setAttribute('style','width:'+calper+'%')

//calculating percentage
var total = carbs+protein+fats;
var carbsP = Math.round((carbs/total) * 100);
var protienP = Math.round((protein/total) * 100);
var fatsP = Math.round((fats/total) * 100);

//inserting data in the chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Carbs ' + carbsP + '%', 'Protein ' + protienP + '%', 'Fats ' + fatsP + '%'],
        datasets: [{
            label: '# of food',
            data: [carbsP, protienP, fatsP],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
        }]
    },

});