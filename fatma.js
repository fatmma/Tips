function result()
{
    var x=document.getElementById("d1").value;
    var y=decument.getElementById("d2").value;
    var z=decument.getElementById("d3").value;
    var result=(x*y)/z;
    document.getElementById("totaltip").innerHTML=result;
}