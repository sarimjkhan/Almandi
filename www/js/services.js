angular.module('starter.services', [])
.service('LoginService', function(){

    this.tryLogin = function(username,password){
        dbUserName = "sarim",
        dbMasterPassword = "hello";

        if(username == dbUserName && password == dbMasterPassword){
            window.localStorage.setItem("username", username);
            window.localStorage.setItem("isLoggedIn", true);
        }
    };

    this.isLoggedIn = function(){
        let isLoggedIn = window.localStorage.getItem("isLoggedIn");
        console.log("isLoggedIn from service: " , isLoggedIn);
        if(isLoggedIn){
            return true;
        } else {
            return false;
        }
    };

    this.logout = function(){
        if(window.localStorage.getItem("username") != undefined){
            window.localStorage.removeItem("username");
            window.localStorage.removeItem("isLoggedIn");
        }
    }
})
.service('DBService', function(){
    this.addPlatform = function(platformDetail){
        let id = parseInt(Math.random() * 891723);

        let platform = {
            id: id,
            type: "platform",
            name: platformDetail.name,
            password: platformDetail.password
        };

        let platformJSON = JSON.stringify(platform);
        window.localStorage.setItem("plat"+id, platformJSON);
    };

    this.getPlatforms = function(){
        let platforms = [];
        for(let i=0; i< window.localStorage.length; i++){
            let key = window.localStorage.key(i);
            if(key.indexOf("plat") >=0){
                platforms.push(JSON.parse(window.localStorage.getItem(key)));
            }
        }

        return platforms;
    };

    this.removePlatform = function(id){
        if(window.localStorage.getItem("plat"+id) != undefined){
            window.localStorage.removeItem("plat"+id);
            return true;
        }
    }
})
.service('CategoriesService', function(){
    this.getCategoriesAndProducts = function(){
        let categories = [];
        let product = {};

        categories[0] = {};
        categories[1] = {};
        categories[2] = {};

        categories[0].name = "Chicken";
        categories[0].numberOfDishes = 6;
        categories[0].products = [];

        categories[1].name = "Meat";
        categories[1].numberOfDishes = 12;
        categories[1].products = [];

        categories[2].name = "Breakfast";
        categories[2].numberOfDishes = 18;
        categories[2].products = [];

        //product.name = "Mandi";
        //product.price = "10aed";
        categories[0].products.push({name: "Mandi", price: "10Aed", imgurl:"img/prod1.png"});
        //product.name = "Mazbi";
        //product.price = "10aed";
        categories[0].products.push({name: "Mazbi", price: "10Aed", imgurl:"img/prod3.png"});
        categories[0].products.push({name: "Mazbi", price: "10Aed", imgurl:"img/prod2.png"});
        categories[0].products.push({name: "Mazbi", price: "10Aed", imgurl:"img/prod1.png"});
        categories[0].products.push({name: "Mazbi", price: "10Aed", imgurl:"img/prod3.png"});


        categories[1].products.push({name: "Mandi", price: "10Aed", imgurl:"img/prod3.png"});
        categories[1].products.push({name: "Haneez", price: "10Aed", imgurl:"img/prod1.png"});

        categories[2].products.push({name: "Chicken Sandwich", price: "10Aed", imgurl:"img/prod1.png"});
        categories[2].products.push({name: "Egg Sandwich", price: "10Aed", imgurl:"img/prod2.png"});

        return categories;
    }
})
.service('CartService', function(){
    this.getAddedProducts = function(){
        let numberOfAddedProducts = 5;
        let products = [];

        products.push({name: "Meat Mandi",quantity: 1, price: 40, size: "4X10 Sar", imgurl:"img/prod3.png" });
        products.push({name: "Chicken Mandi",quantity: 1, price: 40, size: "4X10 Sar" , imgurl:"img/prod2.png"});
        products.push({name: "Chicken Sandwich",quantity: 1, price: 40, size: "4X10 Sar" , imgurl:"img/prod1.png"});
        products.push({name: "Juice",quantity: 1, price: 40, size: "4X10 Sar" , imgurl:"img/prod3.png"});

        return products;
    }
});