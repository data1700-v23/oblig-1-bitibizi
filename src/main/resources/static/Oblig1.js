const list = []

kjop = () => {


    let film = document.getElementById("film").value
    let antall = document.getElementById("antall").value
    let fornavn = document.getElementById("fornavn").value
    let etternavn = document.getElementById("etternavn").value
    let tlf = document.getElementById("tlf").value
    let email = document.getElementById("email").value

    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        tlf: tlf,
        email: email
    }

    let ut = "<table class='table'><tr>" + "<th>FILM</th><th> ANTALL</th><th>FORNAVN</th><th>ETTERNAVN</th><th>TELEFONNR</th><th>EPOST</th></tr>"


    console.log(antall)

    let isValidInput = true
    if (film === "Velg film her") {
        document.getElementById("feilFilm").style.display = "inline";
        isValidInput = false
    } else{
        document.getElementById("feilFilm").style.display="none";
    }

    if (antall === "") {
        document.getElementById("feilAntall").style.display = "inline";
        isValidInput = false
    } else {
        document.getElementById("feilAntall").style.display = "none"
    }

    if (fornavn === "") {
        document.getElementById("feilFornavn").style.display = "inline"
        isValidInput = false
    } else {
        document.getElementById("feilFornavn").style.display = "none"
    }

    if (etternavn === "") {
        document.getElementById("feilEtternavn").style.display = "inline"
        isValidInput = false
    } else {
        document.getElementById("feilEtternavn").style.display = "none"
    }

    if (tlf === "") {
        document.getElementById("feiltlf").style.display = "inline"
        isValidInput = false
    } else {
        document.getElementById("feiltlf").style.display = "none"
    }

    if (email === "") {
        document.getElementById("feilepost").style.display = "inline"
        isValidInput = false
    } else {
        document.getElementById("feilepost").style.display = "none"
    }

    if (isValidInput) {

        console.log(list)
        list.push(billett)
        for (let b of list) {

            ut += "<tr>"
            ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.tlf + "</td><td>" + b.email + "</td>"
            ut += "</tr>"
        }

        ut += "</table>"

        document.getElementById("feilFilm").style.display = "none"
        document.getElementById("feilAntall").style.display = "none"
        document.getElementById("feilFornavn").style.display = "none"
        document.getElementById("feilEtternavn").style.display = "none"
        document.getElementById("feilepost").style.display = "none"

        document.getElementById("visbillett").innerHTML = ut

        film="Velg film her"
        antall = '';
        fornavn = '';
        etternavn = '';
        tlf = '';
        email = '';
    }




}

slett = () => {
    list.length = 0
    document.getElementById("visbillett").innerHTML = ""
}



