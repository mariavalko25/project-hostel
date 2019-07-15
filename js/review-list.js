class ReviewList {
    constructor(reviewUrl, renderContainer) {
      fetch(reviewUrl)
        .then(result => result.json())
        .then(reviews => {
          this.reviews = reviews;
          this.renderReviews(renderContainer, reviews);
          //this.addEventListeners();
        });
    }
    getReviwById(id) {
      return this.reviews.find(el => el.id === id);
    }
    renderReviews(container, reviews) {
      let reviewListDomString = '';
      reviews.forEach(review => {
        reviewListDomString += `<div class="swiper-slide">
                                  <div class="feedback__item" data-id="${review.id}">
                                      <div class="feedback__img">
                                          <img src="img/client.png" alt="${review.name}">
                                      </div>
                                      <div class="feedback__descr">
                                          <div class="feedback__name">${review.name} ${review.surname}</div>
                                          <div class="feedback__text">${review.description}</div>
                                      </div>
                                  </div>
                                </div>`;
      });
      container.html(reviewListDomString);
    }
    /*addEventListeners() {
      $('#reserveModal').on('show.bs.modal', event => {
        const button = $(event.relatedTarget); // Button that triggered the modal
        const id = String(button.data('id')); // Extract info from data-* attributes
        const review = this.getReviwById(id);
        const modal = $('#reserveModal');
        modal.find('.modal-dialog .hotelCatalog__title').text(review.title);
        modal.find('.modal-body .hotelCatalog__price').text(review.price);
        modal
          .find('button.hotelCatalog__btn')
          .data('id', id);
      });
    }*/
  }
  