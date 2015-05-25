/*
 * PS_GanttView v 0.0.1
 * pluging for creating a gantt scheme/timetable
 * Author: Per Sjöstedt
 * 
 * Licensed under the MIT license
 */

(function(window, $) {
	"use strict";

	$.fn.PS_GanttView = function(data){
		return this.each(function () {
            new PS_GanttView(this, data);
        });
	};
	
	// PS_GanttView Constructor. 
	function PS_GanttView(container, data){
		this.data = data,
		this.container = container,
		this.from, 
		this.to,
		this.getMinMax(),
		this.drawGrid(),
		this.drawTasks();
	};
	
	PS_GanttView.prototype = {
		// Function to draw the grid for the timetable based on from and to values in the dataset
		drawGrid: function() {
			var html = [],htmlMonth = [], c = new Date(this.from), to = new Date(this.to), monthNames =["Januari","Februari", "Mars","April","Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], month, dayCount = -1, diff, gwidth;
			to = to.setDate(to.getDate() + 3);
			
			month = monthNames[this.from.getMonth()];
			
			diff = Math.abs(to - c.getTime());
			gwidth = (Math.ceil(diff / (1000 * 3600 * 24))*20)+100;
			
			for (html, c ; c <= to; c.setDate(c.getDate() + 1))
			{
				dayCount++;
				html.push("<section>"  + c.getDate() + "</section>");
				
				if (monthNames[c.getMonth()] !== month)
				{
					htmlMonth.push('<section style="width: ' + ((dayCount * 20)-1)  + 'px;">'  + month +" </section>" );
					month = monthNames[c.getMonth()];
					dayCount = 0;
				}					
			}
			
			htmlMonth.push('<section style="width: ' + ((dayCount * 20)-1) + 'px;">'  + month +" </section>");

			this.container.className = "PS_GanttView color-scheme-default",
			this.container.style.width = gwidth +"px",
			this.container.innerHTML = '<div class="tasklist"><section> Aktivitet </section> </div>';
			this.container.innerHTML += '<div class="MonthScale">' + htmlMonth.join("") + "</div>";
			this.container.innerHTML += '<div class="scale">' + html.join("") + "</div>";
		},
		
		// Function to determin from and to in the dataset to set schedule size	
		getMinMax: function() {
			var from = 0, to = 0;
			jQuery.each(this.data, function(i, val) {
				var inStart = new Date(val.start);
				var inEnd = new Date(val.end);
				from = inStart < from || from == 0 ? inStart : from;
				to = inEnd > to ? inEnd : to;
			});
			this.from = from != 0 ? from : new Date();
			this.to = to != 0 ? new Date(to) : (this.to = new Date(),this.to.setDate(this.from.getDate()+7));
		},
		
		// Function to draw a task in the timetable
		drawTask: function(from, to, titlen) {
			var left = 100 - (titlen *10), diff, length, gridStart = this.from;
			from = from != null ? new Date(from) : new Date();
			
			to != null ? to = new Date(to) : (to = new Date(),to.setDate(from.getDate()+7));
			
			diff = Math.abs(from.getTime() - gridStart.getTime());
			left = Math.ceil(diff / (1000 * 3600 * 24))*20;
			
			diff = Math.abs(to.getTime() - from.getTime());
			length = (Math.ceil(diff / (1000 * 3600 * 24))*20)+20;
			
			return ['<span style="margin-left: '+ left + "px; width: " + length + 'px;" class="tasktube' + '" data-duration="' + 5 + '"></span>'].join("");
		},
		
		// Function to loop through the dataset and draw the tasks inside.
		drawTasks: function() {
			var html =[], _this = this;
					
			jQuery.each(this.data, function(i, val) {
				html.push("<li>"+ '<span class="label">' + val.title + "</span>"+  _this.drawTask(val.start,val.end,val.title.length)  +  "</li>");
			});
			this.container.innerHTML += '<ul class="data">' + html.join("") + "</ul>"
		},
	};
})(window, jQuery);

