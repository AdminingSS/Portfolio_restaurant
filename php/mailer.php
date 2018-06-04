<?php
/*
* Денис Герасимов http://rek9.ru/
* Данный скрипт обрабатывает форм и отправляет ее на email
* В письме вы увидите utm метки, если использовали их в рекламной кампании
* Измените в данном скрипте:
* 1. Тему письма (13 строчку)
* 2. Введите ваш email, на который отправлять обработанную форму (36 строчка)
* 3. Email, с которого отправлять письмо (39 строчка)
* 4. Имя, с которого отправляется письмо (40 строчка)
* 5. URL, на который будет переадресация, при успешной отправке формы (45 строчка)
*/
$subject = 'Бронирование стола'; // тема письма , вместо многоточия вставьте ваш домен
$name = '';
$email = '';
$mess = '';
$mess .= '<hr>';
if (isset($_POST['name'])) {
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $mess .= '<b>Имя: </b>' . $name . '<br>';
}
if (isset($_POST['email'])) {
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
    $mess .= '<b>Почта: </b>' . $email . '<br>';
}
if (isset($_POST['phone'])) {
    $phone = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
    $mess .= '<b>Телефон: </b>' . $phone . '<br>';
}
if (isset($_POST['message'])) {
    $message = substr(htmlspecialchars(trim($_POST['message'])), 0, 100);
    $mess .= '<b>Сообщение: </b>' . $message . '<br>';
}

$mess .= '<b>Заявка пришла со страницы:</b> ' . $_SERVER["HTTP_REFERER"] . '<br>'; // строчка, в которой передается UTM метки если есть
$mess .= '<hr>';
// подключаем файл класса для отправки почты
require 'class.phpmailer.php';
$mail = new PHPMailer();
$mail->AddAddress('taoist_prophet@outlook.com', 'Ресторан');                        // кому - адрес, Имя (например, 'email@ rek9.ru','Денис Герасимов')
$mail->IsHTML(true);                                        // выставляем формат письма HTML
$mail->CharSet = "UTF-8";                                // кодировка
$mail->From = $email;                                // email, с которого отправиться письмо
$mail->FromName = $name;                        // откого письмо
$mail->Body = $mess;
$mail->Subject = $subject;
// отправляем наше письмо

if ($mail->Send()) header('Location: ../');                 // в поле Location можно настроить переадресацию
else {
    die ('Mailer Error: ' . $mail->ErrorInfo);
}
?>