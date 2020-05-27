const request = require('request');
const lineNotify = require('line-notify-nodejs')('uGW0aVRTxIbchdK5WOsfTvGX69mK8e9827cy3gYcLI6');
const options = {
    url: 'https://appealcovid19.xn--12cl1ck0bl6hdu9iyb9bp.com/appeal-web/api/appeal-api/personal-info/verify',
    method: 'POST',
    headers: {
      'authority': 'appealcovid19.xn--12cl1ck0bl6hdu9iyb9bp.com',
    'accept': 'application/json, text/plain, */*',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    'content-type': 'application/json;charset=UTF-8',
    'origin': 'https://appealcovid19.xn--12cl1ck0bl6hdu9iyb9bp.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://appealcovid19.xn--12cl1ck0bl6hdu9iyb9bp.com/appeal-web/?page=cvda002',
    'accept-language': 'th,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
    'cookie': '_ga=GA1.2.98797185.1585964615; _gid=GA1.2.1969167440.1589960440; _gat_UA-161806533-1=1; _gat_UA-161806533-3=1'
    },body: "{\"birthday\":\"25351227\",\"cid\":\"1341500202156\",\"mobile\":\"0991013326\",\"page\":\"cvda002\"}",
    strictSSL: false
};

function intervalFunc(){
request(options, function(err, res, body) {
    let json = JSON.parse(body);
    if(json.data.dataRegis.payment.paymentHistory[1].status == "กำลังดำเนินการ" ){   
      //send();
      console.log("โอนครั้งที่ 2 ไม่มีข้อมูล")
      console.log(json.data.dataRegis.payment.paymentHistory[1]);
      var period = json.data.dataRegis.payment.paymentHistory[1].period;
      var effDate = json.data.dataRegis.payment.paymentHistory[1].effDate;
      var status = json.data.dataRegis.payment.paymentHistory[1].status;

      console.log("การโอน "+period +" โอน "+ effDate +" สถานะการโอน "+status);
      var sum = "การโอน "+period +" โอน "+ effDate +" สถานะการโอน "+status;
      lineNotify.notify({
        message:sum
      });
    }else if(json.data.dataRegis.payment.paymentHistory[1].status == "โอนเงินสำเร็จ" ){  
      console.log("โอนครั้งที่ 2 มีข้อมูล")
      console.log(json.data.dataRegis.payment.paymentHistory[1]);
      var period = json.data.dataRegis.payment.paymentHistory[1].period;
      var effDate = json.data.dataRegis.payment.paymentHistory[1].effDate;
      var status = json.data.dataRegis.payment.paymentHistory[1].status;
      console.log("การโอน "+period +" โอน "+ effDate +" สถานะการโอน "+status);
      var sum = "การโอน "+period +" โอน "+ effDate +" สถานะการโอน "+status;
      lineNotify.notify({
        message:sum       
      });
    }
   
   
});
}


setInterval(intervalFunc,36000);

