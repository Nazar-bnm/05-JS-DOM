(function() {
    'use strict';

    function addButton() {
        var button = document.createElement("button");
        var div = document.getElementById('app');
        button.textContent = "Create Table";
        div.appendChild(button);
        button.onclick = function() {
            var table = document.createElement("table");
            div.appendChild(table);
            table.style.border = "1px solid black";
            table.style.width = "100%";
            var num = 1;
            for (var i = 0; i < 10; i++) {
                var tr = document.createElement("tr");
                table.appendChild(tr);
                for (var j = 0; j < 10; j++) {
                    var th = document.createElement("th");
                    tr.appendChild(th);
                    th.textContent = num++;
                    th.style.border = "1px solid black";
                }
            }
            var moveLeft = document.createElement("button");
            var moveRight = document.createElement("button");
            div.appendChild(moveRight);
            div.appendChild(moveLeft);
            moveRight.textContent = "move right";
            moveLeft.textContent = "move left";
            moveRight.onclick = function() {
                table.style.marginLeft = "100px";
            };
            moveLeft.onclick = function() {
                table.style.marginLeft = "0";
            };
        };
    }
    addButton();
})();