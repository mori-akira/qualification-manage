$(function () {
    // 一覧アイテム押下時のスクロール
    $('table.qualification-list > tbody > tr').each((_, e) => {
        let target = $(e).attr('data-target');
        if (target) {
            $(e).click(() => {
                $(window).scrollTop($(`#${target}`).position().top);
            });
        }
    });

    // テーブルの各行に連番を振る
    $('table.qualification-list>tbody>tr').each((i, e) => {
        $($(e).children('td')[0]).text(i + 1)
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