console.log( "Class.js loaded" );


function Class()
{
    this.active = false; // drawn on screen
    this.hover = false;
    this.press = false;
    this.note = ""; // class note
    this.sect = 0; // class section number
    this.seats = 0; // setats available
    this.units = ""; // class unots
    this.status = ""; // class status, open/closed/wait/etc
    this.finalExam = ""; // class final exam date
    this.sessions_ = []; // class sessions array
    this.$div = null; // div of button
    this.$parent = null; // course div
    this.parent = null;
    this.style = null;
    this.classDiv = null;
    this.divStyle = new DivStyle();

    var self = this;

    this.Init = function( courseObj )
    {
        self.parent = courseObj;
        self.$parent = courseObj.$div;
        self.style = courseObj.style;
        self.$div = self.AddClassElement( self, self.$parent );
        self.BindEvents();

        for ( var i = 0; i < self.sessions_.length; i++ )
        {
            self.sessions_[ i ].Init( self, self.style );
        }
    };

    this.BindEvents = function()
    {
        self.$div.mouseenter( function()
        {
            self.hover = true;

            self.RefreshStyle();
            self.RefreshDivStyle();
            self.PopulateInfo();
            console.info( self.sect + "mouseenter" );
        } );

        self.$div.mouseleave( function()
        {
            self.hover = false;
            self.press = false;

            self.RefreshStyle();
            self.RefreshDivStyle();
            console.info( self.sect + "mouseleave" );
        } );

        self.$div.mouseup( function()
        {
            self.press = false;

            self.RefreshStyle();
            console.info( self.sect + "mouseup" );
        } );

        self.$div.mousedown( function()
        {
            self.press = true;

            self.RefreshStyle();
            console.info( self.sect + "mousedown" );
        } );

        self.$div.click( function()
        {
            self.ToggleActive( this );
            console.info( self.sect + "mouseclick" );
        } );

    };









    this.AddClassElement = function( classObj, $courseDiv )
    {
        var $classDiv = $( "<div/>",
        {
            class: "class-button class-mini"
        } );

        $classDiv.data( "class", classObj );

        $classDiv.append( '<span class="class-title">' +
            ( classObj.sect + ' - ' + classObj.sessions_[ 0 ].instructor ) +
            '</span> <div class="class-close-button icon">x</div>'
        );

        $courseDiv.children( ".class-wrap" ).append( $classDiv );
        setTimeout( function()
        {
            $classDiv.removeClass( 'class-mini' );
        }, 1 );

        return $classDiv;
    };









    this.ToggleActive = function( div, active )
    {
        if ( active === undefined )
        {
            self.active = !self.active;
            this.ToggleActive( div, self.active );
        }
        else
        {
            var classes_ = self.parent.classes_;
            var classesLen = classes_.length;
            var clas = null;
            var i = 0;
            if ( active )
            {

                for ( i = 0; i < classesLen; i++ )
                {
                    clas = classes_[ i ];
                    if ( clas.active )
                    {
                        clas.active = false;
                        clas.RefreshStyle();
                        clas.HideClass();
                    }
                }
                $( div ).parent().children().removeClass( "active" );

                self.active = true;
                $( div ).addClass( "active" );
                self.RefreshStyle();
                self.DrawClass();
            }
            else
            {
                for ( i = 0; i < classesLen; i++ )
                {
                    clas = classes_[ i ];
                    if ( clas.active )
                    {
                        clas.active = false;
                        clas.RefreshStyle();
                        clas.HideClass();
                    }
                }

                $( div ).parent().children().removeClass( "active" );
                console.log( self.parent.expanded );

                if ( !self.parent.expanded )
                {
                    $( div ).addClass( "class-mini" );
                    $( div ).removeClass( "class-solo" );
                }

            }
        }
    };









    this.RefreshStyle = function()
    {
        if ( self.press )
        {
            self.$div.css( 'background', 'hsl(' + ( self.style.hue ) + ', ' + ( self.style.sat + 20 ) + '%, ' + ( self.style.lit - 10 ) + '%)' );
        }
        else if ( self.active )
        {
            self.$div.css( 'background', 'hsl(' + ( self.style.hue ) + ', ' + ( self.style.sat + 35 ) + '%, ' + ( self.style.lit + 7 ) + '%)' );
        }
        else if ( self.hover )
        {
            self.$div.css( 'background', 'hsl(' + ( self.style.hue ) + ', ' + ( self.style.sat + 25 ) + '%, ' + ( self.style.lit + 20 ) + '%)' );
        }
        else
        {
            self.$div.css( 'background', 'hsl(' + ( self.style.hue ) + ', ' + ( self.style.sat - 25 ) + '%, ' + ( self.style.lit + 20 ) + '%)' );
        }
    };









    this.DrawClass = function( refresh, divStyle )
    {
        var sessionsLen = self.sessions_.length;

        for ( var i = 0; i < sessionsLen; i++ )
        {
            self.DrawSession( refresh, divStyle, i );
        }

        self.DrawClassConflicts();
    };

    this.HideClass = function()
    {
        var sessionsLen = self.sessions_.length;

        for ( var i = 0; i < sessionsLen; i++ )
        {
            self.HideSession( i );
        }
    };

    // public //
    this.DrawSession = function( refresh, divStyle, i )
    {
        self.sessions_[ i ].DrawSession( refresh, divStyle );
    };

    this.HideSession = function( i )
    {
        self.sessions_[ i ].HideSession();
    };









    // this.DrawSession = function( sessionNum )
    // {
    //     for ( var day = 0; day < 7; day++ )
    //     {
    //         if ( self.sessions_[ sessionNum ].days_[ day ] == 1 )
    //         {
    //             srjc.canvas.SessionAdd( new self.SessionDiv( self, day, self.sessions_[ sessionNum ].dateStart,
    //                 self.sessions_[ sessionNum ].dateEnd,
    //                 self.sessions_[ sessionNum ].timeStart,
    //                 self.sessions_[ sessionNum ].timeEnd,
    //                 self.style ) );
    //         }
    //     }
    // };

    // public //
    // this.ClassDiv = function()
    // {
    //     this.parent = self.parent;
    //     this.current = false;
    //     this.$divs_ = [];

    //     this.sessionDivs_ = [];

    //     this.divStyle = new self.DivStyle();

    //     var sessionsLen = self.sessions_.length;

    //     for ( var i = 0; i < sessionsLen; i++ )
    //     {
    //         this.sessionDivs_.push( new self.SessionDiv( self.sessions_[ i ] ) );
    //     }




    // };









    // public //
    this.RefreshDivStyle = function()
    {
        var divStyle = self.divStyle;
        if ( self.hover )
        {
            divStyle.borderWidth = 2;
            divStyle.borderColor = 'white';
            divStyle.alpha = 1;

            self.parent.DrawCourse( true,
            {
                style:
                {
                    sat: 20
                },
                alpha: 0.3
            } );

            self.DrawClass( false, divStyle );
        }
        else if ( self.active )
        {
            divStyle.borderWidth = 1;
            divStyle.borderColor = 'black';
            divStyle.alpha = 0.8;

            self.parent.DrawCourse( true );
            self.DrawClass( false );
        }
        else
        {
            self.parent.DrawCourse( true );
            self.HideClass();
        }
    };









    // public //
    this.PopulateInfo = function()
    {
        srjc.info.PopulateInfo( self );
    };









    this.DrawClassConflicts = function( skip )
    {
        var sessionList_;

        for ( var i = 0; i < 7; i++ )
        {
            sessionList_ = self.GenerateSessionList( i, skip );

            if ( sessionList_.length <= 1 )
            {
                continue;
            }

            var sessionListLen = sessionList_.length;

            for ( var j = 0; j < sessionListLen; j++ )
            {
                var ds, de, ts, te, session = sessionList_[ j ];

                ds = session.dateStart;
                de = session.dateEnd;

                ts = session.timeStart;
                te = session.timeEnd;

                for ( var k = j + 1; k < sessionList_.length; k++ )
                {
                    var ds2, de2, ts2, te2, session2 = sessionList_[ k ];

                    ds2 = session2.dateStart;
                    de2 = session2.dateEnd;

                    ts2 = session2.timeStart;
                    te2 = session2.timeEnd;

                    if ( self.CheckClassConflict( ds, de, ts, te, ds2, de2, ts2, te2 ) )
                    {
                        var days_ = [];
                        days_[ i ] = 1; 

                        var sessionDiv = new SessionDiv( { 
                            dateStart : Math.max( ds, ds2 ),
                            dateEnd : Math.min( de, de2 ),
                            timeStart : Math.max( ts, ts2 ),
                            timeEnd : Math.min( te , te2 ),
                            days_ : days_,
                        } );

                        srjc.canvas.DrawSession( false , sessionDiv, { style: new Style( 0 , 0 , 0 ), borderColor: 'red' , borderWidth: 3 , alpha: 0.8 } );

                        //DrawRect2( x1, y1, x2, y2, "red", 3, true, "hsla(0,0%,0%,.35)" );
                    }
                }
            }
        }
    };





    this.GenerateSessionList = function( day )
    {
        var sessionList_ = [];

        var courses_ = self.parent.parent.courses_;
        var coursesLen = courses_.length;

        var classes_ = null;
        var sessions_ = null;

        var classesLen = null;
        var sessionsLen = null;

        var i = 0,
            j = 0,
            k = 0;

        for ( i = 0; i < coursesLen; i++ )
        {
            if ( courses_[ i ].visible )
            {
                classes_ = courses_[ i ].classes_;
                classesLen = classes_.length;

                for ( j = 0; j < classesLen; j++ )
                {
                    if ( classes_[ j ].active || classes_[ j ].hover )
                    {
                        sessions_ = classes_[ j ].sessions_;
                        sessionsLen = sessions_.length;

                        for ( k = 0; k < sessionsLen; k++ )
                        {
                            if ( sessions_[ k ].days_[ day ] === 1 )
                            {
                                sessionList_.push( sessions_[ k ] );
                            }
                        }
                    }
                }
            }
        }

        return sessionList_;
    };


    this.CheckClassConflict = function( ds, de, ts, te, ds2, de2, ts2, te2 )
    {
        if ( ( ts2 < te ) && ( te2 > ts ) )
        {
            return ( ( ds2 <= de ) && ( de2 >= ds ) );
        }

        return false;
    };


}
