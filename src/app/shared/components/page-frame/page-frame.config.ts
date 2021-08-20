// The .freeze method returns the same obj. and
// prevent this for changing
export const pageFrameConfig = Object.freeze({
    queue: {
        mainpage: {
            tabs: [
                {
                    path: "primary",
                    title: "ALL"
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
    in_progress: {

    },
})