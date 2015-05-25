# PS_GanttView
A jQuery Gantt Chart plugin


###Introduction
PS_GanttView is a jQuery plugin to display a simple Gantt Chart or timetable from a JSON collection of data.


###Usage
Include jQuery.PS_GanttView.js and PS_GanttView.css to your project.

Have a JSON collection of data ex.
{"task1":{"id":"1","title":"starta","description":"bla bla bla","status":"todo","start":"2015-03-01","end":"2015-03-06"},"task2":{"id":"2","title":"Jobba1","description":"bla bla bla","status":"todo","start":"2015-03-05","end":"2015-03-08"},"task3":{"id":"3","title":"Jobba2","description":"bla bla bla","status":"todo","start":"2015-03-08","end":"2015-03-16"},"task4":{"id":"4","title":"Avsluta","description":"bla bla bla","status":"todo","start":"2015-03-12","end":"2015-03-17"}}

Then call PS-GanttView with
$('#PS_GanttView').PS_GanttView(JSON-datacollection);


###Options


###Dependencies
jQuery 1.4

###Future changes
The following functions are identified for future development.
- Click on task/timeline to change task
- Drag to resize task/timeline
- Customize schedule
- Colormark on timeline based on task type
- Colormark on timeline based on owner
- Support for milestones
- Support for dependensies between tasks
  

  
  
