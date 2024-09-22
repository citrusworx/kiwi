#! /bin/sh
# This sets up the server environment for Kiwi engine. This sets up an 2 ec2 instances (both ubuntu) that will be a front end and backend
# This script is meant to be run from the root of the project
USER_KEY=($1)
USER_SEC=($2)
USER_SUB=($3)
# Create ec2 instance via AWS CLI
aws ec2 run-instances --image-id ami-0b898040 --count 2 --instance-type t2.micro --key-name ${USER_KEY} --security-group-ids ${USER_SEC} --subnet-id ${USER_SUB}