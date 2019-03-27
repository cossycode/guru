import { Component, OnInit, OnDestroy } from '@angular/core';
import { QasService } from '../qas.service';
import { Qas } from './../Qas';

@Component({
  selector: 'app-qaintro',
  templateUrl: './qaintro.component.html',
  styleUrls: ['./qaintro.component.css']
})
export class QaintroComponent implements OnInit {

  qas: Array<Qas>;
  taskStory: string;
  showreadytoplaybutton = true;

  constructor(private qasService: QasService) { }

  ngOnInit() {
    this.getQas();
  }

  getQas(): void {
    this.qasService
      .getQas()
      .subscribe(qas => console.log(qas)); // this.qas = qas);
  }

  disableButton() {
    this.showreadytoplaybutton = false;
  }

}
