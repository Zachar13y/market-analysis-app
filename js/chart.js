var newChart = function () {
	chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "My First Chart in CanvasJS"              
		},
		data: [              
		{
			type: "column",
			dataPoints: images
		}
		]
	});
	chart.render();
}