function revealModal(divID)
{
    var body = document.body, html = document.documentElement; 
 
    var height = Math.max( body.scrollHeight, body.offsetHeight,  
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    document.getElementById(divID).style.display = "block";
    document.getElementById(divID).style.top = 0 + 'px';

    document.getElementById(divID).style.height = height + 'px';
    setTimeout("hideModal('" + divID + "')", 10000);
}

function hideModal(divID)
{
    document.getElementById(divID).style.display = "none";
}
