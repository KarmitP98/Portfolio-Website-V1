import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent implements OnInit {

  @Input() illustration = 'triangle';

  constructor() { }

  ngOnInit(): void {
  }

  public isTriangle(): boolean {
    return this.isIllustration('triangle');
  }

  public isSquare(): boolean {
    return this.isIllustration('square');
  }

  public isHeart(): boolean {
    return this.isIllustration('heart');
  }

  public isIllustration(name: string): boolean {
    return this.illustration === name;
  }
}
