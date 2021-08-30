function validate() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var male = document.getElementById('male').checked
    var female = document.getElementById('female').checked
    var postCode = document.getElementById('postalcode').value
    var address = document.getElementById('address').value
    var select = document.getElementById('select').value
    var creditCard = document.getElementById('creditcard').value
    var agreement = document.getElementById('agreement').checked


    if (name == '') {

        alert('Name must be filled')

    } else if (name.length < 5 || name.length > 25) {

        alert('Name length must be 5-25 characters')

    } else if (email == '') {

        alert('Email must be filled')

    } else if (!email.includes('@')) {

        alert('Email must contain @')

    } else if (!email.endsWith('.com') && !email.endsWith('.co.id')) {

        alert("Email must be ended with ‘.com’ or ‘.co.id’")

    } else if (email.indexOf('@') <= 0) {

        alert("Email must not be start with '@'")

    } else if (email.includes('.@')) {

        alert('‘@’ cannot be placed after the last ‘.’ ')

    } else if (email.includes('@.')) {

        alert('‘.’ Cannot be placed right after ‘@’')

    }


    else if (!male && !female) {

        alert('Gender must be chosen')

    } else if (postCode == '') {

        alert('Postal Code must be filled')

    } else if (!postCode.length === 5) {

        alert('Postal Code must be five numbers')

    } else if (isNaN(postCode)) {

        alert('Postal Code must be numeric')

    } else if (postCode.length < 5 || postCode.length > 5) {

        alert('Postal Code must be five number')

    } else if (address == '') {

        alert('Address must be filled')

    } else if (select == '') {

        alert('Product must be chosen')

    } else if (creditCard == '') {

        alert('Credit card number must be filled')

    } else if (isNaN(creditCard)) {

        alert('Credit card number must be numeric')

    } else if (creditCard.length < 16 || creditCard.length > 16) {

        alert('Credit card number must be sixteen digits')

    } else if (agreement == '') {

        alert('agreement must be checked')

    }

    else {
        if (confirm('Transaction Success')) {
            return true
        }


    }
    return false
}





