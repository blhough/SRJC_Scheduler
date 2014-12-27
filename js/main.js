console.log( "Main.js loaded" );

 var SPRING_START = MonthToDay( 1 ) + 12; // January 1
 var SPRING_END = MonthToDay( 5 ) + 15; // May 10

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
        //var temp_ = ["<5048―TTh┃T―9:00 am - 10:30 am┃11:15 am - 2:15 pm―Brumbaugh S┃Brumbaugh S―2004┃1869―4.00―Closed―0―01/13-05/14┃01/13-05/14―5/21/2015―>","<5049―TTh┃Th―9:00 am - 10:30 am┃11:15 am - 2:15 pm―Brumbaugh S┃Brumbaugh S―2004┃1869―4.00―Closed―0―01/13-05/14┃01/13-05/14―5/21/2015―>","<5051―TTh┃T―12:00 pm - 1:30 pm┃2:30 pm - 5:30 pm―Zoger A┃Zoger A―2004┃1869―4.00―Closed―0―01/13-05/14┃01/13-05/14―5/21/2015―>"];
        //schedule.AddCourse( temp_, "MATH 2", 1 );
        self.add.RequestCourseData( "PHYS 40" );
    } );



}


var srjc = new SRJC();

$( function() // document has been loaded
    {
        srjc.Init();
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
