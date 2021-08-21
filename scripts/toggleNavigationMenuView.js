function NMview () {
    let x = document.getElementById("navbar");
    let a = document.getElementById("main-doc");    
    let b = document.getElementById("welcomeSection");    
    let c = document.getElementById("HideMenuButton");
    console.log(x)
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.opacity = "1";
        a.style.width = "80%";
        a.style.marginLeft = "16.8rem";
        b.style.marginLeft = "16rem";
        b.style.width = "80%";
        c.setAttribute("value", "Hide Menu");        
    } else {
        x.style.visibility = "hidden";         
        x.style.opacity = "0";   
        a.style.width = "100%";
        a.style.marginLeft = "0";
        b.style.marginLeft = "-1rem";
        b.style.width = "100%";
        c.setAttribute("value", "Show Menu");        
    }
}

// function NMview () {
//     let x = document.getElementById("navbar");
//     let a = document.getElementById("main-doc");    
//     let b = document.getElementById("welcomeSection");    
//     let c = document.getElementById("HideMenuButton");
//     console.log(x)
//     if (x.style.visibility === "hidden") {
//         x.style.visibility = "visible";
//         a.style.width = "80%";
//         a.style.marginLeft = "16.8rem";
//         b.style.marginLeft = "16rem";
//         b.style.width = "80%";
//         c.setAttribute("value", "Hide Menu");
//     } else {
//         x.style.visibility = "hidden";         
//         a.style.width = "100%";
//         a.style.marginLeft = "0";
//         b.style.marginLeft = "-1rem";
//         b.style.width = "100%";
//         c.setAttribute("value", "Show Menu");        
//     }
// }

