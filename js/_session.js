console.log( "Session.js loaded" );


function Session()
{
    this.days_ = [];
    this.daysS = "";
    this.timeStart = 0;
    this.timeS = "";
    this.timeEnd = 0;
    this.instructor = "";
    this.location = 0;
    this.dateStart = 0;
    this.dateS = "";
    this.dateEnd = 0;
    this.sessionDiv = null;
    this.style = null;
    this.divStyle = null;
    this.parent = null;


    var self = this;


    // public //
    this.Init = function( parent, style )
    {
        self.parent = parent;
        self.style = style;
        console.log( self.style );
        self.divStyle = new DivStyle( self.style, 'black', 1, 0.8 );
        self.sessionDiv = new SessionDiv( self );
    };

    // public //
    this.DrawSession = function( refresh, divStyle )
    {
        srjc.canvas.DrawSession( refresh, self.sessionDiv, divStyle );
    };

    this.HideSession = function()
    {
        srjc.canvas.HideSession( self.sessionDiv );
    };






    // public //

}





// function SessionDiv( session )
// {
//     var semStart, semEnd;

//     if ( session.dateStart < 152 )
//     {
//         semStart = SPRING_START;
//         semEnd = SPRING_END;
//     }
//     else if ( session.dateStart < 213 )
//     {
//         semStart = SUMMER_START;
//         semEnd = SUMMER_END;
//     }
//     else
//     {
//         semStart = FALL_START;
//         semEnd = FALL_END;
//     }

//     this.widthPre = Math.max( 2, session.dateEnd - session.dateStart ) +
//         Math.min( session.dateStart - semStart, 0 ) -
//         Math.max( session.dateEnd - semEnd, 0 );

//     this.xPre = Math.max( session.dateStart - semStart, 0 );

//     this.heightPre = session.timeEnd - session.timeStart;
//     this.semLen = ( semEnd - semStart );

//     this.$divs_ = [];
//     this.x_ = [];
//     this.y = 0;
//     this.width = 0;
//     this.height = 0;
//     this.current = false;

//     this.days_ = session.days_;
//     this.timeStart = session.timeStart;

//     if ( session.parent !== undefined )
//     {
//         this.divStyle_ = [ session.divStyle, session.parent.divStyle, session.parent.parent.divStyle, session.parent.parent.parent.divStyle ];
//     }
// }
