let data =[{"id":1,"Name":"Dick","email":"dsuero0@google.nl","gender":"Male"},
{"id":2,"Name":"Wilbur","email":"wclethro1@mysql.com","gender":"Male"},
{"id":3,"Name":"Dougie","email":"dhuman2@csmonitor.com","gender":"Male"},
{"id":4,"Name":"Maureene","email":"mknappett3@bloglovin.com","gender":"Female"},
{"id":5,"Name":"Veriee","email":"vkun4@weebly.com","gender":"Female"},
{"id":6,"Name":"Nickie","email":"nodeson5@seattletimes.com","gender":"Male"},
{"id":7,"Name":"Allie","email":"ahubbucke6@google.co.uk","gender":"Male"},
{"id":8,"Name":"Fanya","email":"froderick7@hp.com","gender":"Female"},
{"id":9,"Name":"Ashlee","email":"abridat8@google.it","gender":"Female"},
{"id":10,"Name":"Doria","email":"dosbourne9@ow.ly","gender":"Female"},
{"id":11,"Name":"Blayne","email":"bjolliea@networkadvertising.org","gender":"Male"},
{"id":12,"Name":"Marv","email":"mguiraudb@jiathis.com","gender":"Male"},
{"id":13,"Name":"Kerri","email":"ktattershallc@nature.com","gender":"Female"},
{"id":14,"Name":"Sharla","email":"smeganyd@goodreads.com","gender":"Female"},
{"id":15,"Name":"Barrie","email":"barnholdte@example.com","gender":"Female"},
{"id":16,"Name":"Sander","email":"singlesfieldf@adobe.com","gender":"Male"},
{"id":17,"Name":"Jessie","email":"jskechleyg@ustream.tv","gender":"Male"},
{"id":18,"Name":"Bradan","email":"bdockreayh@ihg.com","gender":"Male"},
{"id":19,"Name":"Iago","email":"irobeyi@nih.gov","gender":"Male"},
{"id":20,"Name":"Arte","email":"aganifordj@chicagotribune.com","gender":"Male"}]

function display_data(){
    let rows="";
for(datas of data){
    rows=rows +`<tr>   <td>${datas.id}</td> 
    <td>${datas.Name}</td> 
    <td>${datas.email}</td> 
    <td>${datas.gender}</td> 
      </tr>`
          
}
document.getElementById('abc').innerHTML=rows
}