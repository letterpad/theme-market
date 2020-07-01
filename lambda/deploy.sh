#!/bin/bash

THEME_REPO=$1
THEME_NAME=$2

cd ../letterpad

git pull

yarn install

cd src/client/themes
echo "Current path:"
pwd

rm -rf $THEME_NAME

git clone $THEME_REPO $THEME_NAME

cd $THEME_NAME

yarn install

cd ../../
echo "Build Theme--------->Current path:"
pwd

yarn build $THEME_NAME

cd ../../../
echo "Copying theme to output location------>Current path:"
pwd

THEME_OUT=themes

zip -r -D $THEME_OUT/theme.zip "letterpad/dist/client/themes/$THEME_NAME"

#uploading the zip file







