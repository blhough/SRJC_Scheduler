console.log( "Canvas.js loaded" );


function Canvas()
{

    var self = this;
    var cellW = 0,
        cellH = 0;
    var classes_ = [];
    var panelsMinW = parseInt( $( "#second-panel" ).css( 'min-width' ) ) + parseInt( $( "#third-panel" ).css( 'min-width' ) ) + 2;

    console.log( panelsMinW );
    var _ = {
        main: $( "#main" ),
        canvas: $( "#canvas" ),
        table: $( "#time-table" ),
        timesheet: $( "#timesheet" ),
        firstPanel: $( "#first-panel" ),
        thirdPanel: $( "#third-panel" ),
        firstCell: $( "#time-table tr:first-child th:first-child" ),
        cells: $( "#time-table tr:first-child th:not(th:first-child)" ),
        rows: $( "#time-table tr" ),
        footer: $( '#footer' ),


    };

    this.Init = function()
    {
        self.BindEvents();
        $( "#main" ).removeClass( 'loading' );
        $( ".spinner" ).hide();
        self.Redraw();
    };

    this.BindEvents = function()
    {
        $( window ).resize( function()
        {
            self.Redraw(  );
            self.Clear();
        } );
    };


    // public //
    this.Clear = function()
    {
        _.canvas.html( "" ); // remove all class divs
    };

    // public //
    this.Redraw = function( isPrint )
    {
        $( '#footer' ).outerHeight( 30 + 'px' );

        var mainW = _.main.width();

        if ( isPrint )
        {
            cellW = Math.floor(  ( mainW - _.thirdPanel.outerWidth() - 47 ) / 7 );
            cellH = 36;
        }
        else
        {
            cellW = Math.floor( Math.min( ( mainW * 0.5 - 47 ) / 7, ( mainW - panelsMinW - 47 ) / 7 ) );
            cellH = Math.floor( ( _.timesheet.height() ) / 19 );
        }


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

    /*  // public //
    this.ClassAdd = function( classDiv )
    {

        if ( $.inArray( classDiv, classes_ ) <= -1 )
        {
            classes_.push( classDiv );
        }

        console.log( classes_.length );
        self.ClassUpdate( classDiv );
    };

    this.ClassRemove = function( classDiv )
    {
        var index = $.inArray( classDiv, classes_ );

        if ( index > -1 )
        {
            $.each( classes_[ index ].$divs_, function( ind, value )
            {
                value.remove();
            } );
            classes_.splice( index, 1 );
        }

        //self.ClassUpdate(classDiv);
    };



    // public //
    this.SessionAdd = function( sessionDiv )
    {
        sessions_.push( sessionDiv );
        self.SessionUpdate( sessionDiv );

    };


    // public //
    this.ClassesUpdate = function( forceUpdate )
    {
        var classesLen = classes_.length;

        for ( var i = 0; i < classesLen; i++ )
        {
            if ( !classes_[ i ].current || forceUpdate )
            {
                self.ClassUpdate( classes_[ i ] );
            }

        }
    };

    // public //
    this.ClassUpdate = function( classDiv )
    {
        var sessionsLen = classDiv.sessionDivs_.length;
        //_.canvas.html("");

        var $divs_ = [];
        var divsLen = 0;

        for ( var i = 0; i < sessionsLen; i++ )
        {
            $divs_ = self.SessionUpdate( classDiv.sessionDivs_[ i ], classDiv.divStyle );

            divsLen = $divs_.length;

            for ( var j = 0; j < divsLen; j++ )
            {
                classDiv.$divs_.push( $divs_.pop() );
            }



        }
    };

    this.SessionUpdate = function( sessionDiv, divStyle )
    {


        // var width = Math.max(2, sessionDiv.dateEnd - sessionDiv.dateStart) + Math.min(sessionDiv.dateStart - semStart, 0) - Math.max(sessionDiv.dateEnd - semEnd, 0);
        // console.log(width + "width 1");

        // var dateStart = Math.max(sessionDiv.dateStart - semStart, 0);
        // console.log(dateStart + "dateStart");

        // sessionDiv.x = 40 + (cellW + 1) * sessionDiv.day + dateStart * (cellW / (semEnd - semStart));
        // console.log(sessionDiv.x + "x");

        // sessionDiv.y = cellH + (sessionDiv.timeStart) * (cellH / 60) - 1;
        // console.log(sessionDiv.y + "y");

        // sessionDiv.width = width * (cellW / (semEnd - semStart));
        // console.log(sessionDiv.width + "width 2");

        // sessionDiv.height = (sessionDiv.timeEnd - sessionDiv.timeStart) * (cellH / 60) - 1;
        // console.log(sessionDiv.height + "height");

        var daysLen = sessionDiv.days_.length;
        sessionDiv.x_.splice( 0, sessionDiv.x_.length );

        for ( var i = 0; i < daysLen; i++ )
        {
            if ( sessionDiv.days_[ i ] === 1 )
            {
                sessionDiv.x_.push( 40 + ( cellW + 1 ) * i + sessionDiv.xPre * ( cellW / sessionDiv.semLen ) );
            }
        }

        sessionDiv.y = cellH + ( sessionDiv.timeStart ) * ( cellH / 60 ) - 1;
        // console.log(sessionDiv.y + "y");

        sessionDiv.width = sessionDiv.widthPre * ( cellW / sessionDiv.semLen ) - divStyle.borderWidth * 2 + 2;
        // console.log(sessionDiv.width + "width 2");

        sessionDiv.height = sessionDiv.heightPre * ( cellH / 60 ) - divStyle.borderWidth * 2 + 1;
        //  console.log(sessionDiv.height + "height");

        divStyle.innerColor = 'hsla(' + ( divStyle.style.hue ) + ', ' + ( divStyle.style.sat + 25 ) + '%, ' + ( divStyle.style.lit + 5 ) + '%,' + ( divStyle.style.alf ) + ')';
        sessionDiv.current = true;

        return ( self.SessionDraw( sessionDiv, divStyle ) );

    };



    // private //
    this.SessionDraw = function( sessionDiv, divStyle )
    {
        var xLen = sessionDiv.x_.length;
        var $divs_ = [];

        for ( var i = 0; i < xLen; i++ )
        {

            var $div = $( "<div/>",
            {
                class: "drawClass",
            } ); // create a course div

            $div.width( sessionDiv.width + "px" );
            $div.height( sessionDiv.height + "px" );

            $div.css( "top", sessionDiv.y + "px" );
            $div.css( "left", sessionDiv.x_[ i ] + "px" );

            $div.css( "box-shadow", "inset 0 0 0 1000px " + divStyle.innerColor );
            $div.css( "border-color", divStyle.borderColor );
            $div.css( "border-width", divStyle.borderWidth + "px" );


            /*
            if ( info !== undefined )
            {
                $div.html( "<div><p>" + info + "</p></div>" );
                $div.data( "parent", parent ); // bind class object to button
                $div.data( "sessionNum", sessionNum );
            }
            *
            $divs_.push( $div );
            _.canvas.append( $div );
        }

        return ( $divs_ );
    };

*/

    // public //
    this.DrawSession = function( refresh, sessionDiv, divStyle )
    {
        //console.log( sessionDiv );

        if ( divStyle === undefined )
        {
            divStyle = new DivStyle();
        }

        if ( sessionDiv.divStyle_ !== undefined )
        {
            divStyle = self.CompileDivStyle( divStyle, sessionDiv.divStyle_ );
        }

        console.log( divStyle );

        self.SessionUpdate( sessionDiv, divStyle );


        var xLen = sessionDiv.x_.length;
        var sessionsLen = sessionDiv.$divs_.length;
        var $divs_ = [];
        var i = 0;
        var $div = null;

        if ( refresh )
        {
            xLen = sessionsLen;
        }


        for ( i = 0; i < xLen; i++ )
        {
            if ( i < sessionsLen )
            {
                $div = sessionDiv.$divs_[ i ];
            }
            else
            {
                $div = $( "<div/>",
                {
                    class: "drawClass",
                } );
            }


            $div.width( sessionDiv.width + "px" );
            $div.height( sessionDiv.height + "px" );

            $div.css( "top", sessionDiv.y + "px" );
            $div.css( "left", sessionDiv.x_[ i ] + "px" );

            $div.css( "box-shadow", "inset 0 0 0 1000px " + divStyle.innerColor );
            $div.css( "border-color", divStyle.borderColor );
            $div.css( "border-width", divStyle.borderWidth + "px" );


            $divs_.push( $div );
            _.canvas.append( $div );
        }

        console.log( "drawSession" );

        sessionDiv.$divs_ = $divs_;

    };

    // public //
    this.HideSession = function( sessionDiv )
    {

        var sessionsLen = sessionDiv.$divs_.length;
        for ( i = 0; i < sessionsLen; i++ )
        {
            sessionDiv.$divs_.pop().remove();
        }
    };

    this.SessionUpdate = function( sessionDiv, divStyle )
    {
        var daysLen = sessionDiv.days_.length;
        sessionDiv.x_.splice( 0, sessionDiv.x_.length );

        for ( var i = 0; i < daysLen; i++ )
        {
            if ( sessionDiv.days_[ i ] === 1 )
            {
                sessionDiv.x_.push( 40 + ( cellW + 1 ) * i + sessionDiv.xPre * ( cellW / sessionDiv.semLen ) );
            }
        }

        sessionDiv.y = cellH + ( sessionDiv.timeStart ) * ( cellH / 60 ) - 1;
        // console.log(sessionDiv.y + "y");

        sessionDiv.width = sessionDiv.widthPre * ( cellW / sessionDiv.semLen ) - divStyle.borderWidth * 2 + 2;
        // console.log(sessionDiv.width + "width 2");

        sessionDiv.height = sessionDiv.heightPre * ( cellH / 60 ) - divStyle.borderWidth * 2 + 1;
        //  console.log(sessionDiv.height + "height");

        divStyle.innerColor = 'hsla(' + ( divStyle.style.hue ) + ', ' + ( divStyle.style.sat + 25 ) + '%, ' + ( divStyle.style.lit + 5 ) + '%,' + ( divStyle.alpha ) + ')';
        sessionDiv.current = true;
    };


    // public //
    this.CompileDivStyle = function( divStyle, divStyle_ )
    {
        var style = $.extend(
        {}, divStyle_[ 0 ].style, divStyle_[ 1 ].style, divStyle_[ 2 ].style, divStyle_[ 3 ].style, divStyle.style );
        var divStyleComp = $.extend(
        {}, divStyle_[ 0 ], divStyle_[ 1 ], divStyle_[ 2 ], divStyle_[ 3 ], divStyle );
        divStyleComp.style = style;
        return ( divStyleComp );
    };


}
