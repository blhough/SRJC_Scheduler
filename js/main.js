 //$(document).ready(function(){

 var firstTableColW = 40;
 var tableColN = 7;
 var tableColW;
 var tableRowH;
 var panelMinW = 220;




    var SPRING_START = MonthToDay( 1 ) + 20; // January 1
    var SPRING_END = MonthToDay( 5 ) + 10; // May 10

    var SUMMER_START = MonthToDay( 6 ) + 20; // june 20
    var SUMMER_END = MonthToDay( 7 ) + 27; // july 27

    var FALL_START = MonthToDay( 8 ) + 26; // august 26
    var FALL_END = MonthToDay( 12 ) + 9; // december 9


    var cellW = 100; // cell width of canvas table
    var cellH = 30; // cell height of canvas table

    var firstRowH = $( "#table-first-col" ).outerHeight( true ) - 1; // height of the first row of the table to determine the offset for the class divs
    var firstColW = 38;


 function Redraw()
 {
    $( '#footer' ).outerHeight( 30 + 'px' );
    $( '#table-first-col' ).width( firstTableColW + 'px' );
    var mainW = $( "#main" ).width();
    var tableColW = Math.max( 40, ( mainW - ( Math.max( panelMinW, mainW * 0.25 ) + Math.max( panelMinW, mainW * 0.25 ) + firstTableColW + tableColN ) ) / tableColN );
    if ( tableColW <= 75 )
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

    var tableRowH = Math.max( 24, ( $( "#timesheet" ).height() - 39 ) / 18 );
    $( 'tr' ).outerHeight( Math.floor( tableRowH ) + 'px' );
    $( '#footer' ).outerHeight( ( 30 + Math.max( 0, ( Math.round( $( "#timesheet" ).height() ) - Math.round( $( "#time-table" ).height() ) ) ) ) + 'px' );

    /*   $('#footer').outerHeight(30 + 'px');
     $('#main').css('bottom', 30 + 'px');
     $('#timesheet').css('bottom', $("#custom-module").outerHeight() + 'px');

     $('#info-panel').css('bottom', $("#button-panel").outerHeight() + 'px');
     // $('#course-panel').css('top', $("#add-module").outerHeight() + 'px');

     var mainW = $("#main").width();
     var tableColW = Math.max(40, (mainW - (Math.max(panelMinW, mainW * 0.25) + Math.max(panelMinW, mainW * 0.25) + firstTableColW + tableColN)) / tableColN);
     var tableRowH = Math.max(24, ($("#timesheet").height() - 39) / 18);

     console.log(tableColW);

     $('#time-table').width(mainW - (Math.max(panelMinW, mainW * 0.25) + Math.max(panelMinW, mainW * 0.25)) + 'px');



     if (tableColW <= 75) {
         $("th:nth-child(2) div").html("Mon");
         $("th:nth-child(3) div").html("Tue");
         $("th:nth-child(4) div").html("Wed");
         $("th:nth-child(5) div").html("Thu");
         $("th:nth-child(6) div").html("Fri");
         $("th:nth-child(7) div").html("Sat");
         $("th:nth-child(8) div").html("Sun");
     } else {
         $("th:nth-child(2) div").html("Monday");
         $("th:nth-child(3) div").html("Tuesday");
         $("th:nth-child(4) div").html("Wedneday");
         $("th:nth-child(5) div").html("Thursday");
         $("th:nth-child(6) div").html("Friday");
         $("th:nth-child(7) div").html("Saturday");
         $("th:nth-child(8) div").html("Sunday");
     }


     $('th').css('width', tableColW + 'px');
     $('#table-first-col').width(firstTableColW + 'px');
     $('tr').outerHeight(Math.floor(tableRowH) + 'px');

     console.log(30 + Math.max(0, (Math.round($("#timesheet").height()) - Math.round($("#time-table").height()))));

     $('#footer').outerHeight((30 + Math.max(0, (Math.round($("#timesheet").height()) - Math.round($("#time-table").height())))) + 'px');
     $('#main').css('bottom', (30 + Math.max(0, (Math.round($("#timesheet").height()) - Math.round($("#time-table").height())))) + 'px');

     $("#third-panel").css('left', Math.min(mainW - panelMinW, mainW * 0.75) + 'px');

     $("#second-panel").css('right', $("#third-panel").css('width'));

     $("#second-panel").css('left', $('#time-table').outerWidth() + 'px');

     $("#first-panel").css('width', $('#time-table').outerWidth() + 'px');


     $(".course-title").width(($(".course-header").width() - $(".course-button-wrap").width()) + 'px');


*/
 }

 $( window ).on( "resize", function()
 {
    Redraw();
 } );
 /*
 $(".b-add>div>div").click(function() {
   $(".class-button:not(.class-active)").toggleClass("class-mini");
   $(".class-button.class-active").toggleClass("class-solo");
   //ClassButtonRedraw();
 });*/

 function CourseCollapseToggle( $obj )
 {

    $obj.toggleClass( "active" );
    var $par = $obj.parents( ".course-wrap" );
    $par.find( ".class-button:not(.active)" ).toggleClass( "class-mini" );
    $par.find( ".class-button.active" ).toggleClass( "class-solo" );
 }







 $( "#course-panel" ).on( "click", ".course-collapse", function()
 {
    CourseCollapseToggle( $( this ) );
    console.log( "click course-collapse" );

    var toggle = $( this ).parents( ".course-wrap" ).data( "course" ).expanded;
    $( this ).parents( ".course-wrap" ).data( "course" ).expanded = !toggle;

 } );






 $( "#course-panel" ).on( "click", ".class-button", function()
 {
    var obj = $( this ).data( "class" );
    var toggle = !obj.active;
    var classes_ = obj.parent.classes_;

    var classesLen = classes_.length;
    for ( var i = 0; i < classesLen; i++ )
    {
        if ( classes_[ i ].active )
        {
            classes_[ i ].active = false;
            classes_[ i ].RefreshStyle();
        }
    }

    obj.active = toggle;

    $( this ).parent().children().removeClass( "active" );
    if ( toggle )
    {
        $( this ).addClass( "active" );
    }
    else if ( !obj.parent.expanded )
    {
        $( this ).addClass( "class-mini" );
        $( this ).removeClass( "class-solo" );
    }


    obj.RefreshStyle();
    obj.DrawClass();

    console.log( "click class-button" );
    console.log( obj.parent.expanded );
 } );


 $( "#course-panel" ).on( "mouseenter", ".class-button", function()
 {
    var obj = $( this ).data( "class" );
    obj.hover = true;

    obj.RefreshStyle();

    //console.log( "mouseenter class-button" );
 } );


 $( "#course-panel" ).on( "mouseleave", ".class-button", function()
 {
    var obj = $( this ).data( "class" );
    obj.hover = false;

    obj.RefreshStyle();

    //console.log( "mouseleave class-button" );
 } );


 $( "#course-panel" ).on( "mousedown", ".class-button", function()
 {
    var obj = $( this ).data( "class" );
    obj.press = true;

    obj.RefreshStyle();

    //console.log( "mouseleave class-button" );
 } );


 $( "#course-panel" ).on( "mouseup", ".class-button", function()
 {
    var obj = $( this ).data( "class" );
    obj.press = false;

    obj.RefreshStyle();

    //console.log( "mouseleave class-button" );
 } );









 function AddModuleCollapse( collapse )
 {
    if ( collapse === undefined )
    {
        $( ".add-results" ).toggleClass( "active" );
    }
    else if ( collapse )
    {
        $( ".add-results" ).removeClass( "active" );
    }
    else
    {
        $( ".add-results" ).addClass( "active" );
    }
 }

 function AddModuleFocus( focus )
 {
    if ( focus === undefined )
    {
        $( ".add-results" ).toggleClass( "active" );
    }
    else if ( focus )
    {

        $( "#add-search" ).attr( 'placeholder', '' );
        $( ".add-bar" ).addClass( "active" );
        AddModuleCollapse( false );
    }
    else
    {
        $( "#add-search" ).attr( 'placeholder', 'Add Course' );
        if ( $( "#add-search" ).val() === "" )
        {
            $( ".add-bar" ).removeClass( "active" );
            AddModuleCollapse( true );
        }
    }
 }

 function AddClose()
 {
    AddModuleCollapse( true );
    $( "#add-search" ).val( "" );
    AddModuleFocus( false );
 }



 Redraw();
 setTimeout( Redraw, 200 );
 /*
 function ClassButtonRedraw() {
   $(".class-button").removeClass("class-first class-last");
   $(".class-button").not(".class-mini").eq(0).addClass("class-first");
   $(".class-button:not(.class-mini)").filter(":last").addClass("class-last");
 }*/


 var flag = false;

 $( '#add-search' ).mousedown( function( event )
 {
    event.preventDefault();
    console.log( "mouseDown add-search" );
 } );

 $( '#add-search' ).focus( function( event )
 {
    event.preventDefault();
    console.log( "focus add-search" );
 } );

 $( '#add-search' ).mouseup( function( event )
 {
    event.preventDefault();
    console.log( "mouseUp add-search" );
 } );

 $( '#add-search' ).click( function()
 {
    AddModuleFocus( true );
    console.log( "click add-search" );
    $( this ).focus();
    $( "#add-search" ).removeAttr( 'readonly' );

 } );

 $( '#add-search' ).blur( function()
 {
    AddModuleFocus( false );
    console.log( "blur add-search" );
    $( "#add-search" ).attr( 'readonly' );

 } );

 $( ".add-collapse" ).click( function()
 {
    if ( $( '#add-search' ).val() !== "" )
    {
        AddModuleCollapse();
        console.log( "click add-collapse" );
    }
 } );

 $( ".add-close" ).click( function()
 {
    if ( $( '#add-search' ).val() !== "" )
    {
        AddClose();
        console.log( "click add-close" );
    }
 } );

 //});

 $( '.b-restart>div>div' ).click( function()
 {
    var temp_ = [ "<4722\tMW&Th\t4:30 pm - 6:00 pm&12:00 pm - 3:00 pm\tAtaiiyan Y&Ataiiyan Y\t1786&1782\t4.00\tClosed\t0\t01/12-05/14&01/12-05/14\t5/18/2015>", "<4727\tMW&Th\t4:30 pm - 6:00 pm&9:00 am - 12:00 pm\tAtaiiyan Y&Ataiiyan Y\t1786&1782\t4.00\tWait List\t1\t01/12-05/14&01/12-05/14\t5/18/2015>", "<6593\tMW&Th\t4:30 pm - 6:00 pm&6:00 pm - 9:00 pm\tAtaiiyan Y&Ataiiyan Y\t1786&1782\t4.00\tOpen\t2\t01/12-05/14&01/12-05/14\t5/14/2015>" ];
    AddCourse( temp_, "MATH 2", 1 );
 } );

 var courses = []; // contains the course objects
 var courseData = []; // contains the raw data for the courses

 var styleIndex = 0;
 var Styles_ = [
    new Style( 2, 79, 57 ),
    new Style( 108, 61, 54 ),
    new Style( 197, 56, 56 ),
    new Style( 295, 67, 63 ),
    new Style( 40, 64, 58 ),
    new Style( 150, 50, 52 ),
    new Style( 271, 52, 70 ),
    new Style( 18, 76, 56 ),
    new Style( 221, 63, 65 ),
    new Style( 75, 53, 47 ),
    new Style( 176, 61, 47 ),
    new Style( 47, 80, 53 ),
    new Style( 352, 80, 64 ),
    new Style( 113, 40, 45 ),
    new Style( 188, 70, 54 ),
    new Style( 96, 80, 47 ),
    new Style( 330, 71, 65 ),
    new Style( 31, 70, 52 ),
    new Style( 216, 51, 65 ),
    new Style( 250, 79, 71 )
 ];







 /*

  function AddCourse() {

  };


 */
 /*
  function Course() {
      this.courseTitle;
      this.display = true;
      this.cycle = 0;
      this.hue = 0;
      this.classes = [];
      this.$div;
      this.deleted = 0;

  };*/

 function AddCourse( courseText_, courseTitle, activeClassNum )
 {
    var courseObj = new Course( courseTitle );
    courseObj.style = NextStyle();


    courseObj.$div = AddCourseElement( courseObj );
    courseObj.classes_ = AddClasses( courseText_, courseObj.$div, activeClassNum, courseObj );
    courseObj.RefreshStyle();

    console.log( courseObj.classes_ );
 }

 function AddClasses( courseText_, $courseDiv, activeClassNum, courseObj )
 {
    var courseTextLen = courseText_.length;
    var classes_ = [];

    for ( var i = 0; i < courseTextLen; i++ )
    {
        classes_.push( AddClass( courseText_[ i ], $courseDiv, ( i === activeClassNum ), courseObj ) );
    }

    return classes_;
 }

 function AddClass( courseText, $courseDiv, isActive, courseObj )
 {
    var classObj = new Class();
    var i;
    var stringTempArr = [];

    // try
    // {

    // sect number //////////////////////////////////////////////////////////////////////////////

    classObj.sect = courseText.match( /\d{4}/ )[ 0 ]; // pull sect number

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove sect number




    var stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    //courseText = courseText.replace( /.*?(>|\t)/ , "" ); // remove up to first tab

    stringTemp = stringTemp.replace( /Th/g, "R" ); // replace Th with R

    stringTemp = stringTemp.replace( /Sat/g, "S" ); // replace Sat with S

    stringTemp = stringTemp.replace( /Sun/g, "N" ); // replace Sat with S

    stringTemp = stringTemp.replace( /TBA/g, "X" ); // replace TBA with X

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, 20 );

    //console.log( stringTempArr );

    var sessionLength = stringTempArr.length; // number of class sessions

    //console.log( stringTempArr.length );


    // Days of the week //////////////////////////////////////////////////////////////////////////

    loop1: for ( i = 0; i < sessionLength; i++ ) // for number of class sessions create session object
        {
            var sessionObj = new Session(); // create new session object
            classObj.sessions_.push( sessionObj ); // push session object into class.sessions array


            var charTemp = ""; // temp chracter for parsing days of the week

            while ( true ) //  parses the days of the week
            {
                charTemp = stringTempArr[ i ].charAt( 0 ); // get first character of stringTemp

                switch ( charTemp.toUpperCase() )
                // assign values to days array, 1 = true
                {
                    case "M":
                        sessionObj.days[ 0 ] = 1;
                        break;

                    case "T":
                        sessionObj.days[ 1 ] = 1;
                        break;

                    case "W":
                        sessionObj.days[ 2 ] = 1;
                        break;

                    case "R":
                        sessionObj.days[ 3 ] = 1;
                        break;

                    case "F":
                        sessionObj.days[ 4 ] = 1;
                        break;

                    case "S":
                        sessionObj.days[ 5 ] = 1;
                        //isSaturday = true;
                        break;

                    case "N":
                        sessionObj.days[ 6 ] = 1;
                        //isSunday = true;
                        break;
                }

                if ( stringTempArr[ i ].length == 1 ) // break both loops
                {
                    break;
                }

                stringTempArr[ i ] = stringTempArr[ i ].substring( 1, stringTempArr[ i ].length ); // remove first character from stringTemp

            }
        }




    stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove days

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );




    // days as string /////////////////////////////////////////////////////////////////

    for ( i = 0; i < sessionLength; i++ ) // for number of sessions parse instructor name
    {
        classObj.sessions_[ i ].daysS = stringTempArr[ i ];
    }




    stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until next tab

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove up to first tab

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );



    // Times /////////////////////////////////////////////////////////////////////////

    for ( i = 0; i < sessionLength; i++ ) // for number of sessions parse class times
    {
        // try
        // {
        var hour, min, ampm;

        stringTemp = stringTempArr[ i ];
        classObj.sessions_[ i ].timeS = stringTemp;

        hour = Number( stringTemp.match( /\d\d?/ )[ 0 ] ); // parses start hour

        stringTemp = stringTemp.replace( /.*?:/, "" ); // removes start hour

        min = Number( stringTemp.match( /\d\d/ )[ 0 ] ); // parses start minutes

        stringTemp = stringTemp.replace( /.*?\s/, "" ); // removes start minutes

        ampm = stringTemp.match( /\s*?[amp]{2}/ )[ 0 ]; // parses start am or pm

        stringTemp = stringTemp.replace( /\s\-\s/, "" ); // removes start am or pm

        if ( ampm.toLowerCase() == "pm" ) // if pm
        {
            if ( hour != 12 )
            {
                hour += 12; // add 12 hours
            }
        }
        else
        {
            if ( hour == 12 )
            {
                hour = 0;
            }
        }

        classObj.sessions_[ i ].timeStart = hour * 60 + min - 360; // assign start time in minutes relative to 7AM


        // same but with end times ///////////////////////////////////

        hour = Number( stringTemp.match( /\d\d?/ )[ 0 ] );

        stringTemp = stringTemp.replace( /.*?:/, "" );

        min = Number( stringTemp.match( /\d\d/ )[ 0 ] );

        stringTemp = stringTemp.replace( /.*?\s/, "" );

        ampm = stringTemp.match( /\s*?[amp]{2}/ )[ 0 ];

        if ( ampm.toLowerCase() == "pm" )
        {
            if ( hour != 12 )
            {
                hour += 12;
            }
        }
        else
        {
            if ( hour == 12 )
            {
                hour = 0;
            }
        }

        classObj.sessions_[ i ].timeEnd = hour * 60 + min - 360; // assign end time in minutes relative to 7AM

        // }
        // catch ( err )
        // {
        //     console.log( "error adding times" + j );
        // }
    }




    stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove instructor

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );



    // instructor /////////////////////////////////////////////////////////////////

    for ( i = 0; i < sessionLength; i++ ) // for number of sessions_ parse instructor name
    {
        classObj.sessions_[ i ].instructor = stringTempArr[ i ]; // assign instructor to class
    }




    // try
    // {
    stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove room number

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );




    // room number /////////////////////////////////////////////////////////

    for ( i = 0; i < sessionLength; i++ )
    {
        classObj.sessions_[ i ].location = stringTempArr[ i ]; // assing room number to classObj
    }
    // }
    // catch ( err ) // if room number missing
    // {
    //     console.log( "Class locations missing" );
    // }



    // try
    // {
    stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove units




    // units ////////////////////////////////////////////////////////////////////////

    classObj.units = stringTemp.substring( 0, stringTemp.length - 1 ); // parses units and assing to class    
    // }
    // catch ( err ) // if units missing
    // {
    //     console.log( "Class units missing" );
    // }




    // try
    // {
    stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove status



    // status ///////////////////////////////////////////////////////////////////////////

    classObj.status = stringTemp.substring( 0, stringTemp.length - 1 ); // parses status and assigns to class     
    // }
    // catch ( err ) // if status missing
    // {
    //     console.log( "Class status missing" );
    // }




    // try
    // {
    stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove seats



    // seats /////////////////////////////////////////////////////////////////////////////////

    classObj.seats = stringTemp.substring( 0, stringTemp.length - 1 ); // parses seats and assing to class
    // }
    // catch ( err ) // if seats missing
    // {
    //     console.log( "Available number of seats missing" );
    // }




    stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove dates

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );



    for ( i = 0; i < sessionLength; i++ ) // for number of session parse dates as days from jan 1
    {
        var month, day;

        classObj.sessions_[ i ].dateS = stringTempArr[ i ]; // assing date to class

        stringTemp = stringTempArr[ i ];

        month = MonthToDay( Number( stringTemp.match( /\d\d?/ )[ 0 ] ) ); // parses the start month and converts it to days from jan 1st

        stringTemp = stringTemp.replace( /\d\d?\//, "" ); // removes start month

        day = Number( stringTemp.match( /\d\d?/ )[ 0 ] ); // parses start day

        stringTemp = stringTemp.replace( /\d\d?\-/, "" ); // removes start day

        classObj.sessions_[ i ].dateStart = month + day; // assign start date as number of days from jan 1st


        // same but for end date

        month = MonthToDay( Number( stringTemp.match( /\d\d?/ )[ 0 ] ) );

        stringTemp = stringTemp.replace( /\d\d?\//, "" );

        day = Number( stringTemp.match( /\d\d?/ )[ 0 ] );

        classObj.sessions_[ i ].dateEnd = month + day;
    }




    // try
    // {
    stringTemp = courseText.match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText = courseText.replace( /.*?(>|\t)/, "" ); // remove final exam


    // final exam //////////////////////////////////////////////////////////////////////////////

    classObj.finalExam = stringTemp.match( /\d\d?\/\d\d?\/\d{4}/ )[ 0 ]; // parse final exam and assing to class
    // }
    // catch ( err ) // if final exam missing
    // {
    //     console.log( "error adding final exam date" );
    // }



    // try
    // {
    if ( courseText.length > 0 ) // if class data remaing
    {
        stringTemp = courseText.match( /.*?(>)/ )[ 0 ]; // pull until first tab

        classObj.note = stringTemp.substring( 0, stringTemp.length - 1 ).trim(); // parse note and assing to class
    }
    // }
    // catch ( err ) // if error adding note
    // {
    //     console.log( "error adding class notes" );
    // }

    classObj.$div = AddClassElement( classObj, $courseDiv );
    classObj.$parent = $courseDiv;
    classObj.style = courseObj.style;
    classObj.parent = courseObj;


    return classObj;
    // }
    // catch ( err )
    // {
    //     courseTemp.classes.pop();
    //     console.log( "error_AddClass" + err );
    // }
 }

 function ParseClassData( data, sessionNum )
 {
    parsed = [];

    for ( var j = 0; j < sessionNum; j++ ) // for number of sessions parse times as strings
    {
        var temp = data.match( /.*?(>|&|\t)/ )[ 0 ]; // pull a session of data

        data = data.replace( /.*?(>|&|\t)/, "" ); // remove day from string

        parsed.push( temp.substring( 0, temp.length - 1 ) );

        if ( data.length <= 1 ) // if missed tab
        {
            break;
        }
    }

    return parsed;
 }

 function Course( courseTitle )
 {
    this.courseTitle = courseTitle;
    this.classes_ = [];
    this.$div = null;
    this.visible = true;
    this.expanded = true;
    this.unlocked = true;
    this.classDeletedNum = 0;
    this.style = new Style();

    this.RefreshStyle = function()
    {
        this.$div.css( 'background', 'hsl(' + this.style.hue + ', ' + ( this.style.sat - 10 ) + '%, ' + ( this.style.lit + 25 ) + '%)' );

        var classesLen = this.classes_.length;
        for ( var i = 0; i < classesLen; i++ )
        {
            this.classes_[ i ].RefreshStyle();
        }
    };
 }

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


    this.RefreshStyle = function()
    {
        if ( this.press )
        {
            this.$div.css( 'background', 'hsl(' + ( this.style.hue ) + ', ' + ( this.style.sat + 20 ) + '%, ' + ( this.style.lit - 10 ) + '%)' );
        }
        else if ( this.hover && this.active )
        {
            this.$div.css( 'background', 'hsl(' + ( this.style.hue ) + ', ' + ( this.style.sat + 35 ) + '%, ' + ( this.style.lit + 17 ) + '%)' );
        }
        else if ( this.hover )
        {
            this.$div.css( 'background', 'hsl(' + ( this.style.hue ) + ', ' + ( this.style.sat + 25 ) + '%, ' + ( this.style.lit + 25 ) + '%)' );
        }
        else if ( this.active )
        {
            this.$div.css( 'background', 'hsl(' + ( this.style.hue ) + ', ' + ( this.style.sat + 35 ) + '%, ' + ( this.style.lit + 7 ) + '%)' );
        }
        else
        {
            this.$div.css( 'background', 'hsl(' + ( this.style.hue ) + ', ' + ( this.style.sat - 25 ) + '%, ' + ( this.style.lit + 20 ) + '%)' );
        }



        /*  background-color: hsl(170, 60%, 70%);

            &:hover {
                background-color: hsl(170, 100%, 70%);
            }
            &:active {
                background-color: hsl(170, 90%, 40%);
            }
            &.active {
                background-color: hsl(170, 95%, 50%);
            }*/
    };

    this.DrawClass = function() // draws each session in the class
        {
            for ( var i = 0; i < this.sessions_.length; i++ )
            {
                this.DrawSession( i );
            }
        };


    this.DrawSession = function( sessionNum ) // draws the individual session of a class
        {
            var infoTemp = this.parent.courseTitle;
            var info;

            for ( var i = 0; i < 7 ; i++ )
            {
                if ( this.sessions_[ sessionNum ].days[ i ] == 1 )
                {
                    var x1, x2, y1, y2;

                    x1 = GetDrawX( i, this.sessions_[ sessionNum ].dateStart, this.sessions_[ sessionNum ].dateStart );
                    x2 = GetDrawX( i, this.sessions_[ sessionNum ].dateEnd + 0.001, this.sessions_[ sessionNum ].dateStart ); // + cellW + 1;
                    y1 = GetDrawY( this.sessions_[ sessionNum ].timeStart );
                    y2 = GetDrawY( this.sessions_[ sessionNum ].timeEnd );

                    info = infoTemp + "</br>Loc: " + this.sessions_[ sessionNum ].location;


                    DrawRect( x1, y1, x2, y2, "black", 1, true, "hsla(" + this.style.hue + "," + 90 + "%," + /* this.lval */ 60 + "%," + 1 + ")", info, this, sessionNum );
                }
            }


        };
 }


 function Session()
 {
    this.days = [];
    this.daysS = "";
    this.timeStart = 0;
    this.timeS = "";
    this.timeEnd = 0;
    this.instructor = "";
    this.location = 0;
    this.dateStart = 0;
    this.dateS = "";
    this.dateEnd = 0;
 }

 function Style( hue, sat, lit )
 {
    this.hue = hue;
    this.sat = sat;
    this.lit = lit;
 }

 function NextStyle()
 {
    if ( styleIndex === 20 )
    {
        styleIndex = 0;
    }
    return Styles_[ styleIndex++ ];
 }


 function AddCourseElement( courseObj )
 {
    var $courseDiv = $( "<div/>",
    {
        class: 'course-wrap',

    } ).appendTo( "#course-panel" ); // create a course div

    $courseDiv.data( "course", courseObj );

    $courseDiv.append( '<div class="course-header">' +
        '<div class="course-title">' + courseObj.courseTitle + '</div>' +
        '<div class="course-button-wrap">' +
        '<div class="course-button">z</div>' +
        '<div class="course-button">y</div>' +
        '<div class="course-button">x</div>' +
        '<div class="course-button course-collapse">w</div>' +
        '</div>' +
        '</div>' +
        '<div class="class-wrap"></div>'
    );

    return $courseDiv;
 }




 function AddClassElement( classObj, $courseDiv )
 {
    var $classDiv = $( "<div/>",
    {
        class: "class-button"
    } );

    $classDiv.data( "class", classObj );

    $classDiv.append( '<span class="class-title">' +
        ( classObj.sect + ' - ' + classObj.sessions_[ 0 ].instructor ) +
        '</span> <div class="class-close-button">X</div>'
    );

    $courseDiv.children( ".class-wrap" ).append( $classDiv );

    return $classDiv;
 }


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




 function DrawRect( x, y, x2, y2, col1, lw, fill, col2, info, parent, sessionNum ) // creates a div over the table to represent a class session
    {
        $div = $( "<div>",
        {
            class: "drawClass",
        } ); // create a course div

        $div.width( x2 - x - lw * 2 + "px" );
        $div.height( 1 + y2 - y - lw * 2 + "px" );

        $div.css( "top", y + "px" );
        $div.css( "left", x + "px" );

        $div.css( "box-shadow", "inset 0 0 0 1000px " + col2 );
        $div.css( "border-color", col1 );
        $div.css( "border-width", lw + "px" );


        /*
        if ( info !== undefined )
        {
            $div.html( "<div><p>" + info + "</p></div>" );
            $div.data( "parent", parent ); // bind class object to button
            $div.data( "sessionNum", sessionNum );
        }
        */

        $( "#timesheet" ).append( $div );
    }


    function GetDrawX( day , date , dateStart ) // converts the day of the week and start/end dates into x coords
    {
        var semStart , semEnd;

        if ( dateStart < 152 )
        {
            semStart = SPRING_START;
            semEnd = SPRING_END;
        }
        else if ( dateStart < 213 )
        {
            semStart = SUMMER_START;
            semEnd = SUMMER_END;
        }
        else
        {
            semStart = FALL_START;
            semEnd = FALL_END;
        }

        if ( date == dateStart )
        {
            return ( firstColW + Math.round( Math.min( Math.round( Math.min( Math.max( 0 , date - semStart ) , semEnd - semStart ) / 7 ) * 7 , semEnd - semStart ) * ( cellW / ( semEnd - semStart ) ) + ( cellW + 2 ) * day ) );
        }
        else
        {
            return ( firstColW + Math.round( Math.min( Math.ceil( Math.min( Math.max( 0 , date - semStart ) , semEnd - semStart ) / 7 ) * 7 , semEnd - semStart ) * ( ( cellW + 3 ) / ( semEnd - semStart ) ) + ( cellW + 2 ) * day ) );
        }
    }


    function GetDrawY( time ) // converts class start times into y coords
    {
        return ( firstRowH + Math.round( ( time ) * ( cellH / 60 ) ) );
    }
