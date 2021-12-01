import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component( {
              selector: 'app-bubble-contact',
              templateUrl: './bubble-contact.component.html',
              styleUrls: [ './bubble-contact.component.scss' ]
            } )
export class BubbleContactComponent implements OnInit {

  name = '';
  email = '';
  message = '';

  @ViewChild( 'f', { static: false } ) form: NgForm | undefined;
  @Input() close!: () => void;

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    const { email, name, message }: any = this;
    if ( email && name && message ) {
      this.dataService.sendMessage( email, name, message );
      this.form?.resetForm();
    }
  }


}
