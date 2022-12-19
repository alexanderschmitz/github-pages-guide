#!/bin/bash

# https://man7.org/linux/man-pages/man1/git-for-each-ref.1.html
rm branches.txt -f
git branch --format='%(refname:lstrip=3)' -r >> branches.txt