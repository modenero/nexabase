# Nexabase Docker Library

These docker files are for easily testing specific setups locally when a gitlab-ci build fails. When the image is built by default it will have pulled and compiled the master branch. You can either open the image in a new container in a bash shell to change to a new branch and then recompile the code or edit the commented section of the dockerfile to have the image build with a specific branch

## Recommended image names
- img-nexa-ubu20-linux64
- img-nexa-ubu20-windows64

## Recommended container names
- nexa-linux64
- nexa-windows64

## To build
`docker build --no-cache -t <image name> -f <docker file name> .`

example:

`docker build --no-cache -t img-nexa-ubu20-linux64 -f Dockerfile.ubuntu20-linux64 .`

## To start an image in a new container in a bash shell
`docker run -it -d --name <container name> <imagename> bash`

example:

`docker run -it -d --name nexa-linux64 img-nexa-ubu20-linux64 bash`

## To start an image in a new container in a bash shell with a mounted directory and opened port
```
docker run -p <port mapping> -v /path/to/a/local/directory:/root/.nexa --name <container name> <image name> bash
```

port mapping maps an internal port to an external one by internal:external

example -p 7228:1234 will map the port 7228 internal to the docker container to host machine port 1234

## To connect to the container in a bash shell
`docker exec -it <container name> bash`



## Internal private testing network with Docker Compose
The docker-compose.yml file can be used to launch multiple nodes in their own containers that are connected by an internal private network inside docker for testing p2p functions such as message relay or handshakes. By default the yml file will start up 3 containers each with a linux64 node. You can add more nodes by simply extending the list of containers to be started up. If you wish to change to another image that isnt linux64 simply change the image name for a conatiner to a different image name.

To start simply run `docker-compose up`

NOTE: You will probably have to use the addnode command or create config files to connect the nodes in the docker network once they have all been created.
