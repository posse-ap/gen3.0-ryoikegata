<?php
require_once('./dbconnect.php');

$now = new DateTimeImmutable('now',);
if(!empty($_GET)){
  $month = $_GET('m');
}else{
  $month = 0;
}

$todayTotalHours = $pdo->query("SELECT COALESCE(sum(study_time), 0) FROM studies WHERE study_date BETWEEN '" . $now->format('Y-m-d') . "' AND '" . $now->format('Y-m-d') . "'") ->fetchColumn();
$totalHours = $pdo->query("SELECT COALESCE(sum(study_time), 0) FROM studies") ->fetchColumn();
$footerMonth = $now->modify('first day of this month')->format('Y年m月');
$monthTotalHours = $pdo->query("SELECT COALESCE(sum(study_time), 0) FROM studies WHERE study_date BETWEEN '" . $now->format('Y-m-01') . "' AND '" . $now->format('Y-m-31') . "'") ->fetchColumn();
?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webapp</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="./sass/style.css" />
  </head>
  <body>
    <header class="header">
      <div class="header__inner">
        <div class="header__inner__left">
          <ul class="header__inner__left__items">
            <li class="header__inner__left__items__item">
              <img src="./assets/logo.svg" alt="" />
            </li>
            <li class="header__inner__left__items__item">
              <p class="header__inner__left__items__item__week">4th week</p>
            </li>
          </ul>
        </div>
        <div class="header__inner__right">
          <button class="header__inner__right__button" id="modalButton">
            記録・投稿
          </button>
        </div>
      </div>
    </header>

    
    
    <main>
      <div class="main__container">
        <div class="main__container__left">
          <div class="main__container__left__time">
            <section class="main__container__left__time__items">
              <p class="main__container__left__time__items__title">Today</p>
              <p class="main__container__left__time__items__number"><?= $todayTotalHours ?></p>
              <p class="main__container__left__time__items__hour">hour</p>
            </section>
            <section class="main__container__left__time__items">
              <p class="main__container__left__time__items__title">Month</p>
              <p class="main__container__left__time__items__number"><?= $monthTotalHours?></p>
              <p class="main__container__left__time__items__hour">hour</p>
            </section>
            <section class="main__container__left__time__items">
              <p class="main__container__left__time__items__title">Total</p>
              <p class="main__container__left__time__items__number"><?= $totalHours?></p>
              <p class="main__container__left__time__items__hour">hour</p>
            </section>
          </div>
          <div class="main__container__left__chart">
            <section class="main__container__left__chart__bar">
              <canvas
              id="chart__bar"
              class="main__container__left__chart__bar__canvas"
              ></canvas>
            </section>
          </div>
        </div>
        <div class="main__container__right">
          <div class="main__container__right__chart">
            <div class="main__container__right__chart__lang">
              <h2>学習言語</h2>
              <div class="main__container__right__chart__lang__chart">
              <canvas
              id="chart__lang"
              ></canvas>
            </div>
            </div>
            <div class="main__container__right__chart__content">
              <h2>学習コンテンツ</h2>
              <div class="main__container__right__chart__content__chart">
              <canvas
              id="chart__content"
              ></canvas>
            </div>
            </div>
          </div>
        </div>
      </div>
      <!--modal-->
  
      <!--最初のページ-->
      <div id="modal" class="modal hidden">
        <div>
        <button class="modal__close" id="closeButton">×</button>
      </div>
      <form action="./service/regist.php" method="POST">
        <div class="modal__content" id="modalContent">
          <div class="modal__content__left">
            <div class="modal__content__left__item">
              <p for="data" class="label__title"
                >学習日
              </p>
                <input
                  type="text"
                  id="data"
                  class="modal__content__left__item__text"
                  name="date"
                />
            </div>
            <div class="modal__content__left__item">
              <p for="" class="label__title ">学習コンテンツ（複数選択可）</p>
                <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="content" value="1" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    N予備校
                  </span>
                </label>
              </div>
              <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="content" value="2" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    ドットインストール
                  </span>
                </label>
              </div>
              <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="content" value="3" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    POSSE課題
                  </span>
                </label>
              </div>
            </div>
            <div class="modal__content__left__item">
              <p for="" class="label__title">学習言語(複数選択可）</p>
                <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="language" value="1" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    HTML
                  </span>
                </label>
              </div>
              <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox"name="language" value="2" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    CSS
                  </span>
                </label>
              </div>
              <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="language" value="3" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    Javascript
                  </span>
                </label>
              </div>
              <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="language" value="4" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    PHP
                  </span>
                </label>
              </div>
              <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="language" value="5" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    Laravel
                  </span>
                </label>
              </div>
              <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="language" value="6" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    SQL
                  </span>
                </label>
              </div>
              <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="language" value="7" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    SHELL
                  </span>
                </label>
              </div>
              <div class="checkbox">
                <label class="label">
                  <input class="label__checkbox" type="checkbox" name="language" value="8" />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    情報システム基礎知識（その他）
                  </span>
                </label>
              </div>
              </div>
          </div>
          <!--left end-->
          <div class="modal__content__right">
            <p class="label__title"
              >学習時間</p>
              <input type="number" min="1" class="time__text" name="time" />
              <p for="" class="label__title">Twitter用コメント</p>
              <textarea class="twitter" cols="40" rows="10" placeholder="140字以内で入力" id="textArea"/>
              </textarea>
              <div>
                <label for="twitter">
              <input type="checkbox" class="checkbox label__checkbox" id="twitter"/>
              <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                    Twitterにシェアする
                  </span>
            </label>
            </div>
          </div>
        </div>
        <button class="modal__button" id="loadingButton">記録・投稿</button>
        </form>
        <div class="loader hidden" id="loading"></div>
        <!--カレンダー-->
  
        <table class="calendar hidden" id="calendar">
          <thead>
            <tr>
              <th id="prev">&laquo;</th>
              <th id="title" colspan="5"></th>
              <th id="next">&raquo;</th>
            </tr>
            <tr>
              <th class="day">Sun</th>
              <th class="day">Mon</th>
              <th class="day">Tue</th>
              <th class="day">Wed</th>
              <th class="day">Thu</th>
              <th class="day">Fri</th>
              <th class="day">Sat</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div id="checkMark" class="hidden finish">
          <p class="awesome">AWESOME</p>
        <div class="mark">
        <div class="check__mark ">
        </div>
      </div>
      <p>記録・投稿<br>完了しました</p>
    </div>
        <!--modal end-->
      </div>
      <div id="mask" class="mask hidden"></div>
    </main>

    <!--main end-->
    <div class="footer">
      <a href="" class="footer__month"><?= $footerMonth?></a>
      <button class="header__inner__right__button responsive__button" id="responsiveButton">
        記録・投稿
          </button>
  
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
    <script src="./script/modal.js"></script>
    <?php require_once("./chart.php")?>
  </body>
</html>
