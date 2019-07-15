const roomList = new RoomsList(
    'rooms.json',
    $('.hotelCatalog__outer')
);

const reviewList = new ReviewList(
    'reviews.json',
    $('.js-feedback-wrapper')
);


const form = document.querySelector('.form-reserve');
const btnReserve = document.querySelector('.btn-reserve');
//form.addEventListener('submit', this.reserve);

$('body').on('submit', '.form-reserve', function(e) {
    e.preventDefault();
    const self = this;

    const data = {
        clientName: $(self).find('input[name=userName]').val(),
        clientEmail: $(self).find('input[name=userMail]').val(),
        clientTel: $(self).find('input[name=userTel]').val(),
        dateFrom: $(self).find('input[name=userArrival]').val(),
        dateEnd: $(self).find('input[name=userDeparture]').val()
    }

    console.log(self.checkValidity());

    if (self.checkValidity()) {
        fetch('reserve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(responseText => console.log(responseText))
        .then( _ => self.reset())
        .catch(error => console.error('Error ', error));
    } else {
        window.showAlert('Please fill all fields', false);
        $(self).find('.form__control').addClass('form-control-error');
    }
});


/*function reserve(ev) {
    ev.preventDefault();
    const self = this;
    const data = {
        clientName: this.querySelector('.form input[name=userName]').value,
        clientEmail: this.querySelector('.form input[name=userMail]').value,
        clientTel: this.querySelector('.form input[name=userTel]').value,
        dateFrom: this.querySelector('.form input[name=userArrival]').value,
        dateEnd: this.querySelector('.form input[name=userDeparture]').value
    }
    if (self.checkValidity()) {
        //ev.preventDefault();
        
        fetch('reserve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(responseText => console.log(responseText))
        .then( _ => self.reset())
        .catch(error => console.error('Error ', error));
    } else {
        window.showAlert('Please fill all fields', false);
        alert('Заповніть всі поля форми!');
    }
}*/

/*const formReview = document.querySelector('.form-review');
const btnReview = document.querySelector('.btn-review');
formReview.addEventListener('submit', sendReview);

function sendReview(ev) {
    ev.preventDefault();
    console.log('success');
    const data = {
        clientName: document.querySelector('.form-review input[name=user-review-name]').value,
        clientSurname: document.querySelector('.form-review input[name=user-review-surname]').value,
        clientText: document.querySelector('.js-textarea').value
    }
    
    if (formReview.checkValidity()) {
        
        fetch('review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(responseText => console.log(responseText))
        .then( _ => document.querySelector('.form-review').reset())
        .catch(error => console.error('Error ', error));
    } else {
        alert('Заповніть всі поля форми!');
    }
}*/


