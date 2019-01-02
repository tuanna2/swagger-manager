$(document).ready(()=>{
    $.get("http://125.212.227.42:18080/api/news", (data)=>{
        alert("Data: " + data );
      });
});