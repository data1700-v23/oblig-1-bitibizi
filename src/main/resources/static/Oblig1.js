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
    if (antall === "") {
        document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antall"
    }
    if (fornavn === "") {
        document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i fornavnet"
    }
    if (etternavn === "") {
        document.getElementById("feilEtternavn").innerHTML = "Må skrive noe inn i etternavnet"
    }
    if (tlf === "") {
        document.getElementById("feiltlf").innerHTML = "Må skrive noe inn i telefonnr"
    }
    if (email === "") {
        document.getElementById("feilepost").innerHTML = "Må skrive noe inn i epost"
    } else {

        console.log(list)
        list.push(billett)
        for (let b of list) {

            ut += "<tr>"
            ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.tlf + "</td><td>" + b.email + "</td>"
            ut += "</tr>"
        }

        ut += "</table>"

        document.getElementById("feilAntall").value=''
        document.getElementById("feilFornavn").value=''
        document.getElementById("feilEtternavn").value=''
        document.getElementById("feiltlf").value=''
        document.getElementById("feilepost").value=''

    }
    document.getElementById("visbillett").innerHTML = ut

    document.getElementById("antall").value = '';
    document.getElementById("fornavn").value = '';
    document.getElementById("etternavn").value = '';
    document.getElementById("tlf").value = '';
    document.getElementById("email").value = '';




}

slett = () => {
    list.length = 0
    document.getElementById("visbillett").innerHTML = ""
}



