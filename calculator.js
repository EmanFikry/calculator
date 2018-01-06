  			var firstnumber;  
			var secondnumber;  
			var result;  
			var operations;  
			
			
			function displayunicode(e)
			{
			
			
			var char = event.which || event.keyCode;
			switch(char)
			{
				case 48:
					//document.lcdform.lcds.value = "0";
					numzero();
					break;
				case 49:
					//document.lcdform.lcds.value = "1";
					numone();
					break;
				case 50:
					//document.lcdform.lcds.value = "2";
					numtwo();
					break;
				case 51:
					//document.lcdform.lcds.value = "3";
					numthree();
					break;
				case 52:
					//document.lcdform.lcds.value = "4";
					numfour();
					break;
				case 53:
					//document.lcdform.lcds.value = "5";
					numfive();
					break;
				case 54:
					//document.lcdform.lcds.value = "6";
					numsix();
					break;
				case 55:
					//document.lcdform.lcds.value = "7";
					numseven();
					break;
				case 56:
					//document.lcdform.lcds.value = "8";
					numeight();
					break;
				case 57:
					//document.lcdform.lcds.value = "9";
					numnine();
					break;
				case 43:
					//document.lcdform.lcds.value = "+";
					operationplus();
					break;
				case 45:
					//document.lcdform.lcds.value = "-";
					operationminus();
					break;
				case 47:
					//document.lcdform.lcds.value = "/";
					operationdivid();
					break;
				case 42:
					//document.lcdform.lcds.value = "*";
					operationmult();
					break;
					
				case 61:
					//document.lcdform.lcds.value = "=";
					equalsto();
					break;
			}    
			}
  
			//num1 is pressed
			function numone()
			{  
				//if the value is 0 (the user has not entered any numbers yet) or the value is equal to result 
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")
				{  
					document.lcdform.lcds.value = "1";  
				} 
				//if we need to enter a number of many digits we will need to concatenate "1" with the last entered digits
				else 
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "1";  
				}  
			}  
		
		
			//num2 is pressed
			function numtwo()
			{  
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")
				{  
					document.lcdform.lcds.value = "2"; 
				}		  
				else 
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "2";  
				}  
			} 
		
		
			//num3 is pressed
			function numthree()
			{  
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")
				{  
					document.lcdform.lcds.value = "3";  
				}  
				else  
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "3";  
				}	  
			}
		
		
			//num4 is pressed
			function numfour()
			{  
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")
				{  
					document.lcdform.lcds.value = "4";     
				}  
				else 
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "4";  
				}  
			}  
		
		
			//num5 is pressed
			function numfive()
			{  
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")
				{  
					document.lcdform.lcds.value = "5";  
				}  
				else
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "5";  
				}   
			}  
		
		
			//num6 is pressed
			function numsix()
			{  
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")
				{  
					document.lcdform.lcds.value = "6";  
				}  
				else
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "6";  
				}  
			}  
		
		
			//num7 is pressed
			function numseven()
			{  
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")
				{   
					document.lcdform.lcds.value = "7";       
				}  
				else 
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "7";  
				}  
			}  
		
		
			//num8 is pressed
			function numeight()
			{   
				if (document.lcdform.lcds.value == "0"|| document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")  
				{  
					document.lcdform.lcds.value = "8";  
				}  
				else 
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "8";  
				}  
			}  
		
		
			//num9 is pressed
			function numnine()
			{   
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")
				{    
					document.lcdform.lcds.value = "9";  
				}  
				else  
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "9";  
				}  
			}  
		
		
			//num0 is pressed
			function numzero()
			{  
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")  
				{  
					document.lcdform.lcds.value = "0";  
				}  
				else
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "0";  
				}  
			} 

		
			//n 0um00 is pressed (double zeros)
			function numdobuzero()
			{  
				if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result || document.lcdform.lcds.value == "Cannot divide by 0")
				{  
					//do nothing
					return;       
				}  
				else
				{  
					document.lcdform.lcds.value = document.lcdform.lcds.value + "00";  
				}  
			}	 

		
			//C is pressed
			//clear the two text boxes
			function clr()
			{  
				document.lcdform.lcds.value = "0";  
				document.lcdform.lcdsu.value = "";
				firstnumber="";
				secondnumber="";
				result="";
				operation="";
				return;  
			}  
  
  
			//+ is pressed
			//the 1st text box will have the 1st-number + for example 5+
			//the 2nd text box will be zero to enter the next number on it
			//we use parseInt because the text return string
			function operationplus()
			{  
				//var lastChar = document.lcdform.lcdsu.value.substr(document.lcdform.lcdsu.value.length - 1);
				var lastChar= document.lcdform.lcdsu.value.charAt(document.lcdform.lcdsu.value.length - 1);
				if(isNaN(lastChar)==true)
				{
				document.lcdform.lcdsu.value = document.lcdform.lcdsu.value.slice(0, -1);
					operation = "+";  
					document.lcdform.lcds.value = "0";  
					document.lcdform.lcdsu.value = document.lcdform.lcdsu.value + operation; 
				}
				else
				{
				operation = "+";  
				firstnumber = parseInt(document.lcdform.lcds.value);  
				document.lcdform.lcds.value = "0";  
				document.lcdform.lcdsu.value = firstnumber + operation;  
				}
			} 

		
			//* is pressed
		
			function operationmult()
			{  
				var lastChar= document.lcdform.lcdsu.value.charAt(document.lcdform.lcdsu.value.length - 1);
				if(isNaN(lastChar)==true)
				{
				document.lcdform.lcdsu.value = document.lcdform.lcdsu.value.slice(0, -1);
					operation = "*";  
					document.lcdform.lcds.value = "0";  
					document.lcdform.lcdsu.value = document.lcdform.lcdsu.value + operation; 
				}
				else
				{
				operation = "*";  
				firstnumber = parseInt(document.lcdform.lcds.value);  
				document.lcdform.lcds.value = "0";  
				document.lcdform.lcdsu.value = firstnumber + operation;  
				}
			}  
		
		
			//- is pressed
			function operationminus()
			{  
				var lastChar= document.lcdform.lcdsu.value.charAt(document.lcdform.lcdsu.value.length - 1);
				if(isNaN(lastChar)==true)
				{
				document.lcdform.lcdsu.value = document.lcdform.lcdsu.value.slice(0, -1);
					operation = "-";  
					document.lcdform.lcds.value = "0";  
					document.lcdform.lcdsu.value = document.lcdform.lcdsu.value + operation; 
				}
				else
				{
				operation = "-";  
				firstnumber = parseInt(document.lcdform.lcds.value);  
				document.lcdform.lcds.value = "0";  
				document.lcdform.lcdsu.value = firstnumber + operation;  
				}				
			}  
		
		
			// / is pressed
			function operationdivid()
			{  	
				var lastChar= document.lcdform.lcdsu.value.charAt(document.lcdform.lcdsu.value.length - 1);
				if(isNaN(lastChar)==true)
				{
				document.lcdform.lcdsu.value = document.lcdform.lcdsu.value.slice(0, -1);
					operation = "/";  
					document.lcdform.lcds.value = "0";  
					document.lcdform.lcdsu.value = document.lcdform.lcdsu.value + operation; 
				}
				else
				{
				operation = "/";  
				firstnumber = parseInt(document.lcdform.lcds.value);  
				document.lcdform.lcds.value = "0";  
				document.lcdform.lcdsu.value = firstnumber + operation; 
				}				
			} 

		
			// % is pressed
			function operationperc()
			{  
				var lastChar= document.lcdform.lcdsu.value.charAt(document.lcdform.lcdsu.value.length - 1);
				if(isNaN(lastChar)==true)
				{
				document.lcdform.lcdsu.value = document.lcdform.lcdsu.value.slice(0, -1);
					operation = "%";  
					document.lcdform.lcds.value = "0";  
					document.lcdform.lcdsu.value = document.lcdform.lcdsu.value + operation; 
				}
				else
				{
				operation = "%";  
				firstnumber = parseInt(document.lcdform.lcds.value);  
				document.lcdform.lcds.value = "0";  
				document.lcdform.lcdsu.value = firstnumber + operation; 
				}				
			} 

		
			// ^ is pressed (clear 2nd text box)
			function operationraistop()
			{  
				operation = "^";  
				firstnumber = parseInt(document.lcdform.lcds.value);  
				document.lcdform.lcds.value = "0";  
			}

		
			//sqrt() is pressed
			function sqrots()
			{  
				firstnumber = document.lcdform.lcds.value;  
				result = Math.sqrt(parseInt(firstnumber));  
				if(isNaN(result))
				{
					document.lcdform.lcdsu.value = "sqrt(" + firstnumber + ") is invalid number ";
					document.lcdform.lcds.value = "0"; 
				}else
				{
				document.lcdform.lcdsu.value = "sqrt(" + firstnumber + ") = " + result;
				document.lcdform.lcds.value = result; 
				}
			}  
		
		
			// = is pressed
			function equalsto()
			{  
				secondnumber = parseInt(document.lcdform.lcds.value);  
				if (operation == "+")  
				{  
					result = firstnumber + secondnumber;  
				}  
				else if (operation == "*")
				{  
					result = firstnumber * secondnumber;  
				}  
				else if (operation == "-")
				{  
					result = firstnumber - secondnumber;  
				}    
				else if (operation == "/")
				{  
					result = firstnumber / secondnumber; 
				}  
				else if (operation == "%")
				{  
					result = firstnumber % secondnumber;
				} 

				
				//any number % 0 =0
				if(secondnumber==0 && operation=="%")
				{
					result=0;
				}
				
					document.lcdform.lcds.value =""; 
					document.lcdform.lcds.value = result.toString();  
					document.lcdform.lcdsu.value = firstnumber + operation + secondnumber + " = " + result.toString(); 
				
				if(secondnumber==0 && operation=="/")
				{
					document.lcdform.lcdsu.value = 0;
					document.lcdform.lcds.value = "Cannot divide by 0"; 
				}
				return;    
			} 