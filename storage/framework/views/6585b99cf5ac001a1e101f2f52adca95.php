<?php if (isset($component)) { $__componentOriginalfd1f218809a441e923395fcbf03e4272 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalfd1f218809a441e923395fcbf03e4272 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.header','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('header'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalfd1f218809a441e923395fcbf03e4272)): ?>
<?php $attributes = $__attributesOriginalfd1f218809a441e923395fcbf03e4272; ?>
<?php unset($__attributesOriginalfd1f218809a441e923395fcbf03e4272); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalfd1f218809a441e923395fcbf03e4272)): ?>
<?php $component = $__componentOriginalfd1f218809a441e923395fcbf03e4272; ?>
<?php unset($__componentOriginalfd1f218809a441e923395fcbf03e4272); ?>
<?php endif; ?>
<section class="loginForm">
    <div class="loginForm__flex">
        <div class="loginForm__left">
            <div class="loginForm__left__inner desktop-center">
                <div class="loginForm__header">
                    <h2 class="loginForm__header__title">Welcome Back</h2>
                </div>
                <div class="loginForm__wrapper mt-4">
                    <?php if (isset($component)) { $__componentOriginal26e98e8e5cc4164d9d54ab94efc26e46 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal26e98e8e5cc4164d9d54ab94efc26e46 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.error','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('error'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal26e98e8e5cc4164d9d54ab94efc26e46)): ?>
<?php $attributes = $__attributesOriginal26e98e8e5cc4164d9d54ab94efc26e46; ?>
<?php unset($__attributesOriginal26e98e8e5cc4164d9d54ab94efc26e46); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal26e98e8e5cc4164d9d54ab94efc26e46)): ?>
<?php $component = $__componentOriginal26e98e8e5cc4164d9d54ab94efc26e46; ?>
<?php unset($__componentOriginal26e98e8e5cc4164d9d54ab94efc26e46); ?>
<?php endif; ?>
                    <div id="msg-wrapper"></div>
                    <!-- Form -->
                    <form action="<?php echo e(route('admin.register')); ?>" method="post" class="custom_form loginForm">
                        <?php echo csrf_field(); ?>
                        <div class="single_input">
                            <label class="label_title">Name</label>
                            <div class="include_icon left__padding">
                                <input class="form--control radius-5"  name="name" value="<?php echo e(old('name')); ?>" placeholder="Enter your name">
                            <div class="single_input">
                                 <label class="label_title">Username</label>
                            <div class="include_icon left__padding">
                                <input class="form--control radius-5"  name="username" value="<?php echo e(old('username')); ?>" placeholder="Enter your username">
                            <div class="single_input"></div>
                            <label class="label_title">Email</label>
                            <div class="include_icon left__padding">
                                <input class="form--control radius-5"  name="email" value="<?php echo e(old('email')); ?>" placeholder="Enter your email or user name address">
                            </div>
                            </div>
                                <div class="icon"><span class="material-symbols-outlined">mail</span></div>
                            </div>
                        </div>
                       
                        <div class="single_input">
                            <label class="label_title">Password</label>
                            <div class="include_icon left__padding right__padding">
                                <input class="form--control radius-5" type="password" name="password" placeholder="Enter your password">
                                <div class="icon"><span class="material-symbols-outlined">lock</span></div>
                            </div>
                        </div>

                         <div class="single_input">
                            <label class="label_title">Confirm Password</label>
                            <div class="include_icon left__padding right__padding">
                                <input class="form--control radius-5" type="password"  name="password_confirmation" placeholder="Enter your password">
                                <div class="icon"><span class="material-symbols-outlined">lock</span></div>
                               
                            </div>
                        </div>
                        <div class="loginForm__wrapper__remember single_input">
                            <div class="dashboard_checkBox">
                                <input class="dashboard_checkBox__input" name="remember" id="remember" type="checkbox">
                                <label class="dashboard_checkBox__label" for="remember">Remember me</label>
                            </div>
                        
                        </div>
                        <div class="btn_wrapper single_input">
                            <button type="submit" class="cmn_btn w-100 radius-5">Sign In<b></b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</section>


<?php if (isset($component)) { $__componentOriginal8a8716efb3c62a45938aca52e78e0322 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal8a8716efb3c62a45938aca52e78e0322 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.footer','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('footer'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal8a8716efb3c62a45938aca52e78e0322)): ?>
<?php $attributes = $__attributesOriginal8a8716efb3c62a45938aca52e78e0322; ?>
<?php unset($__attributesOriginal8a8716efb3c62a45938aca52e78e0322); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal8a8716efb3c62a45938aca52e78e0322)): ?>
<?php $component = $__componentOriginal8a8716efb3c62a45938aca52e78e0322; ?>
<?php unset($__componentOriginal8a8716efb3c62a45938aca52e78e0322); ?>
<?php endif; ?>

<?php /**PATH /home/adnan/Desktop/admin/task2/resources/views/admin/auth/register.blade.php ENDPATH**/ ?>