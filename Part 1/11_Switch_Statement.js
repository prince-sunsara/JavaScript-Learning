/*
SWITCH STATEMENT
    > case based
    > break : if condition is satisfied then don't go further
    > continue: leave iteration for perticular condition and go for another
*/

let day = 2;

switch (day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Satureday');
        break;
    default:
        console.log("Invalid Day!");
        break;
}