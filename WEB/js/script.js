$(document).ready(function() {

	var form = $("#search_form");

	form.on('submit', function() {

		var data = $(this).serializeArray();
		var res_cont = $(".results_container");
		var name = data[0]['value'];
		var type = data[1]['value'];

		$.ajax({
			url: 'http://localhost:3000/api/v1/search/' + type + '/' + name,
			method: "GET",
			dataType: 'JSON',
			success: function(data) {

				var res = "";

				if (data.length < 1) {
					res_cont.text("No results for: " + name);
				} else {
					$.each(data, function(i, v) {
						res += "<div class='result'><b>Name: </b>" + v['disp_name'] + "<br /><b>Email: </b>" + v['email'] + "<br /><b>Status: </b>" + v['State'] + "</div>";
					});
					res_cont.html(res);
				}

			}, 
			error: function(data) {
				console.log(data);
			}

		});

		return false;
	});

});