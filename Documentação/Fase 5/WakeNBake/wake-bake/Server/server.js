var express = require('express');
var app = express();
var port = process.env.PORT || 9999;
var server = app.listen(port);

var socket = require('socket.io');
var io = socket(server);

const fs = require('fs');

//Variaveis
var selectedItems = []; //breads
const bakeriesPath = "../src/Data/Bakery.json";
var bakeriesRaw = fs.readFileSync(bakeriesPath);
var bakeriesJSON = JSON.parse(bakeriesRaw);
let userPath = "../src/Data/User.json";
let userRaw = fs.readFileSync(userPath);
let userJSON = JSON.parse(userRaw);
let selectedAddress = userJSON.user[0].address[0];
let selectedBakery = {"location":[38.66579,-9.210071],"option":{"title":"Padaria Pascoa","color":"red"},"name":"Padaria Pascoa","index":2}; //bakery
let transactionsPath = "../src/Data/transactions.json";
let transactionsRaw = fs.readFileSync(transactionsPath);
let transactionsJSON = JSON.parse(transactionsRaw);
let selectedDate = []; //date
let coords = [38.66176, -9.1999];


console.log("Server Started at : localhost:"+port);

//Sockets
io.sockets.on('connection', newConnection);

function newConnection(socket){

    //Requests
    socket.on('writeJson', updateBakeryColor);
    socket.on('getBakeries',getBakeries);
    socket.on('updateSelectedItems',updateSelectedItems);
    socket.on('getSelectedItems',getSelectedItems);
    socket.on('getAdress',getAdress);
    socket.on('updateAddress',updateAddress);
    socket.on('updateBalance',updateBalance);
    socket.on('getBalance',getBalance);
    socket.on('getSelectedItems',getSelectedItems)
    socket.on("getTransactions", getTransactions);
    socket.on("updateDate", updateDate);
    socket.on("getSelectedDate", getSelectedDate);
    socket.on("getAll", getAll);
    socket.on("updateTransanctions", updateTransanctions);
    socket.on("afterCheckout", afterCheckout);
    socket.on("updateActiveTransaction", updateActiveTransaction);
    socket.on("getUserInfo",sendUserInfo);
    socket.on("updateUser",updateUserInfo);
    socket.on("updatePlan",updatePlan);
    socket.on("getPlan",getPlan);
    socket.on("getPurchase",getPurchase);
    socket.on("getCoords", getCoords);
    socket.on("updateCoords", updateCoords);
    socket.on("changeBalance", changeBalance);

    //Responses
    function updateBakeryColor(index){
      let anySelected = false;
      for(let i in bakeriesJSON.bakeries){
        if(parseInt(i) === parseInt(index)){
          anySelected=true;
          bakeriesJSON.areas[i].option.fillColor ="rgba(0,255,0,0.2)";
          selectedBakery = bakeriesJSON.bakeries[i];
        }else{
          bakeriesJSON.areas[i].option.fillColor ="rgba(255,0,0,0.2)";
        }
      }
      fs.writeFileSync(bakeriesPath,JSON.stringify(bakeriesJSON));
      getBakeries(anySelected);
    }

    function getBakeries(anySelected){
      socket.emit("bakeries", bakeriesJSON);
      if(anySelected)
      socket.emit("changeBakeryTab", selectedBakery);
      tempGetAll();
    }

    function updateSelectedItems(data){
        selectedItems = data;
        tempGetAll();
    }

    function getSelectedItems(){
       socket.emit("getSelectedItems",selectedItems);
    }

     function getAdress(){
       socket.emit("getAdress",{"selectedAddress":selectedAddress,"adresses":userJSON.user[0].address});
       getCoords();
      } 

     

    function getTransactions(){
       socket.emit("getTransactions", transactionsJSON.transactions);
    }

     function updateAddress(data){
       let contains = false;
       selectedAddress = data.selectedAddress;
       if(data.flag){
         for(let i in userJSON.user[0].address)
            if(data.selectedAddress.trim() === userJSON.user[0].address[i].trim())
              contains = true;
        if(!contains)
          userJSON.user[0].address.push(data.selectedAddress);
       }
        getAdress();
       tempGetAll();
     }
    function updateDate(data){
       selectedDate = data;
       getSelectedDate();
       tempGetAll();
    }

     function updateBalance(val){
      userJSON.user[0].balance += Math.round(parseFloat(val)*100)/100;
      getBalance();
     }

     function changeBalance(val){
      userJSON.user[0].balance = Math.round(parseFloat(val)*100)/100;
      getBalance();
     }

     function getBalance(){
       socket.emit("getBalance",userJSON.user[0].balance);
     }

    function getSelectedDate(){
       socket.emit("getSelectedDate", selectedDate);
    }

    function getAll(){
      const transactions = {"selectedItems":selectedItems, "selectedBakery":selectedBakery, "selectedDate":selectedDate, "selectedAddress":selectedAddress,"addressCoord":coords};
      socket.emit("getAll", transactions);
       updateTransanctions(transactions);
       afterCheckout();

    }

    function getPurchase(){
      getBakeries(true);
      getSelectedItems();
      getSelectedDate();
      getAdress();
    }

    function updateTransanctions(data){
      transactionsJSON.transactions.splice( 0, 0, data );
      getTransactions();

    }

    function updateActiveTransaction(data){
      selectedItems = data.selectedItems;
      selectedBakery = data.selectedBakery;
      selectedAddress = data.selectedAddress;
      selectedDate = data.selectedDate;
      for(let i in bakeriesJSON.bakeries){
        if(bakeriesJSON.bakeries[i].name === selectedBakery.name){
          updateBakeryColor(i);
          break;
        }
      }
      //getTransactions();
    }

    function afterCheckout(){
      selectedItems=[];
      selectedBakery={"name":"Padaria Pascoa","index":2};
      selectedAddress="";
      selectedDate=[];

      getBakeries(true);
      getSelectedItems();
      getSelectedDate();
      getAdress();
    }

    function sendUserInfo(){
      socket.emit("getUserInfo",userJSON.user[0]);
    }

    function updateUserInfo(data){
      userJSON.user[0].name = data.name;
      userJSON.user[0].address.push(data.address);
      userJSON.user[0].phone = data.phone;
    }

    function updatePlan(data){
      userJSON.user[0].plan = data;
    }

    function getPlan(){
      socket.emit("getPlan",userJSON.user[0].plan);
    }

    tempGetAll= function(){
      const transactions = {"selectedItems":selectedItems, "selectedBakery":selectedBakery, "selectedDate":selectedDate, "selectedAddress":selectedAddress,"addressCoord":coords};
       socket.emit("getAll", transactions);
    }

    function getCoords(){
        socket.emit("getCoords",coords);
    }

    function updateCoords(data){
        coords = data;
        getCoords();
    }
  }