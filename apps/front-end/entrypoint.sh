#!/bin/bash

# Read .env.production file and extract keys and values
while read line; do
    if [[ $line =~ ^([A-Za-z_]+)=(.*)$ ]]; then
        key="${BASH_REMATCH[1]}"
        value="${BASH_REMATCH[2]}"
        keys["$key"]="'$value'"
        echo "'$key' '$value'"
    fi
done < ./apps/front-end/.env.production

# Find and replace keys in specific folder with global environment values
for key in "${!keys[@]}"; do
    if [ -n "${!key}" ]; then
        echo "Replacing ${key} with ${!key} in files"
        find ./apps/front-end/.next -type f -exec sh -c "awk '{gsub(/${key}/,\"${!key}\"); print}' {} > tmpfile && mv tmpfile {}" \;
    fi
done

npm run start:front-end