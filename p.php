<?


require "./serve/createhtml.class.php";

$chtml=new TCreateHTML("template.html");

$getTitle = $_POST["t"];
$getImg = $_POST["i"];



if($getTitle){
   
    $chtml->SetHTML("edm.html");
    $chtml->EditableBlock("title","<title>".$getTitle."</title>");
    $chtml->EditableBlock("img",$getImg);
    $chtml->WriteHtml();
   
    // header("Location: http://n.com/edm.html");
    //确保重定向后，后续代码不会被执行
    
}


$url = "edm.html"; 

?>

<html>
<head>
<meta http-equiv="refresh" content="5; url=edm.html">
</head>
<body>
正在生成页面……
</body>
</html>