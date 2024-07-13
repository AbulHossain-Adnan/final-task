<?php

/*
 * All admin panel routes will be there
 * */

use App\Http\Middleware\IsAuthorized;
use App\Http\Middleware\ThrottleLoginAttempts;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Admin\Auth\AdminAuthController;
use \App\Http\Controllers\Admin\AdminManageController;
use \App\Http\Controllers\Admin\StripePaymentController;







Route::middleware(IsAuthorized::class)->prefix('admin-home')->group(function () {

    Route::middleware('auth:admin')->name('admin.')->group(function () {

        Route::get('dashboard', [\App\Http\Controllers\Admin\AdminHomeController::class, 'index'])->name('home');


        Route::controller(AdminManageController::class)->group(function () {
            Route::resource('admins', AdminManageController::class)->except(['show']);
            Route::get('change-password', 'changePassword')->name('change.password');
            Route::post('change-password', 'update_change_password');
            Route::get('/edit-profile', 'edit_profile')->name('edit.profile');
            Route::post('/edit-profile', 'update_edit_profile');
        });


    });
});


/* -----------------------------
     Admin Authentication Routes
------------------------------ */
Route::prefix('admin')->name('admin.')->controller(AdminAuthController::class)->group(function () {
    Route::get('/login', 'showLoginForm')->name('login.form');
    Route::post('/login', 'login')->middleware(ThrottleLoginAttempts::class)->name('login');
    Route::post('/logout', 'logout')->name('logout');
    
    Route::get('/register', 'showRegistrationForm')->name('register.form');
    Route::post('/register', 'register')->name('register');

});

/* -----------------------------
    Stripe payment routes
------------------------------ */
Route::middleware('auth:admin')->prefix('stripe')->name('stripe.')->controller(StripePaymentController::class)->group(function () {
    Route::get('payment', 'showPaymentForm')->name('payment.form');
    Route::post('payment', 'processPayment')->name('payment.process');
});










