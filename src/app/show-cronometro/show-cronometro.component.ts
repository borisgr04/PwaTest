import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-cronometro',
  templateUrl: './show-cronometro.component.html',
  styleUrls: ['./show-cronometro.component.css']
})
export class ShowCronometroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mensaje='';

  actualizar(t: number) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}
