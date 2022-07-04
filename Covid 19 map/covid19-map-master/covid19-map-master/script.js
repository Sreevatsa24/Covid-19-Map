async function Map(){
    const jsondata=await fetch('https://www.trackcorona.live/api/countries');
    const jsdata=await jsondata.json();
    console.log(jsdata);
    console.log(jsdata['data'].length);
    
    let total=jsdata['data'].length;
    

    
    for(var i=1;i<total;i++){
        var long=jsdata.data[i-1].longitude;
        var lat=jsdata.data[i-1].latitude;
        let Country=jsdata.data[i-1].location;

        
    let totalsick=jsdata.data[i-1].confirmed;
    var color;
    if(totalsick>100000){
        color='red';
    }
    else if(totalsick>10000 && totalsick<100000)  {
        color='orange';
    }  
    else if(totalsick>1000 && totalsick<10000)  {
        color='yellow';
    } 
    else if(totalsick>0 && totalsick<1000)  {
        color='green';
    } 
    
    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
        "Total Confirmed Cases in "+Country+": "+ totalsick
        
        );

        new mapboxgl.Marker({
            color:color
            
        })
        .setLngLat([long,lat])
        .setPopup(popup)
        .addTo(map);
    }
    
    




    
}

Map();
    