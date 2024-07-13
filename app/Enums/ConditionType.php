<?php
namespace App\Enums;

use App\Traits\EnumConversions;

enum ConditionType : string
{
    use EnumConversions;

    case select = 'Select';
    case text = 'Text';

}
