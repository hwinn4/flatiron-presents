function showData(event, name){
  // WHY WON'T PREVENT DEFAULT WORK???
  // event.preventDefault();
    var url = "https://data.cityofnewyork.us/resource/w5g7-dwbx.json?geographic_area_neighborhood_tabulation_area_nta_name=" + name;
    $.ajax({
      url: url,
      method: "GET",
      dataType: "JSON"
    }).success(function(data){
      var data_attributes = data[0];
      if (data_attributes){
        var name = data_attributes.geographic_area_neighborhood_tabulation_area_nta_name;
        var borough = data_attributes.geographic_area_borough;
        var pop2010 = data_attributes.total_population_2010_number;
        var html = "<h2>" + name + "</h2><h3>Borough: " + borough + "</h3><h3><h3>Population 2010: " + pop2010 + "</h3>";
        $('#neighborhood_details').html(html);
      } else {
        $('#neighborhood_details').html("<h2>Sorry! The city forgot about this neighborhood!</h2>");
      }
     
    }) 
}