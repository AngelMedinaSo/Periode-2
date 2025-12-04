let jaar = prompt("Welke jaar ben je geboren?")

        let leeftijd = 2025 - jaar;

        document.getElementById("paragraaf").innerText = "Je bent ongeveer " + leeftijd + " jaar oud.";

        console.log(jaar);
        console.log(leeftijd);