#!/bin/sh

drush sql-dump --gzip > ./SLIOT-BACKUP-`date '+%m-%d-%H-%M'`.sql.gz

