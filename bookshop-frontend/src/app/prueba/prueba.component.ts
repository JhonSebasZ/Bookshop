import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit, OnChanges, OnDestroy{

  @Input() nombre:string = "";
  usuario:string = "";

  ngOnInit(): void {
    console.log("OnInit del componente prueba");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges el componente recibe cambios");
  }
  ngOnDestroy(): void {
    console.log("OnDestroy el componente se va a destruir");
    console.log(this.nombre);
  }

}
