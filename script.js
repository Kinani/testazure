google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);


function drawChart() {
   // grab the CSV
   $.get("thiscsvrocks.csv", function(csvString) {
      // transform the CSV string into a 2-dimensional array
      var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

      // this new DataTable object holds all the data
      var data = new google.visualization.arrayToDataTable(arrayData);

      // this view can select a subset of the data at a time
      var view = new google.visualization.DataView(data);
      view.setColumns([0,1]);

     // set chart options
     var options = {
        title: "A Chart from a CSV!",
        hAxis: {title: data.getColumnLabel(0), minValue: data.getColumnRange(0).min, maxValue: data.getColumnRange(0).max},
        vAxis: {title: data.getColumnLabel(1), minValue: data.getColumnRange(1).min, maxValue: data.getColumnRange(1).max},
        legend: 'none'
     };

     // create the chart object and draw it
     var chart = new google.visualization.ScatterChart(document.getElementById('chart'));
     chart.draw(view, options);
  });
}


// function BieChart() {
//    // grab the CSV
//    $.get("thiscsvrocksBieChart.csv", function(csvString) {
//       // transform the CSV string into a 2-dimensional array
//       var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
// 
//       // this new DataTable object holds all the data
//       var data = new google.visualization.arrayToDataTable(arrayData);
// 
//       // this view can select a subset of the data at a time
//       var view = new google.visualization.DataView(data);
//       view.setColumns([0,1]);
// 
//      // set chart options
//      var options = {
//         title: "A Chart from a CSV!",
//         hAxis: {title: data.getColumnLabel(0), minValue: data.getColumnRange(0).min, maxValue: data.getColumnRange(0).max},
//         vAxis: {title: data.getColumnLabel(1), minValue: data.getColumnRange(1).min, maxValue: data.getColumnRange(1).max},
//         legend: 'none'
//      };
// 
//      // create the chart object and draw it
//      var chart = new google.visualization.ScatterChart(document.getElementById('chart'));
//      chart.draw(view, options);
//   });
// }

function DrawBieChart() {

  // google.load("visualization", "1", {packages:["corechart"]});
  //     google.setOnLoadCallback(drawChart);    


      google.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Sex', 'Percentage'],
          ['Male',     11],
          ['Female',      2]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
}