import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private guestsQuantity: number;
  private courtArea: number;

  constructor() {}

  public getGuestQuantity(): number {
    return this.guestsQuantity;
  }

  public getCourtArea() {
    return this.courtArea;
  }

  public setGuestsQuantity(quantity: number) {
    this.guestsQuantity = quantity;
  }

  public setCourtArea(area: number) {
    this.courtArea = area;
  }

  getStore() {
    const store = {
      guestsQuantity: this.guestsQuantity,
      courtArea: this.courtArea
    };

    return store;
  }
}
