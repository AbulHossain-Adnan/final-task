<x-header/>
<section class="loginForm">
    <div class="loginForm__flex">
        <div class="loginForm__left">
            <div class="loginForm__left__inner desktop-center">
                <div class="loginForm__header">
                    <h2 class="loginForm__header__title">Welcome Back</h2>
                </div>
                 <div class="mt-3">
                    <x-flash-msg/>
                    <x-error/>
                </div>
                <div class="loginForm__wrapper mt-4">
                    <x-error/>
                    <div id="msg-wrapper"></div>
                    <!-- Form -->
                    <form action="#" method="post" class="custom_form loginForm">
                        @csrf
                        <div class="single_input">
                            <label class="label_title">Email</label>
                            <div class="include_icon left__padding">
                                <input class="form--control radius-5"  name="email" placeholder="Enter your email or user name address">
                                <div class="icon"><span class="material-symbols-outlined">mail</span></div>
                            </div>
                        </div>
                        <div class="single_input">
                            <label class="label_title">Password</label>
                            <div class="include_icon left__padding right__padding">
                                <input class="form--control radius-5" type="password"  name="password" placeholder="Enter your password">
                                <div class="icon"><span class="material-symbols-outlined">lock</span></div>
                                <div class="toggle_password">
                                    <i class="fa fa-eye-slash"></i>
                                </div>
                            </div>
                        </div>
                        <div class="loginForm__wrapper__remember single_input">
                            <div class="dashboard_checkBox">
                                <input class="dashboard_checkBox__input" name="remember" id="remember" type="checkbox">
                                <label class="dashboard_checkBox__label" for="remember">Remember me</label>
                            </div>
                            <!-- forgetPassword -->
                            <div class="forgotPassword">
                                Don't have a account <a href="{{route('admin.register')}}" class="forgotPass"> Register here</a>
                            </div>
                        </div>
                        <div class="btn_wrapper single_input">
                            <button type="button" id="login_submit_btn" class="cmn_btn w-100 radius-5">Sign In<b></b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>

    var loginFormButton =  document.getElementById('login_submit_btn');
    loginFormButton.addEventListener('click',function (event) {
        event.preventDefault();

        var msgWrap = document.getElementById('msg-wrapper');
        msgWrap.innerHTML= '';

        axios({
            url : "{{route('admin.login')}}",
            method : 'post',
            responseType: 'json',
            data : {
               // _token: document.querySelector('input[name="_token"]').value,
                email: document.querySelector('input[name="email"]').value,
                password: document.querySelector('input[name="password"]').value,
                remember: document.querySelector('input[name="remember"]').value,
            }
        }).then(function(res){
            loginFormButton.innerText = "{{__('Login Success')}}"
            loginFormButton.innerText = "{{__('Redirecting..')}}"
            window.location.reload();
        }).catch(function (error){
            var responseData = error.response.data.errors;
            if(responseData === undefined){
                msgWrap.innerHTML = '<div class="alert alert-danger">'+error.response?.data?.message+'</div>';
            }
            var child = '<ul class="alert alert-danger">';
            Object.entries(responseData).forEach(function (value){
                child += '<li>'+value[1] ?? value+'</li>';
            });
            child += '</ul>';

            msgWrap.innerHTML = child;
        });
    })

</script>

<x-footer/>

