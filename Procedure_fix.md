# Fixing

### devEngines Package Manager
"devEngines": {
    "packageManager": {
      "name": "npm",
      "version": "12.0.2"
    }
  },

Kept failing
Replaced by "packageManager": "npm@12.0.2"

### Prisma with OpenSSL
`prisma:warn Prisma failed to detect the libssl/openssl version to use`

COMMAND: RUN ln -s /usr/lib/libssl.so.3 /lib/libssl.so.3
or
COMMAND:  RUN apt-get update
          RUN apt-get install -y openssl
