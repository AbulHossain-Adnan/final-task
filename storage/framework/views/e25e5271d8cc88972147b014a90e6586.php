<?php if(session()->has('msg')): ?>
    <div class="main_success_message alert alert-<?php echo e(session('type')); ?>">
        <?php echo session('msg'); ?>

    </div>
<?php endif; ?>
<?php /**PATH /home/adnan/Desktop/admin/final-task/resources/views/components/flash-msg.blade.php ENDPATH**/ ?>