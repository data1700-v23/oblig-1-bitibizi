
kjop = () =>{

    const list=[]
    let ut="<table><tr>"+ "<th>Film</th><th>ANTALL</th><th>FORNAVN</th><th>ETTERNAVN</th><th>TELEFONNR</th><th>EPOST</th></tr>"

    const film=document.getElementById("film").value
    const antall=document.getElementById("antall").value
    const fornavn=document.getElementById("fornavn").value
    const etternavn=document.getElementById("etternavn").value
    const tlf=document.getElementById("tlf").value
    const email=document.getElementById("email").value

    const billett={
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        tlf: tlf,
        email: email}

    if(isNaN(antall)||antall===null|| fornavn===null|| etternavn===null|| tlf===null||email===null ){
        document.getElementById("feilAntall").innerHTML="Må skrive noe inn i antall"
        document.getElementById("feilFornavn").innerHTML="Må skrive noe inn i fornavnet"
        document.getElementById("feilEtternavn").innerHTML="Må skrive noe inn i etternavnet"
        document.getElementById("feiltlf").innerHTML="Må skrive noe inn i telefonnr"
        document.getElementById("feiltlf").innerHTML="Må skrive noe inn i epost"
    }else{

        list.push(billett)
        console.log(billett)
        document.getElementById(antall).reset()
        document.getElementById(fornavn).reset()
        document.getElementById(etternavn).reset()
        document.getElementById(tlf).reset()
        document.getElementById(email).reset()


        console.log(list)


        for(let b of list){
            ut+="<tr>"
            ut+="<td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.tlf+"</td><td>"+b.email+"</td>"
            ut+= "</tr>"
        }

    ut+="</table>"

    }
    document.getElementById("visbillett").innerHTML=ut

}



