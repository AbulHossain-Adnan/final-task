<x-header/>
    <section class="loginForm">
        <div class="loginForm__flex">
            <div class="loginForm__left">
                <div class="loginForm__left__inner desktop-center">
                    <div class="loginForm__header">
                        <h2 class="loginForm__header__title">Welcome Back</h2>
                    </div>
                    <div class="loginForm__wrapper mt-4">

                        <x-error/>
                        <!-- Form -->
                        <form action="{{route('login')}}" method="post" class="custom_form loginForm">
                            @csrf
                            <div class="single_input">
                                <label class="label_title">Email</label>
                                <div class="include_icon left__padding">
                                    <input class="form--control radius-5" type="email" name="email" placeholder="Enter your email address">
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
                                    <a href="#0" class="forgotPass">Forgot passwords?</a>
                                </div>
                            </div>
                            <div class="btn_wrapper single_input">
                                <button type="submit" class="cmn_btn w-100 radius-5">Sign In<b></b></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </section>
<x-footer/>
