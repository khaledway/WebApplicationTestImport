
function init()
{

    //$("#grid").data("kendoGrid").dataSource.data([]);

    $("#grid").kendoGrid({
        dataSource: [],
        columns: [],
    })

    //const sheetID = '1Unojl6HwNgjofDEc8-WzTINLDmBn2xwyQeYCZtM3T68';
    //const base = 'https://docs.google.com/spreadsheets/d/' + sheetID + '/gviz/tq?';
    //const sheetName = "Assets";
    //const query = encodeURIComponent('Select *');
    //const url = base + 'sheet=' + sheetName + '&tq=' + query;

    const sheetID = document.getElementById("txtSheetID").value

    //1Unojl6HwNgjofDEc8-WzTINLDmBn2xwyQeYCZtM3T68
    const base = 'https://docs.google.com/spreadsheets/d/' + sheetID + '/gviz/tq?';
    const sheetName = document.getElementById("txtSheetName").value//"Assets";
    const query = encodeURIComponent('Select *');
    const url = base + 'sheet=' + sheetName + '&tq=' + query;






    
    console.log('ready');
    console.log(url);
    fetch(url)
    .then(res=>
    
        //debugger;
        //res.text();
        //console.log(res.status);
        res.text()

    )
    .then(rep=>
    {

       // console.log(rep);
        debugger;

        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
        //console.log(jsData);
        const colz = [];
        const data = [];
        jsData.table.cols.forEach(heading=> {
            //console.log(heading);

            if (heading.label) {
                const propName = heading.label.toLowerCase().
                replace(/\s/g, '');
                colz.push(propName);
                //console.log(colz);
            }

        })


        jsData.table.rows.forEach((main) => {
            // console.log(main);
            const row = {};
            colz.forEach((ele, ind) => {

                //console.log(ele);
                row[ele] = (main.c[ind] != null ? main.c[ind].v : '');
            })
            data.push(row);
        })

       // console.log(data);

        PupulateToKindo(colz, data);

        getProducts(data);

    }).catch(err =>
    {
        console.log("error", err);
        alert("invalid sheet id or name");
        document.getElementById("txtSheetID").value = '';
        document.getElementById("txtSheetName").value = '';

    });
}




function PupulateToKindo(colz, dataRows) {
    

    BindColumns(colz);
    $("#grid").kendoGrid({
        dataSource: {
            data:
                {
                    "items": dataRows,
                },
            schema:
                {
                    data: "items"
                }
        },
        columns: BindColumns(colz),

  

    })
}

				


function BindColumns(colz)
{
const colzArr = [];
    colz.forEach(s=>
    { 
        colzArr.push({ "field": s, "title": s.toUpperCase() });
    });
    return colzArr; 
}


function getProducts(data)
{
 

    $.ajax({
        type: "POST",
        data: JSON.stringify(data),
        url: "api/products/PostAssets",
        contentType: "application/json"
    });
}