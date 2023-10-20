<?php
 $m = new MongoDB\Driver\Manager("mongodb+srv://nicholas:edilaine@cluster0.hrmz0.mongodb.net/?retryWrites=true&w=majority");
 $filter = ['login' => 'nicholas.apolinario@outlook.com'];
 $text = "\n";
 $options = ['limit' => 2];
 $query = new MongoDB\Driver\Query( [] );
 $cursor = $m->executeQuery("ola.slk", $query);
 $dataArray = array(
    'labels' => array(),
    'values' => array()
);

foreach ($cursor as $document) {
    $dataArray['labels'][] = $document->data;
    $dataArray['values'][] = $document->mediçao;
}

$jsonData = json_encode($dataArray);

echo $jsonData;

    ?>