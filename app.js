

let movies = [
    { name: 'Titanic',
      value: 15
    },
    { name: 'Avatar',
      value: 10
    },
    { name: 'No mercy',
      value: 17
    },
    { name: 'Games of throne',
      value: 14
    }
]

const movieContainer = document.querySelector('.movie_container');
const seatContainer = document.querySelector('.seats');
const seat = document.querySelectorAll('.seat');
const movieList = document.querySelector('#movie_list');
const occupied = document.querySelector('.occupied');
const changeTicketPrice = document.querySelector('.ticket');
const nextBtn = document.querySelector('.nextBtn');


let totalTicketPrice = 0;
let selectedTicketPrice = 0;
let selectedSeats = [];

movieList.addEventListener("click", () => {
    movieList.innerHTML = `
    <option value=${movies[0].value}>${movies[0].name}</option>
    <option value=${movies[1].value}>${movies[1].name}</option>
    <option value=${movies[2].value}>${movies[2].name}</option>
    <option value=${movies[3].value}>${movies[3].name}</option>
    `;
})

movieList.addEventListener("change", (e) => {
    selectedTicketPrice = +e.target.value;
    seat.forEach( el => {
        el.classList.remove('occupied');
    })
    changeTicketPrice.innerHTML = `
    <p>Select seat for the ticket amount!!!</p>
    `;
}) 


seatContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied') ) {
        e.target.classList.add('occupied');
        selectedSeats.unshift(e.target);
        updateSelectedSeats();
    } 
    else if (e.target.classList.contains('seat') && e.target.classList.contains('occupied') ) {
        e.target.classList.remove('occupied');
        selectedSeats.shift(e.target);
        updateSelectedSeats();
    } 
})

function updateSelectedSeats() {
    totalTicketPrice = selectedSeats.length * selectedTicketPrice;
    changeTicketPrice.innerHTML = `
    <p>The total price for <span class="seat-total"> ${selectedSeats.length}</span> seats is $<span class="ticket-price">${totalTicketPrice}</span></p>
    `
}


nextBtn.addEventListener('click', () => {
    
    movieContainer.innerHTML = `
    <h3 class ="payment-enquiry">Are you sure to start the payment process???</h3>
    <div class="payment-confirmation">
        <button class="accept">Accept</button>
        <button class="decline">Decline</button>
    </div>
    `;
})

