# PS-GanttView
A jQuery Gantt Chart plugin


###Introduction
PS-GanttView is a jQuery plugin to display a simple Gantt Chart or timetable from a JSON collection of data.


###Usage
Include jQuery.PS-GanttView.js and PS-GanttView.css to youre project.

Have a JSON collection of data ex.
{"task1":{"id":"1","title":"starta","description":"bla bla bla","status":"todo","start":"2015-03-01","end":"2015-03-06"},"task2":{"id":"2","title":"Jobba1","description":"bla bla bla","status":"todo","start":"2015-03-05","end":"2015-03-08"},"task3":{"id":"3","title":"Jobba2","description":"bla bla bla","status":"todo","start":"2015-03-08","end":"2015-03-16"},"task4":{"id":"4","title":"Avsluta","description":"bla bla bla","status":"todo","start":"2015-03-12","end":"2015-03-17"}}

Then call PS-GanttView with
$('#GanttView').PS-GanttView(JSON-datacollection);

