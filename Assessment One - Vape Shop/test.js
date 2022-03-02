function verifyForm() {
    let age = parseInt(document.getElementById("numb").value);
    let country = parseInt(document.getElementById("country").value);

    console.log(country);
    if (age >= 18 && country == 3) {
        console.log("accepted");
        alert("Thank you, you may continue shopping.");
        openNav();
    } else {
        console.log("denied");
        alert("Sorry you are not able to shop with us");
        location.href = "https://www.google.com/";
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}