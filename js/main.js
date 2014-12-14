 //$(document).ready(function(){

 var firstTableColW = 40;
 var tableColN = 7;
 var tableColW;
 var tableRowH;
 var panelMinW = 220;

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
 } );

 $( "#course-panel" ).on( "click", ".class-button", function()
 {
    $( this ).parent().children().removeClass( "active" );
    $( this ).addClass( "active" );
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









 var courses = []; // contains the course objects
 var courseData = []; // contains the raw data for the courses

 var styleIndex = 0;


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


    courseObj.$div = AddCourseElement( courseTitle, courseObj.style );
    courseObj.classes_ = AddClasses( courseText_, courseObj.$div, activeClassNum );



 }

 function AddClasses( courseText_, $courseDiv, activeClassNum )
 {
    var courseTextLen = courseText_.length;
    var classes_ = [];

    for ( var i = 0; i < courseTextLen; i++ )
    {
        classes_.push( AddClass( courseText_[ i ], $courseDiv , ( i === activeClassNum ) ) );
    }

    return classes_;
 }

 function AddClass( courseText, $courseDiv , isActive )
 {
    var classObj = new Class();
    var i;

    // try
    // {

    // sect number //////////////////////////////////////////////////////////////////////////////

    classTemp.sect = courseText[ i ].match( /\d{4}/ )[ 0 ]; // pull sect number

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove sect number




    var stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    //courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/ , "" ); // remove up to first tab

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

    loop1: for ( i = 0 ; j < sessionLength; j++ ) // for number of class sessions create session object
        {
            var sessionTemp = new Session(); // create new session object
            classTemp.sessions.push( sessionTemp ); // push session object into class.sessions array


            var charTemp = ""; // temp chracter for parsing days of the week

            while ( true ) //  parses the days of the week
            {
                charTemp = stringTempArr[ j ].charAt( 0 ); // get first character of stringTemp

                switch ( charTemp.toUpperCase() )
                // assign values to days array, 1 = true
                {
                    case "M":
                        sessionTemp.days[ 0 ] = 1;
                        break;

                    case "T":
                        sessionTemp.days[ 1 ] = 1;
                        break;

                    case "W":
                        sessionTemp.days[ 2 ] = 1;
                        break;

                    case "R":
                        sessionTemp.days[ 3 ] = 1;
                        break;

                    case "F":
                        sessionTemp.days[ 4 ] = 1;
                        break;

                    case "S":
                        sessionTemp.days[ 5 ] = 1;
                        isSaturday = true;
                        break;

                    case "N":
                        sessionTemp.days[ 6 ] = 1;
                        isSunday = true;
                        break;
                }

                if ( stringTempArr[ j ].length == 1 ) // break both loops
                {
                    break;
                }

                stringTempArr[ j ] = stringTempArr[ j ].substring( 1, stringTempArr[ j ].length ); // remove first character from stringTemp

            }
        }




    stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove days

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );




    // days as string /////////////////////////////////////////////////////////////////

    for ( i = 0 ; j < sessionLength; j++ ) // for number of sessions parse instructor name
    {
        classTemp.sessions[ j ].daysS = stringTempArr[ j ];
    }




    stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until next tab

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove up to first tab

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );



    // Times /////////////////////////////////////////////////////////////////////////

    for ( i = 0 ; j < sessionLength; j++ ) // for number of sessions parse class times
    {
        // try
        // {
        var hour, min, ampm;

        stringTemp = stringTempArr[ j ];
        classTemp.sessions[ j ].timeS = stringTemp;

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

        classTemp.sessions[ j ].timeStart = hour * 60 + min - 360; // assign start time in minutes relative to 7AM


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

        classTemp.sessions[ j ].timeEnd = hour * 60 + min - 360; // assign end time in minutes relative to 7AM

        // }
        // catch ( err )
        // {
        //     console.log( "error adding times" + j );
        // }
    }




    stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove instructor

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );



    // instructor /////////////////////////////////////////////////////////////////

    for ( i = 0 ; j < sessionLength; j++ ) // for number of sessions parse instructor name
    {
        classTemp.sessions[ j ].instructor = stringTempArr[ j ]; // assign instructor to class
    }




    // try
    // {
    stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove room number

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );




    // room number /////////////////////////////////////////////////////////

    for ( i = 0 ; j < sessionLength; j++ )
    {
        classTemp.sessions[ j ].location = stringTempArr[ j ]; // assing room number to classTemp
    }
    // }
    // catch ( err ) // if room number missing
    // {
    //     console.log( "Class locations missing" );
    // }



    // try
    // {
    stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove units




    // units ////////////////////////////////////////////////////////////////////////

    classTemp.units = stringTemp.substring( 0, stringTemp.length - 1 ); // parses units and assing to class    
    // }
    // catch ( err ) // if units missing
    // {
    //     console.log( "Class units missing" );
    // }




    // try
    // {
    stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove status



    // status ///////////////////////////////////////////////////////////////////////////

    classTemp.status = stringTemp.substring( 0, stringTemp.length - 1 ); // parses status and assigns to class     
    // }
    // catch ( err ) // if status missing
    // {
    //     console.log( "Class status missing" );
    // }




    // try
    // {
    stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove seats



    // seats /////////////////////////////////////////////////////////////////////////////////

    classTemp.seats = stringTemp.substring( 0, stringTemp.length - 1 ); // parses seats and assing to class
    // }
    // catch ( err ) // if seats missing
    // {
    //     console.log( "Available number of seats missing" );
    // }




    stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove dates

    stringTempArr.splice( 0, stringTempArr.length ); // clear array

    stringTempArr = ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

    //console.log( stringTempArr );



    for ( i = 0 ; j < sessionLength; j++ ) // for number of session parse dates as days from jan 1
    {
        var month, day;

        classTemp.sessions[ j ].dateS = stringTempArr[ j ]; // assing date to class

        stringTemp = stringTempArr[ j ];

        month = MonthToDay( Number( stringTemp.match( /\d\d?/ )[ 0 ] ) ); // parses the start month and converts it to days from jan 1st

        stringTemp = stringTemp.replace( /\d\d?\//, "" ); // removes start month

        day = Number( stringTemp.match( /\d\d?/ )[ 0 ] ); // parses start day

        stringTemp = stringTemp.replace( /\d\d?\-/, "" ); // removes start day

        classTemp.sessions[ j ].dateStart = month + day; // assign start date as number of days from jan 1st


        // same but for end date

        month = MonthToDay( Number( stringTemp.match( /\d\d?/ )[ 0 ] ) );

        stringTemp = stringTemp.replace( /\d\d?\//, "" );

        day = Number( stringTemp.match( /\d\d?/ )[ 0 ] );

        classTemp.sessions[ j ].dateEnd = month + day;
    }




    // try
    // {
    stringTemp = courseText[ i ].match( /.*?(>|\t)/ )[ 0 ]; // pull until first tab

    courseText[ i ] = courseText[ i ].replace( /.*?(>|\t)/, "" ); // remove final exam


    // final exam //////////////////////////////////////////////////////////////////////////////

    classTemp.finalExam = stringTemp.match( /\d\d?\/\d\d?\/\d{4}/ )[ 0 ]; // parse final exam and assing to class
    // }
    // catch ( err ) // if final exam missing
    // {
    //     console.log( "error adding final exam date" );
    // }



    // try
    // {
    if ( courseText[ i ].length > 0 ) // if class data remaing
    {
        stringTemp = courseText[ i ].match( /.*?(>)/ )[ 0 ]; // pull until first tab

        classTemp.note = stringTemp.substring( 0, stringTemp.length - 1 ).trim(); // parse note and assing to class
    }
    // }
    // catch ( err ) // if error adding note
    // {
    //     console.log( "error adding class notes" );
    // }

    classObj.$div = AddClassElement( classObj.sect + ' - ' + classObj.instructor , $courseDiv );



    // }
    // catch ( err )
    // {
    //     courseTemp.classes.pop();
    //     console.log( "error_AddClass" + err );
    // }
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
 }

 function Class()
 {
    this.active = false; // drawn on screen
    this.note = ""; // class note
    this.sect = 0; // class section number
    this.seats = 0; // setats available
    this.units = ""; // class unots
    this.status = ""; // class status, open/closed/wait/etc
    this.finalExam = ""; // class final exam date
    this.sessions_ = []; // class sessions array
    this.$div = null; // div of button
    this.$parent = null; // course div
    this.style = null;
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

 function Style( hue, sat, lit, alf )
 {
    this.hue = hue;
    this.sat = sat;
    this.lit = lit;
    this.alf = alf;
 }

 function NextStyle()
 {
    return new Style( 100, 50, 50, 1 );
 }


 function AddCourseElement( courseTitle, style )
 {
    var $courseDiv = $( "<div/>",
    {
        class: 'course-wrap',
        css:
        {
            background: 'hsl(' + style.hue + ', ' + style.sat + '%, ' + style.lit + '%)'
        }
    } ).appendTo( "#course-panel" ); // create a course div

    $courseDiv.append( '<div class="course-header">' +
        '<div class="course-title">' + courseTitle + '</div>' +
        '<div class="course-button-wrap">' +
        '<div class="course-button">z</div>' +
        '<div class="course-button">y</div>' +
        '<div class="course-button">x</div>' +
        '<div class="course-button course-collapse">w</div>' +
        '</div>' +
        '</div>' +
        '<div class="class-wrap"></div>'
    );
    AddClassElement( $courseDiv, hue );

    return $courseDiv;
 }




 function AddClassElement( classTitle , $courseDiv )
 {
    var $temp = $courseDiv.children( ".class-wrap" );
    for ( var i = 0; i < 6; i++ )
    {
        $temp.append( '<div class="class-button" style="background-color: hsl(' + hue + ', 60%, 70%);"><span class="class-title">' + classTitle + '</span> <div class="class-close-button">X</div></div>' );
    }
 }

 