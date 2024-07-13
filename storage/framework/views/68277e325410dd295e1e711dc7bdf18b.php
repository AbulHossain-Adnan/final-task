<?php $__env->startSection('content'); ?>
    <div class="dashboard__inner">
        <div class="dashboard__inner__item">
            <div class="dashboard__inner__item__flex">
                <div class="dashboard__inner__item__left bodyItemPadding">
                    <div class="dashboard__inner__header">
                        <div class="dashboard__inner__header__flex">
                            <div class="dashboard__inner__header__left">
                                <!-- <h4 class="dashboard__inner__header__title">Good Morning, <?php echo e(auth()?->user()->name); ?></h4> -->
                                <p class="dashboard__inner__header__para">Manage your dashboard here</p>
                            </div>
                            <div class="dashboard__inner__header__right">
                                <div class="dashboard__inner__item__right recent_activities">
                                    <div class="dashboard__recentActivities bg__white padding-20">
                                        <div class="dashboard__recentActivities__flex">
                                            <div class="dashboard__recentActivities__left">
                                                <h5 class="dashboard__recentActivities__title">Monthly payment reports</h5>
                                            </div>
                                            <span class="dashboard__recentActivities__close"><i class="material-symbols-outlined">close</i></span>
                                        </div>
                                        <div class="dashboard__recentActivities__inner mt-4">
                                            <div class="dashboard__recentActivities__item">
                                                <div class="dashboard__recentActivities__single">
                                                    <div class="dashboard__recentActivities__single__flex">
                                                        <div class="dashboard__recentActivities__single__thumb">
                                                            <a href="javascript:void(0)"><img src="assets/img/recent_activities/activities1.jpg" alt="activities"></a>
                                                        </div>
                                                        <div class="dashboard__recentActivities__single__contents">
                                                            <h6 class="dashboard__recentActivities__single__title"><a href="javascript:void(0)">Gown party wear is sold 01 piece</a></h6>
                                                            <p class="dashboard__recentActivities__single__time mt-2">10 Min ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dashboard__recentActivities__item">
                                                <div class="dashboard__recentActivities__single">
                                                    <div class="dashboard__recentActivities__single__flex">
                                                        <div class="dashboard__recentActivities__single__thumb">
                                                            <a href="javascript:void(0)"><img src="assets/img/recent_activities/activities2.jpg" alt="activities"></a>
                                                        </div>
                                                        <div class="dashboard__recentActivities__single__contents">
                                                            <h6 class="dashboard__recentActivities__single__title"><a href="javascript:void(0)">This product is running low on stock</a></h6>
                                                            <p class="dashboard__recentActivities__single__time mt-2">1 Hours ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dashboard__recentActivities__item">
                                                <div class="dashboard__recentActivities__single">
                                                    <div class="dashboard__recentActivities__single__flex">
                                                        <div class="dashboard__recentActivities__single__thumb">
                                                            <a href="javascript:void(0)"><img src="assets/img/recent_activities/activities3.jpg" alt="activities"></a>
                                                        </div>
                                                        <div class="dashboard__recentActivities__single__contents">
                                                            <h6 class="dashboard__recentActivities__single__title"><a href="javascript:void(0)">This product is added to stock</a></h6>
                                                            <p class="dashboard__recentActivities__single__time mt-2">2 Hours ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dashboard__recentActivities__item">
                                                <div class="dashboard__recentActivities__single">
                                                    <div class="dashboard__recentActivities__single__flex">
                                                        <div class="dashboard__recentActivities__single__thumb">
                                                            <a href="javascript:void(0)"><img src="assets/img/recent_activities/activities4.jpg" alt="activities"></a>
                                                        </div>
                                                        <div class="dashboard__recentActivities__single__contents">
                                                            <h6 class="dashboard__recentActivities__single__title"><a href="javascript:void(0)">Rafael is moved to Elgine St. Branch</a></h6>
                                                            <p class="dashboard__recentActivities__single__time mt-2">3 Hours ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dashboard__recentActivities__item">
                                                <div class="dashboard__recentActivities__single">
                                                    <div class="dashboard__recentActivities__single__flex">
                                                        <div class="dashboard__recentActivities__single__thumb">
                                                            <a href="javascript:void(0)"><img src="assets/img/recent_activities/activities5.jpg" alt="activities"></a>
                                                        </div>
                                                        <div class="dashboard__recentActivities__single__contents">
                                                            <h6 class="dashboard__recentActivities__single__title"><a href="javascript:void(0)">Robert F is added in Herbert St. Branch as General Staff</a></h6>
                                                            <p class="dashboard__recentActivities__single__time mt-2">4 Hours ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard_promo">
                      
                    </div>
                    <div class="row g-4 mt-1">
                        <div class="col-lg-12">
                            <div class="dashboard__card bg__white padding-20 radius-10">
                                <h5 class="dashboard__card__header__title">Monthly payment reports</h5>
                                <div class="dashboard__card__inner border_top_1">
                                    <div class="dashboard__inventory__table custom_table">
                                        <table>
                                            <thead>
                                            <tr>                         
                                                <th><?php echo e(__('Payment Type')); ?></th>
                                                <th><?php echo e(__('Amount')); ?></th>
                                                <th><?php echo e(__('Transaction Date')); ?></th>
                                                <th><?php echo e(__('Expired Date')); ?></th>
                                                <th><?php echo e(__('Status')); ?></th>
                                             
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <?php $__currentLoopData = $data['payment_log'] ?? []; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $payment_log): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                         
                                                <tr>
                                                    <td><?php echo e($payment_log->payment_type ?? ""); ?></td>
                                                    <td><?php echo e($payment_log->amount ?? ""); ?></td>

                                                    <td><?php echo e($payment_log->transaction_date->format('d/m/Y') ?? ""); ?></td>
                                                    <td><?php echo e($payment_log->expired_date->format('d/m/Y') ?? ""); ?></td>
                    
                                                   <td>
                                                        <span class="badge <?php echo e($payment_log->status == "complete" ? 'bg-success' : 'bg-danger'); ?> "><?php echo e($payment_log->status == "complete" ? 'complete' : 'pending'); ?></span>
                                                    </td>
                                                </tr>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </tbody>
                                        </table>
                                       
                                    </div>
                                     <?php if($data['payment_log']->isEmpty()): ?>
                                    <div class="alert alert-danger text-center">
                                        <span>No Content available</span>
                                    </div>
                                 <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/adnan/Desktop/admin/final-task/resources/views/admin/home.blade.php ENDPATH**/ ?>