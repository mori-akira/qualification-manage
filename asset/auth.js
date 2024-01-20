const PASS = 'UEBzc3cwcmQ=';

const moveTarget = () => {
    const match = location.search.match(/\?target=(.+)/);
    if (!match || match.length < 2) {
        location.assign('/index.html');
    }
    try {
        const target = atob(match[1]);
        location.assign(target);
    } catch (ex) {
        location.assign('/index.html');
    }
};

$(() => {
    const pass = $('#password');
    const msg = $('#passMessage');
    msg.hide();
    const btn = $('#openButton');

    pass.focus(() => {
        pass.removeClass('error');
        msg.hide();
    });

    pass.on('input', () => {
        pass.removeClass('error');
        msg.hide();
        if (pass.val().length > 0) {
            btn.attr('disabled', false);
        } else {
            btn.attr('disabled', true);
        }
    });

    pass.on('keydown', e => {
        if (e.key === 'Enter') {
            btn.trigger('click');
        }
    });

    btn.click(() => {
        if (btn.attr('disabled') == true) {
            return;
        }
        if (btoa(pass.val()) === PASS) {
            moveTarget();
        } else {
            pass.addClass('error');
            pass.val('');
            msg.show();
            btn.attr('disabled', true);
        }
    });
});
