
function change_bg()
{
    let color = document.body.style.backgroundColor;
    if(color == "white" || color == "")
    {
        document.body.style.backgroundColor = "green";
    }
    else if(color == "green")
    {
        document.body.style.backgroundColor = "orange";
    }
    else if(color == "orange")
    {
        document.body.style.backgroundColor = "blue";
    }
    else if(color == "blue")
    {
        document.body.style.backgroundColor = "red";
    }
    else
    {
        document.body.style.backgroundColor = "white";
    }
    
}
function good_vibes()
{
    let vibes = document.getElementById("vibes").style.display;
    if(vibes == "" || vibes == "none")
    {
        document.getElementById("vibes").style.display = "block";
    }
    else
    {
        document.getElementById("vibes").style.display = "none";
    }
}
function time()
{
    let date = Date();
    document.getElementById("time").innerHTML = date;
    let time_display = document.getElementById("time").style.display;
    if(time_display == "none" || time_display == "")
    {
        document.getElementById("time").style.display = "block"
    }
    else
    {
        document.getElementById("time").style.display = "none"
    }
}
function change_picture()
{
    let img = document.getElementById("image").src;
    if(img.endsWith("image.png"))
    {
        document.getElementById("image").src = "https://www.supercars.net/blog/wp-content/uploads/2022/02/Ferrari-SF90-Stradale-1.jpg";
    }
    else if(img.endsWith("image2.jpg")) 
    {
        document.getElementById("image").src = "https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/pbpwzpixe4iuwgmbbzm4";
    }
} 
function hide_picture()
{
    document.getElementById("image").style.display = "none";
}
function show_picture()
{
    document.getElementById("image").style.display = "block";
}
function header()
{
    document.getElementById("header").style.backgroundColor = "gray";
    document.getElementById("header").style.alignItems = "center";
    document.getElementById("vibes").style.display = "block";
    document.getElementById("vibes").style.color = "white";
    document.getElementById("time").style.display = "block";
    document.getElementById("time").innerHTML = Date();
    document.getElementById("time").style.color = "white";
    document.getElementById("image").style.border = "1vw solid green";
}

function remove_header()
{
    document.getElementById("header").style.display = "none";
    document.getElementById("vibes").style.display = "none";
    document.getElementById("time").style.display = "none";
    document.getElementById("image").style.display = "none";
}

function show_header()
{
    document.getElementById("header").style.display = "flex";
    document.getElementById("vibes").style.display = "block";
    document.getElementById("time").style.display = "block";
    document.getElementById("image").style.display = "block";
    document.getElementById("thanks").innerHTML = "Thank you for visiting my website"
}
