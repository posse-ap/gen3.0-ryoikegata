"use strict";

//bar
{
  (function () {
    let type = "bar";

    let data = {
      labels: [
        "",
        "2",
        "",
        "4",
        "",
        "6",
        "",
        "8",
        "",
        "10",
        "",
        "12",
        "",
        "14",
        "",
        "16",
        "",
        "18",
        "",
        "20",
        "",
        "22",
        "",
        "24",
        "",
        "26",
        "",
        "28",
        "",
        "30",
        "",
      ],
      datasets: [
        {
          data: [
            3, 3, 4, 4, 8, 3, 5, 5, 3, 7, 10, 2, 6, 5, 2, 1, 3, 5, 6, 4, 3, 7,
            1, 11, 2, 4, 4, 1, 2, 3, 4,
          ],
          backgroundColor: "blue",
          borderWidth: 0,
        },
      ],
    };

    let options = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              min: 0,
              max: 12,
            },
          },
        ],
      },
    };

    let ctx = document.getElementById("chart__bar").getContext("2d");
    let myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: options,
    });
  })();
}

//bar end

//lang

{
  (function () {
    let type = "doughnut";

    let data = {
      labels: [
        "Javascript",
        "CSS",
        "PHP",
        "HTML",
        "Larabel",
        "SQL",
        "SHELL",
        "情報システム基礎知識（その他）",
      ],
      datasets: [
        {
          data: [48, 18, 10, 8, 6, 5, 4, 3],
          backgroundColor: [
            "rgb(4,69,236)",
            "rgb(15,112,189)",
            "rgb(32,189,222)",
            "rgb(60,206,254)",
            "rgb(178,158,243)",
            "rgb(108,70,235)",
            "rgb(74,23,239)",
            "rgb(48,5,192)",
          ],
        },
      ],
    };

    let options = {
      cutoutPercentage: 40,
    };

    let ctx = document.getElementById("chart__lang").getContext("2d");
    let myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: options,
    });
  })();
}

//lang end

//content

{
  (function () {
    let type = "doughnut";

    let data = {
      labels: ["ドットインストール", "N予備校", "POSSE課題"],
      datasets: [
        {
          data: [42, 33, 25],
          backgroundColor: [
            "rgb(4,69,236)",
            "rgb(15,112,189)",
            "rgb(32,189,222)",
          ],
        },
      ],
    };

    let options = {
      cutoutPercentage: 40,
    };

    let ctx = document.getElementById("chart__content").getContext("2d");
    let myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: options,
    });
  })();
}
