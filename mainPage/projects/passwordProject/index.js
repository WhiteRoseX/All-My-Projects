const dataLowercase ="azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols ="*£$ù%:!§/-+.=_(#&";
const passwordOutput = document.getElementById('password-output')

const rangeValue = document.getElementById("password-length");


function generatePassword () {
    let data = [];
    let password = "";
    if (lowercase.checked) data.push(...dataLowercase)
    if (uppercase.checked) data.push(...dataUppercase)
    if (number.checked) data.push(...dataNumber)
    if (symbols.checked) data.push(...dataSymbols)
    
    if (data.length === 0) {
     alert("Veuillez selectionner des critères");
     return;
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }
    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand("copy") // jsp pk il l'as barré 

    generateButton.textContent = 'Copied !'
    
    setTimeout(() => {
        generateButton.textContent = "Génerer mot de passe"
    }, 2000);
}

generateButton.addEventListener("click", generatePassword)