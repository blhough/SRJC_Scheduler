console.log( "Print.js loaded" );


function Print()
{
    var self = this;

    // elements 
    /* private */
    var _ = {
        searchBox: $( "#add-box" ),
    };


    this.Init = function()
    {
        self.BindEvents();
    };

    this.BindEvents = function()
    {
        _.searchButton.click( function()
        {
            self.ToggleSearch( true );
        } );
    };

    this.FormatPrint = function()
    {
        srjc.canvas.Redraw( true );
       // RefreshAllClassColor( true );
       // DrawClassConflicts();

       // $( "html" ).css( "height" , tableH + "px" );
      //  $( "body" ).css( "height" , tableH + "px" );
      //  $( "#container2" ).css( "height" , tableH + "px" );

        CreateTable();


        window.print();

       // ga( 'send' , 'event' , 'Button' , 'Print Intent' );
       // RefreshAllClassColor();
       // DrawClassConflicts();

       // $( "html" ).css( "height" , "intial" );
      //  $( "body" ).css( "height" , "intial" );

       // $( "#container2" ).css( "height" , "intial" );
        Redraw();
    }



        this.CreateTable = function()
    {
        $table = $( "#tableInfo" );
        $table.width( $( "#container" ).outerWidth() + "px" );
        $table.html( "<tr><th>Course</th><th>Sect</th><th>Days</th><th>Hours</th><th>Instructor</th><th>location</th><th>units</th><th>Date Begin/End</th><th>Date Final Exam</th></tr>" );

        for ( var i = 0 ; i < courses.length ; i++ )
        {
            for ( var j = 0 ; j < courses[ i ].classes.length ; j++ )
            {
                if ( courses[ i ].classes[ j ].display )
                {
                    var tempClass = courses[ i ].classes[ j ];
                    //$div.css( "box-shadow" , "inset 0 0 0 1000px " + col2 );
                    $table.append( "<tr><td style='box-shadow: inset 0 0 0 1000px" + " hsla(" + tempClass.lhue + "," + 90 + "%," + 60 + "%," + tempClass.lalp + ")'><span>" + courses[ i ].courseTitle + "</span></td><td><span>" + tempClass.sect + "</span></td><td><span>" + GetDaysText( tempClass ) + "</span></td><td><span>" + GetTimeText( tempClass ) + "</span></td><td><span>" + GetInstrText( tempClass ) + "</span></td><td><span>" + GetLocText( tempClass ) + "</span></td><td><span>" + tempClass.units + "</span></td><td><span>" + GetDatesText( tempClass ) + "</span></td><td><span>" + tempClass.finalExam + "</span></td></tr>" );
                    
                    if ( tempClass.note != "" )
                    {
                        $table.append( "<tr><td colspan='2'></td><td class='wrap' colspan='7'><span>" + tempClass.note + "</span></td></tr>" );
                    }
                }

            }
        }

        $table.append( "<tr><td colspan='3'><span><strong>Totals: </strong></span></td><td><span><strong>" + GetTotalHours() + " hours</strong></span></td><td colspan='2'></td><td><span><strong>" + GetTotalUnits() + "</strong></span></td><td colspan='2'></td></tr>" );
    }

    this.GetTotalHours = function()
    {
        var minutes = 0;
        var plus = false;

        for ( var i = 0 ; i < courses.length ; i++ )
        {
            for ( var j = 0 ; j < courses[ i ].classes.length ; j++ )
            {
                if ( courses[ i ].classes[ j ].display )
                {
                    for( var k = 0 ; k < courses[ i ].classes[ j ].sessions.length ; k++ )
                    {
                        var tempSession = courses[ i ].classes[ j ].sessions[ k ];

                        if ( tempSession.timeStart == 0 && tempSession.timeEnd == 0 )
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

                            for( var l = 0 ; l < tempSession.days.length ; l++ )
                            {
                                if ( tempSession.days[ l ] == 1 )
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
        if ( plus == true )
            return minutes.toFixed(1) + "+";
        else
            return minutes.toFixed(1);
    }

    
    this.GetTotalUnits = function()
    {
        var units = 0;

        for ( var i = 0 ; i < courses.length ; i++ )
        {
            for ( var j = 0 ; j < courses[ i ].classes.length ; j++ )
            {
                if ( courses[ i ].classes[ j ].display )
                {
                    units += parseFloat( courses[ i ].classes[ j ].units ); 
                    console.log( "untis: " + courses[ i ].classes[ j ].units );
                    break;
                }
            }
        }

        return units.toFixed( 1 );
    }



    this.GetDaysText = function( temp )
    {
        s = "";

        for ( var i = 0 ; i < temp.sessions.length ; i++ )
        {
            s += temp.sessions[ i ].daysS;
            if ( i != temp.sessions.length - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    }

    this.GetTimeText = function( temp )
    {
        s = "";

        for ( var i = 0 ; i < temp.sessions.length ; i++ )
        {
            s += temp.sessions[ i ].timeS;
            if ( i != temp.sessions.length - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    }

    this.GetInstrText = function( temp )
    {
        s = "";

        for ( var i = 0 ; i < temp.sessions.length ; i++ )
        {
            s += temp.sessions[ i ].instructor;
            if ( i != temp.sessions.length - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    }

    this.GetLocText = function( temp )
    {
        s = "";

        for ( var i = 0 ; i < temp.sessions.length ; i++ )
        {
            s += temp.sessions[ i ].location;
            if ( i != temp.sessions.length - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    }

    this.GetDatesText = function( temp )
    {
        s = "";

        for ( var i = 0 ; i < temp.sessions.length ; i++ )
        {
            s += temp.sessions[ i ].dateS;
            if ( i != temp.sessions.length - 1 )
            {
                s += "<br>";
            }
        }

        return s;
    }
}