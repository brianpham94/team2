angular.module("ui.directives").directive("uiSortable",["ui.config",function(e){return{require:"?ngModel",link:function(t,o,i,n){var r,l,a,s,u,c,m,f,d;u=angular.extend({},e.sortable,t.$eval(i.uiSortable)),n&&(n.$render=function(){o.sortable("refresh")},a=function(e,t){t.item.sortable={index:t.item.index()}},s=function(e,t){t.item.sortable.resort=n},r=function(e,t){t.item.sortable.relocate=!0,n.$modelValue.splice(t.item.index(),0,t.item.sortable.moved)},l=function(e,t){1===n.$modelValue.length?t.item.sortable.moved=n.$modelValue.splice(0,1)[0]:t.item.sortable.moved=n.$modelValue.splice(t.item.sortable.index,1)[0]},onStop=function(e,o){if(o.item.sortable.resort&&!o.item.sortable.relocate){var i,n;n=o.item.sortable.index,i=o.item.index(),i>n&&i--,o.item.sortable.resort.$modelValue.splice(i,0,o.item.sortable.resort.$modelValue.splice(n,1)[0])}(o.item.sortable.resort||o.item.sortable.relocate)&&t.$apply()},f=u.start,u.start=function(e,t){a(e,t),"function"==typeof f&&f(e,t)},_stop=u.stop,u.stop=function(e,t){onStop(e,t),"function"==typeof _stop&&_stop(e,t)},d=u.update,u.update=function(e,t){s(e,t),"function"==typeof d&&d(e,t)},c=u.receive,u.receive=function(e,t){r(e,t),"function"==typeof c&&c(e,t)},m=u.remove,u.remove=function(e,t){l(e,t),"function"==typeof m&&m(e,t)}),o.sortable(u)}}}]);