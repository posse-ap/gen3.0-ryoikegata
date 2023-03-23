<?php

require('../dbconnect.php');


if (isset($_POST["date"]) && isset($_POST["content"]) && isset($_POST["language"]) && isset($_POST["time"])){
$stmt = $pdo->prepare("INSERT INTO studies(content_id, language_id, study_date, study_time ) VALUES (:content_id,:language_id, :study_date, :study_time)");
$stmt->execute([
  "study_date" => $_POST["date"],
  "content_id" => (int)$_POST["content"],
  "language_id" => (int)$_POST["language"],
  "study_time" => (int)$_POST["time"],
]);
 header("Location:". "http://localhost:8080/html/index.php");
}else{
  header("Location:". "http://localhost:8080/html/error.php");
}

// header("Location:". "http://localhost:8080/index.php");




