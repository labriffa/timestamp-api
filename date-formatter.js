module.exports.format = function(date) {
    var dateStr = date.toDateString();
    dateStr = dateStr.replace(/^[A-z]{3} /, '');
    var month = dateStr.replace(/ .+$/, '');
    switch(month) {
        case 'Jan':
            month = 'January';
            break;
        case 'Feb':
            month = 'February';
            break;
        case 'Mar':
            month = 'March';
            break;
        case 'Apr':
            month = 'April';
            break;
        case 'Jun':
            month = 'June';
            break;
        case 'Jul':
            month = 'July';
            break;
        case 'Aug':
            month = 'August';
            break;
        case 'Sep':
            month = 'September';
            break;
        case 'Oct':
            month = 'October';
            break;
        case 'Nov':
            month = 'November';
            break;
        case 'Dec':
            month = 'December';
            break;
        default:
            month = 'undefined';
    }
    
    dateStr = dateStr.replace(/^[A-z]{3}/, month).replace(/ /g, ', ').replace(/, 0/, ', ');
    return dateStr;
};