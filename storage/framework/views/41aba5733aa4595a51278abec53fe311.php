<div class="dashboard__left__main">
    <div class="dashboard__left__close close__barIcon"><i class="fa-solid fa-times"></i></div>
    <div class="dashboard__top">
        <div class="dashboard__top__logo">
            <a href="<?php echo e(route('admin.home')); ?>">
                <img class="main_logo" src="<?php echo e(asset('assets/img/avatar.png')); ?>" width="60" alt="logo">
                <img class="icon__view__logo" src="<?php echo e(asset('assets/img/avatar.png')); ?>" alt="logo">
            </a>
        </div>
    </div>
    <div class="dashboard__bottom mt-5">
        <div class="dashboard__bottom__search mb-3">
            <input class="form--control  w-100" type="text" placeholder="<?php echo e(__('Search here...')); ?>" id="search_sidebarList">
        </div>
        <ul class="dashboard__bottom__list dashboard__list">
            <li class="dashboard__bottom__list__item <?php echo e(request()->is('admin-home/dashboard') ? 'active' : ''); ?>">
                <a href="<?php echo e(route('admin.home')); ?>"><i class="material-symbols-outlined">dashboard</i> <span class="icon_title">Dashboard</span></a>
            </li>

            <li class="dashboard__bottom__list__item">
                <a class="dropdown-item" href="#"
                   onclick="event.preventDefault();
                           document.getElementById('tenanat_logout_submit_btn').dispatchEvent(new MouseEvent('click'));">
                    <i class="material-symbols-outlined">logout</i> <span class="icon_title">Log Out</span>
                    <form id="logout-form" action="<?php echo e(route('admin.logout')); ?>" method="POST"
                          class="d-none">
                        <?php echo csrf_field(); ?>
                        <button class="d-none" type="submit" id="tenanat_logout_submit_btn"></button>
                    </form>
                </a>
            </li>
        </ul>
    </div>
</div>
<?php /**PATH /home/adnan/Desktop/admin/final-task/resources/views/components/sidebar.blade.php ENDPATH**/ ?>