<html>
<body onLoad="clock()">
<p>
<?php
$now = new DateTime();
$hour =  $now->format('H');
$min = $now->format('i');
$sec = $now->format('s');
echo <<< EOM
<script type="text/javascript">
	var timeStatus = 0;
	var hour = $hour;
	var mini = $min;
	var sec = $sec;
	if(mini < 10){ 
		mini = "0" + mini;
	}
	if(hour < 10) {
		hour = "0" + hour;
	}
	function clock(){
		var timeElement = document.getElementById("time");
		++sec;
		if(sec>=60){
			sec -= 60;
			mini++;
			if(mini < 10){ 
				mini = "0" + mini;
			}
		}
		if(mini>=60){
			mini -=60;
			hour++;
			if(hour < 10) {
				hour = "0" + hour;
			}
		}
		if(hour>=24){
			hour -= 24;
		}
		if(sec < 10) {sec = "0" + sec;}
		timeElement.innerHTML = hour + ":" + mini + ":" + sec;
		if(timeStatus==0){
			setInterval("clock()",1000);
			timeStatus++;
		}
	}
</script>
EOM;

?>
<div id="time">--:--:--</div>
</body>
</html>