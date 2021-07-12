let bookedSeatsElement = document.querySelector(`.booking_seats`);
let remainingSeatsElement = document.querySelector(`.remaining_seats`);
let seats = document.querySelectorAll(`.seats`);

let bookedSeats = 0;
let reaminingSeats = seats.length;

bookedSeatsElement.innerText = bookedSeats;
remainingSeatsElement.innerText = reaminingSeats;

seats.forEach((seat) => {
  seat.addEventListener(`click`, () => {
    seat.classList.toggle(`booked`);
    seat.classList.contains(`booked`) ? bookeSeats(1) : bookeSeats(-1);
  });
});

const bookeSeats = (s) => {
  bookedSeats += 1 * s;
  reaminingSeats -= 1 * s;

  bookedSeatsElement.innerText = bookedSeats;
  remainingSeatsElement.innerText = reaminingSeats;
};
