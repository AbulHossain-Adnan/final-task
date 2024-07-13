@if(session()->has('msg'))
    <div class="main_success_message alert alert-{{session('type')}}">
        {!! session('msg') !!}
    </div>
@endif
