#!/bin/sh

mysqldump -ufalanste -p falanste_drupalclub > ./SLIOT-BACKUP-`date '+%m-%d-%H-%M'`.sql

gzip SLIOT-BACKUP-`date '+%m-%d-%H'`*.sql
