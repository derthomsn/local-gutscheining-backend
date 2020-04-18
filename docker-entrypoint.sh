#!/bin/bash
set -euo pipefail

function replace() {
    local str_to_replace=$1
    local replacement=$2
    echo "replacing $str_to_replace conf with $replacement"
    local escaped_str_to_replace=$(echo "$str_to_replace" | sed -e 's/[\/&]/\\&/g')
    local escaped_replacement=$(echo "$replacement" | sed -e 's/[\/&]/\\&/g')
    #sed -i 's/'"$escaped_str_to_replace"'/'"$escaped_replacement"'/g' /var/www/html/main-es*
    sed -i 's/'"$escaped_str_to_replace"'/'"$escaped_replacement"'/g' /var/www/html/js/*
}

if ! [ -z ${API_URL+x} ]; then
  replace 'http://localhost:8080/api' $API_URL
fi

exec "$@"
