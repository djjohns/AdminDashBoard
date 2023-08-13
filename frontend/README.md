## FRONTEND:
### Building the docker image:

1. From the projects home directory navigate to the frontend directory.

    ```
    cd frontend
    ```

2. Build the docker image.

    ```
    docker build -t admin_dashboard_frontend .
    ```

3. Start the docker container to ensure everything is good.
    
    ```
    docker run -d --name admin_dashboard_frontend_container -p 80:80 admin_dashboard_frontend
    ```

4. Check the api in your favorite browser.

    [link to api on localhost](http://localhost:3000/)

---