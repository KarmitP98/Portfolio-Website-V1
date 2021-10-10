import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {PageService} from '../../services/page.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  message = '';

  @ViewChild('f', {static: false}) form: NgForm | undefined;

  constructor(private dataService: DataService, private ps: PageService) { }

  ngOnInit(): void {
    this.ps.updatePage('contact');
  }

  handleSubmit(): void {
    this.dataService.sendMessage(this.email, this.name, this.message);
    this.form?.resetForm();
  }

}
