$(document).ready(function(){
    $(".icons").hover(function(){
        $(this).css("width", "45px");
    }, function(){
        $(this).css("width", "40px");
    });
});

function loadRepo(url, callback) {
    const gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this);
        }
    }
    gitHubRequest.open("GET", "https://api.github.com/users/Astralynx/repos", true);
    gitHubRequest.send();
}

function loadRepoCallback(gitHubRequest) {
    let myRepos = JSON.parse('{"name", "html_url"}');
    document.getElementById("info").innerHTML = myRepos.name;
}