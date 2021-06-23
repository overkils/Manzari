<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$tel = $_POST['tel'];

// Формирование самого письма
$title = "Manzari заявка от пользователя";
$body = "
<h2>Новое письмо</h2>
<p>Имя: $name</p> <br>
<p>Номер телефона: $tel</p><br> 
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        // Настройка почты заказчика и его smtp сервер
        $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты (для каждого почтового сервиса СВОЙ)
        $mail->Username   = 'atollaframeworks@gmail.com'; // Почта на основе которой СДЕЛАН SMTP СЕРВЕР !!!!!!!!!!!!!!!
        $mail->Password   = 'zpnrgyfafemdlunl'; // Пароль на почте(Если у почтового сервиса есть возможность выдать пароль только для приложения то пишем его, обычно выдают при подключении 2х факторки на телефон(минимальный возможный вариант для 2х факторки))
        $mail->SMTPSecure = 'ssl'; // сертификат безопастности (ДА ЛАДНО КЭППППП!!!!)
        $mail->Port       = 465; //порт в зависимости от smtp сервера, указывается обычно в описании, либо инструкции 
        $mail->setFrom('atollaframeworks@gmail.com', 'Danover'); // Адрес почты заказчика с которой будет приходить письмо на основной ящик заказчика; Второй параметр менять по своему усмотрению, обведено в зеленом боксе https://prnt.sc/11auyn9

        // Основной почтовый ящик заказчика для получения на его писем 
        $mail->addAddress('Manzari.ukraine@gmail.com');


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result]);
// < !--Creating and powerd by Overkills(Даниил), Iluas(Илья)-- >