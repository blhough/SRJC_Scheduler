console.log( "Canvas.js loaded" );


function Canvas()
{

    var self = this;
    var cellW = 0, cellH = 0;
    var sessions_ = [];

    var _ = {
        main: $( "#main" ),
        canvas: $( "#canvas" ),
        table: $( "#time-table" ),
        timesheet: $( "#timesheet" ),
        firstPanel: $( "#first-panel" ),
        firstCell: $( "#time-table tr:first-child th:first-child" ),
        cells: $( "#time-table tr:first-child th:not(th:first-child)" ),
        rows: $( "#time-table tr"),
        footer:  $( '#footer' ),


    };

    this.Init = function()
    {
        self.BindEvents();
        self.Redraw();
    };

    this.BindEvents = function()
    {
        $( window ).on( "resize", function()
        {
            self.Redraw();
            self.SessionsUpdate( true );
        } );
    };


    // public //
    this.Clear = function()
    {
        _.canvas.html( "" ); // remove all class divs
    };

    // public //
    this.Redraw = function()
    {
        $( '#footer' ).outerHeight( 30 + 'px' );

        var mainW = _.main.width();
        cellW = Math.ceil( ( mainW * 0.5 - 47 ) / 7 );
        cellH = Math.floor( ( _.timesheet.height() ) / 19 );

        _.firstCell.width( "40px" );
        _.cells.width( cellW + "px" );
        _.timesheet.width( ( cellW * 7 + 47 ) + "px" );
        _.rows.height( cellH + "px" );
        _.footer.outerHeight( ( 30 + Math.max( 0, ( Math.round( _.timesheet.height() ) - Math.round( _.table.height() ) ) ) ) + 'px' );


        if ( cellW <= 75 )
        {
            $( "th:nth-child(2) div" ).html( "Mon" );
            $( "th:nth-child(3) div" ).html( "Tue" );
            $( "th:nth-child(4) div" ).html( "Wed" );
            $( "th:nth-child(5) div" ).html( "Thu" );
            $( "th:nth-child(6) div" ).html( "Fri" );
            $( "th:nth-child(7) div" ).html( "Sat" );
            $( "th:nth-child(8) div" ).html( "Sun" );
        }
        else
        {
            $( "th:nth-child(2) div" ).html( "Monday" );
            $( "th:nth-child(3) div" ).html( "Tuesday" );
            $( "th:nth-child(4) div" ).html( "Wedneday" );
            $( "th:nth-child(5) div" ).html( "Thursday" );
            $( "th:nth-child(6) div" ).html( "Friday" );
            $( "th:nth-child(7) div" ).html( "Saturday" );
            $( "th:nth-child(8) div" ).html( "Sunday" );
        }


    };

    // public //
    this.SessionAdd = function ( sessionDiv ) 
    {
        sessions_.push( sessionDiv );
        self.SessionUpdate( sessionDiv );

    };

    // public //
    this.SessionsUpdate = function( force) 
    {
        var sessionsLen = sessions_.length;
        _.canvas.html("");

        for (var i = 0; i < sessionsLen; i++) {
            if ( !sessions_[ i ].current || force )
            {
                self.SessionUpdate( sessions_[ i ] );
            }
        }
    };

    this.SessionUpdate = function( sessionDiv )
    {
        var semStart, semEnd;

        if ( sessionDiv.dateStart < 152 )
        {
            semStart = SPRING_START;
            semEnd = SPRING_END;
        }
        else if ( sessionDiv.dateStart < 213 )
        {
            semStart = SUMMER_START;
            semEnd = SUMMER_END;
        }
        else
        {
            semStart = FALL_START;
            semEnd = FALL_END;
        }

        var width = Math.max( 7, Math.min( sessionDiv.dateEnd - sessionDiv.dateStart, semEnd - semStart ) ) + Math.min( sessionDiv.dateStart - semStart, 0 ) - Math.max( sessionDiv.dateEnd - semEnd, 0 );
        console.log( width + "width 1" );

        var dateStart = Math.min( Math.max( sessionDiv.dateStart - semStart, 0 ), semEnd - semStart - width );
        console.log( dateStart + "dateStart" );

        sessionDiv.x = 40 + ( cellW + 1 ) * sessionDiv.day + dateStart * ( cellW / ( semEnd - semStart ) );
        console.log( sessionDiv.x + "x" );

        sessionDiv.y = cellH + ( sessionDiv.timeStart ) * ( cellH / 60 ) - 1;
        console.log( sessionDiv.y + "y" );

        sessionDiv.width = width * ( cellW / ( semEnd - semStart ) );
        console.log( sessionDiv.width + "width 2" );

        sessionDiv.height = ( sessionDiv.timeEnd - sessionDiv.timeStart ) * ( cellH / 60 ) - 1;
        console.log( sessionDiv.height + "height" );

        sessionDiv.innerColor = 'hsla(' + ( sessionDiv.style.hue ) + ', ' + ( sessionDiv.style.sat ) + '%, ' + ( sessionDiv.style.lit ) + '%,' + ( sessionDiv.style.alf ) + ')';
        sessionDiv.current = true;

        self.SessionDraw( sessionDiv );

    };



    // private //
    this.SessionDraw = function( sessionDiv )
    {
        var $div = $( "<div/>",
        {
            class: "drawClass",
        } ); // create a course div

        $div.width( sessionDiv.width + "px" );
        $div.height( sessionDiv.height + "px" );

        $div.css( "top", sessionDiv.y + "px" );
        $div.css( "left", sessionDiv.x + "px" );

        $div.css( "box-shadow", "inset 0 0 0 1000px " + sessionDiv.innerColor );
        $div.css( "border-color", sessionDiv.borderColor );
        $div.css( "border-width", sessionDiv.borderWidth + "px" );


        /*
        if ( info !== undefined )
        {
            $div.html( "<div><p>" + info + "</p></div>" );
            $div.data( "parent", parent ); // bind class object to button
            $div.data( "sessionNum", sessionNum );
        }
        */

        _.canvas.append( $div );
    };



}
