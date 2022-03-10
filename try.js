var gmap_canvas=document.querySelector(".gmap_canvas")
     var cityname=document.querySelector("#cityname") 
     var temprt=document.querySelector("#temp") 
     var all=document.querySelector("#all")
     var body=document.querySelector("body") 
    async function getWeather(){
        gmap_canvas.innerHTML=""
        cityname.innerHTML=""
        temprt.innerHTML=""
        all.innerHTML=""
        try{
            let city=document.querySelector('#city').value;
            // let response=await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7bd8afb5b725f099b164281e741a4b0&units=metric`)
            let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7bd8afb5b725f099b164281e741a4b0&units=metric`)
    
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
            // let response2=await fetch(` https://api.openweathermap.org/data/2.5/forecast?q=${city2}&appid=b7bd8afb5b725f099b164281e741a4b0&units=metric`)
            let response2= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=b7bd8afb5b725f099b164281e741a4b0&units=metric`)
            let data2=await response2.json()
            var lat = data2.coord.lat;
            var lon = data2.coord.lon;
            getDatafor7days(lat, lon);
            showfivedays(data2)
            console.log("data2:",data2);
        }
        catch(err){
            console.log("err:",err);
       }
};  



const getDatafor7days = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=b7bd8afb5b725f099b164281e741a4b0`;
    try {
      let res = await fetch(url);
      let data3 = await res.json();
      console.log("data3", data3);
    } catch (error) {
      console.log(error);
    }
  };





var arr=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBityIZHfD7qLWbgLAeEnqptTIMNyIDPcZw&usqp=CAU",
    "https://thumbs.dreamstime.com/b/rain-storm-weather-icon-isolated-white-background-66246968.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGVoz3GAoAXPSC14V16P6lkC81Ivzgy-zliDVtcvkpMdxrcnACaXPS9RLQSZ5m2Uk-m0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVK-IQabT6G4MBSBGoBHnjwE1Kgqj6zHIppg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACzVXaGYN7gGzwEza5ydHuAd8w0opq28gmSu0I9Pu3QupHq1Y87sMIHp5NgyugFdd-V0&usqp=CAU"
]

// function showfivedays(data2){
//     document.querySelector("#fivedays").innerHTML=""
//     var count=0;
//     for(var i=8;i<=48;i=i+8){
        
//         let date1=document.createElement("p");
//         date1.innerText="Date: "+data2.list[i].dt_txt;
//         // date1.style.color="rgba(224, 224, 226, 0.384)"
//         let desc= document.createElement("p")
//         desc.innerText=data2.list[i].weather[0].description;
//         desc.setAttribute("id","descloud")
//         let temp1=document.createElement("p");
//         temp1.innerText="Temp: "+data2.list[i].main.temp;
//         // temp1.style.color="rgba(224, 224, 226, 0.384)"
//         temp1.style.marginBottom="18%"
//         temp1.style.marginTop="-10px";
//         // temp1.style.color="rgba(224, 224, 226, 0.384);"
//         console.log(temp1+"koooo")
//         let div1=document.createElement("div");
//         div1.setAttribute("id","div1")
//         let div2=document.createElement("div")
//         div1.append(date1,desc)
//         div2.append(temp1);
//         document.querySelector("#fivedays").append(div1,div2);
        

//     }
    
// }


function showfivedays(data3){
    document.querySelector("#fivedays").innerHTML=""
    var count=0;
    // for(var i=0;i<8;i=i++){
        
        let date1=document.createElement("p");
        date1.innerText="Date: "+data3.daily[0].temp.day;
        // date1.style.color="rgba(224, 224, 226, 0.384)"
        // let desc= document.createElement("p")
        // desc.innerText=data3.list[i].weather[0].description;
        // desc.setAttribute("id","descloud")
        // let temp1=document.createElement("p");
        // temp1.innerText="Temp: "+data3.list[i].main.temp;
        // // temp1.style.color="rgba(224, 224, 226, 0.384)"
        // temp1.style.marginBottom="18%"
        // temp1.style.marginTop="-10px";
        // // temp1.style.color="rgba(224, 224, 226, 0.384);"
        // console.log(temp1+"koooo")
        // let div1=document.createElement("div");
        // div1.setAttribute("id","div1")
        // let div2=document.createElement("div")
        // div1.append(date1,desc)
        // div2.append(temp1);
        document.querySelector("#fivedays").append(date1);
        console.log("hello")

    }
    
// }




// const getData = async () => {
//     let city = document.getElementById("city").value; //input from user.
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=b7bd8afb5b725f099b164281e741a4b0&units=metric`;
//     try {
//       let res = await fetch(url);
//       let data = await res.json();
//       var lat = data.coord.lat;
//       var lon = data.coord.lon;
//       getDatafor7days(lat, lon);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getData()

//   const getDatafor7days = async (lat, lon) => {
//     let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=b7bd8afb5b725f099b164281e741a4b0`;
//     try {
//       let res = await fetch(url);
//       let data = await res.json();
//       console.log("data", data);
//     } catch (error) {
//       console.log(error);
//     }
//   };



function showWeather(weather){
    let name=document.createElement("h2")
    name.innerText=weather.name;
    let temp=document.createElement("h2");
    temp.innerText=`${weather.main.temp}°`;
    // if(weather.main.temp<20){
    //     // body.style.repeat="no repeat"
    //     body.style.backgroundImage="url(http://ayay.co.uk/backgrounds/weather/lightning/blue-lightning-clouds.jpg)"
    // }
    // else{
    //     temp.style.color="yellow"
    //     body.style.color="black"
    //     body.style.backgroundImage="url(https://media.istockphoto.com/photos/desert-sand-sunset-picture-id184595458?k=20&m=184595458&s=612x612&w=0&h=dj5qLOgek_vjBv6sow115fE_ES73C4uayKt7wOMDmvU=)"
    // }
    let pressure=document.createElement("p"); 
    pressure.innerText=`Pressure: ${weather.main.pressure}°`;
    pressure.setAttribute("id","pressurejs")
    let humidity=document.createElement("p");
    humidity.innerText=`Humidity: ${weather.main.humidity}°`;
    humidity.setAttribute("id","humidityjs")
    let maxtemp=document.createElement("p")
    maxtemp.innerText=`Max: ${weather.main.temp_max}°`;
    maxtemp.setAttribute("id","maxjs")
    let mintemp=document.createElement("p")
    mintemp.innerText=`Min: ${weather.main.temp_min}°`;
    mintemp.setAttribute("id","minjs")
    
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
