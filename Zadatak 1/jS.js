function unesiBroj() {
    var broj = prompt("Unesite broj od 1 do 5", "1");

    if (broj != null && isNaN(broj)) {
        alert("Niste uneli broj!");
    }

    else if (broj != null && broj < 1 || broj > 5) {
        alert("Unesen broj mora biti izmedju 1 i 5!");
    }

    else if (broj != null && broj >= 1 && broj <= 5) {
        var niz = ["Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.", "Kreativan čovek motivisan je željom da postigne, a ne željom da pobedi druge.", "Neka ti udica bude uvek bačena. U jezeru u kojem najmanje očekuješ, pojaviće se riba.", "Preko noći postaje slavan samo onaj ko je danima neumorno radio.", "Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može."];
        switch (broj) {
            case "1":
                document.write(niz[0]);
                break;
            case "2":
                document.write(niz[1]);
                break;
            case "3":
                document.write(niz[2]);
                break;
            case "4":
                document.write(niz[3]);
                break;
            default:
                document.write(niz[4]);
                break;
        }
    }

    else {
        alert("Kliknuli ste Cancel dugme");
    }
};