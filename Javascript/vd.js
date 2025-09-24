function reg_form(str)
{
	
	if(str.fname.value=="")
	{
	document.getElementById("msg1").innerHTML="Please enter Some Value in User Name";
	str.fname.focus();
	return false;
	}
	
	if(!str.fname.value.match(/^[a-zA-Z]{1,}$/))
	{
	document.getElementById("msg1").innerHTML="Please enter Only Character Value";
	str.fname.focus();
	return false;
	}
	
	if(str.pwd.value=="")
	{
	document.getElementById("msg1").innerHTML="Please enter Some Value in Password";
	str.pwd.focus();
	return false;
	}
	
	if(str.pwd.value.length<10)
	{
	document.getElementById("msg1").innerHTML="Please enter minimum 10 digit length";
	str.pwd.focus();
	return false;
	}
	
	if(str.email.value=="")
	{
	document.getElementById("msg1").innerHTML="Please enter Some Value in Email";
	str.email.focus();
	return false;
	}
	
	if(!str.email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/))
	{
	document.getElementById("msg1").innerHTML="Please enter Correct Email Address";
	str.email.focus();
	return false;
	}
	
	if(str.msg.value=="")
	{
	document.getElementById("msg1").innerHTML="Please enter Some message";
	str.msg.focus();
	return false;
	}
	
	var gndr_arr = document.getElementsByName("gender");
    if (gndr_arr[0].checked == true) 
	{
                   
    } 
	else if (gndr_arr[1].checked == true) 
	{
                  
    } 
	else 
	{
      document.getElementById("msg1").innerHTML="Please Select Gender";	
       return false;
    }
	
	
	var check_arr = document.getElementsByName("check");
    if (check_arr[0].checked == true) 
	{
                   
    } 
	else if (check_arr[1].checked == true) 
	{
                  
    } 
	else if (check_arr[2].checked == true) 
	{
                  
    } 
	else 
	{
      document.getElementById("msg1").innerHTML="Please Select any one Hobby ";
       return false;
    }
	
	if(str.photo.value=="")
	{
	document.getElementById("msg1").innerHTML="! Please Upload Photo";
	str.photo.focus();
	return false;
	}
	
	var image = document.getElementById("photo");
    var img_size_mb = parseFloat(image.files[0].size / (1024 * 1024)).toFixed(2); 
     if(img_size_mb > 2) 
	 {
		 document.getElementById("msg1").innerHTML="! Please select image size less than 2 MB ";
		 str.photo.focus();
		 return false;
     }
}