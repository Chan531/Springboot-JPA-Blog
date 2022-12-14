let index = {
    init: function() {
        $("#btn-save").on("click", ()=>{ // function(){}, ()=>{} this를 바인딩하기 위해서!!
            this.save();
        });

        $("#btn-login").on("click", ()=>{ // function(){}, ()=>{} this를 바인딩하기 위해서!!
            this.login();
        });
    },

    save: function(){
        // alert('user의 save 함수 호출됨');
        let data = {
            username: $("#username").val(),
            password: $("#password").val(),
            email: $("#email").val()
        };

        // console.log(data);

        // ajax 호출 시 default가 비동기 호출
        // ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청!!!
        // ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환. (업데이트 된 듯?)
        $.ajax({
            // 회원가입 수행 요청
            type:"POST",
            url:"/api/user",
            data:JSON.stringify(data), // http body 데이터
            contentType:"application/json; charset=utf-8", // body 데이터가 어떤 타입인지 (MIME)
            dataType:"json" // 요청을 서버로 해서 응답이 왔을 때 기본적으로 (거의) 모든 것이 문자열인데 생긴게 JSON이라면 => javascript 오브젝트로 변경 
        }).done(function(resp){
            // 성공 시
            alert("회원가입이 완료되었습니다.");
            // console.log(resp);
            location.href = "/";
        }).fail(function(error){
            // 실패 시
            alert(JOSN.stringify(error));
        }); 
    },

    login: function(){
        // alert('user의 save 함수 호출됨');
        let data = {
            username: $("#username").val(),
            password: $("#password").val()
        };


        $.ajax({
            // 회원가입 수행 요청
            type:"POST",
            url:"/api/user/login",
            data:JSON.stringify(data), // http body 데이터
            contentType:"application/json; charset=utf-8", // body 데이터가 어떤 타입인지 (MIME)
            dataType:"json" // 요청을 서버로 해서 응답이 왔을 때 기본적으로 (거의) 모든 것이 문자열인데 생긴게 JSON이라면 => javascript 오브젝트로 변경 
        }).done(function(resp){
            // 성공 시
            alert("로그인이 완료되었습니다.");
            location.href = "/";
        }).fail(function(error){
            // 실패 시
            alert(JOSN.stringify(error));
        }); 
    }
}

index.init();