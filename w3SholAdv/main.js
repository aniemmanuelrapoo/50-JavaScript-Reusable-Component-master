const header = document.getElementById('header')

const myFuntion = (p1, p2) => {
    let dot = p1 + p2
    return dot
}

const person = { 
    firstName: "Rapoo",
    lastName: 'Man', 
    age: 20, 
    eyeColor: 'Blue',
    fullName: function fullName (){
        return `${this.firstName} ${this.lastName}`
    },

}

// header.innerHTML = `this is okay ${person.fullName()}`

const btnClick = document.getElementById('btnClick')

let text = [48, 65, 87, 92]

let text1 = 'the boy is here and the boy is gone'
let text2 = 'theboyishere'
let textnew = text1.replace(/boy is/g, 'girl was')

let textCapi = textnew.toUpperCase()
let contactBox = text1.concat(' ', 'doing nothinf')
let trimbox = text1.trim()
let stringPd = ' two'
let stringpadBox = stringPd.padStart(8, 0)

let chartatBox = text1.charAt(1)
let propertAcc = text1[1]
let split1 = text2.split("")
let indexofBox = text1.indexOf('boy', 10)
let searchBox = text1.search('boy')

let num1 = 20
let num2 = '10'
let pre = 10.8457234
let numToSring = num1.toString()
let numToExpon = num1.toExponential()
let numToFixed = num1.toFixed(5)
let presion = pre.toPrecision(5)
let valOf = num1.valueOf()
let highest = Number.MAX_VALUE
let lowest = Number.MIN_VALUE
let postiveInf = Number.POSITIVE_INFINITY

btnClick.addEventListener('click', () => {
    header.innerHTML = postiveInf
})

//Array....................





