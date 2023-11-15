// function unesiBroj() {
//     var broj = prompt("Unesite broj od 1 do 5", "1");
//     if (broj != null || !isNaN(broj)) {
//         switch (broj) {
//             case 1:
//                 var citat1 = document.getElementById("dugme");
//                 citat1.innerHTML = "Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.";
//                 break;

//             case 2:
//                 var citat2 = document.getElementById("dugme");
//                 citat2.innerHTML = "Kreativan čovek motivisan je željom da postigne, a ne željom da pobedi druge.";
//                 break;

//             case 3:
//                 var citat3 = document.getElementById("dugme");
//                 citat3.innerHTML = "Neka ti udica bude uvek bačena. U jezeru u kojem najmanje očekuješ, pojaviće se riba.";
//                 break;

//             case 4:
//                 var citat4 = document.getElementById("dugme");
//                 citat4.innerHTML = "Preko noći postaje slavan samo onaj ko je danima neumorno radio.";
//                 break;

//             case 5:
//                 var citat5 = document.getElementById("dugme");
//                 citat5.innerHTML = "Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može.";
//                 break;
//         }
//     }
//     else if (isNan(broj)) {
//         alert("Niste uneli broj!");
//     }
//     else if (broj < 1 || broj > 5) {
//         alert("Unesen broj mora biti izmedju 1 i 5!");
//     }
//     else {
//         alert("Kliknuli ste Cancel dugme");
//     }
// };




// function unesiBroj() {
//     var broj = prompt("Unesite broj od 1 do 5", "1");
//     switch (broj) {
//         case 1:
//             var citat1 = document.getElementById("dugme");
//             citat1.innerHTML = "Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.";
//             break;

//         case 2:
//             var citat2 = document.getElementById("dugme");
//             citat2.innerHTML = "Kreativan čovek motivisan je željom da postigne, a ne željom da pobedi druge.";
//             break;

//         case 3:
//             var citat3 = document.getElementById("dugme");
//             citat3.innerHTML = "Neka ti udica bude uvek bačena. U jezeru u kojem najmanje očekuješ, pojaviće se riba.";
//             break;

//         case 4:
//             var citat4 = document.getElementById("dugme");
//             citat4.innerHTML = "Preko noći postaje slavan samo onaj ko je danima neumorno radio.";
//             break;

//         case 5:
//             var citat5 = document.getElementById("dugme");
//             citat5.innerHTML = "Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može.";
//             break;
//         default:
//             if (isNan(broj)) {
//                 alert("Niste uneli broj!");
//             }
//             else if (broj < 1 || broj > 5) {
//                 alert("Unesen broj mora biti izmedju 1 i 5!");
//             }
//             else {
//                 alert("Kliknuli ste Cancel dugme");
//             }
//             break;
//     }
// };



function unesiBroj() {
    var broj = prompt("Unesite broj od 1 do 5", "1");
    if (broj != null && isNaN(broj)) {
        alert("Niste uneli broj!");
    }

    else if (broj != null && broj < 1 || broj > 5) {
        alert("Unesen broj mora biti izmedju 1 i 5!");
    }

    else if (broj == 1) {

        var citat1 = document.getElementById("p1");
        citat1.innerHTML = "Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.";
    }


    else {
        alert("Kliknuli ste Cancel dugme");
    }
};