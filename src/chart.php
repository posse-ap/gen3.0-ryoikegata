<?php

for ($i = 1; $i < 31; $i++ ){
  $date = date('Y-m') . '-' . str_pad($i, 2, '0', STR_PAD_LEFT);
  $bar_stmt = $pdo->query("SELECT SUM(study_time) as sum FROM studies WHERE study_date = '" . $date . "'");
  // $bar_stmt->bindValue(':date' , "2023-03-05");
$bar = $bar_stmt->fetch();
$date_sum[] = $bar['sum'] ?? 0;
};

$language_stmt = $pdo->query("SELECT SUM(studies.study_time) , languages.language FROM studies JOIN languages ON studies.language_id = languages.id GROUP BY languages.language ");
$languages = $language_stmt->fetchAll();


$content_stmt = $pdo->query("SELECT SUM(studies.study_time) , contents.content FROM studies JOIN contents ON studies.content_id = contents.id GROUP BY contents.content ");
$contents = $content_stmt->fetchAll();
?>
<script>

"use strict";


//bar
{
  Chart.register(ChartDataLabels);
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
          data: [<?php
          foreach($date_sum as $date_data){
            echo $date_data . ',';
          }?>
          ],
          backgroundColor: "blue",
          borderWidth: 0,
        },
      ],
    };

    let options = {
      responsive:true,
      maintainAspectRatio:false,
      scales: {
        x:{
          grid:{
            display:false,
            drawBorder:false,
          }
        },
        y:{
          ticks:{
            callback:function(v){
              return v + "h"
            },
          },
          grid:{
            display:false,
            drawBorder:false,
          }
        }
      }
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
        "HTML",
        "CSS",
        "Javascript",
        "PHP",
        "Laravel",
        "SQL",
        "SHELL",
        "その他"
      ],
      datasets: [
        {
          data: [<?php
          $sum = 0;
          foreach($languages as $language){
            $sum += $language['SUM(studies.study_time)'];
          }
          foreach($languages as $language){
            echo intval($language['SUM(studies.study_time)']/$sum*100) . ',';
          }
            ?>],
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
          datalabels:{
            color:"#ffffff",
            formatter: (value, ctx) => {
              return value + '%';
          },
          }
        },
      ],
    };

    let options = {
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{
          position:"bottom",
        },
      }
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
          data: [<?php
          $sum = 0;
          foreach($contents as $content){
            $sum += $content['SUM(studies.study_time)'];
          }
          foreach($contents as $content){
            echo intval($content['SUM(studies.study_time)']/$sum*100) . ',';
          }
            ?>],
          backgroundColor: [
            "rgb(4,69,236)",
            "rgb(15,112,189)",
            "rgb(32,189,222)",
          ],
          datalabels:{
            color:"#ffffff",
            formatter: (value, ctx) => {
              return value + '%';
          },
          }
        },
      ],
    };

    let options = {
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{
          position:"bottom",
        }
      }
    };

    let ctx = document.getElementById("chart__content").getContext("2d");
    let myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: options,
    });
  })();
}

</script>
