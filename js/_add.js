console.log( "Add.js loaded" );


function Add()
{
    var self = this;
    var searchActive = false;
    var resultsPanelActive = false;
    var courseTitles_ = [ "AGBUS 2", "AGBUS 51", "AGBUS 52", "AGBUS 61", "AGBUS 62", "AGBUS 7", "AGMEC 89", "AGRI 10", "AGRI 20", "AGRI 56", "AGRI 60", "AGRI 98", "AGRI 99", "AGRI 99I", "AJ 203", "AJ 21", "AJ 22", "AJ 222A", "AJ 222B", "AJ 223", "AJ 25", "AJ 299.88", "AJ 305", "AJ 348", "AJ 350", "AJ 351", "AJ 353", "AJ 354", "AJ 355", "AJ 361", "AJ 363", "AJ 364", "AJ 365", "AJ 369", "AJ 53", "AJ 54A", "AJ 54B", "AJ 55", "AJ 56", "AJ 70", "AJ 71", "AJ 714", "AJ 715", "AJ 98", "AJ 99I", "ANAT 1", "ANAT 140", "ANAT 40", "ANAT 58", "ANHLT 120", "ANHLT 121", "ANHLT 126", "ANHLT 141", "ANHLT 142", "ANHLT 151", "ANHLT 161", "ANHLT 50", "ANHLT 52", "ANSCI 2", "ANSCI 20", "ANSCI 26", "ANSCI 50", "ANSCI 91", "ANTHRO 1", "ANTHRO 1L", "ANTHRO 2", "ANTHRO 21", "ANTHRO 3", "ANTHRO 30", "ANTHRO 31", "ANTHRO 43", "AODS 90", "AODS 91", "APE 701", "APE 709", "APE 710", "APTECH 43", "APTECH 45", "APTECH 46", "APTECH 57", "APTECH 59", "APTECH 63", "APTECH 65", "ARCH 12", "ARCH 2.3", "ARCH 25B", "ARCH 26A", "ARCH 26B", "ARCH 27", "ART 1.1", "ART 1.2", "ART 12", "ART 13", "ART 14A", "ART 14B", "ART 14C", "ART 19", "ART 2.1", "ART 2.2", "ART 2.3", "ART 21", "ART 23", "ART 24", "ART 27A", "ART 27B", "ART 28A", "ART 28B", "ART 28C", "ART 3", "ART 31A", "ART 31B", "ART 31C", "ART 31D", "ART 33A", "ART 33B", "ART 34A", "ART 34B", "ART 4", "ART 49", "ART 5", "ART 75", "ART 7A", "ART 7B", "ART 82", "ASL 1", "ASL 2", "ASL 3", "ASL 4", "ASTRON 12", "ASTRON 3", "ASTRON 3L", "ASTRON 4", "ASTRON 4L", "ATHL 1", "ATHL 11", "ATHL 13", "ATHL 14", "ATHL 15L", "ATHL 22.1L", "ATHL 22.2L", "ATHL 24", "ATHL 29L", "ATHL 3", "ATHL 31", "ATHL 31L", "ATHL 33", "ATHL 34", "ATHL 37", "ATHL 38", "ATHL 41", "ATHL 42", "AUTO 108", "AUTO 125", "AUTO 194", "AUTO 51", "AUTO 52", "AUTO 53", "AUTO 54", "AUTO 56", "AUTO 80", "AUTO 99", "BAD 1", "BAD 10", "BAD 18", "BAD 2", "BAD 52", "BAD 53", "BAD 57", "BAD 98", "BAD 99", "BAD 99I", "BBK 50", "BBK 51", "BBK 52.1", "BBK 53.1", "BBK 53.2", "BEHSC 49", "BGN 101", "BGN 102", "BGN 110", "BGN 111", "BGN 112", "BGN 201", "BGN 203", "BGN 204", "BGN 205", "BGN 71", "BGN 81", "BIO 10", "BIO 100", "BIO 12", "BIO 13", "BIO 2.1", "BIO 2.2", "BIO 2.3", "BIO 25", "BIO 49", "BIO 85.2", "BMG 100", "BMG 103", "BMG 104", "BMG 52", "BMG 53", "BMG 54", "BMG 61", "BMG 63.1", "BMG 63.4", "BMG 66.4", "BMG 67.4", "BMK 50", "BMK 51", "BMK 54", "BMK 57", "BMK 59", "BOT 154", "BOT 154.1", "BOT 770", "BOT 85.1", "BOT 85.4", "BOT 85.5", "BOT 99.1I", "BOT 99.2I", "BOT 99.3I", "BOTANY 60", "CEST 192", "CEST 63", "CEST 64", "CEST 65", "CEST 81", "CEST 98", "CEST 99I", "CFS 98", "CHEM 100", "CHEM 12B", "CHEM 1A", "CHEM 1B", "CHEM 42", "CHEM 49", "CHEM 60", "CHEM 8", "CHLD 10", "CHLD 110.1", "CHLD 110.2", "CHLD 111A", "CHLD 160.1", "CHLD 185.2", "CHLD 185.3", "CHLD 217.2", "CHLD 220", "CHLD 51", "CHLD 55.2", "CHLD 66", "CHLD 66.2", "CHLD 68", "CHLD 711", "CHLD 714", "CHLD 715", "CHLD 79.2", "CHLD 79.4", "CHLD 90.1", "CHLD 90.2", "CHLD 90.3", "CHLD 90.4", "CHW 152", "CHW 152L", "CHW 153", "CI 51", "CI 53", "CI 54", "COMM 10", "COMM 5", "COMM 6", "COMM 7", "COMM 98", "CONS 183", "CONS 62", "CONS 98", "COUN 10", "COUN 162.1", "COUN 20", "COUN 270", "COUN 355", "COUN 53", "COUN 60", "COUN 62", "COUN 74", "COUN 80", "COUN 87", "COUN 90", "COUN 91", "COUN 92", "COUN 93", "COUN 94", "COUN 95", "COUN 98", "COUN 99I", "CS 10", "CS 101A", "CS 11", "CS 110A", "CS 12", "CS 165.31", "CS 167.11", "CS 17.11", "CS 19.21B", "CS 49", "CS 5", "CS 50.21", "CS 50.31", "CS 50.32", "CS 50A", "CS 50B", "CS 50C", "CS 55.11", "CS 55.13", "CS 57.11", "CS 60.11A", "CS 60.11B", "CS 61.11", "CS 61.11A", "CS 61.11B", "CS 62.11A", "CS 62.11B", "CS 63.11", "CS 63.11A", "CS 65.11", "CS 70.11A", "CS 70.11B", "CS 70.12", "CS 71.11", "CS 72.11A", "CS 72.11B", "CS 74.11", "CS 74.21A", "CS 74.21B", "CS 74.21D", "CS 74.31A", "CS 74.41A", "CS 74.42A", "CS 770", "CS 80.15", "CS 81.21", "CS 81.62", "CS 82.21A", "CS 82.21C", "CS 82.21D", "CS 82.55", "CS 84.13", "CS 98", "CS 99", "CS 99I", "CSKLS 100", "CSKLS 312", "CSKLS 313", "CSKLS 334", "CSKLS 368A", "CSKLS 368B", "CSKLS 371", "CSKLS 372", "CSKLS 731", "CSKLS 732", "CSKLS 733", "CSKLS 770", "CSKLS312.1", "CSKLS312.2", "CSKLS367.1", "CSKLS367.2", "CUL 250", "CUL 250.1", "CUL 252.13", "CUL 252.3", "CUL 253.1", "CUL 253.5", "CUL 253A", "CUL 253B", "CUL 254", "CUL 254.10", "CUL 254.11", "CUL 254.12", "CUL 254.13", "CUL 254.6", "CUL 254.9", "CUL 255", "CUL 256", "CUL 256.10", "CUL 256.5", "CUL 256.6", "CUL 260.15", "CUL 260.17", "CUL 260.19", "CUL 260.20", "CUL 270.3", "CUL 275.48", "CUL 275.84", "CUL 285.11", "CUL 285.12", "CUL 285.21", "CUL 285.22", "CUL 285.23", "CUL 287.6", "CUL 98", "CUL 99I", "DA 63", "DA 64", "DA 65", "DA 66.1A", "DA 67", "DANCE 10.2", "DANCE 11.1", "DANCE 11.2", "DANCE 11.3", "DANCE 11.4", "DANCE 11.5", "DANCE 11.6", "DANCE 13.1", "DANCE 13.2", "DANCE 13.3", "DANCE 13.4", "DANCE 13.5", "DANCE 13.6", "DANCE 16.1", "DANCE 16.2", "DANCE 16.3", "DANCE 16.4", "DANCE 16.5", "DANCE 16.6", "DANCE 2", "DANCE 21.1", "DANCE 21.2", "DANCE 21.3", "DANCE 21.4", "DANCE 21.5", "DANCE 21.6", "DANCE 27", "DANCE 28", "DANCE 41", "DANCE 88.1", "DANCE 88.2", "DE 55B", "DET 179", "DET 181", "DET 182A", "DET 182B", "DET 189", "DH 71B", "DH 71E", "DH 72", "DH 74", "DH 75", "DH 76", "DH 83", "DH 85", "DH 86", "DIET 106.2", "DIET 176", "DIET 50", "DIET 52", "DIET 57", "DIET 70", "DIET 99", "DRD 250.2", "DRD 360.1", "DRD 360.2", "DRD 363", "DRD 370.1B", "DRD 370.2B", "DRD 370.3B", "DRD 390.3", "DRD 705", "DRD 761", "ECON 1", "ECON 12", "ECON 2", "EDUC 55", "ELEC 154", "ELEC 156", "ELEC 180", "ELEC 51A", "ELEC 60B", "ELEC 60D", "ELEC 98", "EMC 100", "EMC 103", "EMC 104.1", "EMC 105", "EMC 108", "EMC 109", "EMC 114", "EMC 115", "EMC 116", "EMC 116.1", "EMC 118", "EMC 119", "EMC 124", "EMC 130B", "EMC 130C", "EMC 130D", "EMC 131B", "EMC 132", "ENGL 10", "ENGL 100", "ENGL 100X", "ENGL 1A", "ENGL 1B", "ENGL 25", "ENGL 27", "ENGL 3", "ENGL 30.2", "ENGL 302X", "ENGL 305.1", "ENGL 305X", "ENGL 306X", "ENGL 307", "ENGL 33", "ENGL 46.2", "ENGL 49", "ENGL 4A", "ENGL 4B", "ENGL 4C", "ENGL 5", "ENGL 770", "ENGR 10", "ENGR 101", "ENGR 102", "ENGR 16", "ENGR 25", "ENGR 34", "ENGR 45", "ENGR 49", "ENGR 6", "ENVS 12", "ENVST 40", "EQSCI 101", "EQSCI 102A", "EQSCI 102B", "EQSCI 102C", "EQSCI 120", "EQSCI 151", "EQSCI 25", "EQSCI 52", "EQSCI 53", "ERTHS 85.2", "ESL 100", "ESL 308", "ESL 308B", "ESL 310", "ESL 310A", "ESL 310B", "ESL 311CP", "ESL 312", "ESL 313R", "ESL 314", "ESL 315CP", "ESL 315GR", "ESL 315R", "ESL 316", "ESL 317CP", "ESL 317GR", "ESL 317R", "ESL 320CP", "ESL 320R", "ESL 320W", "ESL 332", "ESL 335", "ESL 390.1", "ESL 390.4", "ESL 701", "ESL 712", "ESL 713", "ESL 713CP", "ESL 714", "ESL 714CP", "ESL 714RW", "ESL 715", "ESL 716", "ESL 716CP", "ESL 716RW", "ESL 722", "ESL 732", "ESL 735", "FASH 106", "FASH 121A", "FASH 121B", "FASH 152", "FASH 53", "FASH 60", "FASH 70A", "FASH 70B", "FDNT 10", "FDNT 162", "FDNT 60", "FDNT 61", "FDNT 62", "FDNT 70", "FDNT 75", "FIRE 107B", "FIRE 200.1", "FIRE 200.2", "FIRE 201", "FIRE 203", "FIRE 204A", "FIRE 204B", "FIRE 204C", "FIRE 206", "FIRE 208", "FIRE 208.1", "FIRE 209", "FIRE 241", "FIRE 258", "FIRE 708", "FIRE 71", "FIRE 72", "FIRE 73", "FIRE 74", "FIRE 76", "FIRE 77", "FIRE 78", "FIRE 99I", "FLORS 114", "FLORS 116", "FLORS 83A", "FLORS 83B", "FLORS 83C", "FREN 1", "FREN 2", "FREN 4", "FREN 50C", "GD 20", "GD 51", "GD 52", "GD 57", "GD 58", "GD 60", "GD 63", "GD 65", "GD 72", "GEOG 3", "GEOG 4", "GEOG 7", "GEOL 1", "GEOL 1L", "GERM 1", "GERM 2", "GERM 3", "GERM 4", "GIS 40", "GIS 51", "GIS 52", "GIS 56", "HIST 1.1", "HIST 1.2", "HIST 17.1", "HIST 17.2", "HIST 18.1", "HIST 18.2", "HIST 20", "HIST 21", "HIST 33", "HIST 4.1", "HIST 4.2", "HIST 5", "HIST 8.2", "HLC 111", "HLC 140", "HLC 160", "HLC 211", "HLE 5", "HLE 6", "HORT 112", "HORT 12", "HORT 180", "HORT 50.1", "HORT 56", "HORT 66", "HORT 70", "HORT 80", "HORT 92.1", "HORT 92.2", "HORT 94", "HOSP 50", "HOSP 53", "HOSP 54", "HOSP 63", "HOSP 80", "HR 60", "HR 61", "HR 62", "HR 63", "HR 64", "HR 65", "HR 66", "HUMAN 21", "HUMAN 4.2", "HUMAN 49", "HUMAN 5", "HUMAN 6", "HUMAN 7", "HUMAN 8", "IED 190", "INDE 128", "INDE 20", "INDE 50", "INDE 52", "INDE 63", "INDE 64.1", "INDE 99I", "INTDIS 4", "INTDIS 90", "ITAL 1", "ITAL 2", "ITAL 4", "JOUR 1", "JOUR 2", "JOUR 52A", "JOUR 52B", "JOUR 52C", "JOUR 52D", "JOUR 55", "KAQUA 1.1", "KAQUA 1.2", "KAQUA 10.1", "KAQUA 10.2", "KAQUA 2.1", "KAQUA 2.3", "KAQUA 3.1", "KAQUA 3.2", "KCOMB 1.1", "KCOMB 10", "KCOMB 2.1", "KCOMB 2.2", "KCOMB 2.3", "KCOMB 4.1", "KFIT 10.1", "KFIT 11.1", "KFIT 12.1", "KFIT 17.1", "KFIT 20.1", "KFIT 3.1", "KFIT 3.2", "KFIT 3.3", "KFIT 30.1", "KFIT 31.1", "KFIT 32.1", "KFIT 35.1", "KFIT 36.1", "KFIT 37.1", "KFIT 4.1", "KFIT 5.1", "KFIT 5.2", "KFIT 50", "KFIT 6.1", "KFIT 6.2", "KFIT 7.1", "KFIT 7.2", "KFIT 8.1", "KFIT 8.2", "KINDV 2.1", "KINDV 2.2", "KINDV 3.1", "KINDV 3.2", "KINDV 4.1", "KINDV 4.2", "KINDV 4.3", "KINES 1", "KINES 21", "KINES 3", "KINES 4", "KINES 49", "KINES 50", "KINES 53", "KINES 55", "KINES 59", "KINES 62A", "KINES 62B", "KINES 62C", "KINES 62D", "KINES 64", "KINES 82", "KTEAM 4.1", "KTEAM 4.2", "KTEAM 4.3", "KTEAM 6.1", "KTEAM 6.2", "KTEAM 6.3", "KTEAM 7.1", "KTEAM 8.1", "KTEAM 8.2", "KTEAM 9.1", "LIR 10", "MA 160", "MA 161", "MA 162", "MA 163B", "MA 163BL", "MA 164", "MA 166.4", "MA 167A", "MA 167B", "MA 168", "MA 169", "MA 171", "MACH 51A", "MACH 51B", "MACH 770", "MACH 80A", "MATH 10", "MATH 101", "MATH 15", "MATH 150A", "MATH 150B", "MATH 151", "MATH 155", "MATH 16", "MATH 1A", "MATH 1B", "MATH 1C", "MATH 2", "MATH 25", "MATH 27", "MATH 4", "MATH 49", "MATH 5", "MATH 58", "MATH 6", "MATH 70", "MATH 71", "MATH 770", "MATH 9", "MEDIA 10", "MEDIA 14", "MEDIA 15", "MEDIA 19", "MEDIA 20", "MEDIA 4", "METRO 10", "METRO 10L", "MICRO 5", "MICRO 60", "MUSC 1", "MUSC 15", "MUSC 18", "MUSC 2A", "MUSC 2B", "MUSC 2D", "MUSC 3A", "MUSC 3B", "MUSC 3D", "MUSC 49", "MUSC 4B", "MUSC 50", "MUSC 51B", "MUSC 5A", "MUSC 5B", "MUSC 6.2", "MUSC 60B", "MUSC 7", "MUSC 8", "MUSC 9", "MUSCP 11A", "MUSCP 11B", "MUSCP 11D", "MUSCP 17A", "MUSCP 17B", "MUSCP 21A", "MUSCP 21B", "MUSCP 21C", "MUSCP 21D", "MUSCP 23A", "MUSCP 23B", "MUSCP 23C", "MUSCP 23D", "MUSCP 30A", "MUSCP 30B", "MUSCP 30C", "MUSCP 30D", "MUSCP 32A", "MUSCP 32B", "MUSCP 32C", "MUSCP 32D", "MUSCP 33A", "MUSCP 33B", "MUSCP 33C", "MUSCP 33D", "MUSCP 40.1", "MUSCP 40.2", "MUSCP 40.3", "MUSCP 40.4", "MUSCP 40.5", "MUSCP 40.6", "MUSCP 40.7", "MUSCP 42A", "MUSCP 42B", "MUSCP 42C", "MUSCP 42D", "MUSCP19.1A", "MUSCP19.1B", "NR 74.1", "NR 74.2", "NR 75.1A", "NR 75B", "NR 75C", "NR 75D", "NRA 150A", "NRA 150B", "NRM 12", "NRM 131", "NRM 132", "NRM 142", "NRM 51", "NRM 60", "NRM 84", "NRM 86", "NRM 91", "NRM 98", "NRM 99", "NRM 99I", "NRV 51L", "NRV 58A", "OA 501", "OA 502", "OA 505", "OA 507", "OA 581", "PHARM 153", "PHARM 154B", "PHARM 155", "PHARM 156", "PHARM 255", "PHARM256.1", "PHIL 10", "PHIL 11", "PHIL 21", "PHIL 3", "PHIL 4", "PHIL 49", "PHIL 5", "PHIL 6", "PHIL 7", "PHIL 8", "PHYS 1", "PHYS 11", "PHYS 20", "PHYS 20L", "PHYS 21", "PHYS 21L", "PHYS 40", "PHYS 41", "PHYS 42", "PHYS 43", "PHYS 49", "PHYSC 21", "PHYSIO 1", "PHYSIO 58", "PLS 50", "PLS 51", "PLS 52", "PLS 54", "PLS 65", "PLS 99I", "POLS 1", "POLS 18", "POLS 25", "PSYCH 1A", "PSYCH 1B", "PSYCH 3", "PSYCH 30", "PSYCH 34", "PSYCH 4", "PSYCH 5", "PSYCH 52", "PSYCH 56", "PSYCH 57", "PSYCH 7", "RADT 100", "RADT 61B", "RADT 61BL", "RADT 62BL", "RADT 63A", "RADT 65", "RADT 66", "RADT 98", "RE 50", "RE 51", "RE 52", "RE 57", "RELS 1", "RELS 15", "RELS 3", "RELS 32", "RELS 6.66", "SE 580", "SE 712", "SOC 1", "SOC 10", "SOC 2", "SOC 3", "SOC 30", "SOCS 12", "SOCS 49", "SPAN 1", "SPAN 2", "SPAN 3", "SPAN 4", "SPAN 49", "SPAN 50A", "SPAN 50B", "SPCH 1A", "SPCH 3A", "SPCH 52A", "SPCH 52B", "SPCH 52C", "SPCH 52D", "SPCH 60", "SPCH 9", "SURV 57", "SURV 59", "SUSAG 103", "SUSAG 109", "SUSAG 119", "SUSAG 50", "THAR 1", "THAR 10A", "THAR 10B", "THAR 11.1", "THAR 11.2", "THAR 11.3", "THAR 11.4", "THAR 11.8", "THAR 13.1", "THAR 19", "THAR 2", "THAR 20", "THAR 21", "THAR 22A", "THAR 22B", "THAR 25", "THAR 25.1", "THAR 25.2", "THAR 25.3", "THAR 25.4", "THAR 25.5", "THAR 26", "THAR 27", "THAR 28", "THAR 49", "THAR 50L", "THAR 63", "VE 713", "VIT 1", "VIT 113", "VIT 131", "VIT 52", "VIT 53", "VIT 55", "WELD 171.1", "WELD 171.2", "WELD 171.3", "WELD 175A", "WELD 175B", "WELD 70", "WELD 98", "WEOC 99", "WEOC 99I", "WINE 1", "WINE 102", "WINE 110", "WINE 111", "WINE 119", "WINE 125", "WINE 130", "WINE 131", "WINE 3", "WINE 42.2", "WINE 55A", "WINE 62", "WINE 70", "WRKEX 97", "WTR 104", "WTR 110", "WTR 111", "WWTR 121", "WWTR 122", "WWTR 124" ];
    var currentCourses_ = [];
    var resultsSelectorPos = 0;
    var liHeight = 0;
    var resultsLen = 0;
    // elements 
    /* private */
    var _ = {
        searchBox: $( "#add-box" ),
        searchButton: $( "#add-button" ),
        addBar: $( ".add-bar" ),
        addResults: $( "#add-results" ),
        addResultsList: $( "#add-results-list" ),
        collapseButton: $( ".add-collapse" ),
        closeButton: $( ".add-close" ),
    };


    this.Init = function()
    {
        self.BindEvents();
    };

    this.BindEvents = function()
    {
        _.searchButton.click( function()
        {
            self.ToggleSearch( true );
        } );

        _.searchBox.blur( function()
        {
            self.ToggleSearch( false );
        } );

        _.searchBox.focus( function()
        {
            self.ToggleResultsPanel( true );
        } );

        _.collapseButton.click( function()
        {
            self.ToggleResultsPanel();
        } );

        _.closeButton.click( function()
        {
            _.searchBox.val( "" );
            self.ToggleSearch( false );
            self.ToggleResultsPanel( false );
        } );

        _.searchBox.on( "input", function()
        {
            var value = _.searchBox.val();

            if ( value !== "" )
            {
                self.AutoCompleteCourseName( value );
            }
            else
            {
                _.addResultsList.html( "" );
            }
        } );

        _.addResultsList.on( "click", "li:not(.loading):not(.loaded)", function()
        {
            self.RequestCourseData( $( this ) );
        } );


        $( document ).keydown( function( e )
        { // 38-up, 40-down
            if ( e.keyCode == 40 )
            {
                if ( resultsPanelActive )
                {
                    if ( resultsSelectorPos + 1 < resultsLen )
                    {
                        e.preventDefault();
                        _.addResultsList.children( 'li:eq(' + resultsSelectorPos++ +')' ).removeClass( 'active' );
                        _.addResultsList.children( 'li:eq(' + resultsSelectorPos + ')' ).addClass( 'active' );


                        _.addResults.stop().animate(
                        {
                            scrollTop: ( resultsSelectorPos - 3 ) * liHeight
                        }, 150 );

                    }
                }
            }
            else if ( e.keyCode == 38 )
            {
                if ( resultsPanelActive )
                {
                    if ( resultsSelectorPos > 0 )
                    {
                        e.preventDefault();
                        _.addResultsList.children( 'li:eq(' + resultsSelectorPos--+')' ).removeClass( 'active' );
                        _.addResultsList.children( 'li:eq(' + resultsSelectorPos + ')' ).addClass( 'active' );


                        _.addResults.stop().animate(
                        {
                            scrollTop: ( resultsSelectorPos - 3 ) * liHeight
                        }, 150 );


                    }
                }
            }
            else if ( e.keyCode == 13 )
            {
                if ( resultsPanelActive )
                {
                    e.preventDefault();
                    self.RequestCourseData( _.addResultsList.children( 'li:eq(' + resultsSelectorPos + '):not(.loading):not(.loaded)' ) );
                    console.log( "enter" );
                }
            }

        } );

    };

    this.ToggleSearch = function( active )
    {
        if ( active === undefined )
        {
            searchActive = !searchActive;
            this.ToggleSearch( searchActive );
        }
        else if ( active )
        {
            searchActive = true;
            _.searchBox.addClass( "active" );
            _.searchButton.removeClass( "active" );
            _.addBar.addClass( "active" );
            _.searchBox.focus();
            _.addResultsList.html( "" );
        }
        else
        {
            searchActive = false;
            if ( _.searchBox.val() === "" )
            {
                _.searchBox.removeClass( "active" );
                _.searchButton.addClass( "active" );
                _.addBar.removeClass( "active" );
                this.ToggleResultsPanel( false );
            }
        }
    };

    this.ToggleResultsPanel = function( active )
    {
        if ( active === undefined )
        {
            resultsPanelActive = !resultsPanelActive;
            this.ToggleResultsPanel( resultsPanelActive );
        }
        else if ( active )
        {
            resultsPanelActive = true;

            _.addResults.addClass( "active" );
            _.collapseButton.removeClass( 'up' );
        }
        else
        {
            resultsPanelActive = false;
            _.addResults.removeClass( "active" );
            _.collapseButton.addClass( 'up' );
        }
    };




    this.RequestCourseData = function( $li )
    {
        var courseTitle = $li.attr( "data-value" );

        console.log( courseTitle );

        $.ajax(
        {
            url: 'http://srjcscheduler.com/php/addCourse.php',
            beforeSend: function()
            {
                $li.addClass( 'loading' );
                //$( '#loader' ).hide();
                //$( '#fountainG' ).show();
                //$( "#B_addCourse div" ).addClass( "disabled" );
            },
            data:
            {
                cls: courseTitle
            },
            timeout: 4000,
            complete: function( response )
            {
                var courseText = response.responseText;


                $li.removeClass( 'loading' );
                currentCourses_.push( courseTitle );





                try
                {
                    console.log( courseText );
                    courseText = self.ParseCourseText( courseText );
                    console.log( courseText );
                    srjc.schedule.AddCourse( courseText, courseTitle );

                    $li.append( '<span>Added</span>' );
                    $li.addClass( 'loaded' );
                }
                catch ( err )
                {
                    console.warn( "error adding course" );
                    // remoce course
                    $li.removeClass( 'loaded' );
                    $li.addClass( 'error' );

                    $li.append( '<span>Error</span>' );

                    currentCourses_.pop();
                    setTimeout( function()
                    {
                        $li.removeClass( 'error' );
                        $li.children( 'span' ).remove();
                    }, 2000 );


                }
                finally
                {



                }


            },
            error: function()
            {
                console.log( "Server Error" );
            }
        } );
    };

    this.ParseCourseText = function( courseText )
    {
        courseText = courseText.trim();
        courseText = courseText.match( /<(.*?)>/gm );
        return courseText;
    };

    this.AutoCompleteCourseName = function( search )
    {
        var results_ = [];
        var len = courseTitles_.length;
        var value = "";

        search = search.toUpperCase();
        search = search.replace( /([A-Z])(\d)/, '$1 $2' );

        var searchLen = search.length;


        //console.log( search );

        for ( var i = 0; i < len; i++ )
        {
            value = courseTitles_[ i ];

            if ( value.substring( 0, searchLen ) === search )
            {
                results_.push( value );
            }
        }
        //console.log( results_ );
        self.CreateResultsList( results_ );

    };

    // public //
    this.CreateResultsList = function( results_ )
    {
        resultsLen = results_.length;

        if ( resultsLen === 0 )
        {
            _.addResultsList.html( "<span>No Courses Found</span>" );
            return;
        }
        else
        {
            _.addResultsList.html( "" );
        }


        for ( var i = 0; i < resultsLen; i++ )
        {
            var $li = $( "<li>" );
            var result = results_[ i ];

            $li.attr( "data-value", result )
                .append( result )
                .appendTo( _.addResultsList );
            if ( $.inArray( result, currentCourses_ ) > -1 )
            {
                $li.append( '<span>Added</span>' );
                $li.addClass( 'loaded' );
            }

        }

        _.addResultsList.children( 'li:eq(0)' ).addClass( 'active' );
        liHeight = _.addResultsList.children( 'li:eq(0)' ).outerHeight();

        resultsSelectorPos = 0;
    };



}
