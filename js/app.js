(function() {
    'use strict';

    function addButton() {
        var conteiner = document.getElementById('app');
        var button = document.createElement('button');
        conteiner.appendChild(button);
        button.textContent = "Create Table";
        button.onclick = function() {
            //  create table
            var table = document.createElement('table');
            var row;
            var col;
            var i;
            var j;
            var num = 1;
            conteiner.appendChild(table);
            table.style.border = "1px solid black";
            table.style.borderCollapse = "collapse";
            table.style.width = "50%";
            table.style.marginLeft = "300px";
            for (i = 0; i < 10; i++) {
                row = document.createElement('tr');
                table.appendChild(row);
                for (j = 0; j < 10; j++) {
                    col = document.createElement('th');
                    row.appendChild(col);
                    col.textContent = num++;
                    col.style.border = "1px solid black";
                }
            }
            // create buttons
            var leftButton = document.createElement('button');
            var rightButton = document.createElement('button');
            conteiner.appendChild(leftButton);
            conteiner.appendChild(rightButton);
            leftButton.textContent = "Move Left";
            rightButton.textContent = "Move Right";
            leftButton.onclick = function() {
                table.style.marginLeft = parseFloat(table.style.marginLeft) - 100 + 'px';
            };
            rightButton.onclick = function() {
                table.style.marginLeft = parseFloat(table.style.marginLeft) + 100 + 'px';
            };
        };
    }
    addButton();
})();