import * as feather from 'feather-icons';

// Test Icon Attributes
feather.icons['activity'].attrs['class']; // $ExpectType string
feather.icons['activity'].attrs['xmlns']; // $ExpectType string
feather.icons['activity'].attrs['width']; // $ExpectType string | number
feather.icons['activity'].attrs['height']; // $ExpectType string | number
feather.icons['activity'].attrs['viewBox']; // $ExpectType string
feather.icons['activity'].attrs['fill']; // $ExpectType string
feather.icons['activity'].attrs['stroke']; // $ExpectType string
feather.icons['activity'].attrs['stroke-width']; // $ExpectType string | number
feather.icons['activity'].attrs['stroke-linecap']; // $ExpectType FeatherStrokeLineCap
feather.icons['activity'].attrs['stroke-linejoin']; // $ExpectType FeatherStrokeLineJoin

// Test Icon
feather.icons['activity'].name; // $ExpectType string
feather.icons['activity'].contents; // $ExpectType string
feather.icons['activity'].tags; // $ExpectType string[]
feather.icons['activity'].attrs; // $ExpectType FeatherAttributes
feather.icons['activity'].toSvg(); // $ ExpectType FeatherToSvg

// Test Function
feather.replace(); // $ExpectType void
