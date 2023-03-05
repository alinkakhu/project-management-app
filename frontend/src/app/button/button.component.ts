import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() goto: string = '';

  constructor(private router: Router) { 
  }

  onClick() {
    this.router.navigateByUrl(this.goto);
  }
}
