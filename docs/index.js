var params = (new URL(document.location)).searchParams;
// var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var inquiry = $('textarea[name="inquiry"]').val();
        var email = $('input[name="email"]').val();
        // var msg = `${key}\nお問い合わせ内容：${inquiry}`;
        var msg = `アドレス登録：\n${inquiry}`;
        sendText(msg);

        return false;
    });
});
