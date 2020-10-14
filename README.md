## Run service in docker
```
cd ./deploy
docker-compose up -d auth-service auth-service-db
```

## Run service on localhost
```
cp ./.env.sample ./.env
cd ./deploy
docker-compose up -d auth-service-db
npm run start:dev
```

## Run tests in docker
```
cd ./deploy
docker-compose up -d auth-tests-db
docker-compose up auth-tests
```

## Run tests on localhost
```
cd ./deploy
docker-compose up -d auth-tests-db
../scripts/run-tests.sh
```
