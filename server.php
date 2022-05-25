<?php
include __DIR__.'./database.php';

$risultato = [];

if(isset($_GET['genre'])){
    foreach($dischi as $value){
        if($value['genre'] == $_GET['genre']){
            $risultato[] = $value;
        }
    }
}else {
    $risultato = $dischi;
}


header('Content-Type: application/json');

echo json_encode($risultato);


?>