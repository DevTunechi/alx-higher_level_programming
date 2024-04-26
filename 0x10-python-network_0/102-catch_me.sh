#!/bin/bash

# Make a request to 0.0.0.0:5000/catch_me
curl -s -X PUT -L --data "user_id=98" 0.0.0.0:5000/catch_me -H "Origin: HolbertonSchool"
