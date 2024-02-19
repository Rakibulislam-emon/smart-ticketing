document.getElementById('buyticket').addEventListener('click',function(){
    let paribahanSection = document.getElementById('paribahan');
    paribahanSection.scrollIntoView({behavior: "smooth"})
})




const selectedTickets = [];

let totalSeatLeft = 8;
let bookedSeat = 0;
let totalPrice = 0;
let grandTotalPrice = 0;
document.getElementById("booked-seat").innerText = bookedSeat;
document.getElementById("total-seat").innerText = totalSeatLeft;
document.getElementById("total-price").innerText = totalPrice;
document.getElementById("grand-total-price").innerText = grandTotalPrice;
function handleClick(e) {
  const value = e.textContent;
  if (selectedTickets?.length < 4) {
    selectedTickets.push(value);
    e.classList.add("bg-green-500");
    totalSeatLeft--;
    bookedSeat++;
    totalPrice += 550;
    grandTotalPrice += 550;
    document.getElementById("booked-seat").innerText = bookedSeat;
    document.getElementById("total-seat").innerText = totalSeatLeft;
    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("grand-total-price").innerText = grandTotalPrice;
  }
}


function clickToShow(){
    toAddHiddenClass('main')
    toAddHiddenClass('nav')
    toAddHiddenClass('header')
   toRemoveHiddenClass('last-item')
}
function toAddHiddenClass(element){
    const main = document.getElementById(element);
     main.classList.add('hidden')  
}
function toRemoveHiddenClass (element){
    const main = document.getElementById(element);
     main.classList.remove('hidden')
}