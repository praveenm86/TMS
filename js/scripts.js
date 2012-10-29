function openKJYConcert()
{
	top.document.location = "kjyconcert/index.html";
}

function openRegistration()
{
	document.getElementById('iFrame').src="mSignup.html";
}

function openContactUs()
{
	document.getElementById('iFrame').src="contact.html";
}

function openDonate()
{
	document.getElementById('iFrame').src="donate.html";
}

function openEvents()
{
	var d = new Date();
	var n = d.getTime();	
	document.getElementById('iFrame').src="events.html?r=" + n;
}

function openForms()
{
	document.getElementById('iFrame').src="forms.html";
}

function openEducation()
{
	document.getElementById('iFrame').src="education.html"; 
}

function openVolunteers()
{
	document.getElementById('iFrame').src="volunteers.html"; 
}

function openGallery()
{
	//document.getElementById('iFrame').src="./gallery/AcharyaVaibhavam/index.html";
	document.getElementById('iFrame').src="gallery.html";
}

function openNews()
{
	document.getElementById('iFrame').src="news.html";
}
function  openCalendar()
{
	document.getElementById('iFrame').src="./calendar.html";
}
function  openHome()
{
	var d = new Date();
	var n = d.getTime();
	document.getElementById('iFrame').src="temple.html?r=" + n;	
}


function openDirections()
{
	document.getElementById('iFrame').src="./map/directions.html";
}

function openSchedule()
{
	document.getElementById('iFrame').src="schedule.html";
}

function openUnImp(val)
{
	//alert(val + '   ... \n\n ...   COMING SOON.');
	document.getElementById('iFrame').src="tbd.html";
}

/*
function openEducation()
{
	document.getElementById('iFrame').src="./regEvents/education.html";
}
*/

function openHomam()
{
	document.getElementById('iFrame').src="./regEvents/sudarshanaHomam.html";
}

function openSundaraKanda()
{
	document.getElementById('iFrame').src="./regEvents/sundarakandaParayanam.html";
}

function openSpcl1()
{
	document.getElementById('iFrame').src="./spclEvents/2009UdayavaUtsavam.pdf";
}

function openSpcl2()
{
	document.getElementById('iFrame').src="./spclEvents/SugunaVaradhacharyConcert.pdf";
}

function openVasantha()
{
	document.getElementById('iFrame').src="./spclEvents/SriVasanthaNavarathri-2009.pdf";
}

function openCommittees()
{
	document.getElementById('iFrame').src="committees.html";
}

function openServices()
{
	document.getElementById('iFrame').src="Services.html";
}

function openAboutUs()
{
	document.getElementById('iFrame').src="aboutus.html";
}

function openPujaRequest()
{
	document.getElementById('iFrame').src="pujaRequest.html";
}

function getURLParam(strParamName){
	var strReturn = "";
	var strHref = window.location.href;
	if ( strHref.indexOf("?") > -1 ){
		var strQueryString = strHref.substr(strHref.indexOf("?"));
		var aQueryString = strQueryString.split("&");
		for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
			if ( aQueryString[iParam].indexOf(strParamName + "=") > -1 ){
				var aParam = aQueryString[iParam].split("=");
				strReturn = aParam[1];
				break;
			}
		}
	}
	return unescape(strReturn);
}