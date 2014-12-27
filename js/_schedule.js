console.log("Schedule.js loaded");


function Schedule()
{
    // public 
    this.courses_ = [];



    // private



    // public //
    this.AddCourse = function( courseText_, courseTitle, activeClassNum )
    {
        var courseObj = new Course( courseTitle );
        this.courses_.push( courseObj );
        courseObj.Init( courseText_ , activeClassNum );

        console.log( courseObj.classes_ );
    };
}