@extends('layouts.master')

@section('content')
    <div class="dashboard__body posPadding">
        <div class="dashboard__inner">
            <div class="dashboard__inner__item dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__card__header d-flex justify-content-between">
                    <h4 class="dashboard__card__header__title">{{__('For acticate your account pay 10 usd doller')}}</h4>
                    <div class="btn-wrapper">
                    </div>
                </div>
               <div class="mt-3">
                   <x-flash-msg/>
                   <x-error/>
               </div>
              <!DOCTYPE html>

<html>

<head>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <style type="text/css">

        .panel-title {

        display: inline;

        font-weight: bold;

        }

        .display-table {

            display: table;

        }

        .display-tr {

            display: table-row;

        }

        .display-td {

            display: table-cell;

            vertical-align: middle;

            width: 61%;

        }

    </style>

</head>

<body>

  

<div class="container">

    <div class="row">

        <div class="col-md-6 col-md-offset-3">

            <div class="panel panel-default credit-card-box">

                <div class="panel-heading display-table" >

                    <div class="row display-tr" >

                        <h3 class="panel-title display-td" >Payment Details</h3>

                        <div class="display-td" >                            

                            <img src="{{ asset('frontend') }}/payments/stripelogo.png" width="200" 
                                      alt="">
                        </div>

                    </div>                    

                </div>

                <div class="panel-body">

  

                    @if (Session::has('success'))

                        <div class="alert alert-success text-center">

                            <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>

                            <p>{{ Session::get('success') }}</p>

                        </div>

                    @endif

  

                    <form 

                            role="form" 

                            action="" 

                            method="post" 

                            class="require-validation"

                            data-cc-on-file="false"

                            data-stripe-publishable-key="{{ env('STRIPE_KEY') }}"

                            id="payment-form">

                        @csrf

  

                        <div class='form-row row'>

                            <div class='col-xs-12 form-group required'>

                                <label class='control-label'>Name on Card</label> <input

                                    class='form-control' size='4' type='text'>

                            </div>

                        </div>

                        
                
              
                         
                    

                        <div class='form-row row'>

                            <div class='col-xs-12 form-group card required'>

                                <label class='control-label'>Card Number</label> <input

                                    autocomplete='off' class='form-control card-number' size='20'

                                    type='text'>

                            </div>

                        </div>

  

                        <div class='form-row row'>

                            <div class='col-xs-12 col-md-4 form-group cvc required'>

                                <label class='control-label'>CVC</label> <input autocomplete='off'

                                    class='form-control card-cvc' placeholder='ex. 311' size='4'

                                    type='text'>

                            </div>

                            <div class='col-xs-12 col-md-4 form-group expiration required'>

                                <label class='control-label'>Expiration Month</label> <input

                                    class='form-control card-expiry-month' placeholder='MM' size='2'

                                    type='text'>

                            </div>

                            <div class='col-xs-12 col-md-4 form-group expiration required'>

                                <label class='control-label'>Expiration Year</label> <input

                                    class='form-control card-expiry-year' placeholder='YYYY' size='4'

                                    type='text'>

                            </div>

                        </div>

  

                        <div class='form-row row'>

                            <div class='col-md-12 error form-group hide'>

                                <div class='alert-danger alert'>Please correct the errors and try

                                    again.</div>

                            </div>

                        </div>

  

                        <div class="row">

                            <div class="col-xs-12">

                                <button class="btn btn-primary btn-lg btn-block" type="submit">Pay Now ($10)</button>

                            </div>

                        </div>

                          

                    </form>

                </div>

            </div>        

        </div>

    </div>

      

</div>

  

</body>

  

<script type="text/javascript" src="https://js.stripe.com/v2/"></script>

  

<script type="text/javascript">

$(function() {

   

    var $form = $(".require-validation");

   

    $('form.require-validation').bind('submit', function(e) {

        var $form         = $(".require-validation"),

        inputSelector = ['input[type=email]', 'input[type=password]',

                         'input[type=text]', 'input[type=file]',

                         'textarea'].join(', '),

        $inputs       = $form.find('.required').find(inputSelector),

        $errorMessage = $form.find('div.error'),

        valid         = true;

        $errorMessage.addClass('hide');

  

        $('.has-error').removeClass('has-error');

        $inputs.each(function(i, el) {

          var $input = $(el);

          if ($input.val() === '') {

            $input.parent().addClass('has-error');

            $errorMessage.removeClass('hide');

            e.preventDefault();

          }

        });

   

        if (!$form.data('cc-on-file')) {

          e.preventDefault();

          Stripe.setPublishableKey($form.data('stripe-publishable-key'));

          Stripe.createToken({

            number: $('.card-number').val(),

            cvc: $('.card-cvc').val(),

            exp_month: $('.card-expiry-month').val(),

            exp_year: $('.card-expiry-year').val()

          }, stripeResponseHandler);

        }

  

  });

  

  function stripeResponseHandler(status, response) {

        if (response.error) {

            $('.error')

                .removeClass('hide')

                .find('.alert')

                .text(response.error.message);

        } else {

            /* token contains id, last4, and card type */

            var token = response['id'];

               

            $form.find('input[type=text]').empty();

            $form.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");

            $form.get(0).submit();

        }

    }

   

});

</script>

</html>

            </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1" id="createAdmin">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add New Admin</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{route('admin.stripe.payment')}}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-body">
                    <div class="form__input__single">
                        <label class="form__input__single__label" for="name">{{__('Name')}}</label>
                        <input type="text" class="form__control radius-5"  id="name" name="name" placeholder="{{__('Enter name')}}">
                    </div>
                    <div class="form__input__single">
                        <label class="form__input__single__label" for="username">{{__('Username')}}</label>
                        <input type="text" class="form__control radius-5"  id="username" name="username" placeholder="{{__('Username')}}">
                        <small class="text text-danger">{{__('Remember this username, user will login using this username')}}</small>
                    </div>

                    <div class="form__input__single">
                        <label class="form__input__single__label" for="email">{{__('Mobile')}}</label>
                        <input type="text" class="form__control radius-5"  id="mobile" name="mobile" placeholder="{{__('Mobile')}}">
                    </div>

                    <div class="form__input__single">
                        <label class="form__input__single__label" for="email">{{__('Email')}}</label>
                        <input type="text" class="form__control radius-5"  id="email" name="email" placeholder="{{__('Email')}}">
                    </div>

                    <div class="form__input__single">
                        <label class="form__input__single__label" for="password">{{__('Password')}}</label>
                        <input type="password" class="form__control radius-5"  id="password" name="password" placeholder="{{__('Password')}}">
                    </div>
                    <div class="form__input__single">
                        <label class="form__input__single__label" for="password_confirmation">{{__('Password Confirm')}}</label>
                        <input type="password" class="form__control radius-5"  id="password_confirmation" name="password_confirmation" placeholder="{{__('Password Confirmation')}}">
                    </div>
                    <div class="form__input__single">
                        <label class="form__input__single__label" for="role">{{'Role'}}</label>
                        <select name="role" class="form__control radius-5">
                            <option value="">{{__('Select Role')}}</option>
                            @foreach($roles as $role)
                                <option value="{{$role}}">{{$role}}</option>
                            @endforeach
                        </select>
                    </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="cmn_btn btn_bg_1 btn_small radius-5">Submit changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="editModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Admin</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="#" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="modal-body">
                        <div class="form__input__single">
                            <label class="form__input__single__label" for="name">{{__('Name')}}</label>
                            <input type="text" class="form__control radius-5"  id="name" name="name" placeholder="{{__('Enter name')}}">
                        </div>
                        <div class="form__input__single">
                            <label class="form__input__single__label" for="username">{{__('Username')}}</label>
                            <input type="text" class="form__control radius-5"  id="username" name="username" placeholder="{{__('Username')}}">
                            <small class="text text-danger">{{__('Remember this username, user will login using this username')}}</small>
                        </div>

                        <div class="form__input__single">
                            <label class="form__input__single__label" for="email">{{__('Mobile')}}</label>
                            <input type="text" class="form__control radius-5"  id="mobile" name="mobile" placeholder="{{__('Mobile')}}">
                        </div>

                        <div class="form__input__single">
                            <label class="form__input__single__label" for="email">{{__('Email')}}</label>
                            <input type="text" class="form__control radius-5"  id="email" name="email" placeholder="{{__('Email')}}">
                        </div>

                        <div class="form__input__single">
                            <label class="form__input__single__label" for="role">{{'Role'}}</label>
                            <select name="role" class="form__control radius-5">
                                <option value="">{{__('Select Role')}}</option>
                                @foreach($roles as $role)
                                    <option value="{{$role}}">{{$role}}</option>
                                @endforeach
                            </select>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="cmn_btn btn_bg_1 btn_small radius-5">Submit changes</button>
                    </div>
                </form>

            </div>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="changePassword">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Change Password</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{route('admin.change.password')}}" method="post" enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" name="id">
                    <div class="modal-body">
                        <div class="form__input__single">
                            <label for="name1" class="form__input__single__label">Password</label>
                            <input type="password" name="password" class="form__control radius-5" placeholder="password">
                        </div>
                        <div class="form__input__single">
                            <label for="name1" class="form__input__single__label">Confirm Password</label>
                            <input type="password" name="password_confirmation" class="form__control radius-5" placeholder="confirm password">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="cmn_btn btn_bg_1 btn_small radius-5">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
        (function (){
            "use strict";

            $(document).on('click','.edit_admin',function (e) {
                e.preventDefault();
                let el = $(this);
                let modal = $('#editModal');
                modal.find('input[name="name"]').val(el.data('name'));
                modal.find('input[name="username"]').val(el.data('username'));
                modal.find('input[name="mobile"]').val(el.data('mobile'));
                modal.find('input[name="email"]').val(el.data('email'));
                modal.find('select[name="role"] option[value="'+el.data('role')+'"]').attr('selected',true);
                modal.find('form').attr('action',el.data('action'));

            });

            $(document).on('click','.change_password',function (e){
                e.preventDefault();
                let el = $(this);
                let modal = $('#changePassword');
                modal.find('input[name="id"]').val(el.data('id'));
            });

        })(jQuery);
    </script>
@endsection
