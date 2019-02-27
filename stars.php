 <!DOCTYPE html>
<html>
<body>
<title>Stars</title>
<div align="center">
<?php
	function recr($x,$y){
	if ($y<1)
		return 1;
	else{
		for ($i=0;$i<$y;$i++)
			echo "*";
		echo "<br>";
		return $x * recr($x,$y-$x);
	}
	}
	
	$x=2;
	$y=15;
	echo "<b>Αναδρομικά:</b><hr>";
	recr($x,$y);
	
?>
</div>
</body>
</html> 