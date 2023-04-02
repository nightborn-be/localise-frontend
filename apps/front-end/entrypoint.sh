#!/bin/bash

# Read .env.production file and extract keys and values
while read line; do
    if [[ $line =~ ^([A-Za-z_]+)=(.*)$ ]]; then
        key="${BASH_REMATCH[1]}"
        value="${BASH_REMATCH[2]}"
        keys["$key"]="$value"
        echo $key
    fi
done < ./apps/front-end/.env.production

# Find and replace keys in specific folder with global environment values
for key in "${!keys[@]}"; do
    if [ -n "${!key}" ]; then
        find ./apps/front-end/.next -type f -exec sh -c "sed -i 's/\${$key}/'\"${!key}\"'/g' {}" \;
    fi
done

npm run start:front-end