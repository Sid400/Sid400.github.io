let render = {
    clear: function (relative_id) {
        let variable = document.getElementById(relative_id);
        variable.innerHTML = '';
    },
    create_element: function (relative_id, block_name, set_class, text) {
        let variable = document.getElementById(relative_id);
        let block = document.createElement(block_name);
        let block_node = document.createTextNode(text);
        block.setAttribute('class', set_class);
        block.appendChild(block_node);
        variable.appendChild(block);
    },
    create_element_foreach: function (relative_id, block_name, set_class, text, count) {
        let variable = document.getElementsByClassName(relative_id);
        let block = document.createElement(block_name);
        let block_node = document.createTextNode(text);
        block.setAttribute('class', set_class);
        block.appendChild(block_node);
        variable[count].appendChild(block);
    },

    
create_words: function () {
    let row = setting.field_row;
    let index = 0;
    while (index < row) {
       render.create_element('1321','span', 'words', setting.row_words[index]) 
       index++
    }
},
 create_field: function() {
    render.create_words()
    let col = setting.field_col;
    let row = setting.field_row;
    let index1 = 0;
    let index2 = 0;
    let cell = 0
    while (index1 < col) {
       render.create_element('1321','div', 'row', "") 
       while (index2 < row) {
           if (cell%2 == 0) {
            render.create_element_foreach('row','span', 'square color1', "1" , index1)
           } else{
        render.create_element_foreach('row','span', 'square color2', "2" , index1)
           }
        index2++
        cell++
       }
       render.create_element_foreach('row','span', 'number', setting.col_num[index1] , index1)
       index1++;
       index2 = 0;
       if (row%2 == 0) {
        cell++
       }
    }
}
};





