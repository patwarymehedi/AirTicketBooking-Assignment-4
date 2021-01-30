
//Main Function

function handleTicketChanges(ticket, isIncrease) {
   const ticketCount = getInputValue(ticket)
   let ticketNewCount = ticketCount;
   if (isIncrease == true) {
      ticketNewCount = ticketCount + 1;
   }
   if (isIncrease == false && ticketCount > 0) {
      ticketNewCount = ticketCount - 1;
   }
   document.getElementById(ticket + 'Quantity').value = ticketNewCount;
   // const economyPrice = ticketNewCount * 100;
   let ticketTotal = 0;
   if (ticket == 'fClass') {
      ticketTotal = ticketNewCount * 150;
   }
   if (ticket == 'economy') {
      ticketTotal = ticketNewCount * 100;
   }
   document.getElementById(ticket + 'Total').innerText = ticketTotal;
   calculateTotal();
}

//Calculation part

function calculateTotal() {
   const fClassCount = getInputValue('fClass')
   const economyCount = getInputValue('economy')
   // const fClassInput = document.getElementById('fClassQuantity');
   // const fClassCount = parseInt(fClassInput.value);

   // const economyInput = document.getElementById('economyQuantity');
   // const economyCount = parseInt(economyInput.value);
   const subTotalPrice = fClassCount * 150 + economyCount * 100;
   document.getElementById('subTotal').innerText = subTotalPrice;

   var tax = subTotalPrice * .10;
   tax = tax.toFixed(2);
   document.getElementById('tax').innerText = tax;
   tax = parseFloat(tax);

   let totalAmount = subTotalPrice + tax;
   totalAmount = totalAmount.toFixed(1);
   document.getElementById('totalAmount').innerText = totalAmount;
}
//Input part
function getInputValue(ticket) {
   const ticketInput = document.getElementById(ticket + 'Quantity');
   const ticketCount = parseInt(ticketInput.value);
   return ticketCount;
}


const checkout = document.getElementById('booking');
const bookingCompletionPage = document.getElementById('bookingCompletionPage');
bookingCompletionPage.style.display = "none";
checkout.addEventListener('click', function () {
   const booking = document.getElementById('bookingContent');
   booking.style.display = "none";
   bookingCompletionPage.style.display = "block";
   if (document.getElementById('totalAmount').innerText == 0) {
      alert("Ticket need to be booked");
      booking.style.display = "block";
      const bookingCompletionPage = document.getElementById('bookingCompletionPage');
      bookingCompletionPage.style.display = "none";
   }
})

function confirmFunction() {
     confirm("Booking Confirmed!");
}