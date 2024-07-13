
<!-- jquery -->
<script src="<?php echo e(asset('assets/js/jquery-3.6.4.min.js')); ?>"></script>
<!-- jquery Migrate -->
<script src="<?php echo e(asset('assets/js/jquery-migrate-3.4.1.min.js')); ?>"></script>
<!-- bootstrap -->
<script src="<?php echo e(asset('assets/js/bootstrap.bundle.min.js')); ?>"></script>
<!-- Slick Slider -->
<script src="<?php echo e(asset('assets/js/slick.js')); ?>"></script>
<!-- Fancy box Js -->
<script src="<?php echo e(asset('assets/js/fancybox.umd.js')); ?>"></script>
<!-- Plugins Js -->
<script src="<?php echo e(asset('assets/js/plugin.js')); ?>"></script>
<!-- Map Js -->
<script src="<?php echo e(asset('assets/js/map/raphael.min.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/map/jquery.mapael.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/map/world_countries.js')); ?>"></script>

<!-- main js -->
<script src="<?php echo e(asset('assets/js/main.js')); ?>"></script>
<script>
    (function (){
        "use strict";

        $(document).on('click','.swal_delete_button',function(e){
            e.preventDefault();
            Swal.fire({
                title: '<?php echo e(__("Are you sure?")); ?>',
                text: '<?php echo e(__("You would not be able to revert this item!")); ?>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "<?php echo e(__('Yes, Delete it!')); ?>",
                cancelButtonText: "<?php echo e(__('Cancel')); ?>"
            }).then((result) => {
                if (result.isConfirmed) {
                    $(this).next().find('.swal_form_submit_btn').trigger('click');
                }
            });
        });

        $(document).on('click','.swal_update_button',function(e){
            e.preventDefault();
            Swal.fire({
                title: '<?php echo e(__("Are you sure?")); ?>',
                text: '<?php echo e(__("You want to update true!")); ?>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "<?php echo e(__('Yes, update it!')); ?>",
                cancelButtonText: "<?php echo e(__('Cancel')); ?>"
            }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {

                    $(this).next().find('.swal_form_submit_btns').trigger('click');
                }
            });
        });


    })(jQuery);
</script>
<?php echo $__env->yieldContent('scripts'); ?>



</body>

</html>
<?php /**PATH /home/adnan/Desktop/admin/task2/resources/views/components/footer.blade.php ENDPATH**/ ?>