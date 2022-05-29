#!/bin/bash

echo "=====VERIFICATION WITH NMAP====="
echo "> nmap -sV -O localhost"

nmap -sV -O localhost
