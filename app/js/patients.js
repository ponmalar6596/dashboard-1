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
           
            <td>`+element.name +`</td>
            <td>`+element.phoneNo +`</td>
            <td>`+element.pincode +`</td>
            <td>`+element.streetName +`</td>
            <td>`+element.areaName +`</td>
            <td>`+element.tesedOn +`</td>
           <td><a href="patientsform.html" class="btn btn-primary">Edit</a></td>
            </tr>`
            $(`#patientslist`).append(tr);
            
          });
        //  $("#resultarea").text(data);
      }
    });
  })


  $('#submit').on('click',function (e) {
    e.preventDefault();
    var data = {
       name:$('#name').val(),
       phoneNo:$('#phoneNo').val(),
       pincode: $('#pincode').val(),
       streetName: $('#streetName').val(),
       areaName: $('#areaName').val(),
       tesedOn: $('#tesedOn').val()
    }
    console.log(data);
  
    $.ajax({
        type : "POST",
        contentType : "application/json",
        url: "http://localhost:3000/patients",
        data : JSON.stringify(data),
        dataType : 'json',
        success: function (result) {
            console.log(result+"done");
        }
    });
    $("#patientform")[0].reset();
});

