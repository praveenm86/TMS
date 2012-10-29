var spclEvents = new Array(
['Dhanwantari Jayanthi celebrations - Saturday, October 27th, 2012', './spclEvents/2012_Dhanvatri_Jayanthi.pdf', false],
['Sri Sinivasa Kalyanam - Saturday Oct 27th, 2012 @ 5PM', '', true],
['Sri Saamoohika Satyanarayana Vratham - Ashvayuja Pournami - Monday Oct 29th, 2012 @ 7PM', './spclEvents/Sri_satyanarayana_Puja_2012.pdf', true, 850, 549],
['Sri Hayagrieva Aradhana - Every Thursday @ 7PM', './spclEvents/Hayagrieva_Every_Thursdays.pdf', false, 850, 549],
['Sri Sukta Homam - Every Friday @ 10AM', '', false]
);

//['Svami Manavala Mamunikal Thirunakshatram Celebrations - Saturday, October 20th, 2012', './spclEvents/2012_Azhwar_Acharya_Utsavam.pdf', false],
//['Mudahal Azhawargal Thirunakshatram celebrations - Sunday, October 21st, 2012', './spclEvents/2012_Azhwar_Acharya_Utsavam.pdf', false],
//['Sri Bhu Neela Sukta Homam - Sunday, Oct 21st, 9AM', './images/DussheraProgram_2012.jpg', true, 789, 595],
//['Fun & Food Festival - Cultural Extravaganza - Saturday June 16th, 11:00AM - 8:00PM', './spclEvents/funandfoodfestival2012.pdf', false, 850, 549]
//['Ugadi Cultural Program Registration - Saturday, March 24th, 2012 @ 6:00PM', './spclEvents/Ugadi_2012_cultural_program.pdf', true, 850, 549],
//['Sri Saamoohika Satyanarayana Vratham - Margasira POurnami - Saturday Dec 10th, 2011 @ 5PM', './spclEvents/Sri_satyanarayana_Puja_2012.pdf', true, 850, 549],
//['Sri Satyanarayana Vratham - Jeshta Poournami - Tuesday, June 14th, 2011 from 7:00PM', '', false],
//['Sri Sinivasa Kalyanam - Sunday Feb 26th, 2012 @ 5PM', '', true],

function openWindow(url)
{
	window.open(url);
}		

function openFixedWindow(url, wd, ht)
{
	var opts = "menubar=0, resizable=0, width=" + wd + ", height=" + ht;
	window.open(url, 'mywindow',opts); 
}		


function writeSpclEvents()
{
	//writeSpecialPuja();
	for(i=0;i<spclEvents.length;i++)
	{
		var tmp = "";
		if(spclEvents[i][1] == '')
			tmp = spclEvents[i][0] + "<br/><br/>";
		else
		{
			if(spclEvents[i][2] == false)
				tmp = "<a href=\"javascript:openWindow('" + spclEvents[i][1] + "');\">" + spclEvents[i][0] + "</a><br/><br/>";
			else
				tmp = "<a href=\"javascript:openFixedWindow('" + spclEvents[i][1] + "', " + spclEvents[i][3] + ", " + spclEvents[i][4] + ");\">" + spclEvents[i][0] + "</a><br/><br/>";
		}
		document.write(tmp);
	}
}

function update()
{ parent.document.getElementById('iFrame').height = 1100;}

function writeSpecialPuja()
{

document.write("<table border=0 cellpadding=10 cellspacing=0>");
document.write("<tr>");
document.write("<td align=center style='font-weight:bold; font-size:14px; font-family:verdana; color:#710101;'>");
document.write("*   *   *   WEATHER ALERT   *   *   *");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td style='font-weight:normal; font-size:14px; font-family:verdana; color:#710101;'>");
document.write("Today's scheduled <b>Sri Satyanarayana Swami Puja</b> at the Ashburn location has been postponed. ");
document.write("Details about the date and time will be made available soon. <br/>");
document.write("There is no change in <b>Sri Satyanarayana Swami Puja</b> at the temple and will be performed as per the scheduled time of 5:00PM - 8:00PM.");
document.write("</td>");
document.write("</tr>");
document.write("</table>");


/*
document.write("<table border=\"0\" cellspacing=\"0\" cellpadding=\"5\" width=\"600\">");

document.write("<tr><td><img src=\"../images/LordRanganatha01.jpg\" width=\"590\" height=\"400\"/></td></tr>");

document.write("<tr><td align=\"center\" style=\"font-weight:bold; font-size:22px; font-family:verdana; color:#003366;\">");
document.write("	Goda Kalyanam & Sankranti Celebrations</td></tr>");

document.write("<tr><td align=\"left\" style=\"font-weight:bold; font-size:16px; font-family:verdana; color:#660033;\">");
document.write("	Kalyanam: 9:30am - 12:30pm <br/>Cultural Program: 1:30pm - 3:30pm</td></tr>");

document.write("<tr><td align=\"left\" style=\"font-weight:bold; font-size:14px; font-family:verdana; color:#003366;\">");
document.write("	Saturday Jan 16th at Willow Springs Elementary School, Fairfax, VA.</td></tr>");

document.write("<tr><td align=\"left\" style=\"font-weight:bold; font-size:14px; font-family:verdana; color:#660033;\">");
document.write("	Please join us to witness the divine union of Goddess Goda (Andal) with Sri Ranganatha after 30 days of");
document.write("	Dhanur (Marghali) Thiruppavai Vratham (Paavai Nombu) and get the blessings of Divya Dampathi!</td></tr>");

document.write("<tr><td align=\"left\" style=\"font-weight:bold; font-size:12px; font-family:verdana; color:#003366;\">");
document.write("	<span style=\"color:#710101\">Sponsorship details</span><br/><br/>");
document.write("	Kalyana Mahotsavam is $ 51 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Garlands for Kalyanam: 501<br/><br/>");
document.write("	Vastra Dhanam : 251  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Entire event : $ 2501");
document.write("	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Annadhanam : $ 1116</td></tr>");

document.write("<tr><td align=\"left\" style=\"font-weight:bold; font-size:12px; font-family:verdana; color:#710101;\">");
document.write("	Please call temple for sponsorship and program details: (703) 815-4850</td></tr>");
document.write("<tr><td align=\"center\" style=\"font-weight:bold; font-size:22px; font-family:verdana; color:#003366;\">");
document.write("	* * *   ALL ARE WELCOME   * * *</td></tr></table>");
*/

}
