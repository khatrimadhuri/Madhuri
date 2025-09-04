function reg_form(arg)
{
	if(arg.name.value=="")
	{
		document.getElementById('msg1').innerHTML= "* Please Enter Your Name *" ;
		arg.name.focus();
		return false;
	}
	else{
		document.getElementById('msg1').innerHTML= "" ;
	}
	
	
	if(arg.email.value=="")
	{
		document.getElementById('msg2').innerHTML= "* Please Enter Your Email *" ;
		arg.email.focus();
		return false;
	}
	else{
		document.getElementById('msg2').innerHTML= "" ;
	}
	
	
	
	if(arg.phone.value=="")
	{
		document.getElementById('msg3').innerHTML =" * Please Enter Your Number *";
		arg.phone.focus();
		return false;
	}
	else{
		document.getElementById('msg3').innerHTML= "" ;
	}
	
	if(arg.sub.value=="")
	{
		document.getElementById('msg4').innerHTML ="*Please Select any subject* ";
		arg.sub.focus();
		return false;
	}
	else{
		document.getElementById('msg4').innerHTML= "" ;
	}
	
    
	if(arg.msg.value=="")
	{
		document.getElementById('msg5').innerHTML =" * Please Enter Message *";
		arg.msg.focus();
		return false;
	}
	else{
		document.getElementById('msg5').innerHTML= "" ;
	}
	
	
}