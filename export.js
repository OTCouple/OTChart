// Root path for the images
var DIR = "img/";

// 1 - delete everything below these comments
// 2 - paste the new generated code from the spreadsheet export

var nodes = [
{ id: "0", label:"Alex", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "AlexMarquez.jpg" }, 
{ id: "1", label:"Alvaro", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "AlvaroMayo.jpg" },
{ id: "2", label:"Denna", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Denna.jpg" },
{ id: "3", label:"Bea", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Bea.jpg" },
{ id: "4", label:"Paul", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "PaulThin.jpg" },
{ id: "5", label:"Omar", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Omar.jpg" },
{ id: "6", label:"Chiara", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Chiara.jpg" },
{ id: "7", label:"Juanjo", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "JuanjoBona.jpg" },
{ id: "8", label:"Salma", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Salma.jpg" },
{ id: "9", label:"Lucas", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Lucas.jpg" },
{ id: "10", label:"Cris", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Cris.jpg" },
{ id: "11", label:"Martin", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "MartinUrrutia.jpg" },
{ id: "12", label:"Naiara", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Naiara.jpg" },
{ id: "13", label:"Ruslana", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Ruslana.jpg" },
{ id: "14", label:"Suzette", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "Suzette.jpg" },
{ id: "15", label:"Violeta", group: "OT2023", shape: "circularImage", value: 4, image: DIR + "VioletaHodar.jpg" },
{ id: "16", label:"?", group: "Fuera", shape: "circularImage", value: 4, image: DIR + "Mujer.jpg" }, 
{ id: "17", label:"?", group: "Fuera", shape: "circularImage", value: 4, image: DIR + "Mujer.jpg" },
{ id: "18", label:"?", group: "Fuera", shape: "circularImage", value: 4, image: DIR + "Mujer.jpg" },  
{ id: "20", label:"?", group: "Fuera", shape: "circularImage", value: 4, image: DIR + "Mujer.jpg" }];

var edges = [
{from: "0", to: "2",  label: "💖", arrows: { to: { enabled: true } }, color: "ffcc00" }, 
{from: "0", to: "20", label: "💑", color: "663399" },
{from: "1", to:"11",  label: "💖", arrows: { to: { enabled: true } }, color: "ffcc00" },
{from: "1", to:"4",  label: "🔥", arrows: { to: { enabled: true } }, color: "ff9900" },
{from: "2", to:"0", label: "❤️", arrows: { to: { enabled: true } }, color: "ff0000" },
{from: "3", to:"17", label: "💑", color: "663399" }, 
{from: "4", to:"6",  label: "💖", arrows: { to: { enabled: true } }, color: "ffcc00" },
{from: "5", to:"13", label: "❤️", arrows: { to: { enabled: true } }, color: "ff0000" },
{from: "6", to:"15", label: "❤️", arrows: { to: { enabled: true } }, color: "ff0000" },
{from: "7", to:"11",  label: "❤️", arrows: { to: { enabled: true } }, color: "ff0000" },
{ from: "8", to:"15",  label: "💖", arrows: { to: { enabled: true } }, color: "ffcc00" },
{ from: "9", to:"16", label: "💑", color: "663399" },
{ from: "10", to:"6", label: "❤️", arrows: { to: { enabled: true } }, color: "ff0000" },
{ from: "10", to:"12", label: "🔥", arrows: { to: { enabled: true } }, color: "ff9900" },
{ from: "11", to:"7",  label: "❤️", arrows: { to: { enabled: true } }, color: "ff0000" }, 
{ from: "11", to:"1",  label: "💖", arrows: { to: { enabled: true } }, color: "ffcc00" },
{ from: "13", to:"5", label: "❤️", arrows: { to: { enabled: true } }, color: "ff0000" },
{ from: "14", to:"0",  label: "💖", arrows: { to: { enabled: true } }, color: "ffcc00" },
{ from: "15", to:"18", label: "💑", color: "663399" }];