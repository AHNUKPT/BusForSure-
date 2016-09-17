$(document).ready(function(){

  var x;

  var db = openDatabase('route', '1.0', 'Test DB', 2 * 1024 * 1024);

  db.transaction(function (tx) {
  
    tx.executeSql('CREATE TABLE IF NOT EXISTS buses (busroute unique, busno)');
    
    tx.executeSql('INSERT INTO buses (busroute, busno) VALUES (1, "5586")');
    tx.executeSql('INSERT INTO buses (busroute, busno) VALUES (2, "4158")');
    tx.executeSql('INSERT INTO buses (busroute, busno) VALUES (3, "7485")');
    tx.executeSql('INSERT INTO buses (busroute, busno) VALUES (4, "9856")');
    
  });

  select=document.getElementById("select");

  select.onchange=function(){

    x = this.value;

    db.transaction(function (tx) {
    
      tx.executeSql('SELECT * FROM buses',[], function (tx,results) {
      
        var len = results.rows.length, i;

        for(i=0;i<len;i++){
        
          if(x==results.rows.item(i).busroute){
            var y=results.rows.item(i).busno;
            document.getElementById("busNo").innerHTML=y;
            
          }
        }

      });
      
    });

  }

});
