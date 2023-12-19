function saturdayFun ( activity ){
    if ( activity == null ){
        return `This Saturday, I want to roller-skate!`
    }
    else {
        return `This Saturday, I want to ${activity}!`
    }
}
 //console.log(saturdayFun( 'drive' ))

function mondayWork ( activity ){
    if ( activity == null ){
        return `This Monday, I will go to the office.`
    }
    else {
        return `This Monday, I will ${activity}.`
    }
}

//console.log( mondayWork() )

function wrapAdjective ( flair ){
    let encouragingText
    return function ( adj = 'special' ){
        return `You are ${flair}${adj}${flair}!`
        }
    }
