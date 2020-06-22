function kalkulator(operator){
    if ( operator == 'kali')
    {
        var a = parseInt(prompt('First input!'))
            b = parseInt(prompt('Multiply by?'))
            hasil = (a*b)
    }

    else if ( operator == 'bagi')
    {
        var a = parseInt(prompt('First input!'))
            b = parseInt(prompt('Devide by?'))
            hasil = (a / b)
    }

    else if (operator == 'kurang') 
    {
        var a = parseInt(prompt('First input!'))
            b = parseInt(prompt('Subtraction by?'))
            hasil = (a - b)
    }

    else if (operator == 'tambah')
    {
        var a = parseInt(prompt('First input!'))
            b = parseInt(prompt('Addition by?'))
            hasil = (a + b)
    }

    else {
        alert('These are not the option that we provided!')
    }

    alert('The result is ' + hasil)

    kalkulator(prompt('Choose operator that we provided : \n kali, bagi, tambah, kurang'))
}

kalkulator(prompt('Choose operator that we provided : \n kali, bagi, tambah, kurang'))
