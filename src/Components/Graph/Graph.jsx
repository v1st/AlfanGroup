import React, { Component } from 'react';
import Chart from 'chart.js';


export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      firstColor: '#6aca60',
      secondColor: '#cc5e5e'
    };

    this.colorChange = this.colorChange.bind(this);
  }

  componentDidMount() {
    const ctx = document.getElementById('myChart');

    // eslint-disable-next-line
    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [{
          label: 'First',
          borderColor: this.state.firstColor,
          backgroundColor: this.state.firstColor,
          data: [
            { x: 5, y: 2650 },
            { x: 10, y: 2800 },
            { x: 15, y: 2000 }
          ],
        },
        {
          label: 'Second',
          borderColor: this.state.secondColor,
          backgroundColor: this.state.secondColor,
          data: [
            { x: 5, y: 2300 },
            { x: 10, y: 3100 },
            { x: 15, y: 1700 }
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: 'index',
        },
        hover: {
          mode: 'index'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Number'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Color Value'
            }
          }]
        }
      }
    });
  }

  colorChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    let index = e.target.name === 'firstColor' ? 0 : 1;

    this.myChart.data.datasets[index].backgroundColor = e.target.value;
    this.myChart.data.datasets[index].borderColor = e.target.value;
    this.myChart.update();
  }

  render() {
    return (
      <div className="wrapper">
        <section className="graph-container">
          <div className="color-container">
            <div className="color-picker">
              <input type="color"
                id="firstColor"
                name="firstColor"
                value={this.state.firstColor}
                className="color-input"
                onChange={this.colorChange} />
              <label htmlFor="firstColor"
                className="color-title">First Color Picker</label>
            </div>
            <div className="color-picker">
              <input type="color"
                id="secondColor"
                name="secondColor"
                value={this.state.secondColor}
                className="color-input"
                onChange={this.colorChange} />
              <label htmlFor="secondColor"
                className="color-title">Second Color Picker</label>
            </div>
          </div>
        </section>
        <div className="chart-wrap">
          <canvas id="myChart" width='100%' height="100%"></canvas>
        </div>
      </div>
    );
  }
}
