# jirometer

Jirometer is a plugin for the jira that measures the progress of the project and offers metrics such as leadtime, cycletime, etc.
It is possible to check:
* The estimated delivery of an epic
* How many tasks have already been completed or are in progress
* The average time spent on each task.

## Prerequisites

You will need [Leiningen][] 2.0.0 or above installed.

[leiningen]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein figwheel

The application will now be available at http://localhost:3000.
