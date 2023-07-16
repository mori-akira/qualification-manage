$(function () {
    // 一覧アイテム押下時のスクロール
    $('table.qualification-list > tbody > tr').each((i, e) => {
        let target = $(e).attr('data-target');
        if (target) {
            $(e).click(() => {
                $(window).scrollTop($(`#${target}`).position().top);
            });
        }
    });

    // データテーブル適用
    $('.qualification-list').DataTable({
        lengthChange: false,
        searching: true,
        ordering: true,
        info: false,
        paging: false
    });
});