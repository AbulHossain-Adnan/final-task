<div class="dashboard__header single_border_bottom">
    <div class="row gx-4 align-items-center justify-content-between">
        <div class="col-sm-2">
            <div class="dashboard__header__left">
                <div class="dashboard__header__left__inner">
                    <span class="dashboard__sidebarIcon d-none d-lg-block"></span>
                    <span class="dashboard__sidebarIcon__mobile sidebar_mobileIcon d-lg-none"></span>
                </div>
            </div>
        </div>
        <div class="col-sm-6 d-none d-sm-block">
            <div class="dashboard__header__middle">

            </div>
        </div>
        <div class="col-sm-4">
            <div class="dashboard__header__right">
                <div class="dashboard__header__right__flex">
                    <div class="dashboard__header__right__item responsive_search">

                    </div>
                    <div class="dashboard__header__right__item">
                        <a href="javascript:void(0)" class="dashboard__header__notification__icon lightMode"
                           id="fullScreen_mode"> <i class="material-symbols-outlined">fullscreen_exit</i> </a>
                    </div>
                    <div class="dashboard__header__right__item">
                        <div class="dashboard__header__author">
                            <a href="javascript:void(0)" class="dashboard__header__author__flex flex-btn">
                                <div class="dashboard__header__author__thumb">
                                    <img src="<?php echo e(asset('assets/img/avatar.png')); ?>" alt="authorImg">
                                </div>
                            </a>
                            <div class="dashboard__header__author__wrapper">
                                <div class="dashboard__header__author__wrapper__list">
                                    <a href="<?php echo e(route('admin.edit.profile')); ?>"
                                       class="dashboard__header__author__wrapper__list__item"><i
                                            class="material-symbols-outlined">person</i> Profile</a>
                                    <a href="<?php echo e(route('admin.change.password')); ?>"
                                       class="dashboard__header__author__wrapper__list__item"><i
                                            class="material-symbols-outlined">lock</i> <?php echo e(__('Change Password')); ?></a>
                                    <a href="javascript:void(0)" class="dashboard__header__author__wrapper__list__item"><i
                                            class="material-symbols-outlined">settings</i> Settings</a>
                                    <a href="javascript:void(0)" class="dashboard__header__author__wrapper__list__item"><i
                                            class="material-symbols-outlined">logout</i> Log Out</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php /**PATH /home/adnan/Desktop/admin/final-task/resources/views/components/topbar.blade.php ENDPATH**/ ?>