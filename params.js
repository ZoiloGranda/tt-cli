const headers = {
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "accept-language": "es-419,es;q=0.9,en;q=0.8",
  "cache-control": "no-cache",
  "content-type": "application/x-www-form-urlencoded",
  "pragma": "no-cache",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "same-origin",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
  "cookie": "_ga=GA1.2.694175793.1585605697; ASP.NET_SessionId=2w5pmsqdw4domaovbb5qdrme; idProyectoAnterior=699; idTipoAsignacionAnterior=38; idFocalPointAnterior=12358"
}

const body =  "ctl00%24ContentPlaceHolder%24idProyectoDropDownList=699&ctl00%24ContentPlaceHolder%24TiempoTextBox=1&ctl00%24ContentPlaceHolder%24idTipoAsignacionDropDownList=38&ctl00%24ContentPlaceHolder%24DescripcionTextBox=Build a Custom Record Page for Lightning Experience and the Salesforce Mobile App&ctl00%24ContentPlaceHolder%24idFocalPointClientDropDownList=12358&ctl00%24ContentPlaceHolder%24btnAceptar=Accept&__EVENTTARGET=&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKMTk4MzU4MDI0NQ9kFgJmD2QWAgIDD2QWAgIFD2QWAgIDD2QWAmYPZBYWAgEPDxYCHgdWaXNpYmxlaGQWBgIBDxAPFgQeB0VuYWJsZWRoHwBoZGRkZAIDDw8WAh8AaGRkAgUPDxYCHwBoZGQCBA8WAh4MU2VsZWN0ZWREYXRlBgAgeem7DdhIZAIFDw8WAh8AaGQWAgIBDw8WAh4EVGV4dGVkZAIGDw8WAh8AaGRkAggPEA8WAh4LXyFEYXRhQm91bmRnZBAVAgAaSVFWSUEgLSBJUVZJQSAtIFRlYW0gSXNsZXkVAgADNjk5FCsDAmdnZGQCCg8PZA8QFgFmFgEWAh4OUGFyYW1ldGVyVmFsdWUoKVlTeXN0ZW0uSW50NjQsIG1zY29ybGliLCBWZXJzaW9uPTQuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OQQxNDM2FgECBWRkAgwPDxYCHwMFATFkZAIPDxAPFgIfBGdkEBUmABJBY2NvdW50IE1hbmFnZW1lbnQOQWRtaW5pc3RyYXRpb24TQXBwbGljYW50cyBTb3VyY2luZwtDYWxsIENlbnRlchhDb2RpbmcgQ2hhbGxlbmdlcyBSZXZpZXcmQ29tbXVuaWNhdGlvbiAobmV3c2xldHRlciwgbm90YXMsIGV0YykYQ29uZmlndXJhdGlvbiBNYW5hZ2VtZW50CkRhdGEgRW50cnkDREJBFUV4ZWN1dGl2ZSBIZWFkaHVudGluZwpGYWNpbGl0aWVzF0Zhcm1pbmcgLSBTdGFmZmluZyBIZXJvB0ZpbmFuY2URSGVscCBEZXNrL1N1cHBvcnQPSHVtYW4gUmVzb3VyY2VzF0luZnJhc3RydWN0dXJlL0hhcmR3YXJlCk1hbmFnZW1lbnQJTWFya2V0aW5nCU1lbnRvcmluZxZPbiBCb2FyZGluZyAmIFRyYWluaW5nDk9uIENhbGwgRHV0aWVzCFByZXNhbGVzC1JlY3J1aXRtZW50ElJlcG9ydHMgR2VuZXJhdGlvbgVTYWxlcw1TYWxlcyBTdXBwb3J0G1NpbiB0YXJlYXMgYXNpZ25hZGFzIC8gSWRsZRRTb2Z0d2FyZSBEZXZlbG9wbWVudAhTb3VyY2luZyFTb3VyY2luZyBXZWVrZW5kIFNoaWZ0IC8gT1QgSG91cnMIU3RhZmZpbmcUVGVjaG5pY2FsIEludGVydmlld3MUVGVjaG5pY2FsIEludGVydmlld3MLVGVzdCBSZXZpZXcHVGVzdGluZwhUcmFpbmluZxRVSS9VWC9HcmFwaGljIERlc2lnbhUmAAIyMQE2AjMxATcCMzQCMTECMTUCMTcCMTQCMzACMjUCMjkCMjMCMjICMjcCMTYBNQIyMAI0MwIzOAIzOQI0MQEyATgCMTkCMzcBOQExAjM2AjQ0AjI0AjMyAjQyAjMzAjEzATQCMTAUKwMmZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dkZAIRDw9kDxAWAWYWARYCHwUFAzY5ORYBZmRkAhYPEA8WAh8EZ2QQFQsADERyZXcgWmllZ2xlcgpUeWxlciBQZWVrC1d5YXR0IExld2luDlR5bGVyIFZhbiBIb3JuDkphc29uIExvY2t3b29kClRvbSBUYXlsb3IOQ2FtZXJvbiBGb3N0ZXINVmluY2UgS29kaWNhbA5BdXJlbGxpYSBKYW1lcw1EYXZpZCBKb2huc29uFQsABTEyMjcwBTEyMjcyBTEyMjgwBTEyMjg0BTEyMzIzBTEyMzU4BTEyNDAyBTEyNDc5BTEyNDgxBTEyNTcxFCsDC2dnZ2dnZ2dnZ2dnZGQCGA8PZA8QFgFmFgEWAh8FBQM2OTkWAWZkZGSlkbAfsm3G9j5vCY4%2FhFvACGp4uDH8dFKvnwBRfGZsmA%3D%3D&__VIEWSTATEGENERATOR=36DF8DAE&__EVENTVALIDATION=%2FwEdADn1CUZn4EjCtVE92QGtt0GG4x8AhbDk1OuzysNknnQllt3X1JqGigG7nsR3K2Z9atJQh7OWJ65jSnrd7o9Iw%2FBziyFgMGMjeJ7vMDe%2F4Ee3sDCLwBgLBri%2Fy9KnupK4mQUlvqQFvWsmPVqlwi7Tya6dceBokBln3pKN8FyRGY7MhN7jissbhgGaYbgCC8xU0R7hNdm6BpU7pLsB5vkOYdtZwtbFFOqyHbAuiyiZKOSwZTtxnJNK9C5WGTXX6Iw%2BWQesZ9IQXYc6gra1nB%2FCEaSjudxe52Jyt4C0TcI5Lpz5u73ACBkAwOo1FiLEaL4dqzzzJii94gogvWGfwA9EZ8rICn1vfWMMsm6L9RCnRXrnzB4WkzStX0iEN%2BaVYOwJrbaaMulpt1FQ3vnw53TLDQrebssAqio77179Qj3BBTPNitoWm66utyGs72wbcQ7H35HnL8x7hFFo3bJo7%2FWA5iioqLFukut3lvW1A%2FimKQ3w8p6BuMCf6T%2Fz6y3A1slbKnHIIDCla90Kq0l8dTlPvUC6y0kHMC8ySKfUNwCuSPqsgyGE32EWEaFhrkqaUDaMWOIeU56gTy3RwmKNWzL1V1dCAFVycBisPsh1E45J1tL8OG7qOyb9SXlt1UJmzRHI6zsGsQfofqY4QxYKQ6UUwvf0GzqXh3HAP40OVrwiyY2wEPdWW2J%2BDKetQYXv43EH6XQevoyG6xaalO3C1AM58M0KY9QBylzvfoeAnjBwHNO4ZgxqBV4lA1wb1iRRoYyxw0JzkFAGgsnCfREYMubEu2tXutg8Cwtw572d8hsjLnr%2B2w72bRO5u6TvwAi8vdRowwyQFvQ1eq%2Blwx45IBCJw6KhRc05tq%2BoQ2XXjuKXrNr1N86H1hvDRiN5TipVdL5DY1o4tlzkkC7n8LZbyf2ZWW3I566B2K8yxWPAP6R1sL1ddjpHBhlm5iiFrBwTlRaNr8O2xfgIk9%2FDwBGdZE2uqETrf%2BuJ6UajDl%2F1PnERF6s7oo2M%2FuZzLny6LVePVQgKS2EHW5W2VynziXEK2N6LfwSbU7N%2FuqOweauOzp7mJ%2Bq8w1uBK%2BBFV2TMXV1ZGz7GIwjirlZ6QOU5msA7XqgNEx8SLLmmsJXYOPSNXQOQ8Xzt9uRRB1g6r%2F9QC51l7%2BYqJZaj5ggMbe4rLGcWNeMdR8DO%2B70QJb%2FyX84uZ4hbCXDxLTr%2BMVWmOJd6xq037zZjBDaKUU%2FYwZ5kZUSAXOijzzkSEEvu%2Fa9%2FcBBHRrxf%2BP3Ewg%3D%3D";

module.exports={
 headers,
 body
}