<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect()->route('admin.home');
});

//require_once __DIR__ .'/admin.php';

//Auth::routes();

/*

  GET|HEAD        home ..................................................................... home › HomeController@index
  GET|HEAD        login ..................................................... login › Auth\LoginController@showLoginForm
  POST            login ..................................................................... Auth\LoginController@login
  POST            logout .......................................................... logout › Auth\LoginController@logout
  GET|HEAD        password/confirm ................... password.confirm › Auth\ConfirmPasswordController@showConfirmForm
  POST            password/confirm .............................................. Auth\ConfirmPasswordController@confirm
  POST            password/email ..................... password.email › Auth\ForgotPasswordController@sendResetLinkEmail
  GET|HEAD        password/reset .................. password.request › Auth\ForgotPasswordController@showLinkRequestForm
  POST            password/reset .................................. password.update › Auth\ResetPasswordController@reset
  GET|HEAD        password/reset/{token} ................... password.reset › Auth\ResetPasswordController@showResetForm
  GET|HEAD        register ..................................... register › Auth\RegisterController@showRegistrationForm
  POST            register ............................................................ Auth\RegisterController@register

 */
