const tableData = data;

const tbody = d3.select("tbody");
//var button = d3.select("#filter-btn");


function Table(data) {
    tbody.html("");
    data.forEach((datarow)=>{
        var row = tbody.append("tr");
        Object.values(datarow).forEach((val)=>{
            let cells = row.append("td");
            cells.text(val);
        });
    });
}

function filterBtn() {
    const date = d3.select("#datetime").property("value");
    let data = tableData;
    if(date){
        filter1 = data.filter(row => row.datetime === date);
    }

    Table(filterBtn);   
}

d3.select("#filter-btn").on('click',filterBtn);
Table(tableData);