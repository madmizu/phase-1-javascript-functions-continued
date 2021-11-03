// Your code here
function saturdayFun (activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
    };

function mondayWork (action = "go to the office") {
    return (`This Monday, I will ${action}.`);
    };

    function wrapAdjective(highlight = "*"){
    
        return function(adjective) {
            return `You are ${highlight}${adjective}${highlight}!`
        }
    };