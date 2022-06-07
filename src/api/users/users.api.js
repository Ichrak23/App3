import httpClient from "../httpClient";

export const login = ( username, password ) => {
  var qs = require("qs");
  var data = qs.stringify({
    username: username,
    password: password,
  });
  return httpClient({
    url: "/logon.svc/logon",
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // "X-CSRF-TOKEN": getCookie('csrf_token')
    },
    data: data,
  });
};

export const getUser = () => {
  return httpClient({
    url: "/api/connection/user",
    method: "Get",
    headers: {
      Accept: "application/json",
      
      //cookie:"P_LANGUAGE=GED=fr; P_ARCHIMED_CRYSTAL_SITE=GED=GLOBAL; P_LOGIN_COMMON=GED=__QQBkAG0AaQBuAEcARQBEAA==; P_PWD_COMMON=GED=; ARCHIMED=JSE_BROWSER=MZ; JSE-BROWSER=MZ; S_TALC_SESSION_ID=GED={DA42D9AE-8E79-4CA0-B5DF-2385F3F97356}; AFT=ezI1OEQxRDQ3LTYwNjItNDIxMC04MTYzLTNERjFCODk1NTMwNX0ARg==; P_ELISE_NEWS=1c6fe6a001f24229aaa5de3605f8d611; InstanceCI=GED=XFHad24rJRn4GN-fTIYXrmSR-Yffl9h6KLmeM6Y2; S_HTTP_REFERER=GED=https://elise6-pfe.elisedemo.com/GED/elise/Home; P_ELISE_RELOADCACHE=d8233718f7834109b25a5a0056c5e304; InstanceLG=; ASPSESSIONIDAUDTATCB=KCCJEDFDIKKJCABBGDADCJGO; S_ARCHIMED_CRYSTAL_AUTHANONYMOUS=GED=; S_ARCHIMED_CRYSTAL_AUTH=GED=e7f5f4da1a6f452bbea44574b3d1941d; InstanceUL=GED=AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAgyqN0TWvn0SZ2zNYzJJiQwQAAAACAAAAAAAQZgAAAAEAACAAAAAgEoVuZs/A4RQWU0dhG+Bvc/xj3W7XhPAw5u/y7tKGtAAAAAAOgAAAAAIAACAAAAAw1oLcsS5BpiMJekjq9WrvxFBIVsY+tyoCskinsR78mhAAAADgW4fuXhtETcMZvYenKu6XQAAAACm+dpeg4BgRor4x14WxYnKrwjYXGIG4qYbpqAmMoBfr7bTIa0FuSiypalanviQfrIcwqOu5CAb18gv39iJj9+8=; InstanceST=GED=0040L-vgsnUK_zWkZCPl97LlFJtiB3tOlidikVgEfg2f47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",

      // "X-CSRF-TOKEN": getCookie('csrf_token')
    },
    /* credentials: "same-origin" */
  });
};

export const dash = () => {
  return httpClient({
    url: "/api/elise-workspace",
    method: "Get",
    headers: {
      Accept: "application/json",
      cookie:"P_LANGUAGE=GED=fr; P_ARCHIMED_CRYSTAL_SITE=GED=GLOBAL; P_LOGIN_COMMON=GED=__QQBkAG0AaQBuAEcARQBEAA==; P_PWD_COMMON=GED=; ARCHIMED=JSE_BROWSER=MZ; JSE-BROWSER=MZ; S_TALC_SESSION_ID=GED={DA42D9AE-8E79-4CA0-B5DF-2385F3F97356}; AFT=ezI1OEQxRDQ3LTYwNjItNDIxMC04MTYzLTNERjFCODk1NTMwNX0ARg==; P_ELISE_NEWS=1c6fe6a001f24229aaa5de3605f8d611; InstanceCI=GED=XFHad24rJRn4GN-fTIYXrmSR-Yffl9h6KLmeM6Y2; S_HTTP_REFERER=GED=https://elise6-pfe.elisedemo.com/GED/elise/Home; P_ELISE_RELOADCACHE=d8233718f7834109b25a5a0056c5e304; InstanceLG=; ASPSESSIONIDAUDTATCB=KCCJEDFDIKKJCABBGDADCJGO; S_ARCHIMED_CRYSTAL_AUTHANONYMOUS=GED=; S_ARCHIMED_CRYSTAL_AUTH=GED=e7f5f4da1a6f452bbea44574b3d1941d; InstanceUL=GED=AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAgyqN0TWvn0SZ2zNYzJJiQwQAAAACAAAAAAAQZgAAAAEAACAAAAAgEoVuZs/A4RQWU0dhG+Bvc/xj3W7XhPAw5u/y7tKGtAAAAAAOgAAAAAIAACAAAAAw1oLcsS5BpiMJekjq9WrvxFBIVsY+tyoCskinsR78mhAAAADgW4fuXhtETcMZvYenKu6XQAAAACm+dpeg4BgRor4x14WxYnKrwjYXGIG4qYbpqAmMoBfr7bTIa0FuSiypalanviQfrIcwqOu5CAb18gv39iJj9+8=; InstanceST=GED=0040L-vgsnUK_zWkZCPl97LlFJtiB3tOlidikVgEfg2f47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",

      // "X-CSRF-TOKEN": getCookie('csrf_token')
    },
/*     credentials: "same-origin"
 */  });
};
