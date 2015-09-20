/* global data_ */
// var chart_data;
// var startdate = "default";
// var enddate = "default";
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(load_page_data);

function load_page_data(){
    
    $.ajax({
        data_: $.get("mydata.csv", function(csvString) {
	     // transform the CSV string into a 2-dimensional array 
		 var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
		 // this new DataTable object holds all the data 
		 data_ = new google.visualization.arrayToDataTable(arrayData);
         
         }),
        async: false,
        success: function(data_){
            if(data_){
                
                drawChart(data_);
            }
        },
    });
      
}

function drawChart(data_) {
    var view = new google.visualization.DataView(data_); 
	
	
					view.setColumns([0,1]);
					var options = { 
						title: "Type Of Applicant" 
						};
						
		       var chart = new google.visualization.PieChart(document.getElementById('PieChartTypeOfApplicant')); 
               chart.draw(view, options);



					view.setColumns([2,3]);
					var options = { 
						title: "Male/Female" 
						
						};
						
					var chart = new google.visualization.PieChart(document.getElementById('PieChartMaleFemale')); 
					chart.draw(view, options);
                    
 
					view.setColumns([4,5]);
					var options = { 
						title: "Specialization" 
						
						};
						
					var chart = new google.visualization.PieChart(document.getElementById('PieChartSpeci')); 
					chart.draw(view, options);
					
			       view.setColumns([6,7]);
					var options = { 
						title: "Academic Degree" 
						
						};
						
					var chart = new google.visualization.PieChart(document.getElementById('PieChartDegree')); 
					chart.draw(view, options);
					
					view.setColumns([8,9]);
					var options = { 
						title: "How did you hear about the MSP" 
						
						};
						
					var chart = new google.visualization.PieChart(document.getElementById('PieChartHowDidYouHear')); 
					chart.draw(view, options);
					
					view.setColumns([10,11]);
					var options = { 
						title: "English level" 
						
						};
						
					var chart = new google.visualization.ColumnChart(document.getElementById('ColumnChartEnglishLvl')); 
					chart.draw(view, options);
					
					view.setColumns([12,13]);
					var options = { 
						title: "Age" 
						
						};
						
					var chart = new google.visualization.ColumnChart(document.getElementById('ColumnChartAge')); 
					chart.draw(view, options);
					
					view.setColumns([14,15]);
					var options = { 
						title: "Expected Graduation Date" 
						
						};
						
					var chart = new google.visualization.LineChart(document.getElementById('LineChartExpecGradDate')); 
					chart.draw(view, options);
					
					
					view.setColumns([16,17]);
					var options = { 
						title: "Cities"
						
						
						};
						
					var chart = new google.visualization.BarChart(document.getElementById('BarChartCity')); 
					chart.draw(view, options);
					
					
					view.setColumns([18,19]);
					var options = { 
						title: "Universities"
						
						
						};
						
					var chart = new google.visualization.BarChart(document.getElementById('BarChartUni')); 
					chart.draw(view, options);
					
					view.setColumns([20,21]);
					var options = { 
						title: "Faculties"
						
						
						};
						
					var chart = new google.visualization.BarChart(document.getElementById('BarChartFaculty')); 
					chart.draw(view, options);
					
					
}