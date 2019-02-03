import Component from "../../component.js";

export default class PhoneCatalog extends Component {
    constructor({element, phones, onPhoneSelected}) {
      super({ element});
       
        this._phones = phones;
        this._onPhoneSelected = onPhoneSelected;

        this._render();
        
        this._element.addEventListener('click', (event) => {
          const phoneLink = event.target.closest('[data-element="phone-link"]');

          if(!phoneLink) {
            return;
          }

          const phoneElement = phoneLink.closest('[data-element="phone"]');

          this._onPhoneSelected(phoneElement.dataset.phoneId);          
        });
    }

   
    _render() {
        this._element.innerHTML = `
        <ul class="phones">

        ${this._phones.map(phone => `
        <li class="thumbnail" data-phone-id="${ phone.id }" data-element="phone">
          <a href="#!/phones/${ phone.id }" class="thumb" data-element="phone-link">
            <img alt="${ phone.name }" src="${ phone.imageUrl }">
          </a>

          <div class="phones__btn-buy-wrapper">
            <a class="btn btn-success">
              Add
            </a>
          </div>

          <a href="#!/phones/${ phone.id }" data-element="phone-link">${ phone.name }</a>
          <p>${ phone.snippet }</p>
        </li>
        `).join('')}
        
        
      </ul>
        `;
    }
}