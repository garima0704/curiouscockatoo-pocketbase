FROM alpine:latest

RUN apk add --no-cache ca-certificates

WORKDIR /pb

COPY pocketbase /pb/pocketbase
COPY pb_migrations /pb/pb_migrations
COPY pb_public /pb/pb_public
COPY pb_data /pb/pb_data
COPY robots.txt /pb/robots.txt

RUN chmod +x /pb/pocketbase

EXPOSE 8080

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
