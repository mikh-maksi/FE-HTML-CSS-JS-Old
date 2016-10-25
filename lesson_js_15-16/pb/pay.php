<?php
  header('Content-Type: text/html; charset=utf-8');
  include ("config.php");//подключение конфигурационного файла
  include ("connect.php");


  /*Получаем данные от FrontEnd*/
  $b_card_or_acc = $_GET['card'];
  $amt = $_GET['amt'];
  $details = $_GET['det'];
  $ordern = $_GET['ordern'];

  $query = "INSERT INTO order (card,amt,det)VALUES('$b_card_or_acc',$amt,'$details');";
  $query = "INSERT INTO `levelhst_pb`.`order` (`id`, `card`, `amt`, `det`, `result`, `state`, `message`, `ref`, `comis`, `cardinfo`, `timestamp`) VALUES (NULL, '$b_card_or_acc', '$amt', '$details', NULL, NULL, NULL, NULL, NULL, '', CURRENT_TIMESTAMP);";
  /*echo  $query;*/
  mysql_query($query) or DIE(mysql_error());
  
  /*Подготовка данных к отправке на сервер*/
  $data = '<oper>cmt</oper><wait>20</wait><test>1</test><payment id="'.$ordern.'"><prop name="b_card_or_acc" value="'.$b_card_or_acc.'" /><prop name="amt" value="'.$amt.'" /><prop name="ccy" value="UAH" /><prop name="details" value="'.$details.'" /></payment>';  
  $password= '**************************';
  $signature=sha1(md5($data.$password)); 
  $merchant =   '<merchant><id>********</id><signature>'.$signature.'</signature></merchant>';

  $input_xml = '<?xml version="1.0" encoding="UTF-8"?><request version="1.0">'.$merchant.'<data>'.$data.'</data></request>';
  //echo $input_xml;
   $url = "https://api.privatbank.ua/p24api/pay_pb";

  /*Отправка данных на сервер*/
  //setting the curl parameters.
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  // Following line is compulsary to add as it is:
  curl_setopt($ch, CURLOPT_POSTFIELDS, $input_xml);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 300);
  $data = curl_exec($ch);
  curl_close($ch);

   //convert the XML result into array
  $array_data = json_decode(json_encode(simplexml_load_string($data)), true);
//print_r( $array_data);
/*foreach ($array_data as $key => $value){
  echo $key." ".$value."<br>";
}*/

//print_r($array_data["data"]["payment"]["@attributes"]);
//echo $array_data["data"]["payment"]["@attributes"]["id"];

$id = $array_data["data"]["payment"]["@attributes"]["id"];
$state = $array_data["data"]["payment"]["@attributes"]["state"];
$message = $array_data["data"]["payment"]["@attributes"]["message"];
$ref = $array_data["data"]["payment"]["@attributes"]["ref"];
$amt = $array_data["data"]["payment"]["@attributes"]["amt"];
$comis= $array_data["data"]["payment"]["@attributes"]["comis"];
$cardinfo= $array_data["data"]["payment"]["@attributes"]["cardinfo"];

$query = "UPDATE order SET state = 1 ";
$query = "UPDATE  `order` SET  `state` =  '$state', `message` =  '$message', `ref` =  '$ref', `comis` =  '$comis', `cardinfo` =  '$cardinfo' WHERE  `id` =$id;";
//echo $query;
mysql_query($query) or DIE(mysql_error());

 /*Формируем заголовок, который позволяет подключаться к результату из любого домена*/	
header('Access-Control-Allow-Origin: *');

if (version_compare(phpversion(), '5.3.0', '>=')  == 1)
  error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
else
  error_reporting(E_ALL & ~E_NOTICE); 


// генерируем результат
header('Content-type: application/json');
echo json_encode($array_data); //Получается json объект