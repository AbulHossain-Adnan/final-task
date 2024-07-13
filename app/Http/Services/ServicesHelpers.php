<?php

namespace App\Http\Services;

class ServicesHelpers
{
    public static function send_response(bool $bool,string $type): array
    {
            if($bool){
                return ["type" => "success","msg" => self::message($type,$bool)];
            }else{
                return ["type" => "danger","msg" => self::message($type,$bool)];
            }
    }

    private static function message(string $type,bool $bool): string
    {
        $msg = "";
        switch ($type){
            case $type == "create" and $bool:
                $msg =  "Item created successfully";
                break;
            case $type == "delete" and $bool:
                $msg =  "Item Deleted successfully";
                break;
                case $type == "cancel" and $bool:
                $msg =  "Item Canceled successfully";
                break;
            case $type == "update" and $bool:
                $msg =  "Item updated successfully";
                break;
            case $type == "delete" and !$bool:
                $msg =  "Item failed to delete";
                break;
            case $type == "update" and !$bool:
                $msg =  "Item failed to update";
                break;
            case $type == "create" and !$bool:
                $msg =  "Item failed to create";
                break;
            default:
                $msg = " ";
        }

        return $msg;
    }

}
