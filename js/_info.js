console.log( "Info.js loaded" );


function Info()
{
	var self = this;

	var _ = {
		infoPanel: $( "#info-panel" ),
		info: $( "#info" ),
	};

	this.Init = function( courseObj )
	{
		self.BindEvents();
	};

	this.BindEvents = function() {

	};

	// public //
	this.PopulateInfo = function( classe )
	{

		var info = "";
		var weekdays = "MTWTFSS";

		info += '<div class="info-title">' + classe.parent.courseTitle + '</div>';
		info += '<div class="info-subtitle">' + classe.parent.courseSubtitle + '</div>';
		info += '<div class="info-sect">Sect: ' + classe.sect + '</div>';

		var sessionsLen = classe.sessions_.length;
		var session;

		for ( var i = 0; i < sessionsLen; i++ )
		{
			session = classe.sessions_[ i ]; 
			info += '<div class="info-session">';
			info += '<div class="info-days-wrap">Days:';

			for ( var j = 0; j < 7; j++ )
			{
				if ( session.days_[ j ] === 1 )
				{
					info += '<span class="info-day active" style="background:hsl(' + ( classe.style.hue ) + ', ' + ( classe.style.sat ) + '%, ' + ( classe.style.lit + 30 ) + '%)">' + weekdays.charAt( j ) + '</span>';
				}
				else
				{
					info += '<span class="info-day">' + weekdays.charAt( j ) + '</span>';
				}
			}

			info += '</div>';
			info += '<div class="info-hours">Hours: ' + session.timeS + '</div>';
            info += '<div class="info-instructor">Instructor: ' +  session.instructor + '</div>';
            info += '<div class="info-location">Location: ' + session.location + '</div>';
            info += '<div class="info-dates">Dates: ' + session.dateS + '</div>';
            info += '</div>';
		}

		info += '<div class="info-units">Units: ' + classe.units + '</div>';
        info += '<div class="info-status">Status: ' + classe.status + '</div>';
        info += '<div class="info-seats">Seats: ' + classe.seats + '</div>';
        info += '<div class="info-final">Final: ' + classe.finalExam + '</div>';
        info += '<div class="info-notes">Notes: ' + classe.note + '</div>';

		_.info.html( info );

		 $('.info-effect').css( "box-shadow" , '0 0 120px hsl(' + ( classe.style.hue ) + ', ' + ( classe.style.sat ) + '%, ' + ( classe.style.lit + 20 ) + '%),' +
		 	'0 0 150px hsl(' + ( classe.style.hue ) + ', ' + ( classe.style.sat ) + '%, ' + ( classe.style.lit + 20 ) + '%),' +
		 	'0 0 200px hsl(' + ( classe.style.hue ) + ', ' + ( classe.style.sat ) + '%, ' + ( classe.style.lit + 20 ) + '%)' );




	};

}
