@extends('layouts.master')

@section('content')
    <div class="dashboard__body posPadding">
        <div class="dashboard__inner">
            <div class="dashboard__inner__item dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__card__header d-flex justify-content-between">
                    <h4 class="dashboard__card__header__title">{{$role->name}} : {{__('Permissions')}}</h4>
                    <div class="btn-wrapper">
                        <a href="{{route('admin.roles.index')}}" class="cmn_btn btn_bg_1 btn_small radius-5" >{{__('All Roles')}}</a> {{-- show modal to create roles --}}
                    </div>
                </div>
               <div class="mt-3">
                   <x-flash-msg/>
                   <x-error/>
               </div>

                <form action="{{route('admin.roles.permissions',$role->id)}}" method="post">
                    @csrf
                    @method('PUT')
                    @foreach($permissions as $perm)
                        <div class="form-check">
                            <input type="checkbox" @checked(in_array($perm->id,$rolePermissions)) value="{{$perm->id}}" id="{{$perm->name.$perm->id}}" class="form-check-input" name="permission[]">
                            <label class="form-check-label" for="{{$perm->name.$perm->id}}">{{ucfirst(str_replace('_',' ',$perm->name))}}</label>
                        </div>
                    @endforeach
                    <div class="btn-wrapper mt-40">
                        <button type="submit" class="cmn_btn btn_bg_1 btn_small radius-5" >{{__('Save Changes')}}</button> {{-- show modal to create roles --}}
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
        (function (){
            "use strict";
        })(jQuery);
    </script>
@endsection
