const form = document.querySelector('form')
const email = document.getElementById('email')
const country = document.getElementById('country')
const zip = document.getElementById('zip')
const password = document.getElementById('password')
const confirmation = document.getElementById('confirmation')
const button = document.querySelector('button')

const emailError = document.querySelector('.email', '.Error')
const countryError = document.querySelector('.country', '.Error')
const zipError = document.querySelector('.zip', '.Error')
const passwordError = document.querySelector('.password', '.Error')
const confirmationError = document.querySelector('.confirmation', '.Error')

email.addEventListener('input', function() {
    if (email.validity.valid) {
        emailError.textContent  = "";
    } else {
        if (email.validity.typeMismatch) {
            emailError.textContent = "Email expected"
        } else if (email.validity.tooShort) {
            emailError.textContent = `Nine characters expected, characters
            entered: ${email.value.length}`
        }
    }
});

country.addEventListener('input', () => {
    if (/[A-Z]/.test(country.value.charAt(0))) {
        countryError.textContent = ''
    } else {
        countryError.textContent = 'Country name should start with large letter'
    }
})

zip.addEventListener('input', () => {
    if (/\d\d-\d\d\d/.test(zip.value)) {
        zipError.textContent = ''
    } else {
        zipError.textContent = 'Expected pattern: xx-xxx'
    }
})

password.addEventListener('input', () => {
    if (/[A-Z]/.test(password.value) && 
        /[a-z]/.test(password.value) &&
        /[0-9]/.test(password.value)) {
        passwordError.textContent = ''
    } else {
        passwordError.textContent = 'Password must contain [A-Z], [a-z] and [0-9]'
    }
})

confirmation.addEventListener('input', () => {
    if (confirmation.value === password.value) {
        confirmationError.textContent = ''
    } else {
        confirmationError.textContent = 'Confirmed password should be the same'
    }
})

button.addEventListener('click', (e) => {
    if (!email.validity.valid ||
        !country.validity.valid ||
        !zip.validity.valid ||
        !password.validity.valid ||
        !confirmation.validity.valid
        ) {
            e.preventDefault();
        }
})

console.log(/[A-Z]/.test('aBc'))