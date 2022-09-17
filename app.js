var num = +prompt('Enter your number');
var i = 0;
document.write('<table id="tt">');
 for( var i=1; i<=10; i++){
document.write('<tr><td class="t">'+num+"x"+i+"="+num*i+ "</td></tr>"+"<br>")
}
document.write("</table>");