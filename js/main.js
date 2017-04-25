//main index file


$(function(){
    function setdate(obj,content){
     $("#_"+obj+"").html(content);// function to insert the html
    }
    const datestr = [];var pname = "  ",pdob;const datesim = [];
    $("#datepicker").datepicker();
    $("#datepicker").datepicker("option", "dateFormat","DD, d MM, yy");
    $("#datepicker").on("change",function(){
    $("#dob").html($(this).val());
    var now = $(this).val();
    var days = [45,75,105,6,9,10,15,18,2,5,10];
    var format = ['d','d','d','M','M','M','M','M','y','y','y'];
    pdob = now;
    pname = $("#name").val();
    for(i=0;i<11;i++){
      var newdate =  moment(now).add(days[i],format[i]).format("dddd - MMMM Do YYYY");
      var newsim =  moment(now).add(days[i],format[i]).format("D / M / YYYY");
        setdate(i+1," <b>("+newsim+")</b> ----- "+newdate.toString());
        datestr.push(newdate);
        datesim.push(newsim);
    }
    $("#print").removeClass('disabled');
    });
    $("#name").keyup(function(){
        $("#child_name").html($(this).val());
    })
   $("#print").click(function(){
      var docDefinition = { content:[{text: 'IMMUNISATION RECORD', alignment:'center',fontSize: 26, bold: true, margin: [0, 20, 0, 8]},
     {text : 'AMRUTHA BABY CARE HOSPITAL', fontSize: 18, bold: true},
      {text:[ {text:'Dr. LATHA RAJAGOPALAN ', fontSize: 14, bold: true},{text: 'M.B.B.S.,D.C.H., ', fontSize: 8}], margin: [0, 15, 0, 8]},
      {text: 'Name - '+pname+'                                           DOB - '+pdob, fontSize: 14,bold: true,margin: [0, 20, 0, 8]},
		{
			style:[ 'tableExample',{alignment:'left',fontSize: 15}],
			table: {
				headerRows: 1,
                widths: [130,130,200],
				body: [
					[{text: 'AGE', style: 'tableHeader'},{text: 'DATE', style: 'tableHeader'}, {text: 'DUE ON', style: 'tableHeader'}],
                    
					['45 Days',datesim[0], datestr[0]+"                                               "],
                    
					['75 Days',datesim[1],datestr[1]],
                    
					['105 Days',datesim[2],datestr[2]],
                    
					['6 Months', datesim[3],datestr[3]],
                    
					['9 Months',datesim[4],datestr[4]],
                    
                    ['10 Months', datesim[5],datestr[5]],
                    
                    ['15 Months', datesim[6],datestr[6]],
                    
                    ['18 Months',datesim[7],datestr[7]],
                    
                    ['2 Years',datesim[8],datestr[8]],
                    
                    ['5 Years',datesim[9],datestr[9]],
                    
                    ['10 Years',datesim[10],datestr[10]],
				]
			}
		},
        {text: 'Powered by i-CODERS Web solutions', fontSize: 8,margin: [0, 120, 0, 8]}] };
       pdfMake.createPdf(docDefinition).download('IMMUNATION_on_'+pdob+'.pdf');
       

   })
});
