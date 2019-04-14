import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import GitHub from "github-api";
import Axios from "axios";

const chartOptions = {
  scales: {
    yAxes: [
      {
        gridLines: {
          drawBorder: false,
          display: false
        },
        ticks: {
          display: false
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          display: false
        },
        ticks: {
          display: false
        }
      }
    ]
  }
};

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { languageData: [] };
  }
  componentDidMount() {
    Axios({
      method: "get",
      url: "https://api.github.com/users/ayoubed/repos"
    })
      .then(response => {
        return response.data
          .filter(ele => ele.fork === false)
          .map(ele => ele.full_name);
      })
      .then(response => {
        const lanArr = [];
        for (let i of response) {
          if (i == "AyoubEd/OS161") continue;
          console.log(i);
          Axios({
            method: "get",
            url: `https://api.github.com/repos/${i}/languages`
          })
            .then(res => {
              lanArr.push(res.data);
              console.log(res.data);
            })
            .then(() => {
              let resArr = new Map();
              lanArr.map(d => {
                let keyNames = Object.keys(d);
                for (let j of keyNames) {
                  let val = resArr.get(j) ? Number(resArr.get(j)) : 0 + d[j];
                  resArr.set(j, val);
                }
                return d;
              });
              let lbs = Array.from(resArr.keys());
              let vals = Array.from(resArr.values());
              this.setState({ labels: lbs, data: vals });
            });
        }
      });
  }
  render() {
    const { labels, data } = this.state;
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: data,
          backgroundColor: [
            "#EB585E",
            "#58C0BD",
            "#F6C86F",
            "#949FB1",
            "#4D535F",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 0
        }
      ]
    };
    return <Doughnut data={chartData} options={chartOptions} />;
  }
}
