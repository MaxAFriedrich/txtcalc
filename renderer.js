// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
function inputdata() {
    var data = document.getElementById("textINP").value;

    if (data.includes("/")) {

        var listdata = data.split("/");
        var num = Number(listdata[0]);
        var num2 = Number(listdata[1]);
        var opans = num / num2
        if (opans!="Infinity"){
            document.getElementById("out").innerHTML = opans;
        }
    }
    if (data.includes("*")) {

        var listdata = data.split("*");
        var num = Number(listdata[0]);
        var num2 = Number(listdata[1]);
        var opans = num * num2
        if (opans!="Infinity"){
            document.getElementById("out").innerHTML = opans;
        }
    }
    if (data.includes("+")) {

        var listdata = data.split("+");
        var num = Number(listdata[0]);
        var num2 = Number(listdata[1]);
        var opans = num + num2
        if (opans!="Infinity"){
            document.getElementById("out").innerHTML = opans;
        }
    }
    if (data.includes("-")) {

        var listdata = data.split("-");
        var num = Number(listdata[0]);
        var num2 = Number(listdata[1]);
        var opans = num - num2
        if (opans!="Infinity"){
            document.getElementById("out").innerHTML = opans;
        }
    }

}
function main() {
    setInterval(function () { inputdata(); }, 20);
}
main();