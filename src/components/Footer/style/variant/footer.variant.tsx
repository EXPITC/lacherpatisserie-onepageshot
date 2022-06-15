export const footerVariant = {
    view: {
        transition: {
            delayChildren:0.3,
            staggerChildren:0.2,
        }
    },
    content: {
        transition: {
            delay:.2,
            delayChildren:0.3,
            staggerChildren:0.2,
        }
    }
}

export const h1Variant = {
    rest: {
        opacity: 0,
        x:-100
    },
    view: {
        opacity: 1,
        x:0
    }
}
export const contentVariant = { 
    rest: {
        opacity: 0,
        y:100
    },
    content: {
        opacity: 1,
        y:0
    },
}

export const formVariant = {
    rest: {
        opacity: 0,
        x:-100
    },
    content: {
        opacity:1,
        x:0
    }
}

export const copyrightVariant = {
    rest: {
        opacity:0
    },
    copyright: {
        opacity: 1,
        transition: {
            duration:2
        }
    }
}