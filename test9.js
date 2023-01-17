var week_day = 9
var expression = week_day % 12 == 0 ? 12 : week_day % 12

var response
switch (expression) {
    case 1: response = "Jan"
        break
    case 2: response = "Feb"
        break
    case 3: response = "Mar"
        break
    case 4: response = "Apr"
        break
    case 5: response = "May"
        break
    case 6: response = "Jun"
        break
    case 7: response = "Jul"
        break
    case 8: response = "Aug"
        break
    case 9: response = "Sep"
        break
    case 10: response = "Oct"
        break
    case 11: response = "Nov"
        break
    case 12: response = "Dec"
        break
}

console.log(response)