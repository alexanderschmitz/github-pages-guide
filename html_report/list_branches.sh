#!/bin/bash

# https://man7.org/linux/man-pages/man1/git-for-each-ref.1.html
rm branches.txt -f
git branch --format='%(refname:lstrip=3)' -r >> branches.txt
FILE=branches.txt
if test -f "$FILE"; then
  echo "$FILE exists."
else
  echo "$FILE does not exist"
fi