@extends('layouts.master')

@section('content')
    <div class="dashboard__body posPadding">
        <div class="dashboard__inner">
            <div class="dashboard__inner__item dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__card__header d-flex justify-content-between">
                    <h4 class="dashboard__card__header__title">{{__('All Roles')}}</h4>
                    <div class="btn-wrapper">
                        <a href="#0" class="cmn_btn btn_bg_1 btn_small radius-5" data-bs-toggle="modal"data-bs-target="#createRole">{{__('Create New')}}</a> {{-- show modal to create roles --}}
                    </div>
                </div>
               <div class="mt-3">
                   <x-flash-msg/>
                   <x-error/>
               </div>
                <!-- Table Design One -->
                <div class="tableStyle_one mt-4">
                   <x-item-info :items="$roles" />
                    <div class="table_wrapper">
                        <!-- Table -->
                        <table>
                            <thead>
                            <tr>
                                <th>{{__('ID')}}</th>
                                <th>{{__('Name')}}</th>
                                <th>{{__('Created At')}}</th>
                                <th>{{__('Actions')}}</th>
                            </tr>
                            </thead>
                            <tbody>
                                @foreach($roles as $role)
                                    <tr>
                                        <td>
                                            {{$role->id}}
                                        </td>
                                        <td>{{$role->name}}</td>
                                        <td>
                                            @if($role->id !== 1)
                                            <!-- DropDown -->
                                            <div class="dropdown custom__dropdown">
                                                <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="las la-ellipsis-h"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1" style="">
                                                    <li><a class="dropdown-item edit_role" data-bs-target="#editModal" data-bs-toggle="modal" data-name="{{$role->name}}" data-action="{{route('admin.roles.update',$role->id)}}">{{__('Edit')}}</a></li> {{-- show modal for edit data --}}
                                                    <li><a class="dropdown-item" href="{{route('admin.roles.edit',$role->id)}}">{{__('Permissions')}}</a></li>
                                                    <li>
                                                        <x-delete-swal url="{{route('admin.roles.destroy',$role->id)}}" />
                                                    </li> {{-- show sweet alert beore delete perform --}}
                                                </ul>
                                            </div>
                                            @else
                                                <span class="d-inline alert alert-danger sm">{{__('Not Allowed')}}</span>
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="pagination-wrapper mt-4">
                        {!! $roles->links("vendor.pagination.bootstrap-5") !!}
                    </div>
                </div>
                <!-- End-of Table one -->
            </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1" id="createRole">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create Role</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{route('admin.roles.store')}}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-body">
                        <div class="form__input__single">
                            <label for="name1" class="form__input__single__label">Role name</label>
                            <input type="text" name="name" class="form__control radius-5" placeholder="Role Name..">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="cmn_btn btn_bg_1 btn_small radius-5">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="editModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Role</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="#" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="modal-body">
                        <div class="form__input__single">
                            <label for="name1" class="form__input__single__label">Role name</label>
                            <input type="text" name="name" class="form__control radius-5" placeholder="Role Name..">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="cmn_btn btn_bg_1 btn_small radius-5">Save changes</button>
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

            $(document).on('click','.edit_role',function (e){
                e.preventDefault();
                let el = $(this);
                let modal = $('#editModal');
                modal.find('input[name="name"]').val(el.data('name'));
                modal.find('form').attr('action',el.data('action'));
            });

        })(jQuery);
    </script>
@endsection
