document.getElementById('display').addEventListener('click', function() {
    var people = document.getElementById('people').value;
    var days = document.getElementById('days').value;
    var location = document.getElementById('location').value;

    document.getElementById('reportPeople').innerText = people;
    document.getElementById('reportDays').innerText = days;
    document.getElementById('reportLocation').innerText = location;

    document.getElementById('report').style.display = 'table';
});
