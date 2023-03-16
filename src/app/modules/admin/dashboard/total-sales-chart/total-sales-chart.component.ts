import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-total-sales-chart',
  templateUrl: './total-sales-chart.component.html',
  styleUrls: ['./total-sales-chart.component.css']
})
export class TotalSalesChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.RenderChart();
  }

  RenderChart() {

    new Chart("total-sales-chart", {
      type: 'bar',
      data: {
        labels: ['Clínico Geral', 'Ortodontia', 'Implantodontia', 'Harmonização Facial'],
        datasets: [{
          label: 'TOTAL DE VENDAS NO PERIODO',
          data: [25000, 30000, 10000, 32000],
          backgroundColor :"#328fc4"
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
