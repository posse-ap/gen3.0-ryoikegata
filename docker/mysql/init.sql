DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
USE posse;

DROP TABLE IF EXISTS studies;
CREATE TABLE studies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content_id INT NOT NULL,
  language_id INT NOT NULL,
  study_date date,
  study_time INT
) CHARSET=utf8;

insert into studies (content_id, language_id, study_date, study_time) values 
("3", "3", "2003/04/22", "5"),
("2", "5", "2021/04/22", "2"),
("1", "2", "2044/04/22", "9"),
("2", "1", "2023/04/22", "12"),
("3", "1", "2023/03/22", "5"),
("1", "5", "2023/01/22", "7"),
("2", "7", "2023/02/22", "20"),
("1", "2", "2023/02/22", "6"),
("1", "4", "2023/01/22", "7"),
("3", "2", "2023/02/22", "8"),
("2", "1", "2023/02/04", "1"),
("2", "3", "2023/03/05", "10"),
("3", "4", "2023/03/06", "5"),
("2", "4", "2023/03/18", "4"),
("2", "4", "2023/03/22", "2");

DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  language VARCHAR(255) NOT NULL
) CHARSET=utf8;

insert into languages(language) values
  ('HTML'),
  ('CSS'),
  ('Javascript'),
  ('PHP'),
  ('Laravel'),
  ('SQL'),
  ('SHELL'),
  ('その他');

DROP TABLE IF EXISTS contents;
CREATE TABLE contents (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(255) NOT NULL
) CHARSET=utf8;

insert into contents(content) values
  ('N予備校'),
  ('課題'),
  ('ドットインストール');