#!/bin/bash
# DELETE request to URL passed as first argument and display body of the response
curl -sX DELETE "$1"
