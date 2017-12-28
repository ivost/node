"use strict";function isDate(e){return e instanceof Date}var is_date=isDate,MILLISECONDS_IN_HOUR=36e5,MILLISECONDS_IN_MINUTE=6e4,DEFAULT_ADDITIONAL_DIGITS=2,parseTokenDateTimeDelimeter=/[T ]/,parseTokenPlainTime=/:/,parseTokenYY=/^(\d{2})$/,parseTokensYYY=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],parseTokenYYYY=/^(\d{4})/,parseTokensYYYYY=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],parseTokenMM=/^-(\d{2})$/,parseTokenDDD=/^-?(\d{3})$/,parseTokenMMDD=/^-?(\d{2})-?(\d{2})$/,parseTokenWww=/^-?W(\d{2})$/,parseTokenWwwD=/^-?W(\d{2})-?(\d{1})$/,parseTokenHH=/^(\d{2}([.,]\d*)?)$/,parseTokenHHMM=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,parseTokenHHMMSS=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,parseTokenTimezone=/([Z+-].*)$/,parseTokenTimezoneZ=/^(Z)$/,parseTokenTimezoneHH=/^([+-])(\d{2})$/,parseTokenTimezoneHHMM=/^([+-])(\d{2}):?(\d{2})$/;function parse(e,r){if(is_date(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var t=(r||{}).additionalDigits;t=null==t?DEFAULT_ADDITIONAL_DIGITS:Number(t);var n=splitDateString(e),a=parseYear(n.date,t),o=a.year,s=parseDate(a.restDateString,o);if(s){var i,u=s.getTime(),f=0;return n.time&&(f=parseTime(n.time)),n.timezone?i=parseTimezone(n.timezone):(i=new Date(u+f).getTimezoneOffset(),i=new Date(u+f+i*MILLISECONDS_IN_MINUTE).getTimezoneOffset()),new Date(u+f+i*MILLISECONDS_IN_MINUTE)}return new Date(e)}function splitDateString(e){var r,t={},n=e.split(parseTokenDateTimeDelimeter);if(parseTokenPlainTime.test(n[0])?(t.date=null,r=n[0]):(t.date=n[0],r=n[1]),r){var a=parseTokenTimezone.exec(r);a?(t.time=r.replace(a[1],""),t.timezone=a[1]):t.time=r}return t}function parseYear(e,r){var t,n=parseTokensYYY[r],a=parseTokensYYYYY[r];if(t=parseTokenYYYY.exec(e)||a.exec(e)){var o=t[1];return{year:parseInt(o,10),restDateString:e.slice(o.length)}}if(t=parseTokenYY.exec(e)||n.exec(e)){var s=t[1];return{year:100*parseInt(s,10),restDateString:e.slice(s.length)}}return{year:null}}function parseDate(e,r){if(null===r)return null;var t,n,a;if(0===e.length)return(n=new Date(0)).setUTCFullYear(r),n;if(t=parseTokenMM.exec(e))return n=new Date(0),a=parseInt(t[1],10)-1,n.setUTCFullYear(r,a),n;if(t=parseTokenDDD.exec(e)){n=new Date(0);var o=parseInt(t[1],10);return n.setUTCFullYear(r,0,o),n}if(t=parseTokenMMDD.exec(e)){n=new Date(0),a=parseInt(t[1],10)-1;var s=parseInt(t[2],10);return n.setUTCFullYear(r,a,s),n}if(t=parseTokenWww.exec(e))return dayOfISOYear(r,parseInt(t[1],10)-1);if(t=parseTokenWwwD.exec(e)){return dayOfISOYear(r,parseInt(t[1],10)-1,parseInt(t[2],10)-1)}return null}function parseTime(e){var r,t,n;if(r=parseTokenHH.exec(e))return(t=parseFloat(r[1].replace(",",".")))%24*MILLISECONDS_IN_HOUR;if(r=parseTokenHHMM.exec(e))return t=parseInt(r[1],10),n=parseFloat(r[2].replace(",",".")),t%24*MILLISECONDS_IN_HOUR+n*MILLISECONDS_IN_MINUTE;if(r=parseTokenHHMMSS.exec(e)){t=parseInt(r[1],10),n=parseInt(r[2],10);var a=parseFloat(r[3].replace(",","."));return t%24*MILLISECONDS_IN_HOUR+n*MILLISECONDS_IN_MINUTE+1e3*a}return null}function parseTimezone(e){var r,t;return(r=parseTokenTimezoneZ.exec(e))?0:(r=parseTokenTimezoneHH.exec(e))?(t=60*parseInt(r[2],10),"+"===r[1]?-t:t):(r=parseTokenTimezoneHHMM.exec(e))?(t=60*parseInt(r[2],10)+parseInt(r[3],10),"+"===r[1]?-t:t):0}function dayOfISOYear(e,r,t){r=r||0,t=t||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var a=7*r+t+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+a),n}var parse_1=parse;function startOfYear(e){var r=parse_1(e),t=new Date(0);return t.setFullYear(r.getFullYear(),0,1),t.setHours(0,0,0,0),t}var start_of_year=startOfYear;function startOfDay(e){var r=parse_1(e);return r.setHours(0,0,0,0),r}var start_of_day=startOfDay,MILLISECONDS_IN_MINUTE$1=6e4,MILLISECONDS_IN_DAY=864e5;function differenceInCalendarDays(e,r){var t=start_of_day(e),n=start_of_day(r),a=t.getTime()-t.getTimezoneOffset()*MILLISECONDS_IN_MINUTE$1,o=n.getTime()-n.getTimezoneOffset()*MILLISECONDS_IN_MINUTE$1;return Math.round((a-o)/MILLISECONDS_IN_DAY)}var difference_in_calendar_days=differenceInCalendarDays;function getDayOfYear(e){var r=parse_1(e);return difference_in_calendar_days(r,start_of_year(r))+1}var get_day_of_year=getDayOfYear;function startOfWeek(e,r){var t=r?Number(r.weekStartsOn)||0:0,n=parse_1(e),a=n.getDay(),o=(a<t?7:0)+a-t;return n.setDate(n.getDate()-o),n.setHours(0,0,0,0),n}var start_of_week=startOfWeek;function startOfISOWeek(e){return start_of_week(e,{weekStartsOn:1})}var start_of_iso_week=startOfISOWeek;function getISOYear(e){var r=parse_1(e),t=r.getFullYear(),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var a=start_of_iso_week(n),o=new Date(0);o.setFullYear(t,0,4),o.setHours(0,0,0,0);var s=start_of_iso_week(o);return r.getTime()>=a.getTime()?t+1:r.getTime()>=s.getTime()?t:t-1}var get_iso_year=getISOYear;function startOfISOYear(e){var r=get_iso_year(e),t=new Date(0);t.setFullYear(r,0,4),t.setHours(0,0,0,0);return start_of_iso_week(t)}var start_of_iso_year=startOfISOYear,MILLISECONDS_IN_WEEK=6048e5;function getISOWeek(e){var r=parse_1(e),t=start_of_iso_week(r).getTime()-start_of_iso_year(r).getTime();return Math.round(t/MILLISECONDS_IN_WEEK)+1}var get_iso_week=getISOWeek;function isValid(e){if(is_date(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}var is_valid=isValid;function buildDistanceInWordsLocale(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(r,t,n){n=n||{};var a;return a="string"==typeof e[r]?e[r]:1===t?e[r].one:e[r].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a}}}var build_distance_in_words_locale=buildDistanceInWordsLocale,commonFormatterKeys=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];function buildFormattingTokensRegExp(e){var r=[];for(var t in e)e.hasOwnProperty(t)&&r.push(t);var n=commonFormatterKeys.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+n.join("|")+"|.)","g")}var build_formatting_tokens_reg_exp=buildFormattingTokensRegExp;function buildFormatLocale(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["January","February","March","April","May","June","July","August","September","October","November","December"],t=["Su","Mo","Tu","We","Th","Fr","Sa"],n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=["AM","PM"],s=["am","pm"],i=["a.m.","p.m."],u={MMM:function(r){return e[r.getMonth()]},MMMM:function(e){return r[e.getMonth()]},dd:function(e){return t[e.getDay()]},ddd:function(e){return n[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?o[1]:o[0]},a:function(e){return e.getHours()/12>=1?s[1]:s[0]},aa:function(e){return e.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){u[e+"o"]=function(r,t){return ordinal(t[e](r))}}),{formatters:u,formattingTokensRegExp:build_formatting_tokens_reg_exp(u)}}function ordinal(e){var r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}var build_format_locale=buildFormatLocale,en={distanceInWords:build_distance_in_words_locale(),format:build_format_locale()};function format(e,r,t){var n=r?String(r):"YYYY-MM-DDTHH:mm:ss.SSSZ",a=(t||{}).locale,o=en.format.formatters,s=en.format.formattingTokensRegExp;a&&a.format&&a.format.formatters&&(o=a.format.formatters,a.format.formattingTokensRegExp&&(s=a.format.formattingTokensRegExp));var i=parse_1(e);if(!is_valid(i))return"Invalid Date";return buildFormatFn(n,o,s)(i)}var formatters={M:function(e){return e.getMonth()+1},MM:function(e){return addLeadingZeros(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return addLeadingZeros(e.getDate(),2)},DDD:function(e){return get_day_of_year(e)},DDDD:function(e){return addLeadingZeros(get_day_of_year(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return get_iso_week(e)},WW:function(e){return addLeadingZeros(get_iso_week(e),2)},YY:function(e){return addLeadingZeros(e.getFullYear(),4).substr(2)},YYYY:function(e){return addLeadingZeros(e.getFullYear(),4)},GG:function(e){return String(get_iso_year(e)).substr(2)},GGGG:function(e){return get_iso_year(e)},H:function(e){return e.getHours()},HH:function(e){return addLeadingZeros(e.getHours(),2)},h:function(e){var r=e.getHours();return 0===r?12:r>12?r%12:r},hh:function(e){return addLeadingZeros(formatters.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return addLeadingZeros(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return addLeadingZeros(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return addLeadingZeros(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return addLeadingZeros(e.getMilliseconds(),3)},Z:function(e){return formatTimezone(e.getTimezoneOffset(),":")},ZZ:function(e){return formatTimezone(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function buildFormatFn(e,r,t){var n,a,o=e.match(t),s=o.length;for(n=0;n<s;n++)a=r[o[n]]||formatters[o[n]],o[n]=a||removeFormattingTokens(o[n]);return function(e){for(var r="",t=0;t<s;t++)o[t]instanceof Function?r+=o[t](e,formatters):r+=o[t];return r}}function removeFormattingTokens(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}function formatTimezone(e,r){r=r||"";var t=e>0?"-":"+",n=Math.abs(e),a=n%60;return t+addLeadingZeros(Math.floor(n/60),2)+r+addLeadingZeros(a,2)}function addLeadingZeros(e,r){for(var t=Math.abs(e).toString();t.length<r;)t="0"+t;return t}var format_1=format;function update(){var e=format_1(new Date,"h:mm:ssa");console.log(e),setTimeout(update,1e3)}update();
