// $(document).ready(function(){
//    getpatients();
//   });
//   function getpatients(){
  $(()=>{
    // var myusername = $("#username").val();
    $.ajax({
      url: "http://localhost:3000/patients",
    //   data: myusername,
      // cache: false,
      success: function(result){
          // console.log(data);
          $('#patientslist').html('');
          result.forEach(element => {
            let tr = `<tr class="t-row" >
            <td>`+element._id +`</td>
            <td>`+element.name +`</td>
            <td>`+element.phoneNo +`</td>
            <td>`+element.pincode +`</td>
            <td>`+element.streetName +`</td>
            <td>`+element.areaName +`</td>
            <td>`+element.tesedOn +`</td>
            <td>`+element.resultsArrivedOn +`</td>
            <td>`+element.quarantineStartedOn +`</td>
            <td>`+element.curedOn +`</td>
            <td>`+element.underWentHospitalization +`</td>
            </tr>`
            $(`#patientslist`).append(tr);
            
          });
        //  $("#resultarea").text(data);
      }
    });
  })