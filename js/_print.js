console.log( "Print.js loaded" );


function Print()
{
    var self = this;
    var mediaQueryList = window.matchMedia( 'print' );
    var expandedCache = [];

    // elements 
    /* private */
    var _ = {
        container: $( "#container" ),
        table: $( "#tableInfo" ),
        print: $( ".b-print>div>div" ),

    };


    this.Init = function()
    {
        self.BindEvents();

        self.beforePrint();
        self.afterPrint();
    };

    this.BindEvents = function()
    {

        _.print.click( function()
        {
            window.print();
        } );

        window.onbeforeprint = function()
        {
            self.beforePrint();
        };

        window.onafterprint = function()
        {
            self.afterPrint();
        };

        mediaQueryList.addListener( function( mql )
        {
            if ( mql.matches )
            {
                self.beforePrint();
            }
            else
            {
                self.afterPrint();
            }
        } );


    };

    this.beforePrint = function()
    {
        _.container.addClass( 'print' );

        var courses_ = srjc.schedule.courses_;
        var coursesLen = courses_.length;
        expandedCache.splice( 0 , expandedCache.length );
        var tempCourse = null, i = 0;

        for (  i = 0; i < coursesLen; i++ )
        {
             tempCourse = courses_[ i ];
            expandedCache.push( tempCourse.expanded );
            tempCourse.ToggleExpanded( false );
            
        }

        for (  i = 0; i < coursesLen; i++ )
        {
             tempCourse = courses_[ i ];

            
            if ( tempCourse.$div.find('.class-solo').length === 0 || tempCourse.$div.find('.course-visible.active').length !== 0 )
            {
               tempCourse.$div.hide();
            }
        }




        srjc.canvas.Redraw( true );


        this.CreateTable();
        console.log("before print");
    };

    this.afterPrint = function()
    {
        var courses_ = srjc.schedule.courses_;
        var coursesLen = courses_.length;

        for ( var i = 0; i < coursesLen; i++ )
        {
            courses_[ i ].ToggleExpanded( expandedCache[ i ] );
            courses_[ i ].$div.show();
        }


        _.container.removeClass( 'print' );
        srjc.canvas.Redraw();
        console.log("after print");
    };



    this.CreateTable = function()
    {
        _.table.width( '1100px' );
        _.table.html( "<tr><th>Course</th><th>Sect</th><th>Days</th><th>Hours</th><th>Instructor</th><th>location</th><th>units</th><th>Date Begin/End</th><th>Date Final Exam</th></tr>" );

        var courses_ = srjc.schedule.courses_;
        var coursesLen = courses_.length;

        for ( var i = 0; i < coursesLen; i++ )
        {
            var classes_ = courses_[ i ].classes_;
            var classesLen = classes_.length;

            for ( var j = 0; j < classesLen; j++ )
            {

                if ( classes_[ j ].active )
                {
                    var tempClass = classes_[ j ];
                    //$div.css( "box-shadow" , "inset 0 0 0 1000px " + col2 );
                    _.table.append( "<tr><td style='box-shadow: inset 0 0 0 1000px" + " hsl(" + tempClass.style.hue + "," + 90 + "%," + 60 + "%)'><span>" + courses_[ i ].courseTitle + "</span></td><td><span>" + tempClass.sect + "</span></td><td><span>" + self.GetDaysText( tempClass ) + "</span></td><td><span>" + self.GetTimeText( tempClass ) + "</span></td><td><span>" + self.GetInstrText( tempClass ) + "</span></td><td><span>" + self.GetLocText( tempClass ) + "</span></td><td><span>" + tempClass.units + "</span></td><td><span>" + self.GetDatesText( tempClass ) + "</span></td><td><span>" + tempClass.finalExam + "</span></td></tr>" );

                    if ( tempClass.note !== "" )
                    {
                        _.table.append( "<tr><td colspan='2'></td><td class='wrap' colspan='7'><span>" + tempClass.note + "</span></td></tr>" );
                    }
                }

            }
        }

        _.table.append( "<tr><td colspan='3'><span><strong>Totals: </strong></span></td><td><span><strong>" + self.GetTotalHours() + " hours</strong></span></td><td colspan='2'></td><td><span><strong>" + self.GetTotalUnits() + "</strong></span></td><td colspan='2'></td></tr>" );
    };

    this.GetTotalHours = function()
    {
        var minutes = 0;
        var plus = false;

        var courses_ = srjc.schedule.courses_;
        var coursesLen = courses_.length;

        for ( var i = 0; i < coursesLen; i++ )
        {
            var classes_ = courses_[ i ].classes_;
            var classesLen = classes_.length;

            for ( var j = 0; j < classesLen; j++ )
            {
                if ( classes_[ j ].active )
                {
                    var sessions_ = classes_[ j ].sessions_;
                    var sessionsLen = sessions_.length;

                    for ( var k = 0; k < sessionsLen; k++ )
                    {
                        var tempSession = sessions_[ k ];

                        if ( tempSession.timeStart === 0 && tempSession.timeEnd === 0 )
                        {
                            var temp = parseFloat( tempSession.timeS ) * 60;

                            if ( !isNaN( temp ) )
                            {
                                minutes += temp;
                            }
                            else
                            {
                                plus = true;
                            }
                        }
                        else
                        {
                            var multi = 0;

                            for ( var l = 0; l < tempSession.days_.length; l++ )
                            {
                                if ( tempSession.days_[ l ] == 1 )
                                {
                                    multi++;
                                }
                            }

                            minutes += ( tempSession.timeEnd - tempSession.timeStart ) * multi;
                        }
                    }
                }
            }
        }
        console.log( "minuts: " + minutes );

        minutes /= 60;
        if ( plus === true )
            return minutes.toFixed( 1 ) + "+";
        else
            return minutes.toFixed( 1 );
    };


    this.GetTotalUnits = function()
    {
        var units = 0;

        var courses_ = srjc.schedule.courses_;
        var coursesLen = courses_.length;

        for ( var i = 0; i < coursesLen; i++ )
        {

            var classes_ = courses_[ i ].classes_;
            var classesLen = classesLen;

            for ( var j = 0; j < classesLen; j++ )
            {
                if ( classes_[ j ].active )
                {
                    units += parseFloat( classes_[ j ].units );
                    console.log( "untis: " + classes_[ j ].units );
                    break;
                }
            }
        }

        return units.toFixed( 1 );
    };



    this.GetDaysText = function( temp )
    {
        s = "";

        var sessions_ = temp.sessions_;
        var sessionsLen = sessions_.length;

        for ( var i = 0; i < sessionsLen; i++ )
        {
            s += sessions_[ i ].daysS;
            if ( i != sessionsLen - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    };

    this.GetTimeText = function( temp )
    {
        s = "";

        var sessions_ = temp.sessions_;
        var sessionsLen = sessions_.length;

        for ( var i = 0; i < sessionsLen; i++ )
        {
            s += sessions_[ i ].timeS;
            if ( i != sessionsLen - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    };

    this.GetInstrText = function( temp )
    {
        s = "";

        var sessions_ = temp.sessions_;
        var sessionsLen = sessions_.length;

        for ( var i = 0; i < sessionsLen; i++ )
        {
            s += sessions_[ i ].instructor;
            if ( i != sessionsLen - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    };

    this.GetLocText = function( temp )
    {
        s = "";

        var sessions_ = temp.sessions_;
        var sessionsLen = sessions_.length;

        for ( var i = 0; i < sessionsLen; i++ )
        {
            s += sessions_[ i ].location;
            if ( i != sessionsLen - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    };

    this.GetDatesText = function( temp )
    {
        s = "";

        var sessions_ = temp.sessions_;
        var sessionsLen = sessions_.length;

        for ( var i = 0; i < sessionsLen; i++ )
        {
            s += sessions_[ i ].dateS;
            if ( i != sessionsLen - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    };
}
