#!/bin/bash

args=("$@")
for ((i=0; i < $#; i++)); do
	mkdir ex${args[${i}]}
done
