
import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import ShoppingCart from './components/shopping-cart.js';
import Filter from './components/filter.js';
import PhoneServise from './phone-service.js';
export default class PhonesPage {
    constructor({element}) {
        this._element = element;

        this._render();

        this.catalog = new PhoneCatalog({
          element: this._element.querySelector('[data-component = "phone-catalog"]'),
          phones: PhoneServise.getAll(),
        });

        this.viewer = new PhoneViewer({
          element: this._element.querySelector('[data-component = "phone-viewer"]')
        });

        this.cart = new ShoppingCart({
          element: this._element.querySelector('[data-component = "shopping-cart"]')
        });

        this.filter = new Filter({
          element: this._element.querySelector('[data-component = "filter"]')
        });
    }
    _render() {
        this._element.innerHTML = `
        <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
          <section>
        
            <div	data-component = "filter"></div>
          </section>
  
          <section>
          <div data-component = "shopping-cart"></div> 
          </section>
        </div>
  
        <!--Main content-->
        <div class="col-md-10">
         <div	data-component = "phone-catalog"></div>
         <div	data-component = "phone-viewer" hidden></div>
      </div>
      `;
    }
}