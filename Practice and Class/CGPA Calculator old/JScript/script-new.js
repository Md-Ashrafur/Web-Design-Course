


    function calculator() {
	 
	 var n1 = parseFloat(document.getElementById('GPA1').value);
	 var n2 = parseFloat(document.getElementById('GPA2').value);
	 var n3 = parseFloat(document.getElementById('GPA3').value);
	 
	  document.getElementById('result').innerHTML="<br />"+"Your CGPA is ="+n1;
	  
	   
	 var c1 = parseFloat(document.getElementById('Credit1').value);
	 var c2 = parseFloat(document.getElementById('Credit2').value);
	 var c3 = parseFloat(document.getElementById('Credit3').value);
	 
	 
	 
	 var totalCredit = parseFloat(c1+c2+c3);
	 var sumOfResult = parseFloat(n1*c1+n2*c2+n3*c3);
	 
	 
	
	var cgpa = parseFloat(sumOfResult/totalCredit);
	

	 
	 document.getElementById('result').innerHTML="<br />"+"Your CGPA is = "+cgpa;
	 
 }
 

