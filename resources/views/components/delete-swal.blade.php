<a class="dropdown-item swal_delete_button" > Delete </a>
<form method='post' action='{{$url}}' class="d-none">
    @method("DELETE")
    <input type='hidden' name='_token' value='{{csrf_token()}}'>
    <br>
    <button type="submit" class="swal_form_submit_btn d-none"></button>
</form>
