<?php
	// phpinfo();
	// $now = $_GET["now"];
	// $now = date("Y-m-d",strtotime("-1 day"));
	$hoturl = "https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
	$allurl = "https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
	$resulthot = file_get_contents($hoturl);
	$resultall = file_get_contents($allurl);
	// $result = json_encode(
 //  	array_merge(
 //    json_decode($resulthot,true),
 //    array('all' => json_decode($resultall,true))
	//   )
	// );
	$hot = json_decode($resulthot,true);
	$all = json_decode($resultall,true);
	// $hot = json_decode($resulthot[$data],true);
	// array_walk($hot,function(&$value){
	//     foreach ($value as $k => $v){
	// 	        unset($value[$k]);
	// 	        $value['hot'] = $v;
	//     }
	// });

	// $result =$hot;
	$ah = array($hot,$all);

	echo json_encode($ah);
?>








