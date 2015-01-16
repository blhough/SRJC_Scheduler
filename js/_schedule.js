console.log( "Schedule.js loaded" );


function Schedule()
{
    // public 
    this.courses_ = [];
    this.divStyle = new DivStyle();

    var self = this;


    // private



    // public //
    this.AddCourse = function( courseText_, courseTitle, activeClassNum )
    {
        var courseObj = new Course( courseTitle );
        this.courses_.push( courseObj );
        courseObj.Init( self, courseText_, activeClassNum );

        console.log( courseObj.classes_ );
    };

    this.DrawSchedule = function( refresh, divStyle )
    {
        var coursesLen = self.courses_.length;

        for ( var i = 0; i < coursesLen; i++ )
        {
            self.DrawCourse( refresh, divStyle, i );
        }
    };

    this.HideSchedule = function()
    {
        var coursesLen = self.courses_.length;

        for ( var i = 0; i < coursesLen; i++ )
        {
            self.HideCourse( i );
        }
    };

    // public //
    this.DrawCourse = function( refresh, divStyle, i )
    {
        self.courses_[ i ].DrawCourse( refresh, divStyle );
    };

    this.HideCourse = function( i )
    {
        self.courses_[ i ].HideCourse();
    };
}


function Style( hue, sat, lit )
{
    this.hue = hue;
    this.sat = sat;
    this.lit = lit;
}

this.DivStyle = function( style, borderColor, borderWidth, alpha )
{
    this.style = style;
    this.borderColor = borderColor;
    this.borderWidth = borderWidth;
    this.alpha = alpha;
};



