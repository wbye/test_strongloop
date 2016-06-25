define([],function(){
	var Storage ={};

	Storage.set = function(key,value){
		try{
			localStorage.setItem(key,JSON.stringify(value));
		}catch(e){
			//ignore error
		}
	};

	Storage.get = function(key){
		try{
			var value = localStorage.getItem(key);

			if(value!==null){
				value = JSON.parse(value);
			}
			return value;
		}catch(e){	
			return null;
		}

	};

	Storage.clear = function(){

	};

	return Storage;
});