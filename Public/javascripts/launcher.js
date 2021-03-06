$(document).ready(function() {
    
    parseCookies();
    
    var authWait = setInterval(function() {

        parseCookies();

        if (getCookie("auth", "") != "") { $("#launch").prop("disabled", false); $("#link").html("http://bitbossbattles.herokuapp.com/app.html" + SettingsToString() + "&token=" + getCookie("auth", "")); }
    }, 250);
    
    var appWindow = null;

    function LaunchAuth() {

        window.open("https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=" + clientId + "&redirect_uri=" + redirectUri + "&scope=user_read", "", "width=400,height=512");
    }
    function LaunchForce() {

        window.open("https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=" + clientId + "&redirect_uri=" + redirectUri + "&scope=user_read&force_verify=true", "", "width=400,height=512");
    }
    function LaunchApp() {

        appWindow = window.open("./app.html", "App", "width=350,height=100");
    }
    function LaunchDemo() {

        appWindow = window.open("./demo.html", "Demo", "width=350,height=325");
    }
    function Reset() {

        setCookie("currentBoss", "");
        setCookie("currentHp", "0");
        setCookie("auth", "");
        $("#launch").prop("disabled", true);
        $("#link").html("<span style='color: red;'>App not yet authorized. Authorize the app to get a link.</span>");
    }
    
    function SettingsToString() {
        
        return "?sound=" + getCookie("sound", "false") + "&trans=" + getCookie("trans", "false") + "&chroma=" + getCookie("chroma", "false") + "&persistent=" + getCookie("persistent", "false") + "&bossheal=" + getCookie("bossheal", "false") + "&hptype=" + getCookie("hptype", "overkill") + "&hpmult=" + getCookie("hpmult", "1") + "&hpinit=" + getCookie("hpinit", "1000") + "&hpamnt=" + getCookie("hpamnt", "1000");
    }
    
    $("#auth").click(LaunchAuth);
    $("#force").click(LaunchForce);
    $("#launch").click(LaunchApp);
    $("#demo").click(LaunchDemo);
    $("#reset").click(Reset);
});