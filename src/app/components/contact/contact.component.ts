import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component( {
              selector: 'app-contact',
              templateUrl: './contact.component.html',
              styleUrls: [ './contact.component.scss' ]
            } )
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  message = '';

  @ViewChild( 'f', { static: false } ) form: NgForm | undefined;

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    this.dataService.sendMessage( this.email, this.name, this.message );
    this.form?.resetForm();
  }

}
