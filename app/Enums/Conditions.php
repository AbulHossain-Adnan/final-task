<?php
namespace Modules\Forms\Enums;

use App\Traits\EnumConversions;

enum Conditions : string
{
    use EnumConversions;
    case IF = 'IF';
    case AND = 'AND';
    case OR = 'OR';
    case NOT = 'NOT';

}