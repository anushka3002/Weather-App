var gmap_canvas=document.querySelector(".gmap_canvas")
     var cityname=document.querySelector("#cityname") 
     var temprt=document.querySelector("#temp") 
     var all=document.querySelector("#all") 
    async function getWeather(){
        gmap_canvas.innerHTML=""
        cityname.innerHTML=""
        temprt.innerHTML=""
        all.innerHTML=""
        try{
            let city=document.querySelector('#city').value;
            let response=await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7bd8afb5b725f099b164281e741a4b0&units=metric`)
    
    let data=await response.json()
    showWeather(data)
    console.log("data:",data);
        }
       catch(err){
            console.log("err:",err);
       }
};


async function getfivedays(){
        try{
            let city2=document.querySelector('#city').value;
            let response2=await fetch(` https://api.openweathermap.org/data/2.5/forecast?q=${city2}&appid=b7bd8afb5b725f099b164281e741a4b0&units=metric`)
            let data2=await response2.json()
            showfivedays(data2)
            console.log("data2:",data2);
        }
        catch(err){
            console.log("err:",err);
       }
};      
var arr=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBityIZHfD7qLWbgLAeEnqptTIMNyIDPcZw&usqp=CAU",
    "https://thumbs.dreamstime.com/b/rain-storm-weather-icon-isolated-white-background-66246968.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGVoz3GAoAXPSC14V16P6lkC81Ivzgy-zliDVtcvkpMdxrcnACaXPS9RLQSZ5m2Uk-m0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVK-IQabT6G4MBSBGoBHnjwE1Kgqj6zHIppg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACzVXaGYN7gGzwEza5ydHuAd8w0opq28gmSu0I9Pu3QupHq1Y87sMIHp5NgyugFdd-V0&usqp=CAU"
]

function showfivedays(data2){
    document.querySelector("#fivedays").innerHTML=""
    var count=0;
    for(var i=0;i<=40;i=i+8){
        
        let date1=document.createElement("p");
        date1.innerText=data2.list[i].dt_txt;
        let temp1=document.createElement("p");
        temp1.innerText=data2.list[i].main.temp;
        temp1.style.color="red"
        // temp1.src=data2.list[i].weather[0].icon;
        let cloud=document.createElement("p");
        cloud.style.width="50px"
        cloud.style.height="50px"
        cloud.innerText=data2.list[i].weather[0].icon;
        console.log(data2.list[i].weather[0].icon+"avvvv")
        console.log(temp1+"koooo")
        let div1=document.createElement("div");
        div1.append(date1,cloud,temp1);
        document.querySelector("#fivedays").append(div1);
        

    }
    
}



function showWeather(weather){
    let name=document.createElement("h2")
    name.innerText=weather.name;
    let temp=document.createElement("h2");
    temp.innerText=`${weather.main.temp}°`;
    let pressure=document.createElement("p"); 
    pressure.innerText=`Pressure: ${weather.main.pressure}`;
    let humidity=document.createElement("p");
    humidity.innerText=`Humidity: ${weather.main.humidity}`;
    let maxtemp=document.createElement("p")
    maxtemp.innerText=`Max: ${weather.main.temp_max}`;
    let mintemp=document.createElement("p")
    mintemp.innerText=`Min: ${weather.main.temp_min}`;

    cityname.append(name)
    temprt.append(temp)
    all.append(humidity,pressure,maxtemp,mintemp) 
    let cityname2=document.querySelector('#city').value;
    var iframe=document.createElement("iframe");
    iframe.style.frameborder="0";
    iframe.style.width="100%";
    iframe.style.height="100%";
    iframe.src=`https://maps.google.com/maps?q=${cityname2}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    gmap_canvas.append(iframe)
    }
