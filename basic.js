/*
 * JavaScript file
 */

var vibration_length = 1000;

function get(id)
{
	return document.getElementById(id);
}

function init() 
{
    navigator.accelerometer.watchAcceleration(function (v) {
        get("accel_val").innerHTML = v.x + '   ' + v.y + '    ' + v.z;
    }, null, {});
}

function ping_google() 
{
    navigator.network.isReachable('http://www.google.com', function (state) {
        if (state == NetworkStatus.NOT_REACHABLE) {
            alert('Google not found');
        } else {
            alert('Google says: Pong!');
        }
    }, {});
}

function test_vibra()
{
	navigator.notification.vibrate(vibration_length);
}
function get_movies() 
		{
			$.ajax(
				{
				dataType: 'jsonp',
				data: 'id='+ $('#twitterid').val(),
				jsonp: 'jsonp_callback',
				url: 'http://acm.itbhu.ac.in/twitter/tweet.php',
				success: function(data) {
				        for( var i =0;i<10;i++)
						        $('#movie_list').append("<tr><td><a href='"+data[i].link+"' title='"+data[i].movie+"' >"+data[i].movie+"</a></td></tr>");
						},
				});
			}



