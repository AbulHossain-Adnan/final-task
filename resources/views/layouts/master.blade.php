<x-header/>
<!-- Preloader area start -->
<div class="preloader" id="preloader">
    <div class="preloader__inner">
        <div class="line line__1"></div>
        <div class="line line__2"></div>
        <div class="line line__3"></div>
        <div class="line line__4"></div>
        <div class="line line__5"></div>
    </div>
</div>
<!-- Preloader area end -->


<!-- Dashboard start -->
<div class="body-overlay"></div>
<div class="dashboard__area">
    <div class="container-fluid p-0">
        <div class="dashboard__contents__wrapper">
            <div class="dashboard__left dashboard__leftContent">
                <x-sidebar/>
            </div>
            <div class="dashboard__right">
{{--- yeield content --}}
                <x-topbar/>
                <div class="dashboard__body">
                    @yield('content')
                </div>
                <div class="dashboard__copyright">
                    <div class="dashboard__copyright__contents">
                        <p class="dashboard__copyright__contents__para">Copyright 2023 all right reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Dashboard end -->


<x-footer/>
