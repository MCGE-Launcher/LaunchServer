FROM golang:alpine AS builder

ENV GO111MODULE=on \
    CGO_ENABLED=0  \
    GOARCH="amd64" \
    GOOS=linux

WORKDIR /build
COPY . .
RUN go mod tidy
RUN go build --ldflags "-extldflags -static" -o main .

FROM alpine:latest

WORKDIR /www/html

COPY --from=builder /build/main /www/html
COPY --from=builder /build/database/ /www/html/database/
COPY --from=builder /build/public/ /www/html/public/
COPY --from=builder /build/storage/ /www/html/storage/
COPY --from=builder /build/resources/ /www/html/resources/
COPY --from=builder /build/.env /www/html/.env

ENTRYPOINT ["/www/html/main"]
