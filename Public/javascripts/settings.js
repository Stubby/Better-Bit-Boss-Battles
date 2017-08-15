$(document).ready(function() {

    parse_cookies();

    $("#sound").prop("checked", (window._cookies.sound == "true"));
    $("#trans").prop("checked", (window._cookies.trans == "true"));
    $("#chroma").prop("checked", (window._cookies.chroma == "true") );
    $("#persistent").prop("checked", (window._cookies.persistent == "true"));
    $("#bossheal").prop("checked", (window._cookies.bossheal == "true"));

    if (window._cookies.hptype == "constant") {
        $("input[type='radio'][name='hp'][value='constant']").click();
        $("#hp-amnt").prop("disabled", false);
        $("#hp-init").prop("disabled", true);
        $("#hp-mult").prop("disabled", true);
    }

    if (window._cookies.hpmult != "") { $("#hp-mult").val(parseInt(window._cookies.hpmult) || 1) }
    if (window._cookies.hpinit != "") { $("#hp-init").val(parseInt(window._cookies.hpinit) || 1000) }
    if (window._cookies.hpamnt != "") { $("#hp-amnt").val(parseInt(window._cookies.hpamnt) || 1000) }


    // FIXME - These can all function on the same event rather than 5 individual methods.
    $("#sound").click(function() {
        set_cookie("sound", $(this).prop("checked").toString(), 5000, "/");
    });

    $("#trans").click(function() {
        set_cookie("trans", $(this).prop("checked").toString(), 5000, "/");
    });

    $("#chroma").click(function() {
        set_cookie("chroma", $(this).prop("checked").toString(), 5000, "/");
    });

    $("#persistent").click(function() {
        set_cookie("persistent", $(this).prop("checked").toString(), 5000, "/");
    });

    $("#bossheal").click(function() {
        set_cookie("bossheal", $(this).prop("checked").toString(), 5000, "/");
    });

    $("input[type='radio'][name='hp']").change(function() {

        set_cookie("hptype", $(this).val(), 5000, "/");
        if ($(this).val() == "overkill")
        {
            $("#hp-mult").prop("disabled", false);
            $("#hp-init").prop("disabled", false);
            $("#hp-amnt").prop("disabled", true);
        }
        else if ($(this).val() == "constant")
        {
            $("#hp-amnt").prop("disabled", false);
            $("#hp-init").prop("disabled", true);
            $("#hp-mult").prop("disabled", true);
        }
    });

    $("#hp-mult").change(function() {
        set_cookie("hpmult", $(this).val().toString(), 5000, "/");
    });

    $("#hp-init").change(function() {
        set_cookie("hpinit", $(this).val().toString(), 5000, "/");
    });

    $("#hp-amnt").change(function() {
        set_cookie("hpamnt", $(this).val().toString(), 5000, "/");
    });
});