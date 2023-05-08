// document.addEventListener('DOMContentLoaded', function () {

    const waiterName = document.querySelector('.waiterName');
    const rateWaiterBtn = document.querySelector('.rateWaiter');
    const message = document.querySelector('.message');

    const waiterNameLookup = document.querySelector('.waiterNameLookup');
    const currentRating = document.querySelector('.currentRating');
    const getRatingBtn = document.querySelector('.getRating');

    const ratings = {};

    rateWaiterBtn.addEventListener('click', function () {

        const selectedRating = document.querySelector(".rating:checked");
        if (selectedRating) {

            // store the rating for a selected waiter
            
            // check if there is already a rating for the current waiter...?
            // if there is calculate the average & store the average

            if (ratings[waiterName.value]) {
                // this code will run if the waiter has a rating...
                ratings[waiterName.value] = (ratings[waiterName.value] + Number(selectedRating.value))/2
            } else {
                // this code will only run if the waiter doesn't have a rating yet.
                ratings[waiterName.value] = Number(selectedRating.value);
            }

            // otherwise just create a new rating for this waiter
            message.innerHTML = "Thanks for rating " +  waiterName.value;

        }
    });

    getRatingBtn.addEventListener('click', function () {

        const waiterName = waiterNameLookup.value;
        const rating = ratings[waiterName];

        if (rating) {
            const ratingMessage = "The rating for " + waiterName + " is " + rating;
            currentRating.innerHTML = ratingMessage;
        } else {
            currentRating.innerHTML = "There is no rating for " + waiterName;
        }
    });

// });