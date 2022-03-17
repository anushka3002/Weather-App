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
    for(var i=7;i<=83;i=i+8){
        
        let date1=document.createElement("p");
        date1.innerText="Date: "+data2.list[i].dt_txt;
        // date1.style.color="rgba(224, 224, 226, 0.384)"
        let desc= document.createElement("p")
        desc.innerText=data2.list[i].weather[0].description;
        desc.setAttribute("id","descloud")
        let temp1=document.createElement("p");
        temp1.innerText="Temp: "+data2.list[i].main.temp;
        // temp1.style.color="rgba(224, 224, 226, 0.384)"
        temp1.style.marginBottom="18%"
        temp1.style.marginTop="-10px";
        // temp1.style.color="rgba(224, 224, 226, 0.384);"
        console.log(temp1+"koooo")
        let div1=document.createElement("div");
        div1.setAttribute("id","div1")
        let div2=document.createElement("div")
        div1.append(date1,desc)
        div2.append(temp1);
        document.querySelector("#fivedays").append(div1,div2);
        

    }
    
}



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
    // iframe.style.border="5px solid black";
    iframe.src=`https://maps.google.com/maps?q=${cityname2}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    gmap_canvas.append(iframe)
    }


document.querySelector("#red").onclick=()=>(
    document.querySelector("#body").style.backgroundImage="url(https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-cherry.png)"
)
document.querySelector("#green").onclick=()=>(
    document.querySelector("#body").style.backgroundImage="url(https://images.unsplash.com/photo-1617957743089-7639c938a845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZGllbnQlMjBncmVlbnxlbnwwfHwwfHw%3D&w=1000&q=80)"
)
document.querySelector("#yellow").onclick=()=>(
    document.querySelector("#body").style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFVlJiQmtG-obcDZE0lWpkq2baYSCOoH721VuPz2i7DsvUAqmsHJqV52WofpeH7sg0-A&usqp=CAU)"
)
document.querySelector("#pink").onclick=()=>(
    document.querySelector("#body").style.backgroundImage="url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLjouFx8zOD84NygtLisBCgoKDQ0NDg0NDysZFRkrKy0rLS0rKystKy0tKysrKy0rKysrNysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAAEDBP/EABcQAQEBAQAAAAAAAAAAAAAAAAARAQL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIHA//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A8+clCzCzGXQs0M5KFmNg1RihxsFoRQ42BQihxQWhFDigUIocUChFDigUYyHFAoRQ4oFCKHFAoRQ4oFCKHFAoRQ4oFCKHFArnFDiglc4zeXSKBXLcZHSM3BmuW4O8u24yCV0zG5h5jcxWaMbCzGwWjFDigUI2HFBaEUOKBQihxsChGQ42BQjI6RQK5xsOKBXOKOkUCucUdIoFc4o6RQK5xR0igVzijpGQKEUOKBQjI6RQK5xkdIoJXKM3HWM3BK5byMdtwYJXTMbmHmNzGmKMUONgtCNhxRFoRQ4oFCKOkUCucbDiilCKHFAoRQ4ohQihxQKEUOKBQihxQKEUOKBQihxRShFDiiFc4o6RQK5xQ4oFc4o6RkCucZHWMglcoyOm4yCV0zGwsxsaYoxsKNiLQjYcUUoRQ4oLQjYUbAoRQ4oFCKHFAoRQ4oFCKHFAoRQ4oFCKHFAoRQ4oFCKHFAoRQ4oFc4o6RkChFDigUIyOkZBK5xbjpGQK5wY6xkRKeY2NzCzFYoxsKKBRjYUUFoxQ4oFGMhxQKMUKKBRihRQKMUKKBRihRQKMUKKBRihRQKMUKKBRihRQKMUKKBQihxQKEUOMgUYyHFAoRm4cZBKEGOm4yBTzG5jcxuYjFZGwooLWRQooFGKFGwKEbCigUYoUUCjFCigUYoUUCjFCigUYoUUCjFCigUYoUUCjFCigUYoUUCjGQ4oFCKGyBRjIcUChGQ4yCUNxkPcZApZhRuY3MYrFZGxuY2FKMbCihVoxQo2FKEUOKFKEUOKFKEUOKFKEUOKFKEUOKFKEUOKFKEUOKFKEUOKFKEUOKFKEUOKFKEUOKFKEUOMhShFDjIUoRkdIyFSue4zcdNwYVKeY3MbmFmM1isihRsKtGNhRQpRihRsKUIocUKtCKHFClCNhRQpQUOKFKMUKKFKEbCihSg2FFClGMhxQpRjIcUKUIocUKUYyHFCpQihRQpRjIcZClCMhxkKUNGOm4MKlPCzGYWMVirMa3MbCrWRQo2FKMUKKFKMUOKFKMUKKFKMUKKFKMUKKFKMUKKFKMUKKFKMUKKFKMRRQpRihRQpRjIcUKUIocZClGMhxQpQjIcUKVzZD3GaVKG4Ono7hSlh5g4eYxXnVmFizGlWqNWY2FKyKEoVaxQooUoxQooUoxsbGwpQihxQpQihxQpRihRQpQjYUUKUIocUKUIocZClGKFFClGKFFClCKFFClBkNhUoRm4ejpShonobhUpYeMTDOHjcSFJqSDUko1JIqiiRRNYlGxRiQbFGIo1MQNiYgbExAokgUSSiYkgmRqVBZqQDrNYgHR1IZf//Z)"
)
document.querySelector("#orange").onclick=()=>(
    document.querySelector("#body").style.backgroundImage="url(https://media.istockphoto.com/photos/abstract-orange-background-picture-id679762938?b=1&k=20&m=679762938&s=170667a&w=0&h=CgYJFDvwjqb5ltxLQwmtjuhK2vh7BxIHEENhmxbk6X0=)"
)
document.querySelector("#purple").onclick=()=>(
    document.querySelector("#body").style.backgroundImage="url(https://media.istockphoto.com/photos/abstract-soft-purple-background-picture-id937025360?b=1&k=20&m=937025360&s=170667a&w=0&h=f2aY4ajPnkqC0d7TD1VsNURiROX5RUaUVBGIuSqZzzg=)"
)

    