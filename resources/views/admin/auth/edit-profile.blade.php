@extends('layouts.master')

@section('content')

    <div class="dashboard__inner">
        <div class="dashboard__inner__item">
            <div class="dashboard__inner__item__flex">
                <div class="dashboard__inner__item__left bodyItemPadding">
                    <div class="dashboard__inner__header">
                        <div class="dashboard__inner__header__flex">
                            <div class="dashboard__inner__header__left">
                                <h4 class="dashboard__inner__header__title">Hi, {{auth('admin')->user()->name}}</h4>
                                <p class="dashboard__inner__header__para">Edit your profile from here</p>
                            </div>
                            <div class="dashboard__inner__header__right">
                                <div class="dashboard__inner__item__right recent_activities">

                                    <div class="dashboard__recentActivities bg__white padding-20">
                                        <div class="dashboard__recentActivities__flex">
                                            <div class="dashboard__recentActivities__left">
                                                <h5 class="dashboard__recentActivities__title">Recent Activities</h5>
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
                        <div class="row g-4 mt-2">
                            <div class=" col-sm-12">
                                <div class="dashboard_promo__single bg__white radius-10 padding-20">
                                    <form method="post" action="{{route('admin.edit.profile')}}">
                                        @csrf
                                        <x-error/>
                                        <x-flash-msg/>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">{{__('Name')}}</label>
                                            <input type="text" name="name" class="form-control" value="{{auth('admin')->user()->name}}" id="exampleInputPassword1" placeholder="{{__('name')}}">
                                        </div>

                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">{{__('Email')}}</label>
                                            <input type="email" name="email" class="form-control" value="{{auth('admin')->user()->email}}" id="exampleInputPassword1" placeholder="{{__('name')}}">
                                        </div>

                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">{{__('Mobile')}}</label>
                                            <input type="text" name="mobile" class="form-control" value="{{auth('admin')->user()->mobile}}" id="exampleInputPassword1" placeholder="{{__('name')}}">
                                        </div>

                                        <button type="submit" class="btn btn-primary">{{__('Save Changes')}}</button>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')

@endsection
