
<!-- jquery -->
<script src="{{asset('assets/js/jquery-3.6.4.min.js')}}"></script>
<!-- jquery Migrate -->
<script src="{{asset('assets/js/jquery-migrate-3.4.1.min.js')}}"></script>
<!-- bootstrap -->
<script src="{{asset('assets/js/bootstrap.bundle.min.js')}}"></script>
<!-- Slick Slider -->
<script src="{{asset('assets/js/slick.js')}}"></script>
<!-- Fancy box Js -->
<script src="{{asset('assets/js/fancybox.umd.js')}}"></script>
<!-- Plugins Js -->
<script src="{{asset('assets/js/plugin.js')}}"></script>
<!-- Map Js -->
<script src="{{asset('assets/js/map/raphael.min.js')}}"></script>
<script src="{{asset('assets/js/map/jquery.mapael.js')}}"></script>
<script src="{{asset('assets/js/map/world_countries.js')}}"></script>
{{--<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>--}}
<!-- main js -->
<script src="{{asset('assets/js/main.js')}}"></script>
<script>
    (function (){
        "use strict";

        $(document).on('click','.swal_delete_button',function(e){
            e.preventDefault();
            Swal.fire({
                title: '{{__("Are you sure?")}}',
                text: '{{__("You would not be able to revert this item!")}}',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "{{__('Yes, Delete it!')}}",
                cancelButtonText: "{{__('Cancel')}}"
            }).then((result) => {
                if (result.isConfirmed) {
                    $(this).next().find('.swal_form_submit_btn').trigger('click');
                }
            });
        });

        $(document).on('click','.swal_update_button',function(e){
            e.preventDefault();
            Swal.fire({
                title: '{{__("Are you sure?")}}',
                text: '{{__("You want to update true!")}}',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "{{__('Yes, update it!')}}",
                cancelButtonText: "{{__('Cancel')}}"
            }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {

                    $(this).next().find('.swal_form_submit_btns').trigger('click');
                }
            });
        });


    })(jQuery);
</script>
@yield('scripts')



</body>

</html>
