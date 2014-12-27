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

    var self = this;

    this.Init = function( courseObj )
    {
        self.parent = courseObj;
        self.$parent = courseObj.$div;
        self.style = courseObj.style;
        self.$div = self.AddClassElement( self, self.$parent );
        self.BindEvents();
    };

    this.BindEvents = function()
    {
        self.$div.mouseenter( function()
        {
            self.hover = true;

            self.RefreshStyle();
            self.PopulateInfo();
            console.info( self.sect + "mouseenter" );

            //console.log( "mouseenter class-button" );
        } );

        self.$div.mouseleave( function()
        {
            self.hover = false;
            self.press = false;

            self.RefreshStyle();
            console.info( self.sect + "mouseleave" );

            //console.log( "mouseenter class-button" );
        } );

        self.$div.mouseup( function()
        {
            self.press = false;

            self.RefreshStyle();
            console.info( self.sect + "mouseup" );

            //console.log( "mouseenter class-button" );
        } );

        self.$div.mousedown( function()
        {
            self.press = true;

            self.RefreshStyle();
            console.info( self.sect + "mousedown" );

            //console.log( "mouseenter class-button" );
        } );

        self.$div.click( function()
        {
            self.ToggleActive();
            console.info( self.sect + "mouseclick" );

            //console.log( "mouseenter class-button" );
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
            '</span> <div class="class-close-button">x</div>'
        );

        $courseDiv.children( ".class-wrap" ).append( $classDiv );
        setTimeout( function()
        {
            $classDiv.removeClass( 'class-mini' );
        }, 1 );

        return $classDiv;
    };

    this.ToggleActive = function( active )
    {
        if ( active === undefined )
        {
            self.active = !self.active;
            this.ToggleActive( self.active );
        }
        else
        {
            var classes_ = self.parent.classes_;
            var classesLen = classes_.length;
            var classe = null;
            var i =0;
            if ( active )
            {
                
                for ( i = 0; i < classesLen; i++ )
                {
                    classe = classes_[ i ];
                    if ( classe.active )
                    {
                        classe.active = false;
                        classe.RefreshStyle();
                    }
                }

                self.active = true;
                self.RefreshStyle();
                self.DrawClass();

            }
            else
            {
                for ( i = 0; i < classesLen; i++ )
                {
                    classe = classes_[ i ];
                    if ( classe.active )
                    {
                        classe.active = false;
                        classe.RefreshStyle();
                    }
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

    this.DrawClass = function()
    {
        for ( var i = 0; i < self.sessions_.length; i++ )
        {
            self.DrawSession( i );
        }
    };


    this.DrawSession = function( sessionNum )
    {
        for ( var day = 0; day < 7; day++ )
        {
            if ( self.sessions_[ sessionNum ].days_[ day ] == 1 )
            {
                srjc.canvas.SessionAdd( new self.SessionDiv( self, day, self.sessions_[ sessionNum ].dateStart,
                    self.sessions_[ sessionNum ].dateEnd,
                    self.sessions_[ sessionNum ].timeStart,
                    self.sessions_[ sessionNum ].timeEnd,
                    self.style ) );
            }
        }
    };

    this.SessionDiv = function( parent , day, dateStart, dateEnd, timeStart, timeEnd, style )
    {
        this.parent = parent;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.innerColor = '';
        this.borderColor = 'black';
        this.borderWidth = '1px';

        this.current = false;

        this.day = day;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.style = style;
    };

    // public //
    this.PopulateInfo = function () 
    {
        srjc.info.PopulateInfo( self );
    
    };

}
