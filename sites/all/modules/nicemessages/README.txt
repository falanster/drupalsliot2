

Description
============

Nicemessages module provides displaying drupal messages in nice popups using
the jQuery jGrowl plugin (http://stanlemon.net/projects/jgrowl.html).

Module written by blazey (http://drupal.org/user/353861) for the monthly Meant4
Drupal Contrib Contest (http://meant4.com). 
Module co-maintained by digidog (http://drupal.org/user/1001934)

Installation
============

1) Copy nicemessages to your sites/all/modules or sites/$sitename/modules.
2) Download/copy jQuery jGrowl plugin 
   from here (http://stanlemon.net/projects/jgrowl.html) to sites/all/libraries.
3) Enable module at admin/modules.

Settings
========

The settings form is at admin/config/system/nicemessages. It is divided into
global (default state, position) and message-type-specyfic settings.

Permissions
===========

administer nicemessages
  Gives access to configuration form.

toggle nicemessages
  Users with this permission can turn on or off displaying nicemessages for
  them at their account edit page (user/$uid/edit).

Dependencies
============

jQuery jGrowl plugin (http://stanlemon.net/projects/jgrowl.html)

Support
=======

http://drupal.org/project/issues/nicemessages