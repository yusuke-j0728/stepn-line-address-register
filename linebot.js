const TOKEN = 'UO7lg9agk9L7Xg4qgKMXsInpHD50fGfMShXkff60xW5g9zaaAItA2Q8lm6V7eBkgtWVgWadrkyY+f4Yn1zLcYav3ep/YSsn6hdGd43E+e3tfObf5JVDuZFcGigPOWuTHnOJ9GnlyyreMU3VdDzt7UAdB04t89/1O/w1cDnyilFU=';
 
function doPost(e) {
  const responseLine = e.postData.getDataAsString();
  const event = JSON.parse(responseLine).events[0];  
  const replyToken = event.replyToken;
  
  var message_text = "こんにちは。Stepn収益管理 Botです！";

  const postMsg = event.message.text;

  if(postMsg.match(/アドレス登録.*/gi)){
    message_text = "Stepnアドレスを登録しました"
  }

  const LineMessageObject = [{
    'type': 'text',
    'text': message_text
  }];
  const replyHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + TOKEN
  };
  const replyBody = {
    'replyToken': replyToken,
    'messages': LineMessageObject
  };
  const replyOptions = {
    'method': 'POST',
    'headers': replyHeaders,
    'payload': JSON.stringify(replyBody)
  };
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/reply', replyOptions);
}