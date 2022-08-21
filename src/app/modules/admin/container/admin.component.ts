import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //admin needs access to dentist page, where he can set payment percentages and etc
  //admin should also be able to see how much the dentist has earned from comissions
  //and also how much revenue a dentist has made

  //planos de tratamento ou treatment-plan 'e um conjunto de procedimentos, proteses e tal
  //todos em um so lugar, nao precisa selecionar nada pq ele ja vem construido
  //perfeito para o caso de aparelhos, onde ja vem incluido os procedimentos de manutencao e o aparelho em si
  //dessa forma nao precisa de gambiarra na hora de selecionar procedimentos para um tratamento
  //pq se nao precisaria selecionar um procedimento de instalacao de aparelho
  //e selecionar procedimentos de manutencao de tratamento por x vezes
  //fica muito confuso

  constructor() { }

  ngOnInit(): void {
  }

}
