console.log("Class.js loaded");


function Class() {
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
    this.classDiv = null;

    var self = this;

    this.Init = function(courseObj) {
        self.parent = courseObj;
        self.$parent = courseObj.$div;
        self.style = courseObj.style;
        self.$div = self.AddClassElement(self, self.$parent);
        self.BindEvents();
        self.classDiv = new self.ClassDiv();
    };

    this.BindEvents = function() {
        self.$div.mouseenter(function() {
            self.hover = true;

            self.RefreshStyle();
            self.PopulateInfo();
            console.info(self.sect + "mouseenter");

            if (!self.active) {
                self.DrawClass();
            }
            

            //console.log( "mouseenter class-button" );
        });

        self.$div.mouseleave(function() {
            self.hover = false;
            self.press = false;

            self.RefreshStyle();
            console.info(self.sect + "mouseleave");

            if (!self.active) {
                self.HideClass();
            }

            //console.log( "mouseenter class-button" );
        });

        self.$div.mouseup(function() {
            self.press = false;

            self.RefreshStyle();
            console.info(self.sect + "mouseup");

            //console.log( "mouseenter class-button" );
        });

        self.$div.mousedown(function() {
            self.press = true;

            self.RefreshStyle();
            console.info(self.sect + "mousedown");

            //console.log( "mouseenter class-button" );
        });

        self.$div.click(function() {
            self.ToggleActive();
            console.info(self.sect + "mouseclick");

            //console.log( "mouseenter class-button" );
        });

    };

    this.AddClassElement = function(classObj, $courseDiv) {
        var $classDiv = $("<div/>", {
            class: "class-button class-mini"
        });

        $classDiv.data("class", classObj);

        $classDiv.append('<span class="class-title">' +
            (classObj.sect + ' - ' + classObj.sessions_[0].instructor) +
            '</span> <div class="class-close-button">x</div>'
        );

        $courseDiv.children(".class-wrap").append($classDiv);
        setTimeout(function() {
            $classDiv.removeClass('class-mini');
        }, 1);

        return $classDiv;
    };

    this.ToggleActive = function(active) {
        if (active === undefined) {
            self.active = !self.active;
            this.ToggleActive(self.active);
        } else {
            var classes_ = self.parent.classes_;
            var classesLen = classes_.length;
            var clas = null;
            var i = 0;
            if (active) {

                for (i = 0; i < classesLen; i++) {
                    clas = classes_[i];
                    if (clas.active) {
                        clas.active = false;
                        clas.RefreshStyle();
                        clas.HideClass();
                    }
                }

                self.active = true;
                self.RefreshStyle();
                self.DrawClass();

            } else {
                for (i = 0; i < classesLen; i++) {
                    clas = classes_[i];
                    if (clas.active) {
                        clas.active = false;
                        clas.RefreshStyle();
                        clas.HideClass();
                    }
                }

            }
        }
    };

    this.RefreshStyle = function() {
        if (self.press) {
            self.$div.css('background', 'hsl(' + (self.style.hue) + ', ' + (self.style.sat + 20) + '%, ' + (self.style.lit - 10) + '%)');
        } else if (self.active) {
            self.$div.css('background', 'hsl(' + (self.style.hue) + ', ' + (self.style.sat + 35) + '%, ' + (self.style.lit + 7) + '%)');
        } else if (self.hover) {
            self.$div.css('background', 'hsl(' + (self.style.hue) + ', ' + (self.style.sat + 25) + '%, ' + (self.style.lit + 20) + '%)');
        } else {
            self.$div.css('background', 'hsl(' + (self.style.hue) + ', ' + (self.style.sat - 25) + '%, ' + (self.style.lit + 20) + '%)');
        }
    };

    this.DrawClass = function() {
        srjc.canvas.ClassAdd(self.classDiv);
    };

    this.HideClass = function() {
        srjc.canvas.ClassRemove(self.classDiv);
    };



    this.DrawSession = function(sessionNum) {
        for (var day = 0; day < 7; day++) {
            if (self.sessions_[sessionNum].days_[day] == 1) {
                srjc.canvas.SessionAdd(new self.SessionDiv(self, day, self.sessions_[sessionNum].dateStart,
                    self.sessions_[sessionNum].dateEnd,
                    self.sessions_[sessionNum].timeStart,
                    self.sessions_[sessionNum].timeEnd,
                    self.style));
            }
        }
    };

    // public //
    this.ClassDiv = function() {
        this.parent = self.parent;
        this.current = false;
        this.$divs_ = [];

        this.sessionDivs_ = [];

        var sessionsLen = self.sessions_.length;

        for (var i = 0; i < sessionsLen; i++) {
            this.sessionDivs_.push(new self.SessionDiv(self.sessions_[i]));
        }




    };

    this.SessionDiv = function(session) {
        var semStart, semEnd;

        if (session.dateStart < 152) {
            semStart = SPRING_START;
            semEnd = SPRING_END;
        } else if (session.dateStart < 213) {
            semStart = SUMMER_START;
            semEnd = SUMMER_END;
        } else {
            semStart = FALL_START;
            semEnd = FALL_END;
        }

        this.widthPre = Math.max(2, session.dateEnd - session.dateStart) +
            Math.min(session.dateStart - semStart, 0) -
            Math.max(session.dateEnd - semEnd, 0);
        //console.log( "widthPre " + this.widthPre );

        this.xPre = Math.max(session.dateStart - semStart, 0);
        // console.log( "xPre " + this.xPre );

        this.heightPre = session.timeEnd - session.timeStart;
        this.semLen = (semEnd - semStart);



        this.parent = self.classDiv;
        this.session = session;
        this.x_ = [];
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.current = false;

        this.style = self.style;

        this.innerColor = '';
        this.borderColor = 'black';
        this.borderWidth = '1px';
        this.days_ = session.days_;
        //this.dateStart = dateStart;
        // this.dateEnd = dateEnd;
        this.timeStart = session.timeStart;
        // this.timeEnd = timeEnd;
        // this.style = style;
    };

    // public //
    this.PopulateInfo = function() {
        srjc.info.PopulateInfo(self);

    };

}
