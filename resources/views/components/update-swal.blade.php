@props(['url', 'drop_down' => false, 'title'=>''])
<a class=" {{ $drop_down ? 'dropdown-item':'btn btn-primary'}}  swal_update_button" > {{$title}} </a>
<form method='post' action='{{$url}}' class="d-none">
    @method("POST")
    <input type='hidden' name='_token' value='{{csrf_token()}}'>
    <br>
    <button type="submit" class="swal_form_submit_btns d-none"></button>
</form>
