$(()=>{

  const successMethod = ()=>{
    
  };

  const failedMethod = ()=>{

  };

$("#ask8Ball").submit(()=>{
  const data = {
    question: $("#question").val()
  };
  $.get({
    url:"/8ball",
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8"
  }).done(successMethod).fail(failedMethod);

});


});
