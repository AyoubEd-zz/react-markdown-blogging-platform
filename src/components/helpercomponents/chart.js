import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
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
  async componentDidMount() {
    const exArr = ["AyoubEd/OS161"];
    const lanExArr = ["HTML", "CSS", "TypeScript"];
    const repos_arr = await Axios({ method: "get", url: "https://api.github.com/users/ayoubed/repos" }).then(
      response => {
        return response.data.filter(ele => ele.fork === false).map(ele => ele.full_name);
      }
    );
    let langs = {};
    for (let i of repos_arr) {
      if (exArr.includes(i)) continue;
      let langs_res = await Axios({ method: "get", url: `https://api.github.com/repos/${i}/languages` });
      const langs_obj = langs_res.data;
      for (let pr in langs_obj) {
        if (lanExArr.includes(pr)) continue;
        if (langs_obj.hasOwnProperty(pr)) {
          if (langs.hasOwnProperty(pr)) langs[pr] += langs_obj[pr];
          else langs[pr] = langs_obj[pr];
        }
      }
    }

    let lbs = Object.keys(langs);
    let vals = Object.values(langs);
    this.setState({ labels: lbs, data: vals });
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
    return <Doughnut data={chartData} options={chartOptions} style={{ marginBottom: "10vh" }} />;
  }
}
