# code_runner_web
web ui for code runner
This project is based on https://github.com/gangtao/code_runner to provide web service.
Now it is default to python, but you can easily extend it to any programming language that glot support now.

# Run in Docker
To run this in docker
```bash
docker pull naughtytao/code_runner_web
docker run -p 8080:8080 naughtytao/code_runner_web
```