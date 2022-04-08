"use strict";

; (function () {
    // load functions
    if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            console.log("Running script with DOMContentLoaded method");
            let app = new iitm_app();
            app.init();

        });
    } else {
        console.log("Running script with defer attribute method");
        setTimeout(() => {
            let app = new iitm_app();
            app.init();
        }, 0);

    }

    // class
    class iitm_app {

        constructor(){

        }

        init() {
            console.log(this);
        }

    };

})();
