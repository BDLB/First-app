// The .freeze method returns the same obj. and  |
// prevent this for changing                     |
// -----------------------------------------------
// --------------------------------
// Sidenavs configuration objects |
// are made in every sidenav page |
// -------------------------------
export const pageFrameConfig = Object.freeze({
    queue: {
        mainpage: {
            tabs: [
                {
                    path: "general",
                    title: "General"
                }
            ],
            buttons: {},
        },
        sidenavs: {
            BookletRate: {
                tabs: {},
                buttons: {}
            },
            BookletDriver: {
                tabs: {},
                buttons: {}
            },
        }

    },
    cars: {
        mainpage: {
            tabs: [
                {
                    path: "general",
                    title: "General"
                }
            ],
            buttons: {}
        },
        sidenavs: {
            CreateEdit: {
                tabs: {},
                buttons: {}
            }
        }
    }

})