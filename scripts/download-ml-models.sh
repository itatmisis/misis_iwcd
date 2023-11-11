#!/bin/sh

mkdir -p ./ml-models

cd ./ml-models || exit

curl -o ./gazprom_model.tar.gz https://transfer-iwcd.seizure.icu/7lsNYND0B4/gazprom_model.tar.gz

tar xzf gazprom_model.tar.gz

rm gazprom_model.tar.gz
