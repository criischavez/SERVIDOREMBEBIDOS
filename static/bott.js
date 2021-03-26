
function ON_OFF(){
	document.getElementById("On-Off").innerHTML="On";
 
	var a;
  a=1
  b=0
  do{
		
	if (a and 1){
    	document.getElementById("On-Off").innerHTML="Off"
      message = new Paho.MQTT.Message("Off desde el Servidor");
      message.destinationName = "cristina.chavez@unach.edu.ec/ser-dis";
      client.send(message)
	    ;}
	else:{
      document.getElementById("On-Off").innerHTML="On"
      message = new Paho.MQTT.Message("On desde el Servidor");
      message.destinationName = "cristina.chavez@unach.edu.ec/ser-dis";
      client.send(message)
	    ;}
  b=b+1
  }
  while (b>=0)
