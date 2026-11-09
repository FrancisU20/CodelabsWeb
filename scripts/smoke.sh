#!/usr/bin/env bash
set -euo pipefail

site="https://codelabsecuador.com"
body='{}'
hash=$(printf '%s' "$body" | sha256sum | cut -d' ' -f1)

expect_status() {
  local expected="$1"
  shift
  test "$(curl -s -o /dev/null --max-time 30 -w '%{http_code}' "$@")" = "$expected"
}

expect_status 200 "$site/"
expect_status 200 "$site/contacto"
expect_status 200 "$site/en/contact"
expect_status 200 "$site/privacidad"
expect_status 301 "https://www.codelabsecuador.com/"
expect_status 400 -X POST "$site/api/leads" -H 'content-type: application/json' \
  -H 'origin: https://smoke.invalid' -H "x-amz-content-sha256: $hash" -d "$body"
