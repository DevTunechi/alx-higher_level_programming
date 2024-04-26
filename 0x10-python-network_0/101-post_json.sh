#!/bin/bash

# Check if URL and file arguments are provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 <URL> <file>"
    exit 1
fi

# Check if file exists
if [ ! -f "$2" ]; then
    echo "Error: File '$2' does not exist"
    exit 1
fi

# Send a JSON POST request with the contents of the file in the body
curl -s -X POST -H "Content-Type: application/json" --data-binary "@$2" "$1"
