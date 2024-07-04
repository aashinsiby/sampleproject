import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

name="asin";
course="ai";
collage="snmimt";
images="https://www.snmimt.edu.in/images/SNMIMT_b1.jpg"
imagewiidth='500';
alerts(){
  alert('hello');
}
}
