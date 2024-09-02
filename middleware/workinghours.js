function workingHoursMiddleware(req, res, next){
    const currentDate = new Date();
    const day = currentDate.getDay();
    const hour = currentDate.getHours();

    if(day >= 1 && day <= 5 && hour >= 9 && hour <= 17){
        next()
    }else{
        res.send("Sorry, the Web applicationis only available during worlking hours (Monday to Friday , 9am to 5pm).")
    }
};

module.exports = workingHoursMiddleware;