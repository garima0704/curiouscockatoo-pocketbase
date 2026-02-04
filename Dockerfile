FROM alpine:3.18

WORKDIR /pb

COPY pocketbase /pb/pocketbase
COPY pb_migrations /pb/pb_migrations
COPY pb_public /pb/pb_public

RUN chmod +x /pb/pocketbase

EXPOSE 8080

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
