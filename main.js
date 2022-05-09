// body background
document.body.style.cssText = "background: #e9e9e9; font-family: 'Roboto', sans-serif; margin: 0; padding: 0; list-style: none";

// header structure
function myHeader(){
    
    let header = document.createElement("header");
    let logo = document.createElement("div");
    let logo_name = document.createTextNode("Abdulrahman");
    let nav = document.createElement("nav");

    header.style.cssText = "box-sizing:border-box ; display: flex; align-items: center ; justify-content: space-between ; width: 100%; padding: 20px 30px; background: #FFF; margin-bottom: 30px";
    header.className = "headerClass";
    header.appendChild(logo);
    logo.className = "logo";
    logo.style.cssText = "color: rgb(1, 160, 145); font-weight: 700; font-size: 20px;"
    logo.appendChild(logo_name);
    header.appendChild(nav);
    nav.style.cssText = "display: flex; "

    for(let i = 0; i < 4 ; i++){
        let list = document.createElement("li");
        let anchor = document.createElement("a");
        let anchor_text1 = document.createTextNode("Home");
        let anchor_text2 = document.createTextNode("About");
        let anchor_text3 = document.createTextNode("Service");
        let anchor_text4 = document.createTextNode("Contact");
        anchor.href = "#";
        anchor.className = i;
        if(anchor.className == "0"){
            anchor.appendChild(anchor_text1)
        }
        if(anchor.className == "1"){
            anchor.appendChild(anchor_text2)
        }
        if(anchor.className == "2"){
            anchor.appendChild(anchor_text3)
        }
        if(anchor.className == "3"){
            anchor.appendChild(anchor_text4)
        }
        list.style.cssText = "margin: 0px 10px";
        anchor.style.cssText = "color: #000; text-decoration: none; font-size: 15px"
        list.appendChild(anchor);
        nav.appendChild(list);
    }

    document.body.prepend(header)
}
myHeader();

// ......................................................


// content 

function myContent(){
    let container = document.createElement("div");
    container.className = "container";
    container.style.cssText = "display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; width: 95%; margin: auto";

    for(let i = 1; i <= 15; i++){
    
        let sections = document.createElement("div");
        sections.className = "devision";
        sections.style.cssText = "width: 32%; background: #FFF; padding: 50px 0px;text-align: center; margin-bottom: 13px";
        let numbers = document.createElement("h2");
        let contentTag = document.createElement("div");
        let text = document.createTextNode("project");
        contentTag.appendChild(text)
        contentTag.style.cssText = "font-size: 16px; color: #ccc;";
        numbers.style.cssText = "margin-bottom: 5px"
        numbers.innerHTML = i;
        sections.appendChild(numbers);
        sections.appendChild(contentTag)
        container.appendChild(sections);
    }

    let afterHead = document.querySelector(".headerClass");

    afterHead.after(container);
}
myContent()

// .............................................

// last section (footer)


function myFooter(){
    let final = document.createElement("div");
    final.style.cssText = "background: #01a091; width: 100%; padding: 20px 0px; text-align: center;color: #FFF; margin-top: 20px"
    let copyText = document.createTextNode(`Copyright with Abdulrahman Fawzy 2022`);
    final.appendChild(copyText)
    let contain = document.querySelector(".container");
    contain.after(final)
}
myFooter();
















