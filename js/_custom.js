console.log( "Custom.js loaded" );


function Custom()
{
    this.customs_ = [];

    var self = this;
    var active = false;



    var _ = {
        addCustomButton: $( "#add-custom-button" ),
        shadow: $( "#shadow" ),
        customDiv: $( "#custom" ),
        newEvent: $( "#new-event" ),
    };


    this.Init = function()
    {
        self.BindEvents();
    };

    this.BindEvents = function()
    {
        _.addCustomButton.click( function()
        {
            self.ToggleActive();
            console.log( self.active );
        } );

        _.newEvent.click( function()
        {
            self.AddCustom();
            console.log( "new event" );
        } );

    };

    this.ToggleActive = function( active )
    {
        if ( active === undefined )
        {
            self.active = !self.active;
            this.ToggleActive( self.active );
        }
        else if ( active )
        {
            self.active = true;
            _.customDiv.addClass( "active" );
            _.shadow.addClass( "active" );
        }
        else
        {
            self.active = false;
            _.customDiv.removeClass( "active" );
            _.shadow.removeClass( "active" );

        }
    };



    this.AddCustom = function()
    {
        var custom = new Event();
        this.customs_.push( custom );
        custom.Init();
    };

}


function Event()
{
    this.title = '';
    this.label = '';
    this.eventSessions_ = [];
    this.$div = null;

    var self = this;

    var _ = {
        parentDiv: $( "#events-wrap" ),

    };


    this.Init = function()
    {
        self.style = NextStyle();
        self.$div = self.AddCustomElement( self.style );
        //self.BindEvents();
    };

    this.AddCustomElement = function( style )
    {
        var $eventDiv = $( "<div/>",
        {
            class: 'custom-box-wrap hide',

        } ).appendTo( _.parentDiv ); // create a course div

        $eventDiv.append(
            '<span>  Custom Event 1 </span>' +
            '<div class="custom-event-wrap">' +
            '<div class="cell-row cell-header">' +
            '   <div class="cell">Title</div>' +
            '   <div class="cell">Label</div>' +
            '</div>' +
            '<div class="cell-row">' +
            '   <div class="cell">' +
            '       <div class="inter-cell">' +
            '           <input type="text" />' +
            '       </div>' +
            '   </div>' +
            '   <div class="cell">' +
            '       <div class="inter-cell">' +
            '           <input type="text" />' +
            '       </div>' +
            '   </div>' +
            '</div>' +
            '<div class="cell-row cell-header">' +
            '   <div class="cell">Hours</div>' +
            '   <div class="cell">Days</div>' +
            '</div>' +
            '<div class="cell-row">' +
            '   <div class="cell">' +
            '       <div class="inter-cell">' +
            '           <input class="time" type="time" step="900" />-' +
            '           <input class="time" type="time" step="900" />' +
            '       </div>' +
            '   </div>' +
            '' +
            '   <div class="cell">' +
            '       <div class="inter-cell">' +
            '           <div class="button b-days">' +
            '               <div class="button-inside active">M</div>' +
            '           </div>' +
            '           <div class="button b-days">' +
            '               <div class="button-inside">T</div>' +
            '           </div>' +
            '           <div class="button b-days">' +
            '               <div class="button-inside active">W</div>' +
            '           </div>' +
            '           <div class="button b-days">' +
            '               <div class="button-inside">T</div>' +
            '           </div>' +
            '           <div class="button b-days">' +
            '               <div class="button-inside">F</div>' +
            '           </div>' +
            '           <div class="button b-days">' +
            '               <div class="button-inside">S</div>' +
            '           </div>' +
            '           <div class="button b-days">' +
            '               <div class="button-inside">S</div>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            '</div>' +
            '<div class="cell-row add">' +
            '   <div class="cell">' +
            '       <div class="inter-cell">' +
            '           <div class="button-wrap">' +
            '               <div class="button">' +
            '                   <div class="button-inside add-time">Add Time' +
            '                   </div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            '</div>' +
            '</div>'
        );

        var h = $eventDiv.height();
        $eventDiv.height( "0px" );

        $eventDiv.find( ".add-time" ).css( 'background', 'hsl(' + style.hue + ', ' + ( style.sat ) + '%, ' + ( style.lit + 28 ) + '%)' );
        $eventDiv.css( 'background', 'hsl(' + style.hue + ', ' + ( style.sat + 5 ) + '%, ' + ( style.lit + 17 ) + '%)' );

        setTimeout( function()
        {
            $eventDiv.removeClass( 'hide' );
            $eventDiv.height( h + "px" );
        }, 20 );


        return $eventDiv;
    };

}


function EventSession()
{

}
