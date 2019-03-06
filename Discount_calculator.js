"use strict";
var $ = function (id) {
return document.getElementById(id);
}

function Discountcalculator(Marked_price, Percentage){
var discountPrice;
{
discountPrice = Marked_price-(Marked_price-(Marked_price*Percentage/100));
}
discountPrice= discountPrice.toFixed(2);
return discountPrice;
}

function netPrice(Marked_price, Percentage){
	var totalPrice = Marked_price;
	{
	totalPrice = (Marked_price-(Marked_price*Percentage/100));
	}
totalPrice= totalPrice.toFixed(2);
return totalPrice;
}

function processEntries(){
	var itemPrice = parseFloat($("Marked_price").value);
	var itemPercent = parseFloat($("Percentage").value);
	var notification;
	
	if (isNaN(itemPrice)|| isNaN(itemPercent)){
		alert("One or more entries is invalid");
		notification = "you must enter a value"
	}
	else if (0 < itemPrice && itemPrice > 999){
		notification = "Item price should be greater then 0 or less then 1000";
	}
	else if (0 < itemPercent && itemPercent > 69){
		notification = "Item percent should be greater then 0 or less then 70";
	}	
	else{
		notification ="of check";
		$("Discount_amount").value = Discountcalculator(itemPrice, itemPercent);
		$("Total_price").value = netPrice(itemPrice, itemPercent);
	}
	
	$("notificationInhtml").innerHTML = notification;
}
	

 


window.onload = function(){
	$("calculate").onclick = processEntries;
}
