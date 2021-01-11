// $(document).ready(function(){
//    getpatients();
//   });
//   function getpatients(){

//patients
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
            <td>`+element.status +`</td>

           <td><a class="btn btn-primary" id="edit" href="patientsform.html" onclick="location.href=this.href+'?patient_id=${element._id}';return false;">Edit</a></td>

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
       tesedOn: $('#tesedOn').val(),
       status: $('#status').val(),
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

  





  function getPatientById(patientId){
  $.ajax({
      url: "http://localhost:3000/patients/findOne?patientId="+patientId,
    //   data: myusername,
      // cache: false,
      success: function(result){
     console.log("find one patient data ",result);
     if(result.name){
     $('#name').val(result.name);
     }
     if(result.phoneNo){
     $('#phoneNo').val(result.phoneNo);
     }
     if(result.pincode){
      $('#pincode').val(result.pincode);
     }
     if(result.streetName){
      $('#streetName').val(result.streetName);
     }
     if(result.areaName){
      $('#areaName').val(result.areaName);
     }
     if(result.tesedOn){
      $('#tesedOn').val(result.tesedOn);
     }
     if(result.status){
      $('#status').val(result.status);
     }
      }
    })
  }





  //login



  $('#login').on('click',function (e) {
    e.preventDefault();
    var data = {
      UserName:$('#feFirstName').val(),
      Password:$('#feEmailAddress').val()
    }
    console.log(data);
  
    $.ajax({
        type : "POST",
        contentType : "application/json",
        url:"https://orientation.boodskap.io/api/domain/login",
        data : JSON.stringify(data),
        dataType : 'json',
        success: function (result) {
            console.log(result+"done");
        }
    });
    $("#form")[0].reset();
});
