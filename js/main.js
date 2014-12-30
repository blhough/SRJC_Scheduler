console.log( "Main.js loaded" );

 var SPRING_START = MonthToDay( 1 ) + 19; // January 1
 var SPRING_END = MonthToDay( 5 ) + 8; // May 10

 var SUMMER_START = MonthToDay( 6 ) + 20; // june 20
 var SUMMER_END = MonthToDay( 7 ) + 27; // july 27

 var FALL_START = MonthToDay( 8 ) + 26; // august 26
 var FALL_END = MonthToDay( 12 ) + 9; // december 9


function SRJC()
{
    var self = this;
    this.schedule = null;
    this.info = null;
    this.canvas = null;
    this.add = null;

    // public //
    this.Init = function()
    {
        self.schedule = new Schedule();
        self.canvas = new Canvas();
        self.info = new Info();
        self.add = new Add();

        self.add.Init();
        self.canvas.Init();
    };

    $( '.b-restart>div>div' ).click( function()
    {
        var temp_ = ["<4105―M―6:00 pm - 8:00 pm―Harris B―2913―1.50―Open―13―01/12-05/11―5/18/2015―>"];
        self.schedule.AddCourse( temp_, "MATH 2", 1 );
        //self.add.RequestCourseData( "PHYS 40" );
    } );



}


var srjc = new SRJC();

$( function() // document has been loaded
    {
        setTimeout( function(){ srjc.Init(); } , 1 );
       // srjc.Init();
    } );








function MonthToDay( month )
{
    var day = 0;

    switch ( month )
    {
        case 2:
            day += 31;
            break;
        case 3:
            day += 59;
            break;
        case 4:
            day += 90;
            break;
        case 5:
            day += 120;
            break;
        case 6:
            day += 151;
            break;
        case 7:
            day += 181;
            break;
        case 8:
            day += 212;
            break;
        case 9:
            day += 243;
            break;
        case 10:
            day += 273;
            break;
        case 11:
            day += 304;
            break;
        case 12:
            day += 334;
            break;
    }

    return day;
}
