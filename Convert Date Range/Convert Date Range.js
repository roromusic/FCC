function makeFriendlyDates(arr) {
  //break down the componenets of the array
  var regexDate1 = /(\d{4})-(\d{2})-(\d{2})/.exec(arr[0]),
      regexDate2 = /(\d{4})-(\d{2})-(\d{2})/.exec(arr[1]),
      year1 = regexDate1[1],
      year2 = regexDate2[1],
      month1 = returnMonth(regexDate1[2]),
      month2 = returnMonth(regexDate2[2]),
      day1 = returnDay(parseInt(regexDate1[3])),
      day2 = returnDay(parseInt(regexDate2[3])),
      constantYear = 2016;
  
  function returnMonth(month){
    switch(month) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
   }
  }
  
  function returnDay(day){
    switch(day) {
      case 1||21||31:
        return day + "st";
      case 2||22:
        return day + "nd";
      case 3||23:
        return day + "rd";
      default:
        return day + "th";
    }
  }
  /*
  1st  11th 21st 31st
  2nd  12th 22nd 
  3rd  13th 23rd
  4th  14th 24th
  5th  15th 25th
  6th  16th 26th
  7th  17th 27th
  8th  18th 28th
  9th  19th 29th
  10th 20th 30th
  */
  
  //if the dates are the same, return just one date
  if (regexDate1[0] === regexDate2[0]) return [month1 + " " + day1 + ", " + year1];
  //makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"]
  else if(year1 == constantYear && year1 == year2 && month1 === month2) return [month1 + " " + day1, day2];
  //makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"]
  else if(year1 == constantYear && year2 == constantYear + 1) return [month1 + " " + day1, month2 + " " + day2];
  //makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
  else if(year1 == year2 && year1 > constantYear) return [month1 + " " + day1 + ", " + year1, month2 + " " + day2];
  //makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"]
  else if(year1 == year2 - 1 && month1 >= month2 && day1 > day2) return [month1 + " " + day1 + ", " + year1, month2 + " " + day2];
  else return [month1 + " " + day1 + ", " + year1, month2 + " " + day2 + ", " + year2];
  //return year1;

}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);

