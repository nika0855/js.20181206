
import PhoneCatalog from './components/phones-catalog.js';
import PhoneViewer from './components/phones-viewer.js';
import ShoppingCart from './components/shopping-cart.js';
import Filter from './components/filter.js';
export default class PhonesPage {
    constructor({element}) {
        this._element = element;

        this._render();

        this.catalog = new PhoneCatalog({
          element: this.querySelector('[data-component = "phone-catalog"]')
        });

        this.catalog = new PhoneCatalog({
          element: this.querySelector('[data-component = "phone-catalog"]')
        });

        this.catalog = new PhoneCatalog({
          element: this.querySelector('[data-component = "phone-catalog"]')
        });

        this.catalog = new PhoneCatalog({
          element: this.querySelector('[data-component = "phone-catalog"]')
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