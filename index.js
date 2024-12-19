const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

const subBtn = document.getElementById("SubBtn")

function subProm(){
    window.alert("submitted sucessfully")
}

const siUP = document.getElementById("siUP")

function signIN() {
    window.alert("signed in sucessfully!!")
}

const sinIn = document.getElementById("sinIn")
function sgn(){
    let a = prompt("Email")
    let b = prompt("Password")

    window.alert(a + "\n" + "*******" + "\n" + "Signup sucessfully")
}

const item1 = document.querySelector("#item1")
function rv() {
    item1.innerHTML ='<td></td>'
    window.alert("Item removed")
}

const item2 = document.querySelector("#item2")
function rv2() {
    item2.innerHTML ='<td></td>'
    window.alert("Item removed")
}

const item3 = document.querySelector("#item3")
function rv3() {
    item3.innerHTML ='<td></td>'
    window.alert("Item removed")
}

const item4 = document.querySelector("#item4")
function rv4() {
    item4.innerHTML ='<td></td>'
    window.alert("Item removed")
}

function pay() {
    window.alert("Order Placed")
}

const cup = document.querySelector("#cup")
function apply() {
    a = cup.value
    window.alert(a + "\n" +"Coupon applied")
}