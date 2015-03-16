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
    this.custom = null;

    // public //
    this.Init = function()
    {
        self.schedule = new Schedule();
        self.canvas = new Canvas();
        self.info = new Info();
        self.add = new Add();
        self.custom = new Custom();
        self.print = new Print();

        self.add.Init();
        self.custom.Init();
        self.canvas.Init();
        self.print.Init();
    };

    $( '#footer' ).click( function()
    {
        var temp_ = [ "<4336―MW┃MW―9:00 am - 10:30 am┃12:00 pm - 3:00 pm―Omrcen T┃Omrcen T―1999┃1948―5.00―Restricted―2―01/12-05/13┃01/12-05/13―5/20/2015―>","<4337―MW┃TTh―9:00 am - 10:30 am┃7:30 am - 10:30 am―Omrcen T┃Omrcen T―1999┃1948―5.00―Open―9―01/12-05/14┃01/12-05/14―5/20/2015―>","<4338―MW┃TTh―9:00 am - 10:30 am┃12:00 pm - 3:00 pm―Omrcen T┃Omrcen T―1999┃1948―5.00―Restricted―4―01/12-05/14┃01/12-05/14―5/20/2015―>" ];
        self.schedule.AddCourse( temp_, "MATH 2", 1 );
        //self.add.RequestCourseData( "PHYS 40" );
    } );



}


var srjc = new SRJC();

$( function() // document has been loaded
    {
    setTimeout( function()
    {
        srjc.Init();
    }, 200 );
         //srjc.Init();
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


var printObj = typeof JSON !== "undefined" ? JSON.stringify : function( obj ) {
  var arr = [];
  $.each( obj, function( key, val ) {
    var next = key + ": ";
    next += $.isPlainObject( val ) ? printObj( val ) : val;
    arr.push( next );
  });
  return "{ " +  arr.join( ", " ) + " }";
};



