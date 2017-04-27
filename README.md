# docker-rest-api
Internet Computing Assignment 5
To run the given assignment please execute the following steps.

1. Download or clone(and then pull) the repository to your system.

2. Start docker application

3. In the docker application go to the folder by changing the location using shell commands.

4. Now run the command : docker build -t donuts .
   Remember to place the " . " at the end of the command and also you can change the name donuts to any desired name, its just an alias to represent your docker image.
    
5. Now run the command : docker run -rm -d -p 7777:5000 --name mydonuts donuts
   Here the run command is executed to start the docker application on port no 7777 and the application will listen on port no 5000 which we described in the app.js file and the container is named mydonuts.
   
6. Now to see the running api you need the system IP, which if you know its good otherwise you may  check your system IP by using the command : docker-machine ip

7. Run the command : "machine_ip":7777/donut in browser to see the complete list of all the available donuts or "machine_ip":7777/donut/id to see a particular id details.
Or you may use the terminal by just using "curl -i" before the command

8. After viewing the api you can stop the container by the command : docker stop container_name
followed by command(to remove image) : docker rmi -f image_name
