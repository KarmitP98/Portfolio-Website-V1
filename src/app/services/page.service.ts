import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
               providedIn: 'root'
             } )
export class PageService {

  private currentPage: BehaviorSubject<string> = new BehaviorSubject<string>( 'home' );

  constructor() { }

  /**
   * Update the current page
   * @param {string} page
   */
  public updatePage( page: string ): void {
    this.currentPage.next( page );
  }

  /**
   * Return this current page
   * @returns {BehaviorSubject<string>}
   */
  public getCurrentPage(): BehaviorSubject<string> {
    return this.currentPage;
  }
}
