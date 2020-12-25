function getCookie(cookieName)
{
   if(getCookie.arguments.length!==1)
   {
      throw "function arguments aren't suitable"
   }

   var allCookies=allCookieList()
   var cookieArr=allCookies.split(';');
   for(var i = 0; i <cookieArr.length; i++) {
      var cookieElements=cookieArr[i].split('=');     
      if(cookieElements[0].trim()===cookieName)
      {
         return [cookieElements[0],cookieElements[1]];
      }
   }
      return 0;
}

function setCookie(cookieName,cookieValue,expiryDate)
{
   if(setCookie.arguments.length!==3)
   {
      throw "function arguments aren't suitable"
   }
   var date = new Date(expiryDate);
   document.cookie=cookieName+ "=" +cookieValue+ ";expires="+date;
}


function deleteCookie(cookieName)
{
   if(deleteCookie.arguments.length !== 1)
   {
      throw "function arguments aren't suitable"
   }
   var arr=getCookie(cookieName)
   setCookie(arr[0],arr[1],0);  
}

function allCookieList()
{
   return document.cookie;
}

function hasCookie(cookieName)
{
   if(hasCookie.arguments.length!==1)
   {
      throw "function arguments aren't suitable"
   }
   if (getCookie(cookieName)!==0)
   {
      return 1 ;
   }
   return 0;
}






