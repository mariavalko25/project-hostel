class RoomsList {
    constructor(roomsUrl, renderContainer) {
      fetch(roomsUrl)
        .then(result => result.json())
        .then(rooms => {
          this.rooms = rooms;
          this.renderRooms(renderContainer, rooms);
          this.addEventListeners();
        });
    }

    getRoomById(id) {
      return this.rooms.find(el => el.id === id);
    }

    renderRooms(container, rooms) {
      let roomListDomString = '';
      rooms.forEach(room => {
        roomListDomString += `<div class="hotelCatalog__item">
                                <div class="hotelCatalog__img">
                                    <img src="img/${room.image}" alt="${room.title}" class="img-responsive">
                                </div>
                                <div class="hotelCatalog__price">${room.price} грн за добу</div>
                                <div class="hotelCatalog__title">${room.title}</div>
                                <div class="hotelCatalog__descr">${room.description}</div>
                                <a href="#reserveModal" class="btn hotelCatalog__btn" data-toggle="modal" data-id="${room.id}">Забронювати</a>
                              </div>`;
      });
      
      container.html(roomListDomString);
    }
    addEventListeners() {

      $('#reserveModal').on('show.bs.modal', event => {

        const button = $(event.relatedTarget);
        const id = String(button.data('id'));
        const room = this.getRoomById(id);
        const modal = $('#reserveModal');

        modal.find('.modal-dialog .hotelCatalog__title').text(room.title);

        modal.find('.modal-body .hotelCatalog__price').text(room.price);

        modal
          .find('button.hotelCatalog__btn')
          .data('id', id);
      });
      /*$('.card.room button.buy, #reserveModal button.buy').click(event => {
        const button = $(event.target);
        const id = button.data('id');
        this.cart.addroom(id);
        window.showAlert('room added to cart');
      });*/
    }
  }
  