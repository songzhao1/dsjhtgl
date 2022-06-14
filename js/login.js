$(function(){
    $.ajaxPrefilter(function(o){
        o.url='http://www.liulongbin.top:3007'+o.url
        console.log(o.url);
    })



    $('#reguser').submit(function(e){
        e.preventDefault()
        if($('#reguser [type="password"]').eq(0).val()===$('#reguser [type="password"]').eq(1).val()){
            var data={
                username: $('#reguser input').eq(0).val(),
                password:$('#reguser input').eq(1).val()
            }
            regUser(data)
        }
    })
     $('#login1').submit(function(e){
        e.preventDefault()
       
      
            var data={
                username: $('#login1 input').eq(0).val(),
                password:$('#login1 input').eq(1).val()
            }
            console.log(data);
            login(data)
      
    })
    
    
    // 注册
    function regUser(data){
        $.post('/api/reguser',data,function(res){
            console.log(res);
            if(res.status===0){
                console.log('注册成功');
                alert('注册成功')
               
                 $('#login_l').show();
                 $('#login_r').hide();
      
            }else{
                console.log(res.message);
            }
        })
    }
    //登录
    function login(data){
        $.post('/api/login',data,function(res){
            console.log(res);
            if(res.status===0){
                console.log('登录成功');
                localStorage.setItem('Authorization',res.token)
                location.href='./index.html'
            }else{
                console.log(res.massage);
            }
        })
    }
})
