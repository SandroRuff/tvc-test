import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'tvc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];

  public selectAll = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getProducts().subscribe((response: Product[]) => {
      this.products = response || [];
    });
  }

  onSelectAllClick() {
    this.changeSelectionState(!this.selectAll);
  }

  onCheckboxClick(product: Product, index: number) {
    // prev 'product' value && current 'select all' value
    if (!product.selected && !this.selectAll) {
      this.selectAll = true;
    }
    if (product.selected && this.selectAll && this.isAllUnselected(index)) {
      this.selectAll = false;
    }
  }

  changeSelectionState(state: boolean = false) {
    this.products.forEach(product => product.selected = state);
  }

  isAllUnselected(currentIndex: number = -1) {
    return !this.products.some((item, index) => {
      return currentIndex !== index ? item.selected : false;
    });
  }
}
