+function(o){"use strict";function t(t){t&&3===t.which||(o(e).remove(),o(d).each(function(){var r=o(this),e=n(r),d={relatedTarget:this};e.hasClass("open")&&(e.trigger(t=o.Event("hide.bs.dropdown",d)),t.isDefaultPrevented()||(r.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",d)))}))}function n(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var r=n&&o(n);return r&&r.length?r:t.parent()}function r(t){return this.each(function(){var n=o(this),r=n.data("bs.dropdown");r||n.data("bs.dropdown",r=new a(this)),"string"==typeof t&&r[t].call(n)})}var e=".dropdown-backdrop",d='[data-toggle="dropdown"]',a=function(t){o(t).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.0",a.prototype.toggle=function(r){var e=o(this);if(!e.is(".disabled, :disabled")){var d=n(e),a=d.hasClass("open");if(t(),!a){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&o('<div class="dropdown-backdrop"/>').insertAfter(o(this)).on("click",t);var i={relatedTarget:this};if(d.trigger(r=o.Event("show.bs.dropdown",i)),r.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),d.toggleClass("open").trigger("shown.bs.dropdown",i)}return!1}},a.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)){var r=o(this);if(t.preventDefault(),t.stopPropagation(),!r.is(".disabled, :disabled")){var e=n(r),a=e.hasClass("open");if(!a&&27!=t.which||a&&27==t.which)return 27==t.which&&e.find(d).trigger("focus"),r.trigger("click");var i=" li:not(.divider):visible a",s=e.find('[role="menu"]'+i+', [role="listbox"]'+i);if(s.length){var p=s.index(t.target);38==t.which&&p>0&&p--,40==t.which&&p<s.length-1&&p++,~p||(p=0),s.eq(p).trigger("focus")}}}};var i=o.fn.dropdown;o.fn.dropdown=r,o.fn.dropdown.Constructor=a,o.fn.dropdown.noConflict=function(){return o.fn.dropdown=i,this},o(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(o){o.stopPropagation()}).on("click.bs.dropdown.data-api",d,a.prototype.toggle).on("keydown.bs.dropdown.data-api",d,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery);