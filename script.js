function book(){
    var who = document.getElementById("who").value;
    var note = document.getElementById("note").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    document.getElementById('log').innerHTML += 
    `<h3>Møterom booked by: ${who}</h3>
    <h3>reason: ${note}</h3>
    <h3>from: ${start}</h3>
    <h3>to: ${end}</h3>
    `;
}
sumbit = document.getElementById("submit")
sumbit.addEventListener("click", book);

