

let showPassword1 = document.getElementById("password1");
let showPassword2 = document.getElementById("password2");


function generateP() {
    var password = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i <= 15; i++) {
        var creaIt = Math.floor(Math.random()
                    * characters.length + 1);
          
        password += characters.charAt(creaIt)
    }
      
    return password;
}

function createPassword() {
    showPassword1.innerHTML = generateP();
    showPassword2.innerHTML = generateP();
}

