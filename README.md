# Kubernetes UserSearchApp Demo

This project was generated with `Kubectl` **Kubernetes CLI** in order to orchestrate two containers:

1. UserSearchApp: An angular app that searches for users provided by a mocked server (a Json Server web app)

2. JsonServer app: [https://github.com/typicode/json-server](https://github.com/typicode/json-server): a mocked http server created with data generated on: [https://next.json-generator.com/](https://next.json-generator.com/)


## Build docker images

Run `docker build -t usersearchapp -f Dockerfile .` located on `DOCKER\UserSearchApp`. It will generate the UserSearchApp docker image.

Run `docker build -t jsonserver -f json-server-dockerfile .` located on `DOCKER\JsonServer`. It will generate the JsonServer docker image.


## Running docker images (optional)

Run `docker run --name usersearch-app -dp 4200:80 usersearchapp` to instantiate the container.

Run `docker run -d --rm -it --name jsonserver-container -p 3000:3000 jsonserver` to instantiate the container.

Test the application [http://localhost:4200/](http://localhost:4200/) and then stop containers to proceed with the next steps. :)


## Deploying the applications and services on Kubernetes 

**Those images are being pulled from docker hub and refers to repository:** [docker.io/fredsena/usersearchapp](https://hub.docker.com/u/fredsena)

**hint:** you can pull your own images to docker hub and modify the the kubernetes deployment files


Run `kubectl apply -f deploy-usersearchapp.yml`

Run `kubectl apply -f deploy-jsonserver.yml`

Run `deploy-usersearchapp-loadbalancer-service.yml`

Run `deploy-jsonserver-loadbalancer-service.yml`

and then test the application [http://localhost:4200/](http://localhost:4200/)

![alt text](https://github.com/fredsena/kubernetes-userSearchApp-demo/blob/master/images/Kubernetes_UserSearchApp_Demo.png?raw=true)

## Further help

Feel free to contact me to get further details.
