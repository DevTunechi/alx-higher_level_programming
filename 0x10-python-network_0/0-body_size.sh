#!/bin/bash
#Send a request to that URL, display size of the body of the response
curl -s "$1" | wc -c
