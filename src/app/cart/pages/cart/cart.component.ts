import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartItem } from '../../../core/models/cart-item';

import { AppSettingService } from '../../../core/services/app-settings/app-setting.service';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  title = 'Cart';
  orderedBy = 'bookPrice';
  orderingDirection = 'Descending';

  constructor(
    private cartService: CartService,
    private appSettingsService: AppSettingService,
  ) { }

  getSettings(): string {
    return this.appSettingsService.getSetting('sortField');
  }

  get items(): CartItem[] {
    return this.cartService.getCartItems();
  }

  get totalSum(): number {
    return this.cartService.getTotalSum();
  }

  get totalCount(): number {
    return this.cartService.getTotalCount();
  }

  ngOnInit(): void {
    this.cartService.getTotalCount();
    this.cartService.getTotalSum();
    this.cartService.getCartItems();
    this.orderedBy = this.getSettings();
  }

  onCartItemDelete(cartItem: CartItem): void {
    this.cartService.removeBook(cartItem);
  }

  onCartItemCountChange(cartItem: CartItem): void {
    this.cartService.changeItemTotalSum(cartItem);
    this.cartService.updateCartData();
  }

  onDeleteButtonClick(): void {
    this.cartService.removeAllBooks();
  }

  onIncreaseQuantity(cartItem: CartItem): void {
    this.cartService.increaseQuantity(cartItem);
  }

  onDecreaseQuantity(cartItem: CartItem): void {
    this.cartService.decreaseQuantity(cartItem);
  }
}
