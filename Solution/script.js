$(document).ready(function(){
	
	
		$.validator.addMethod("name1", function(value, element) {
			return !/^[0-9\!\@\#\$\%\^\&\*\(\)\"\№\;\:\?\]\[\}\{]*$/i.test(value);
		},
			'<div class="info">Только буковки.</div>')
	

		$.validator.addMethod("phone", function(value, element) {
			return !/^[a-zа-я\!\@\#\$\%\^\&\*\(\)\"\№\;\:\?\]\[\}\{]*$/i.test(value);
		},
			'<div class="info">Только цифры.</div>')


			
			
		
			
			

    $("#forma").validate({
			validClass: "success",
       rules:{
		
            name1 :{
                required: true,
                minlength: 4,
                maxlength: 16,
            },
			phone :{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            
       },

       messages:{

            name1 :{
                required: '<div class="info">Это поле обязательно.</div>',
                minlength: '<div class="info">Минимум 4 символа.</div>',
                maxlength: '<div class="info">Максимум 16символов.</div>',
				
			},
			phone :{
                required: '<div class="info1">Это поле обязательно.</div>',
                minlength: '<div class="info1">Минимум 2 символа.</div>',
                maxlength: '<div class="info1">Максимум 16символов.</div>',
				
			},
       }
	   
	   
	   
		
	   

    });
	
		
		$('#confirm-order').click(function () {
        if(($("#forma").valid())){
            alert('спасибо что зарегался пупсик');
           
        } else {
            alert('а ты не зарегался тебе не спасибо')
        }      
    });
	
		
		
});


	