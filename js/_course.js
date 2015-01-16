console.log( "Course.js loaded" );




var styleIndex = 0;
// var Styles_ = [
//     new Style( 2, 79, 57 ),
//     new Style( 108, 61, 54 ),
//     new Style( 197, 56, 56 ),
//     new Style( 295, 67, 63 ),
//     new Style( 40, 64, 58 ),
//     new Style( 150, 50, 52 ),
//     new Style( 271, 52, 70 ),
//     new Style( 18, 76, 56 ),
//     new Style( 221, 63, 65 ),
//     new Style( 75, 53, 47 ),
//     new Style( 176, 61, 47 ),
//     new Style( 47, 80, 53 ),
//     new Style( 352, 80, 64 ),
//     new Style( 113, 40, 45 ),
//     new Style( 188, 70, 54 ),
//     new Style( 96, 80, 47 ),
//     new Style( 330, 71, 65 ),
//     new Style( 31, 70, 52 ),
//     new Style( 216, 51, 65 ),
//     new Style( 250, 79, 71 )
// ];

var Styles_ = [

    new Style( 2, 75, 57 ), //red
    new Style( 102, 66, 54 ), // green
    new Style( 198, 65, 56 ), // blue
    // new Style( 5, 82, 64 ),
    // new Style( 114, 85, 59 ),
    // new Style( 226, 91, 70 ),
    new Style( 44, 78, 54 ), //gold
    new Style( 286, 73, 62 ), // magenta
    new Style( 150, 61, 52 ), //green blue
    new Style( 26, 80, 52 ), // orange
    new Style( 258, 70, 68 ), // purp
    new Style( 60, 74, 52 ), // yellow
    new Style( 309, 77, 67 ), // pink

    new Style( 184, 70, 57 ), // sky blue
    new Style( 121, 47, 47 ), // darker green

    new Style( 352, 80, 66 ), // light red
    new Style( 47, 80, 53 ), // goldenrod
    new Style( 96, 80, 58 ), // light green
    //new Style( 330, 71, 65 ),
    new Style( 33, 70, 58 ), // light orange
    new Style( 216, 51, 65 ), // light blue purple
    new Style( 240, 79, 70 )

];

function NextStyle()
{
    if ( styleIndex === 18 )
    {
        styleIndex = 0;
    }
    return Styles_[ styleIndex++ ];
}



function Course( courseTitle )
{
    this.courseTitle = courseTitle;
    this.courseSubtitle = "test test";
    this.classes_ = [];
    this.$div = null;
    this.visible = true;
    this.expanded = true;
    this.unlocked = true;
    this.classDeletedNum = 0;
    this.style = new Style();
    this.divStyle = new DivStyle( new Style() );
    this.parent = null;
    this.STYLE = null;




    var self = this;

    var _ = {
        exp: $( "#add-box" ),
        vis: $( "#add-button" ),
        lck: $( ".add-bar" ),
        rmv: $( "#add-results" ),
        addResultsList: $( "#add-results-list" ),
        collapseButton: $( ".add-collapse" ),
        closeButton: $( ".add-close" ),
    };



    // public //
    this.Init = function( parent, courseText_, activeClassNum )
    {
        this.parent = parent;
        self.style = NextStyle();
        this.STYLE = $.extend(
        {}, this.style );
        self.$div = self.AddCourseElement( self );
        self.classes_ = self.AddClasses( courseText_, activeClassNum, self );
        self.RefreshStyle();
        this.BindEvents();
    };



    this.BindEvents = function()
    {
        self.$div.find( ".course-collapse" ).click( function()
        {
            self.ToggleExpanded( this );
            self.RefreshStyle();
            console.info( self.courseTitle + " expanded: " + self.expanded );
        } );

        self.$div.find( ".course-visible" ).click( function()
        {
            self.ToggleVisible( this );
            self.RefreshStyle();
            console.info( self.courseTitle + " visible: " + self.visible );
        } );

        self.$div.find( ".course-lock" ).click( function()
        {
            self.ToggleLock( this );
            self.RefreshStyle();
            console.info( self.courseTitle + " lock" );
        } );

        self.$div.find( ".course-remove" ).click( function()
        {
            console.info( self.courseTitle + " remove" );
        } );
    };



    this.ToggleExpanded = function( div, active )
    {
        var $par = null;

        if ( active === undefined )
        {
            self.expanded = !self.expanded;
            self.ToggleExpanded( div, self.expanded );
        }
        else if ( active )
        {
            self.expanded = true;
            $( div ).removeClass( "active" );
            $par = $( div ).parents( ".course-wrap" );
            $par.find( ".class-button" ).removeClass( "class-mini" );
            $par.find( ".class-button" ).removeClass( "class-solo" );


        }
        else
        {
            self.expanded = false;
            $( div ).addClass( "active" );
            $par = $( div ).parents( ".course-wrap" );
            $par.find( ".class-button:not(.active)" ).addClass( "class-mini" );
            $par.find( ".class-button.active" ).addClass( "class-solo" );
            self.RefreshStyle();
        }
    };



    this.ToggleVisible = function( div, active )
    {
        if ( active === undefined )
        {
            self.visible = !self.visible;
            self.ToggleVisible( div, self.visible );
        }
        else if ( active )
        {
            self.visible = true;
            $( div ).removeClass( "active" );
        }
        else
        {
            self.visible = false;
            $( div ).addClass( "active" );
        }
    };


    this.ToggleLock = function( div, active )
    {
        if ( active === undefined )
        {
            self.unlocked = !self.unlocked;
            self.ToggleLock( div, self.unlocked );
        }
        else if ( active )
        {
            self.unlocked = true;
            $( div ).removeClass( "active" );
        }
        else
        {
            self.unlocked = false;
            $( div ).addClass( "active" );
        }
    };



    this.RefreshStyle = function()
    {
        if ( self.visible )
        {
            self.style.sat = self.STYLE.sat;
            self.style.lit = self.STYLE.lit;
        }
        else
        {
            self.style.sat = -100;
            self.style.lit = 50;
        }

        if ( self.unlocked )
        {
            self.$div.css( 'background', 'hsl(' + this.style.hue + ', ' + ( this.style.sat - 9 ) + '%, ' + ( this.style.lit + 28 ) + '%)' );
        }
        else
        {
            self.$div.css( 'background', 'hsl(' + this.style.hue + ', ' + ( this.style.sat + 35 ) + '%, ' + ( this.style.lit + 17 ) + '%)' );
        }



        var classesLen = self.classes_.length;
        for ( var i = 0; i < classesLen; i++ )
        {
            self.classes_[ i ].RefreshStyle();
        }
    };

    this.AddCourseElement = function( courseObj )
    {
        var $courseDiv = $( "<div/>",
        {
            class: 'course-wrap hide',

        } ).appendTo( "#course-panel" ); // create a course div

        $courseDiv.data( "course", courseObj );

        $courseDiv.append( '<div class="course-header">' +
            '<div class="course-title">' + courseObj.courseTitle + '</div>' +
            '<div class="course-button-wrap">' +
            '<div class="course-button course-remove icon">x</div>' +
            '<div class="course-button course-lock icon">l</div>' +
            '<div class="course-button course-visible icon">v</div>' +
            '<div class="course-button course-collapse icon">u</div>' +
            '</div>' +
            '</div>' +
            '<div class="class-wrap"></div>'
        );

        setTimeout( function()
        {
            $courseDiv.removeClass( 'hide' );
        }, 20 );


        return $courseDiv;
    };

    // public //
    this.AddClasses = function( courseText_, activeClassNum, courseObj )
    {
        var courseTextLen = courseText_.length;
        var classes_ = [];

        for ( var i = 0; i < courseTextLen; i++ )
        {
            var firstChar = courseText_[ i ].charAt( 1 );

            console.log( firstChar );

            if ( firstChar >= '0' && firstChar <= '9' )
            {
                classes_.push( self.AddClass( courseText_[ i ], ( i === activeClassNum ), courseObj ) );
            }
            else
            {
                classes_[ classes_.length - 1 ].note = courseText_[ i ].match( /<(.*)>/ )[ 1 ];
            }
        }

        return classes_;
    };

    this.ParseClassData = function( data, sessionNum )
    {
        parsed = [];

        for ( var j = 0; j < sessionNum; j++ ) // for number of sessions parse times as strings
        {
            var temp = data.match( /.*?(>|┃|―)/ )[ 0 ]; // pull a session of data

            data = data.replace( /.*?(>|┃|―)/, "" ); // remove day from string

            parsed.push( temp.substring( 0, temp.length - 1 ) );

            if ( data.length <= 1 ) // if missed tab
            {
                break;
            }
        }

        return parsed;
    };

    // public //
    this.AddClass = function( courseText, isActive, courseObj )
    {
        var classObj = new Class();
        var i;
        var stringTempArr = [];

        // try
        // {

        // sect number //////////////////////////////////////////////////////////////////////////////

        classObj.sect = courseText.match( /\d{4}/ )[ 0 ]; // pull sect number

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove sect number




        var stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        //courseText = courseText.replace( /.*?(>|―)/ , "" ); // remove up to first tab

        stringTemp = stringTemp.replace( /Th/g, "R" ); // replace Th with R

        stringTemp = stringTemp.replace( /Sat/g, "S" ); // replace Sat with S

        stringTemp = stringTemp.replace( /Sun/g, "N" ); // replace Sat with S

        stringTemp = stringTemp.replace( /TBA/g, "X" ); // replace TBA with X

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, 20 );

        //console.log( stringTempArr );

        var sessionLength = stringTempArr.length; // number of class sessions

        //console.log( stringTempArr.length );


        // Days of the week //////////////////////////////////////////////////////////////////////////

        loop1: for ( i = 0; i < sessionLength; i++ ) // for number of class sessions create session object
            {
                var sessionObj = new Session( self.divStyle ); // create new session object
                classObj.sessions_.push( sessionObj ); // push session object into class.sessions array


                var charTemp = ""; // temp chracter for parsing days of the week

                while ( true ) //  parses the days of the week
                {
                    charTemp = stringTempArr[ i ].charAt( 0 ); // get first character of stringTemp

                    switch ( charTemp.toUpperCase() )
                    // assign values to days array, 1 = true
                    {
                        case "M":
                            sessionObj.days_[ 0 ] = 1;
                            break;

                        case "T":
                            sessionObj.days_[ 1 ] = 1;
                            break;

                        case "W":
                            sessionObj.days_[ 2 ] = 1;
                            break;

                        case "R":
                            sessionObj.days_[ 3 ] = 1;
                            break;

                        case "F":
                            sessionObj.days_[ 4 ] = 1;
                            break;

                        case "S":
                            sessionObj.days_[ 5 ] = 1;
                            //isSaturday = true;
                            break;

                        case "N":
                            sessionObj.days_[ 6 ] = 1;
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




        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove days

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

        //console.log( stringTempArr );




        // days as string /////////////////////////////////////////////////////////////////

        for ( i = 0; i < sessionLength; i++ ) // for number of sessions parse instructor name
        {
            classObj.sessions_[ i ].daysS = stringTempArr[ i ];
        }




        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until next tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove up to first tab

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

        //console.log( stringTempArr );



        // Times /////////////////////////////////////////////////////////////////////////

        for ( i = 0; i < sessionLength; i++ ) // for number of sessions parse class times
        {
            try
            {
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

            }
            catch ( err )
            {
                console.log( "error adding times" + i );
            }
        }




        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove instructor

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

        //console.log( stringTempArr );



        // instructor /////////////////////////////////////////////////////////////////

        for ( i = 0; i < sessionLength; i++ ) // for number of sessions_ parse instructor name
        {
            classObj.sessions_[ i ].instructor = stringTempArr[ i ]; // assign instructor to class
        }




        // try
        // {
        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove room number

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

        //console.log( stringTempArr );




        // room number /////////////////////////////////////////////////////////

        for ( i = 0; i < sessionLength; i++ )
        {
            classObj.sessions_[ i ].location = stringTempArr[ i ]; // assing room number to classObj
        }
        // }
        // catch ( err ) // if room number missing
        // {
        //     console.warn( "Class locations missing" );
        // }



        // try
        // {
        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove units




        // units ////////////////////////////////////////////////////////////////////////

        classObj.units = stringTemp.substring( 0, stringTemp.length - 1 ); // parses units and assing to class    
        // }
        // catch ( err ) // if units missing
        // {
        //     console.warn( "Class units missing" );
        // }




        // try
        // {
        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove status



        // status ///////////////////////////////////////////////////////////////////////////

        classObj.status = stringTemp.substring( 0, stringTemp.length - 1 ); // parses status and assigns to class     
        // }
        // catch ( err ) // if status missing
        // {
        //     console.warn( "Class status missing" );
        // }




        // try
        // {
        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove seats



        // seats /////////////////////////////////////////////////////////////////////////////////

        classObj.seats = stringTemp.substring( 0, stringTemp.length - 1 ); // parses seats and assing to class
        // }
        // catch ( err ) // if seats missing
        // {
        //     console.warn( "Available number of seats missing" );
        // }




        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove dates

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

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




        try
        {
            stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

            courseText = courseText.replace( /.*?(>|―)/, "" ); // remove final exam


            // final exam //////////////////////////////////////////////////////////////////////////////

            classObj.finalExam = stringTemp.match( /\d\d?\/\d\d?\/\d{4}/ )[ 0 ]; // parse final exam and assing to class
        }
        catch ( err ) // if final exam missing
        {
            console.warn( "error adding final exam date" );
        }



        //         try
        //         {
        //         if ( courseText.length > 0 ) // if class data remaing
        //         {
        //             stringTemp = courseText.match( /.*?(>)/ )[ 0 ]; // pull until first tab

        //             classObj.note = stringTemp.substring( 0, stringTemp.length - 1 ).trim(); // parse note and assing to class
        //         }
        //         }
        //         catch ( err ) // if error adding note
        //         {
        //             console.warn( "error adding class notes" );
        //         } 

        classObj.Init( courseObj );


        return classObj;
        // }
        // catch ( err )
        // {
        //     courseTemp.classes.pop();
        //     console.warn( "error_AddClass" + err );
        // }

    };


    // public //
    this.DrawCourse = function( refresh, divStyle )
    {
        var classesLen = self.classes_.length;

        for ( var i = 0; i < classesLen; i++ )
        {
            self.DrawClass( refresh, divStyle, i );
        }
    };

    this.HideCourse = function()
    {
        var classesLen = self.classes_.length;

        for ( var i = 0; i < classesLen; i++ )
        {
            self.HideClass( i );
        }
    };

    // public //
    this.DrawClass = function( refresh, divStyle, i )
    {
        self.classes_[ i ].DrawClass( refresh, divStyle );
    };

    this.HideClass = function( i )
    {
        self.classes_[ i ].HideClass();
    };

}
